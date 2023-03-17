// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import clientPromise from '@/lib/mongodb'

const nodemailer = require('nodemailer')
const {google} = require('googleapis')
const clientID = '97100006618-r1ogtino4b4tto5j8forc1i4tdh0p8dp.apps.googleusercontent.com'
const clientSecret = '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'
const redirectURI = 'https://developers.google.com/oauthplayground'
const refreshToken = '1//04AIHNqfXT01bCgYIARAAGAQSNwF-L9Ir29c5bm-N3xbtKHdlY4hulMCuuNl3T_-XwKaMlK5WQ6XSO6CeHNXNknHlu1GPTNLyAkI'

const oAuth2Client = new google.auth.OAuth2(clientID, clientSecret, redirectURI)
oAuth2Client.setCredentials({refresh_token: refreshToken})  


export default async function handler(req, res) {
  if (req.method === 'POST') {
    const accessToken = await oAuth2Client.getAccessToken()
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        type: 'OAuth2',
        user: 'recipedia.cosylab.iiit@gmail.com',
        clientId: clientID,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
        accessToken: accessToken,
      }
    
    })
  
    let rand = Math.floor(100000 + Math.random() * 1000000)
    const { email, subject, text, recipe } = req.body

    let response = await addOTPtoDatabase(email, rand)

    const mailData = {
      from: 'A Recipe a day 🍝 <recipedia.cosylab.iiit@gmail.com>',
      to: email,
      subject: 'Email Verification for Boom',
      text: text,
      html: `
        <div style="background-color: #f5f5f5; padding: 50px;"> 
            <div style="background-color: white; padding: 20px; border-radius: 10px;">
                <h2 style="text-align: center;">Welcome to Recipedia!</h2>
                <p style="text-align: center;">We are excited to have you on board.</p>
                <p style="text-align: center;">The code 
                    <span style="background-color: #ff6f61; color: white; padding: 5px 10px; border-radius: 5px;">${rand}</span>
                    is your verification code. Please enter this code to verify your email address.
                </p>
            </div>
        </div>

        `,
    }

    transporter.sendMail(mailData, (error, info) => {
      if (error) {
        return 
      }
      res.status(200).send({ message: 'Mail send', message_id: info.messageId })
    })
  }
}


async function addOTPtoDatabase(email, otp) {
    let client = await clientPromise
    const db = client.db('boom-v1')
    let addOTP = await db
          .collection('OTP')
          .insertOne({ "email": email, "otp":otp }) 

    }
  

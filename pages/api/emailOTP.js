import clientPromise from '@/lib/mongodb'
import { Int32 } from 'mongodb'

export default async function handler(req, res) {
  let client = await clientPromise
  const db = client.db('Boom-0-1')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      let address = bodyObject.address
      let email = bodyObject.email
      //int32
      let inputOTP = parseInt(bodyObject.otp)
      console.log(address, email, inputOTP)
      let checkOTP = await db
        .collection('OTP')
        .find({ "email": email, "otp": inputOTP })
        .toArray()
      if (checkOTP.length > 0) {
        res.json({ message: 'OTP verified' })
        let updateVerified = await db
          .collection('Wallet')
          .updateOne({ walletAddress: address }, { $set: { verified: true } })
      } else {
        res.json({ message: 'OTP not verified' })
      }
  }
}

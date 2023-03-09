import clientPromise from '@/lib/mongodb'
export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('Boom-0-1')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      let findWallet = await db
        .collection('Wallet')
        .find({ walletAddress: bodyObject.walletAddress })
        .toArray()
      if (findWallet.length == 0) {
        let addWallet = await db.collection('Wallet').insertOne({
          walletAddress: bodyObject.walletAddress,
          email: '',
          verified: false,
        })
        res.status(200).json({ wallet: 'new' })
      } else {
        if (findWallet[0].verified == true) {
          res.status(200).json({ wallet: 'verified' })
        } else {
          res.status(200).json({ wallet: 'unverified' })
        }
      }
  }
}

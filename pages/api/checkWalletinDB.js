import clientPromise from '@/lib/mongodb'
export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('boom-v1')
  switch (req.method) {
    case 'POST':
      let bodyObject = req.body
      let findWallet = await db
        .collection('Users')
        .find({ walletAddress: bodyObject.walletAddress })
        .toArray()
      if (findWallet.length == 0) {
        let addWallet = await db.collection('Users').insertOne({
          walletAddress: bodyObject.walletAddress,
          email: '',
          verified: false,
          name: null,
        })
        res.status(200).json({ wallet: 'new' })
      } else {
        if (findWallet[0].verified == true) {
          res.status(200).json({ wallet: 'verified', name: findWallet[0].name  })
        } else {
          res.status(200).json({ wallet: 'unverified' })
        }
      }
  }
}

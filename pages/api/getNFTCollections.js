import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('boom-v1')
  switch (req.method) {
    case 'GET':
      let allCollections = await db
        .collection('NFTCollectionDetails')
        .find({}, { projection: { Name: 1, Offers: 1 } })
        .toArray()
      res.status(200).json(allCollections)
  }
}

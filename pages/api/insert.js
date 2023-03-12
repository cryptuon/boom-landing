import clientPromise from '@/lib/mongodb';
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("boom-v1");
    switch (req.method) {
      case "POST":
        let bodyObject = req.body;
        let myinsert = await db.collection("OfferCampaignDetails").insertMany(bodyObject);
        res.json(myinsert);
        break;
      case "GET":
        const allPosts = await db.collection("CampainOfferDetails").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  }
  


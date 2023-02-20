// mongodb.js
import clientPromise from '@/lib/mongodb';
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("Boom-0-1");
    switch (req.method) {
      case "POST":
        // console.log(typeof req.body);
        let bodyObject = req.body;
        let myinsert = await db.collection("OfferCampaignDetails").insertMany(bodyObject);
        res.json(myinsert);
        // res.join({ status: 200, data: "success" });
        break;
      case "GET":
        const allPosts = await db.collection("CampainOfferDetails").find({}).toArray();
        res.json({ status: 200, data: allPosts });
        break;
    }
  }
  


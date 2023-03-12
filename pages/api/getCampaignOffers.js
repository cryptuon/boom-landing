import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            // console.log("req.body");
            let bodyObject = req.body;
            let campaignCodes = bodyObject.campaignCodes;
            let offers = await db
                .collection("CampaignDetails")
                .find({ "CampaignCode": { $in: campaignCodes } })
                .toArray();
            console.log(offers);
            res.status(200).json(offers);  
    }
    }
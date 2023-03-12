import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
    let client = await clientPromise;
    let db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            let bodyObject = req.body;
            let updateVerified = await db.collection("Wallet").updateOne({ "walletAddress": bodyObject.address }, { $set: { 
                "verified": true
            } });
            res.json(updateVerified);
    }
}
    
                    
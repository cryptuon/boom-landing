import clientPromise from "@/lib/mongodb"
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            let bodyObject = req.body;
            // // console.log("wallet received: ", bodyObject.address);
            let updateWallet = await db.collection("Wallet").updateOne({ "walletAddress": bodyObject.address }, { $set: { 
                "email": bodyObject.email, 
                "verified": false
            } });
            res.json(updateWallet);
    }
}
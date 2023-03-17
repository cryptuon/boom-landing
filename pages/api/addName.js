import clientPromise from "@/lib/mongodb";

export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            let bodyObject = req.body;
            let name = bodyObject.name;
            let walletAddress = bodyObject.walletAddress;
            //update one name where walletaddress matches
            let updateName = await db.collection("Users").updateOne(
                { walletAddress: walletAddress },
                { $set: { name: name } }
            );
            res.status(200).json({ name: name });
    }
}

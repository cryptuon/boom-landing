import clientPromise from "@/lib/mongodb"
export default async function handler(req, res) {
    const client = await clientPromise;
    const db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            let bodyObject = req.body;
            let name = bodyObject.name;
            let address = bodyObject.address;
            console.log(name);
            console.log(address);
            console.log("increaseCount");
            let increaseCount = await db.collection("clicksCount").updateOne({ name: name }, { $inc: { count: 1 },});
            let addAddress = await db.collection("clicksCount").updateOne({ name: name }, { $addToSet: { addresses: address },});
            console.log(addAddress);    
            res.json(addAddress);
    }
}
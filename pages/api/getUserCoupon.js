import clientPromise from "@/lib/mongodb";
export default async function handler(req, res) {
    let client = await clientPromise;
    let db = client.db("boom-v1");
    switch (req.method) {
        case "POST":
            let bodyObject = req.body;
            let walletAddress = bodyObject.walletAddress;
            let nftCollectionList = bodyObject.commonCollection;
            let offerCampaign = bodyObject.offerCampaign;

            let findOfferAvailed = await db.collection("OfferAvailDetails")
                .find({ User: {
                    WalletAddress: walletAddress,
                },  OfferCampaign: offerCampaign })
                .toArray();
            
            if (findOfferAvailed.length == 0) {
                let copounAvailed = await db.collection("CampainOfferingData")
                    .find({
                        CampaignCode: offerCampaign,
                        isAvailed: false,
                    })
                    .toArray();
                if (copounAvailed.length == 0) {
                    res.status(200).json({ couponType: "noCoupon" });
                } else {
                    let couponCode = copounAvailed[0].CouponCode;
                    let updateCouponAvailed = await db.collection("CampainOfferingData")
                        .updateOne(
                            {
                                CampaignCode: offerCampaign,
                                CouponCode: couponCode,
                                isAvailed: false,
                            },
                            {
                                $set: {
                                    isAvailed: true,
                                    },
                            })
                    let addOfferAvailed = await db.collection("OfferAvailDetails").insertOne({
                        User: {
                            WalletAddress: walletAddress,
                        },
                        offerCampaign: offerCampaign,
                        NFTCollection: nftCollectionList, // nftList is an array of objects
                    });
                    let updateCount = await db.collection("CampaignDetails").
                        updateOne(
                            {
                                CampaignCode: offerCampaign,
                            },
                            {
                                $inc: {
                                    OfferAvailCount: 1,
                                },
                            })
                    res.status(200).json({ couponType: "couponGenerated", couponCode: couponCode });
                    }
            }
            else{
                res.status(200).json({ couponType: "couponAvailed", couponCode: findOfferAvailed[0].OfferCouponCode });
            }
        }
    }
import clientPromise from '@/lib/mongodb'

export default async function handler(req, res) {
  const client = await clientPromise
  const db = client.db('boom-v1')

    switch (req.method) { 
        case 'POST':
            let bodyObject = req.body
            let userNFTs = bodyObject.userNFTs
            console.log(userNFTs)
            let eligibleCampaigns = await db.collection('CampaignDetails').find({
                NFTCollections:{$in:userNFTs}
            }).toArray()
            let campaignCodes = []
            for (let i = 0; i < eligibleCampaigns.length; i++) {
                campaignCodes.push(eligibleCampaigns[i].CampaignCode)
            }

            res.status(200).json(
                {
                    eligibleCampaigns: eligibleCampaigns,
                    Offers: campaignCodes,
                    Name: "For You"
                }

            )

        }
    }

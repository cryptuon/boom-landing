import Image from 'next/image'
import SmallTicket from './SmallTicket'
import { useState, useEffect} from 'react'
import SmallTicketDetails from './SmallTicketsDetails'
export default function FrameSmallTikcets({offers, userNFTcollection}) {
  const [details, setDetails] = useState([])
  const [selected, setSelected] = useState()
  const [showSelected, setShowSelected] = useState(false)

  useEffect(() => {
    getCampaignOffers({offers}).then((data) => {
      setDetails(data)
    })
  }, [offers])   


  return (
    <div className={` flex flex-row justify-between w-full h-[48vh]  `}>
      {/* className={`${showSelected ? 'blur md:blur-none touch-none' : 'none'}`} */}

      <div className={`flex flex-col  w-full justify-center items-center ${showSelected ? 'blur md:blur-none touch-none' : 'none'}`}>
        <div className="
                    w-fit 
                    grid grid-cols-2 md:grid-cols-3
                    gap-y-4 gap-x-5 
                    pt-3 h-[48vh] 
                    px-5 
                    overflow-y-auto overflow-x-hidden no-scrollbar ">
          {details.map((details) => {
            let headline = details.OfferHeadline ? details.OfferHeadline : "jj"
            return (
            <div
              onClick={
                () => {
                  setSelected(details)
                  setShowSelected(true)
                }
              }>
              <SmallTicket headline={headline} details={details}/>
            </div>
          )})}
        </div>
      </div>
      <div className=' flex pt-3 absolute -mx-[10vw] md:mx-0 md:w-fit w-full justify-center items-center md:items-start md:justify-start md:relative '>
        <SmallTicketDetails userNFTcollection={userNFTcollection} details={selected} link={true} showSelected={showSelected} setShowSelected={setShowSelected} />
      </div>
    </div>
  )
}

async function getCampaignOffers({offers}) {
  let campaignCodes = offers

  const res = await fetch('/api/getCampaignOffers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({campaignCodes}),
  })
  const data = await res.json()
  return data
}
import Sidebar from '../Sidebar'
import FrameSmallTikcets from '../FrameSmallTickets'
import { Link, Element } from 'react-scroll'
import { useState, useEffect } from 'react'
export default function CouponSection({userNFTcollection}) {
  const [offers, setOffers] = useState(null)
  return (
    <Element
      className="my-36 md:my-0 flex flex-1 items-center justify-center flex-row px-[10vw]  md:pl-[12vw] h-fit  md:h-screen"
      name="Coupons"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="pt-3">
          <Sidebar setOffers={setOffers} userNFTcollection={userNFTcollection}/>
        </div>
        <div className="flex w-full flex-1  ">
          <FrameSmallTikcets offers={offers} userNFTcollection={userNFTcollection}/>
        </div>
      </div>
    </Element>
  )
}

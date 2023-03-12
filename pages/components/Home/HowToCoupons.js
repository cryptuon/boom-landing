import SmallTicket from "../SmallTicket"
import Image from "next/image"
import Ticket from "../Ticket"
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
import { useState } from "react"
export default function HowToCoupons() {
  const [details, setDetails] = useState({
    CampaignCode: "CAMPAIGN001",
    Brand: "NikeID",
    OfferHeadline : "Limited time offer!",
    OfferDescription : "Buy 2 NFTs and get 1 free!",
    OfferAvailCount : 100,
  })
    return (
        <div className="flex flex-1 h-fit flex-col md:flex-row my-36 md:my-0 justify-evenly items-center md:h-screen" id="howto">
          <div className="flex flex-col gap-y-5 order-2 md:order-1">
            <div className="flex flex-row justify-end items-end ">
              <SmallTicket details={details}/>
              <div className="relative h-[13vmax] w-[13vmax]">
                <Image src="./free.svg" fill className="ml-5 justify-end" />
              </div>
            </div>
            <Ticket />
          </div>
          <div className="order-2 md:order-1 ">
            <p
              className={`${luckiestGuy.variable} font-display text-center md:text-start text-4xl xl:text-8xl xl:leading-tight pt-24`}
              >
              How to <br className="hidden md:block"/>
              Get
              <br />
              Coupons
            </p>
          </div>
        </div>
    )
}
import SmallTicket from "../SmallTicket"
import Image from "next/image"
import Ticket from "../Ticket"
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
export default function HowToCoupons() {
    return (
        <div className="flex flex-1 flex-row mt-10 justify-evenly items-center h-screen" id="howto">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row justify-end items-end ">
              <SmallTicket />
              <div className="relative h-[13vw] w-[13vw]">
                <Image src="./free.svg" fill className="ml-5 justify-end" />
              </div>
            </div>
            <Ticket />
          </div>
          <div>
            <p
              className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight `}
            >
              How to <br />
              Get
              <br />
              Coupons
            </p>
          </div>
        </div>
    )
}
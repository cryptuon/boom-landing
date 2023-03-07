import Image from 'next/image'
import Link from 'next/link'
import { BiCopy } from 'react-icons/bi'
export default function SmallTicketDetails({ number, link }) {
  return (
    <div>

      {number ? (
        <div className="bg-[url('/SmallTicketDetailsOutline.svg')] bg-no-repeat bg-contain bg-center w-[14.22vw] h-[30vw]">
          <div className="flex flex-col justify-center h-full px-[1vw]">
            <div className="flex items-center justify-center h-[7.17vw] ">
              <div className="relative w-full h-[4.6vw]  ">
                <Image src="/polygonBanner.png" alt="logo" fill />
              </div>
            </div>
            <div className="flex flex-1 h-full items-center pt-[2vh] gap-y-4 flex-col">
              <div className="flex border-2 h-[0.6vw] w-[12.5vw] border-black rounded-2xl items-center justify-end">
                <div className="bg-red-600 h-[0.40vw] w-[6.1vw] rounded-2xl"></div>
              </div>
              <div className="flex flex-col w-full gap-y-1 h-full">
                <p className="text-[1.5vw] font-[700] mb-[0.1vw]">
                  {number}0% OFF
                </p>
                <p className="text-[0.8vw] font-[500] mb-[0.4vh]">3254</p>
                <p className="text-[0.8vw] font-[500] ">
                  Get off on the whole company. We are going bankrupt because we
                  thought we gonna change the world but this fucking recession
                  and the holy bubble just wont let us live. Give us 20k more
                  and take my home too.
                </p>
              </div>
            </div>
            {link ? (
              <div
                onClick={() => window.open('https:/google.com')}
                className="flex flex-row justify-around items-center h-fit m-4 border-2 border-black rounded-lg hover:bg-boom-yellow cursor-pointer "
              >
                <p className="text-[2vw] font-[700] mb-[0.1vw]">Avail Offer</p>
              </div>
            ) : (
              <div className="flex flex-row justify-around items-center h-fit m-4 border-2 border-black rounded-lg hover:bg-boom-yellow cursor-pointer ">
                <p className="text-[2vw] font-[700] mb-[0.1vw]">A{number}BC</p>
                <BiCopy className="text-[2vw] font-[700] mb-[0.1vw]" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-[url('/SmallTicketsDetailsNone.svg')] bg-no-repeat bg-contain bg-center w-[14.22vw] h-[30vw]" />
      )}
    </div>
  )
}

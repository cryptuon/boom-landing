import Image from 'next/image'
import Link from 'next/link'
import { BiCopy } from 'react-icons/bi'
export default function SmallTicketDetails({ number, link }) {
  return (
    <div>

      {number ? (
        <div className="bg-[url('/SmallTicketDetailsOutline.svg')] bg-no-repeat bg-contain bg-center w-[14.22vmax] h-[30vmax]">
          <div className="flex flex-col justify-center h-full px-[1vmax]">
            <div className="flex items-center justify-center h-[7.17vmax] ">
              <div className="relative w-full h-[4.6vmax]  ">
                <Image src="/polygonBanner.png" alt="logo" fill />
              </div>
            </div>
            <div className="flex flex-1 h-full items-center pt-[2vh] gap-y-4 flex-col">
              <div className="flex border-2 h-[0.6vmax] w-[12.5vmax] border-black rounded-2xl items-center justify-end">
                <div className="bg-red-600 h-[0.40vmax] w-[6.1vmax] rounded-2xl"></div>
              </div>
              <div className="flex flex-col w-full gap-y-1 h-full">
                <p className="text-[1.5vmax] font-[700] mb-[0.1vmax]">
                  {number}0% OFF
                </p>
                <p className="text-[0.8vmax] font-[500] mb-[0.4vh]">3254</p>
                <p className="text-[0.8vmax] font-[500] ">
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
                <p className="text-[2vmax] font-[700] mb-[0.1vmax]">Avail Offer</p>
              </div>
            ) : (
              <div className="flex flex-row justify-around items-center h-fit m-4 border-2 border-black rounded-lg hover:bg-boom-yellow cursor-pointer ">
                <p className="text-[2vmax] font-[700] mb-[0.1vmax]">A{number}BC</p>
                <BiCopy className="text-[2vmax] font-[700] mb-[0.1vmax]" />
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-[url('/SmallTicketsDetailsNone.svg')] bg-no-repeat bg-contain bg-center w-[14.22vmax] h-[30vmax]" />
      )}
    </div>
  )
}

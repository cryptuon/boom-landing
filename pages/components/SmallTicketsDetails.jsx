import Image from 'next/image'
import Link from 'next/link'
import { BiCopy } from 'react-icons/bi'
import { AiOutlineCloseCircle } from 'react-icons/ai'

export default function SmallTicketDetails({ number, link, showSelected, setShowSelected }) {
  return (
    <div>

      {showSelected ? (
        <div 
        
        className="border-2 border-black rounded-lg bg-white w-[50vw] md:w-[14.22vmax] h-max md:h-[30vmax] md:animate-wiggle">
          <AiOutlineCloseCircle onClick={() => setShowSelected(false)} className="md:hidden text-[2vmax] font-[700] mb-[0.1vmax] absolute right-0 top-0 m-2" />
          <div className="flex flex-col justify-center h-full px-[1vmax]">
            <div className="flex items-center justify-center h-[10vh] md:h-[7.17vmax] ">
              <div className="relative w-full h-[10vh] md:h-[4.6vmax]  ">
                <Image src="/polygonBanner.png" alt="logo" fill />
              </div>
            </div>
            <div className="flex flex-1 h-full items-center pt-[2vh] gap-y-4 flex-col">
              <div className="flex border-2 h-[0.6vmax] w-[12.5vmax] border-black rounded-2xl items-center justify-end">
                <div className="bg-red-600 h-[0.40vmax] w-[6.1vmax] rounded-2xl"></div>
              </div>
              <div className="flex flex-col w-full gap-y-1 h-full">
                <p className="text-base font-[700] mb-[0.1vmax]">
                  {number}0% OFF
                </p>
                <p className="text-sm font-[500] mb-[0.4vh]">3254</p>
                <p className="text-sm font-[500] ">
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
                <p className="text-xs md:text-base font-[700] mb-[0.1vmax]">Avail Offer</p>
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
        <div className="bg-[url('/SmallTicketsDetailsNone.svg')] bg-no-repeat bg-contain bg-center w-[14.22vmax] h-[30vmax] hidden md:block" />
      )}
    </div>
  )
}


/*
import Image from 'next/image'
import Link from 'next/link'
import { BiCopy } from 'react-icons/bi'
export default function SmallTicketDetails({ number, link, showSelected, setShowSelected }) {
  return (
    <div>

      {showSelected ? (
        <div 
        onClick={() => setShowSelected(false)}
        className="bg-[url('/SmallTicketDetailsOutline.svg')] bg-no-repeat bg-contain bg-center w-[14.22vmax] h-[30vmax] animate-wiggle">
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
                <p className="text-xs font-[700] mb-[0.1vmax]">Avail Offer</p>
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
        <div className="bg-[url('/SmallTicketsDetailsNone.svg')] bg-no-repeat bg-contain bg-center w-[14.22vmax] h-[30vmax] hidden md:block" />
      )}
    </div>
  )
}
*/
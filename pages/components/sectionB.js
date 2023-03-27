import Image from 'next/image'
import { useEffect } from 'react'

export default function sectionB() {
  return (
    <div className="w-full h-screen flex justify-between">
      <div
        className="flex flex-1 h-screen w-full relative 
                    bg-[url('/sectionB.svg')] hover:animate-sectionB
                    bg-contain bg-center bg-no-repeat"
      ></div>
      <div className="flex flex-1 items-center justify-center flex-col ">
        <div className="p-32 gap-4 flex flex-col">
          <p className="text-4xl  xl:text-7xl font-display text-start">
            Find out your target audience in web3
          </p>
          <p className="text-5xl font-body">
            Using our analytics tools, find out the users who are showing
            interest in your product and want to avail your services.
          </p>
        </div>
      </div>
      <div id="preloader">
        <img src="/sectionB.svg" alt="preloader" height={1} width={1} />
        <img src="/sectionBhover.svg" alt="preloader" height={1} width={1} />
      </div>
    </div>
  )
}

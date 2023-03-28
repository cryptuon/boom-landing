import Image from 'next/image'
import { useEffect } from 'react'

export default function sectionC() {
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="flex flex-1 items-center justify-center flex-col ">
        <div className="p-32 gap-4 flex flex-col">
          <p className="text-[7vh] leading-none font-display text-start">
            Create a new sales channel for your brand
          </p>
          <p className="text-[4vh] leading-none font-body">
            Create a new sales channel for your brand from the web3 space. Using
            Boom, create acquisition campaigns and launch them in minutes.
          </p>
        </div>
      </div>
      <div
        className="flex flex-1 h-screen w-full relative 
                    bg-[url('/sectionC.svg')] hover:animate-sectionC
                    bg-contain bg-center bg-no-repeat"
      ></div>
      <div id="preloader">
        <img src="/sectionC.svg" alt="preloader" height={1} width={1} />
        <img src="/sectionChover.svg" alt="preloader" height={1} width={1} />
      </div>
    </div>
  )
}

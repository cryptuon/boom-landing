import Image from 'next/image'
import { useEffect } from 'react'

export default function sectionA() {
  return (
    <div className="w-full h-screen flex justify-between">
      <div className="flex flex-1 items-center justify-center flex-col ">
        <div className="p-32 gap-4 flex flex-col">
          <p className="text-4xl  xl:text-7xl font-display text-start">
            Leverage the power of NFTs
          </p>
          <p className="text-5xl font-body">
            Collaborate with the existing NFT collections using Boom and target
            their audience for your brand growth and sales.
          </p>
        </div>
      </div>
      <div
        className="flex flex-1 h-screen w-full relative 
                    bg-[url('/sectionA.svg')] hover:animate-sectionA
                    bg-contain bg-center bg-no-repeat"
      ></div>
      <div id="preloader">
        <img src="/sectionA.svg" alt="preloader" height={1} width={1} />
        <img src="/sectionAhover.svg" alt="preloader" height={1} width={1} />
      </div>
    </div>
  )
}

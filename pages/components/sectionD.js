import Image from 'next/image'
import { useEffect } from 'react'

export default function sectionD() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center p-5">
      <p className="text-4xl xl:text-7xl font-display text-center">
        How Does It Work?
      </p>
      <div className="w-full h-[100%] relative">
        <Image src="/sectionD.svg" fill />
      </div>
      <div className="flex flex-row w-full p-10">
        <Steps
          number="1"
          title="Select NFT collections for targeting"
          description="Hire technical and creative team which add more operational and financial load to company"
        />
        <Steps
          number="2"
          title="Start a marketing campaign"
          description="Start a marketing campaign and announce the benefits to the NFT users."
        />
        <Steps
          number="3"
          title="Boom handles everything else"
          description="Boom will handle all the logistics required to help people avail the offers"
        />
      </div>
    </div>
  )
}

function Steps({ number, title, description }) {
  return (
    <div className="flex-1 flex flex-col items-center">
      <div className='flex w-[20vw] flex-col gap-2'>
        <p className="text-4xl xl:text-7xl font-display">Step {number}</p>
        <p className="text-4xl">{title}</p>
        <p className="text-2xl">{description}</p>
      </div>
    </div>
  )
}

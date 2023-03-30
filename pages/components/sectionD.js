import Image from 'next/image'
import { useEffect } from 'react'

export default function sectionD() {
  return (
    <div className="  snap-start w-full h-screen flex flex-col justify-center items-center p-5">
      <p className="text-[7vh] leading-none font-display text-center p-5">
        How Does It Work?
      </p>
      <div className="hidden md:flex w-full h-[100%] relative">
        <img src="/sectionD.png" fill />
      </div>
      <div className="
          snap-x overflow-x-scroll snap-mandatory scroll-smooth 
          flex w-screen 
        md:h-fit flex-row md:overflow-visible md:px-10 scrollbar
          gap-5 md:gap-0">
        <Steps
          number="1"
          title="Select NFT collections for targeting"
          description="Hire technical and creative team which add more operational and financial load to company"
          image="/Step1.png"
        />
        <Steps
          number="2"
          title="Start a marketing campaign"
          description="Start a marketing campaign and announce the benefits to the NFT users."
          image="/Step2.png"
        />
        <Steps
          number="3"
          title="Boom handles everything else"
          description="Boom will handle all the logistics required to help people avail the offers"
          image="/Step3.png"
        />
      </div>
    </div>
  )
}

function Steps({ number, title, description, image }) {
  return (
    <div className="snap-start w-screen h-fit  flex-1 flex flex-col items-center text-center md:text-start">
      <div className="flex w-screen h-fit md:w-[20vw] flex-col md:gap-2 justify-center md:justify-start gap-5 md:items-start items-center p-10 md:p-0">
        <div className="md:hidden h-[35vmax] w-[35vmax] relative">
          <img src={image}/>
        </div>
        <p className="md:text-[7vh] text-[5vh] leading-none font-display">
          Step {number}
        </p>
        <p className="md:text-[4vh] text-[3vh] leading-none font-body">
          {title}
        </p>
        <p className="md:text-[2.5vh] text-[2vh] leading-tight">
          {description}
        </p>
      </div>
    </div>
  )
}

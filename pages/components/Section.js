import Image from 'next/image'
import { useEffect } from 'react'

export default function Section({
  title,
  description,
  section,
  order1,
  order2,
}) {
  return (
    <div className="snap-start w-screen h-screen md:justify-between justify-center flex flex-col md:flex-row py-10 md:p-0">
      <div
        className={`${order1} flex flex-1  items-center justify-center flex-col`}
      >
        <div className="p-[10vw] gap-4 flex flex-col">
          <p className="md:text-[7vh] text-[5vh] leading-none font-display text-center md:text-start">
            {title}
          </p>
          <p className="md:text-[4vh] text-[3vh] leading-none font-body  text-center md:text-start">
            {description}
          </p>
        </div>
      </div>
      <div
        className={`${order2} flex flex-1 md:h-screen w-full relative 
                  bg-[url('/${section}mobile.svg')]
                  md:bg-[url('/${section}.svg')] md:hover:animate-${section}
                  bg-contain bg-center bg-no-repeat`}
      ></div>
      {/* <div
        className="order-2 flex flex-1 md:h-screen w-full relative 
                  bg-[url('/sectionCmobile.svg')]
                  md:bg-[url('/sectionC.svg')] md:hover:animate-sectionC
                  bg-contain bg-center bg-no-repeat"
      ></div> */}
      <div id="preloader">
        <img src={`/sectionA.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionAmobile.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionAhover.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionB.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionBmobile.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionBhover.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionC.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionCmobile.svg`} alt="preloader" height={1} width={1} />
        <img src={`/sectionChover.svg`} alt="preloader" height={1} width={1} />
      </div>
    </div>
  )
}

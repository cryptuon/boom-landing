'use client'
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
      {(section == 'sectionA') && (<div className={`${order2} flex flex-1 md:h-screen w-full relative bg-sectionAmobile md:bg-sectionA md:hover:animate-sectionA bg-contain bg-center bg-no-repeat`}/>)}
      {(section == 'sectionB') && (<div className={`${order2} flex flex-1 md:h-screen w-full relative bg-sectionBmobile md:bg-sectionB md:hover:animate-sectionB bg-contain bg-center bg-no-repeat`}/>)}
      {(section == 'sectionC') && (<div className={`${order2} flex flex-1 md:h-screen w-full relative bg-sectionCmobile md:bg-sectionC md:hover:animate-sectionC bg-contain bg-center bg-no-repeat`}/>)}
      <div id="preloader">
        <Image
          src={'/' + section + '.svg'}
          alt="preloader"
          height={1}
          width={1}
        />
        <Image
          src={'/' + section + 'mobile.svg'}
          alt="preloader"
          height={1}
          width={1}
        />
        <Image
          src={'/' + section + 'hover.svg'}
          alt="preloader"
          height={1}
          width={1}
        />
      </div>
    </div>
  )
}

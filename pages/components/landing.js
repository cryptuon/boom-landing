import Image from 'next/image'
import { useEffect } from 'react'

export default function Landing() {
  useEffect(() => {
    const elementA = document.querySelector('#a')
    const elementB = document.querySelector('#b')

    function handleMouseEnter() {
      elementB.classList.remove("md:bg-[url('/backgroundColor.svg')]")
      elementB.classList.add("md:bg-[url('/background.svg')]")
    }

    function handleMouseLeave() {
      elementB.classList.add("md:bg-[url('/backgroundColor.svg')]")
      elementB.classList.remove("md:bg-[url('/background.svg')]")
    }

    elementA.addEventListener('mouseenter', handleMouseEnter)
    elementA.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      elementA.removeEventListener('mouseenter', handleMouseEnter)
      elementA.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])
  return (
    <div
      id="b"
      className="snap-start w-full h-screen
      bg-[url('/backgroundColor.svg')]
      md:bg-[url('/background.svg')] bg-cover bg-center flex  transtion duration-500 ease-in-out"
    >
      <div
        id="a"
        className="flex w-full items-center justify-center md:mx-80 md:my-40 mx-[10vw] my-[15vh] flex-col gap-5"
      >
        <div className="relative h-[70vh] w-[70vw] md:w-[40vw]">
          <Image src="/logo.svg" fill />
        </div>
        <p className="leading-none text-[5vh] md:text-[6vh] font-display text-center rotate-[-6.95deg]">
          Get ahead in the new era of <br />
          internet, it’s the easiest <br />
          way to go web3
        </p>
        <div className="flex w-[200px] h-[200px] relative">
          <Image src="/GetinTouchBottom.svg" fill />
          <Image
            className="-translate-x-1 -translate-y-1 
                            hover:-translate-x-2 hover:-translate-y-2 
                            active:translate-x-0 active:translate-y-0"
            src="/GetinTouch.svg"
            fill
          />
        </div>
      </div>
      <div id="preloader">
        <img src="/background.svg" alt="preloader" height={1} width={1} />
        <img src="/backgroundColor.svg" alt="preloader" height={1} width={1} />
      </div>
    </div>
  )
}

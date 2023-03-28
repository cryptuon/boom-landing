import Image from 'next/image'
import { useEffect } from 'react'

export default function Landing() {
  useEffect(() => {
    const elementA = document.querySelector('#a')
    const elementB = document.querySelector('#b')

    function handleMouseEnter() {
      elementB.classList.remove("bg-[url('/backgroundColor.svg')]")
      elementB.classList.add("bg-[url('/background.svg')]")
    }

    function handleMouseLeave() {
      elementB.classList.add("bg-[url('/backgroundColor.svg')]")
      elementB.classList.remove("bg-[url('/background.svg')]")
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
      className="w-full h-screen bg-[url('/background.svg')] bg-cover bg-center flex  transtion duration-500 ease-in-out"
    >
      <div
        id="a"
        className="flex w-full items-center justify-center mx-80 my-40  flex-col gap-5"
      >
        <Image src="/logo.svg" width={400} height={400} />
        <p className="text-4xl xl:leading-tight xl:text-5xl font-display text-center rotate-[-6.95deg]">
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

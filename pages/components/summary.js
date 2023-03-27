import Image from 'next/image'
export default function Summary() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-20 border-[#1E1E1E] border-t-8 border-b-[25px] gap-10">
      <p className="text-4xl xl:text-7xl font-display text-center">Summary</p>
      <p className="text-4xl text-center">
        Our mission is to ensure no brand <br />
        gets left behind in the web3 shift.
        <br />
        Get in touch to go web3 today!
      </p>
      <div className="flex w-[250px] h-[80px] relative">
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
  )
}

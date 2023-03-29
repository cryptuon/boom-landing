import Image from 'next/image'
import GetInTouch from './getInTouch'
export default function Summary() {
  return (
    <div className="  snap-start w-full flex flex-col justify-center items-center p-20 border-[#1E1E1E] border-t-8 border-b-[25px] gap-10">
      <p className="md:text-[7vh] text-[5vh] leading-none font-display text-center">Let's connect</p>
      <p className="md:text-[4vh] text-[3vh] leading-none text-center font-body">
        Our mission is to ensure no brand <br />
        gets left behind in the web3 shift.
        <br />
        Get in touch to go web3 today!
      </p>
        <GetInTouch />
    </div>
  )
}

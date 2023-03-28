import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
export default function Footer() {
  return (
    <div className="snap-start flex flex-col items-center px-14 w-full py-5 bg-[#0F0F0F]  ">
      <div className="flex w-full flex-row items-center justify-between">
        <div className="flex items-center justify-center relative h-[7vh] md:w-[7.5vw] w-[11vh]">
          <Image src="/logo.svg" alt="logo" fill className="mr-12" />
        </div>
        <div className="flex flex-row items-center justify-evenly gap-4">
          <FaFacebookF className="text-boom-yellow text-[1.5vmax]" />
          <FaTwitter
            className="text-boom-yellow text-[1.5vmax]"
            onClick={() => {
              window.open('https://twitter.com/BoomRewards')
            }}
          />
          <FaInstagram className="text-boom-yellow text-[1.5vmax]" />
          <FaLinkedinIn className="text-boom-yellow text-[1.5vmax]" />
        </div>
      </div>
      <div className="flex flex-row items-center gap-4 ">
        <p className="text-boom-yellow text-xs md:text-base">
          © 2023 Boom. All rights reserved.
        </p>
        {/* <p className='text-boom-yellow text-xs md:text-base'>Terms of Service</p>
                    <p className='text-boom-yellow text-xs md:text-base'>Privacy Policy</p>
                    <p className='text-boom-yellow text-xs md:text-base'>Cookie Policy</p> */}
      </div>
    </div>
  )
}

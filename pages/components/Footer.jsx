import Image from "next/image"
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { AiTwotoneCalendar } from 'react-icons/ai'
import { AiOutlineMail } from 'react-icons/ai'
export default function Footer() {
    return (
        <div className='flex flex-col items-center px-14 w-full py-5 bg-[#0F0F0F]'>
            <div className="flex w-full flex-row items-center justify-between">
                <div className='flex items-center justify-center relative h-[7vh] md:w-[7.5vw] w-[11vh]'>
                    <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                </div>
                <div className="flex flex-row items-center justify-evenly gap-4">
                <FaTwitter
                    className="text-boom-yellow text-[1.5vmax]"
                    onClick={() => {
                    window.open('https://twitter.com/BoomRewards')
                    }}
                />
                <FaLinkedin
                    className="text-boom-yellow text-[1.5vmax]"
                    onClick={() => {
                    window.open('https://www.linkedin.com/company/boom-fan/')
                    }}
                />
                <AiOutlineMail
                    className="text-boom-yellow text-[1.5vmax]"
                    onClick={() => {
                    window.open('mailto:anshul@boom.fan')
                    }}
                />
                <AiTwotoneCalendar
                    className="text-boom-yellow text-[1.5vmax]"
                    onClick={() => {
                    window.open('https://calendly.com/anshul-boom/30min')
                    }}
                />
                </div>
            </div>
                <div className="flex flex-row items-center gap-4 ">
                    <p className='text-boom-yellow text-xs md:text-base'>© 2023 Boom. All rights reserved.</p>
            </div>
        </div>
    )
}
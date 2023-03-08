import Image from "next/image"
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
export default function Footer() {
    return (
        <div className='flex flex-col items-center px-14 w-full h-26 py-5 bg-[#0F0F0F]'>
            <div className="flex w-full flex-row items-center justify-between">
                <div className='flex items-center justify-center relative h-[7vh] w-[7vh]'>
                    <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                </div>
                <div className="flex flex-row items-center justify-evenly gap-2">
                    <FaFacebookF className='text-boom-yellow text-[1.5vh]' />
                    <FaTwitter className='text-boom-yellow text-[1.5vh]' />
                    <FaInstagram className='text-boom-yellow text-[1.5vh]' />
                    <FaLinkedinIn className='text-boom-yellow text-[1.5vh]' />
                </div>
            </div>
                <div className="flex flex-row items-center gap-4 ">
                    <p className='text-boom-yellow text-xs'>© 2022 Boom. All rights reserved.</p>
                    <p className='text-boom-yellow text-xs'>Terms of Service</p>
                    <p className='text-boom-yellow text-xs'>Privacy Policy</p>
                    <p className='text-boom-yellow text-xs'>Cookie Policy</p>
            </div>
        </div>
    )
}
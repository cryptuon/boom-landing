// @refresh reset

import Image from 'next/image'
// import TicketOutline from '/TicketOutline.svg'

export default function SmallTicket() {
    return (
        <div className="flex bg-[url('/SmallTicketOutlineBlack.svg')] bg-no-repeat bg-contain w-[189px] h-[202px]">
            <div className="bg-[url('/SmallTicketOutline.svg')]  bg-no-repeat bg-contain bg-center w-[189px] h-[202px] animate-wiggleOut hover:animate-wiggle ">
                <div className="flex flex-col  justify-center h-full px-5">
                    <div className="flex items-center justify-center h-[87px]">
                        <div>
                            <Image src='/polygonBanner.png' alt="logo" width={155} height={55} />
                        </div>
                    </div>
                    <div className='flex flex-1 justify-between flex-col my-2 '>
                        <div className='flex flex-col overflow-hidden'>
                            <p className="text-[18px] font-[700] mb-1">90% OFF</p>
                            <p className="text-[10px] font-[500]">Get off on the whole company. We are going bankrupt beca..... </p>
                        </div>
                        <div className='flex flex-row justify-between items-center'>
                            <p className="text-[11px] font-[500]">3254</p>
                            <div className='flex border-2 h-3 w-20 border-black rounded-2xl items-center justify-end'>
                                <div className='bg-red-600 h-2 w-10 rounded-2xl'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

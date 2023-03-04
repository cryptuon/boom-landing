import Image from 'next/image'

export default function Ticket() {
    return (
        <div className="flex mx-1 mb-5 bg-[url('/TicketOutlineBlack.svg')] bg-no-repeat bg-contain w-[27vw] h-[10vw]">
            <div className="bg-[url('/TicketOutline.svg')]  bg-no-repeat bg-contain w-[27vw] h-[10vw] animate-wiggleOut 
                            hover:animate-wiggle hover:bg-[url('/TicketOutlineYellow.svg')]">
                <div className="flex flex-row items-center justify-center h-full ">
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center justify-between py-[1.25vw] pl-[2vw] h-full ">
                            <div className='w-[2vw] h-[2vw] relative'>
                                <Image src="/polygon.png" alt="logo" fill sizes='2vw' className="mr-8" />
                            </div>
                            <div className='w-[2vw] h-[2vw] relative'>
                                <Image src="/apeClub.png" alt="logo" fill sizes='2vw' className="mr-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-[1vw] h-full overflow-hidden ">
                            <p className="text-[2vw] font-bold leading-tight md:text-sm">90% OFF</p>
                            <p className="text-[0.7vw] font-medium leading-tight">Get off on the whole company. We are going bankrupt beca.....</p>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[1vw] pr-[2.5vw] h-full">
                            <p className="text-[0.7vw] font-medium md:text-xm">3254</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-[1vw] h-full w-[9vw] px-[3.5vw] ">
                        <p className="text-[2vw] font-bold transform -rotate-90 md:text-sm">AL3LD3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

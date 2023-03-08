import Image from 'next/image'

export default function Ticket() {
    return (
        <div className=" flex mx-1  bg-[url('/TicketOutlineBlack.svg')] bg-no-repeat bg-contain w-[27vmax] h-[10vmax]">
            <div className="bg-[url('/TicketOutline.svg')]  bg-no-repeat bg-contain w-[27vmax] h-[10vmax] animate-wiggleOut 
                            hover:animate-wiggle hover:bg-[url('/TicketOutlineYellow.svg')]">
                <div className="flex flex-row items-center justify-center h-full ">
                    <div className="flex items-center justify-center h-full">
                        <div className="flex flex-col items-center justify-between py-[1.25vmax] pl-[2vmax] h-full ">
                            <div className='w-[2vmax] h-[2vmax] relative'>
                                <Image src="/polygon.png" alt="logo" fill sizes='2vmax' className="mr-8" />
                            </div>
                            <div className='w-[2vmax] h-[2vmax] relative'>
                                <Image src="/apeClub.png" alt="logo" fill sizes='2vmax' className="mr-8" />
                            </div>
                        </div>
                        <div className="flex flex-col justify-center px-[1vmax] h-full overflow-hidden ">
                            <p className="text-[2vmax] font-bold leading-tight md:text-sm">90% OFF</p>
                            <p className="text-[0.7vmax] font-medium leading-tight">Get off on the whole company. We are going bankrupt beca.....</p>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[1vmax] pr-[2.5vmax] h-full">
                            <p className="text-[0.7vmax] font-medium md:text-xm">3254</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-[1vmax] h-full w-[9vmax] px-[3.5vmax] ">
                        <p className="text-[2vmax] font-bold transform -rotate-90 md:text-sm">AL3LD3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

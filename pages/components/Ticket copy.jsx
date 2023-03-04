// @refresh reset

import Image from 'next/image'
// import TicketOutline from '/TicketOutline.svg'

export default function Ticket() {
    return (
        <div className="flex mx-1 mb-5 bg-[url('/TicketOutlineBlack.svg')] bg-contain w-[460px] h-[171px]">
            <div  className="bg-[url('/TicketOutline.svg')]  bg-no-repeat bg-contain bg-center w-[460px] h-[171px] animate-wiggleOut hover:animate-wiggle hover:bg-[url('/TicketOutlineYellow.svg')]">
                <div className="flex flex-row items-center justify-center h-full  ">
                    <div className="flex items-center justify-center h-full ">
                        <div className="flex flex-col items-center justify-between py-[20px] pl-[35px] h-full ">
                            <Image src='/polygon.png' alt="logo" width={39} height={39} className="mr-8" />
                            <Image src='/apeClub.png' alt="logo" width={39} height={39} className="mr-8" />
                        </div>
                        <div className="flex flex-col items-center justify-center px-[13px] h-full overflow-hidden">
                            <p className="text-[35px] font-[700]">90% OFF</p>
                            <p className="text-[13px] font-[500]">Get off on the whole company. We are going bankrupt beca..... </p>
                        </div>
                        <div className="flex flex-col items-center justify-end py-[30px] pr-[57px]  h-full ">
                            <p className="text-[13px] font-[500]">3254</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-[30px] h-full w-[130px] px-[13px] ">
                        <p className='text-[41px] font-[700] text-center rotate-90 '>AL3LD3</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

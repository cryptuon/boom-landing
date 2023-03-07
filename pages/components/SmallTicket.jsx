import Image from 'next/image'
// import TicketOutline from '/TicketOutline.svg'

export default function SmallTicket({number}) {
    return (
            <div className="flex bg-[url('/SmallTicketOutlineBlack.svg')] bg-no-repeat bg-contain bg-center w-[10.5vw] h-[11vw]">
                <div className="bg-[url('/SmallTicketOutline.svg')] bg-no-repeat bg-contain bg-center w-[10.5vw] h-[11vw] animate-wiggleOut hover:animate-wiggle ">
                    <div className="flex flex-col justify-center h-full px-[1vw] ">
                        <div className="flex items-center justify-center h-[4.6vw] ">
                            <div className='w-[12vw] h-[3vw] relative  '>
                                <Image src='/polygonBanner.png' alt="logo" fill />
                            </div>
                        </div>
                        <div className='flex flex-1 justify-evenly flex-col'>
                            <div className='flex flex-col overflow-hidden '>
                                <p className="text-[1vw] font-[700] mb-[0.1vw]">{number}0% OFF</p>
                                <p className="text-[0.7vw] font-[500]">Get off on the whole company. We are going bankrupt beca..... </p>
                            </div>
                            <div className='flex flex-row justify-between items-center '>
                                <p className="text-[0.7vw] font-[500]">3254</p>
                                <div className='flex border-2 h-[0.5vw] w-[2.5vw] border-black rounded-2xl items-center justify-end'>
                                    <div className='bg-red-600 h-[0.3vw] w-[1.1vw] rounded-2xl'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

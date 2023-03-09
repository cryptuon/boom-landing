import Image from 'next/image'
// import TicketOutline from '/TicketOutline.svg'

{/* <div className="flex bg-[url('/SmallTicketOutlineBlack.svg')] bg-no-repeat bg-contain bg- w-[17vmax] h-[17vmax] md:w-[11vmax] md:h-[12vmax]"> */}
{/* <div className="bg-[url('/SmallTicketOutline.svg')] bg-no-repeat bg-contain bg-center w-fit h-fit border-2 border-green-400 md:w-[11vmax] md:h-[12vmax] animate-wiggleOut hover:animate-wiggle "> */}
export default function SmallTicket({number}) {
    return (
            <div className="flex bg-black rounded-lg w-[35vw] md:w-[10vw] h-fit relative">
                <div className="bg-white w-[35vw] md:w-[10vw] h-fit border-2 border-black rounded-lg  animate-wiggleOut md:hover:animate-wiggle ">
                    <div className="flex flex-col justify-center h-full px-[1vmax] ">
                        <div className="flex items-center justify-center h-[8vmax]  md:h-[3vmax] border-2">
                            <div className='border-b-2 border-black w-[17vmax] h-[5vmax] md:w-[12vmax] md:h-[3vmax] relative  '>
                                <Image src='/polygonBanner.png' alt="logo" fill />
                            </div>
                        </div>
                        <div className='flex flex-1 justify-evenly flex-col py-5'>
                            <div className='flex flex-col overflow-hidden '>
                                <p className="text-sm font-[700] mb-[0.1vmax]">{number}0% OFF</p>
                                <p className="text-xs font-[500]">Get off on the whole company. We are going bankrupt beca..... </p>
                            </div>
                            <div className='flex flex-row justify-between items-center py-2'>
                                <p className="text-xs font-[500]">3254</p>
                                <div className='flex border-2 h-[1vmax] w-[5vmax] md:h-[0.5vmax] md:w-[2.5vmax] border-black rounded-2xl items-center justify-end'>
                                    <div className='bg-red-600 h-[0.6vmax] w-[2.2vmax] md:h-[0.3vmax] md:w-[1.1vmax] rounded-2xl'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}


/*
import Image from 'next/image'
// import TicketOutline from '/TicketOutline.svg'

export default function SmallTicket({number}) {
    return (
            <div className="flex bg-[url('/SmallTicketOutlineBlack.svg')] bg-no-repeat bg-contain bg-center w-[17vmax] h-[17vmax] md:w-[11vmax] md:h-[12vmax]">
                <div className="bg-[url('/SmallTicketOutline.svg')] bg-no-repeat bg-contain bg-center w-[17vmax] h-[17vmax] md:w-[11vmax] md:h-[12vmax] animate-wiggleOut hover:animate-wiggle ">
                    <div className="flex flex-col justify-center h-full px-[1vmax] ">
                        <div className="flex items-center justify-center h-[4.6vmax] ">
                            <div className='w-[12vmax] h-[3vmax] relative  '>
                                <Image src='/polygonBanner.png' alt="logo" fill />
                            </div>
                        </div>
                        <div className='flex flex-1 justify-evenly flex-col'>
                            <div className='flex flex-col overflow-hidden '>
                                <p className="text-[1vmax] font-[700] mb-[0.1vmax]">{number}0% OFF</p>
                                <p className="text-[0.7vmax] font-[500]">Get off on the whole company. We are going bankrupt beca..... </p>
                            </div>
                            <div className='flex flex-row justify-between items-center '>
                                <p className="text-[0.7vmax] font-[500]">3254</p>
                                <div className='flex border-2 h-[0.5vmax] w-[2.5vmax] border-black rounded-2xl items-center justify-end'>
                                    <div className='bg-red-600 h-[0.3vmax] w-[1.1vmax] rounded-2xl'></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}

*/
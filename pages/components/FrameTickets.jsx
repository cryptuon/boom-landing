import Image from 'next/image'
import Ticket from './Ticket'
export default function FrameTikcets() {
    return (
      <div className=' justify-end rotate-[30deg] w-fit translate-x-40 translate-y-40'>
      <div className=' items-end justify-end '>
        <Image src='./semiCircleGraphic.svg' width={250} height={250} className="rotate-[-30deg] ml-96 -mb-10" />
      </div>
      <div className='flex flex-row '>
        <Ticket />
        <Ticket />
      </div>
      <div className='flex flex-row px-20'>
        <Ticket />
        <Ticket />
      </div>
      <div className='flex flex-row '>
        <Ticket />
        <Ticket />
      </div>
    </div>
    )
}
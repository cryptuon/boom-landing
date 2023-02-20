import Image from 'next/image'
import SmallTicket from './SmallTicket'
export default function FrameSmallTikcets() {
    return (
      <div className='flex flex-col gap-5'>
          <div className='flex flex-row gap-5'>
            <SmallTicket />
            <SmallTicket />
            <SmallTicket />
          </div> <div className='flex flex-row gap-5'>
            <SmallTicket />
            <SmallTicket />
            <SmallTicket />
          </div>
        </div>
    )
}
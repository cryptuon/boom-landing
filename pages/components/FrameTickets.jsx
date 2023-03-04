import Image from 'next/image';
import Ticket from './Ticket';

export default function FrameTickets() {
  return (
    <div className="flex flex-col items-center justify-center rotate-[30deg] translate-y-10 translate-x-40">
      <div className="relative w-[13vw] h-[13vw] mb-[-4vw]">
        <Image
          src="/semiCircleGraphic.svg"
          fill
          className="rotate-[-30deg]"
        />
      </div>
      <div className="flex-row flex-wrap justify-center gap-4 py-8">
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
    </div>
  );
}

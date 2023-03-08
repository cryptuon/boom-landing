import Image from 'next/image';
import Ticket from './Ticket';

export default function FrameTickets() {
  return (
    <div className="flex flex-col items-end w-full md:pt-16 md:w-fit md:-ml-20 md:translate-y-10 md:translate-x-80 translate-x-20 rotate-12 md:rotate-[30deg]">
        <div className="relative mr-20 md:mr-96 w-[13vh] h-[13vh] mb-[-4vh]">
          <Image
            src="/semiCircleGraphic.svg"
            fill
            className="rotate-[-30deg]"
          />
      </div>
      <div className="flex flex-col items-start justify-center h-fit w-fit gap-4 ">
        <div className='flex flex-row w-fit h-fit '>
          <Ticket />
          <Ticket />
          <div className="md:hidden">
            <Ticket />
          </div>
        </div>
        <div className='flex flex-row w-fit ml-12 h-fit '>
          <Ticket />
          <Ticket />
          <div className="md:hidden">
            <Ticket />
          </div>
        </div>
        <div className='flex flex-row w-fit h-fit '>
          <Ticket />
          <Ticket />
          <div className="md:hidden">
            <Ticket />
          </div>
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image';
import { useEffect } from 'react';
import Ticket from './Ticket';

export default function FrameTickets() {
  useEffect(() => {
    function startWiggle() {
      const ticketdivs = document.querySelectorAll('#ticket');
      ticketdivs.forEach(div => {
        div.classList.remove('animate-wiggle');
        div.classList.remove('bg-[url("/TicketOutlineYellow.svg")]');
        div.classList.add('bg-[url("/TicketOutline.svg")]');
      });

      const randomIndex = Math.floor(Math.random() * ticketdivs.length);
      ticketdivs[randomIndex].classList.remove('bg-[url("/TicketOutline.svg")]');
      ticketdivs[randomIndex].classList.add('bg-[url("/TicketOutlineYellow.svg")]');
      ticketdivs[randomIndex].classList.add('animate-wiggle');
    }

    const intervalId = setInterval(startWiggle, 500); 
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col items-end w-full md:pt-36 md:w-fit md:-ml-20 md:translate-y-[7vmax] md:translate-x-52 translate-x-20 rotate-12 md:rotate-[30deg]">
        <div className='flex w-full justify-end items-end md:justify-center md:items-center pb-2'>
        <div className="relative mr-20 md:mr-96 w-[13vh] h-[13vh] mb-[-4vh]">
          <Image
            src="/semiCircleGraphic.svg"
            fill
            className="rotate-[-30deg]"
          />
      </div>
      </div>
      <div  className="flex flex-col items-start justify-center h-fit w-fit gap-4 ">
        <div className='flex flex-row w-fit h-fit '>
          <Ticket id=".ticket" className="" />
          <Ticket id=".ticket" className="" />
          
            <Ticket />
        </div>
        <div className='flex flex-row w-fit ml-12 h-fit '>
          <Ticket id=".ticket" className="" />
          <Ticket id=".ticket" className="" />
          
            <Ticket className="" />
        </div>
        <div className='flex flex-row w-fit h-fit '>
          <Ticket id=".ticket" className="" />
          <Ticket id=".ticket" className="" />
          
            <Ticket className="" />
        </div>
      </div>
    </div>
  );
}

import Image from 'next/image'
import SmallTicket from './SmallTicket'
import { useState } from 'react'
import SmallTicketDetails from './SmallTicketsDetails'
export default function FrameSmallTikcets() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const [selected, setSelected] = useState()
  return (
    <div className="flex flex-row justify-between w-full h-[72vh] ">
      <div className="grid grid-cols-3 gap-y-4 gap-x-5 pt-3 pl-2 overflow-y-hidden overflow-x-hidden hover:overflow-y-auto ">
        {number.map((number) => (
          <div onClick={
            () => {
              setSelected(number)
            }
          }>
            <SmallTicket number={number} />
          </div>
        ))}
      </div>
      <div className='flex justify-center items-center mr-[30vh]'>
        <SmallTicketDetails number={selected} link={true} />
      </div>
    </div>
  )
}
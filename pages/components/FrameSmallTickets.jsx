import Image from 'next/image'
import SmallTicket from './SmallTicket'
import { useState } from 'react'
import SmallTicketDetails from './SmallTicketsDetails'
export default function FrameSmallTikcets() {
  const [number, setNumber] = useState([1, 2, 3, 4 , 5, 6, 7, 8 ,9 ])
  const [selected, setSelected] = useState()
  return (
    <div className="flex flex-row justify-between w-full h-[48vh] ">
      <div className='flex flex-row w-full justify-center '>
        <div className="w-fit grid grid-cols-3 gap-y-4 gap-x-5 pt-3 h-[48vh] px-5 overflow-y-auto overflow-x-hidden no-scrollbar ">
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
      </div>
      <div className='flex pt-3'>
        <SmallTicketDetails number={selected} link={true} />
      </div>
    </div>
  )
}
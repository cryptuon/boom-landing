import Image from 'next/image'
import SmallTicket from './SmallTicket'
import { useState } from 'react'
import SmallTicketDetails from './SmallTicketsDetails'
export default function FrameSmallTikcets() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9])
  const [selected, setSelected] = useState()
  const [showSelected, setShowSelected] = useState(false)
  return (
    <div className=" flex flex-row justify-between w-full h-[48vh] ">
      <div className='flex flex-col  w-full justify-center items-center '>
        <div className="
                    w-fit 
                    grid grid-cols-2 md:grid-cols-3
                    gap-y-4 gap-x-5 
                    pt-3 h-[48vh] 
                    px-5 
                    overflow-y-auto overflow-x-hidden no-scrollbar ">
          {number.map((number) => (
            <div onClick={
              () => {
                setSelected(number)
                setShowSelected(true)
              }
            }>
              <SmallTicket number={number} />
            </div>
          ))}
        </div>
      </div>
      <div className='flex pt-3 absolute -mx-[10vw] md:mx-0 md:w-fit w-full justify-center items-center md:items-start md:justify-start md:relative '>
        <SmallTicketDetails number={selected} link={true} showSelected={showSelected} setShowSelected={setShowSelected} />
      </div>
    </div>
  )
}
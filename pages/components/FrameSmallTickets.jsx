import Image from 'next/image'
import SmallTicket from './SmallTicket'
import { useState } from 'react'
export default function FrameSmallTikcets() {
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  return (
    <div className="flex overflow-x-auto">
      <div className="grid grid-cols-3 gap-4">
        {number.map((number) => (
          <SmallTicket number={number} />
        ))}
      </div>
    </div>
  )
}
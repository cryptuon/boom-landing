import Sidebar from '../Sidebar'
import FrameSmallTikcets from '../FrameSmallTickets'
import { Link, Element } from 'react-scroll'
export default function CouponSection() {
  return (
    <Element
      className="flex flex-1 items-center justify-center flex-row px-[10vw] h-screen"
      name="Coupons"
    >
      <div className='flex flex-row  w-full'>
        <div className=' pt-3'>
          <Sidebar />
        </div>
        <div className="flex w-full flex-1  ">
          <FrameSmallTikcets />
        </div>
      </div>
    </Element>
  )
}

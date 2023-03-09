import Sidebar from '../Sidebar'
import FrameSmallTikcets from '../FrameSmallTickets'
import { Link, Element } from 'react-scroll'
export default function CouponSection() {
  return (
    <Element
      className="my-36 md:my-0 flex flex-1 items-center justify-center flex-row px-[10vw] h-fit  md:h-screen"
      name="Coupons"
    >
      <div className="flex flex-col md:flex-row w-full">
        <div className="pt-3">
          <Sidebar />
        </div>
        <div className="flex w-full flex-1  ">
          <FrameSmallTikcets />
        </div>
      </div>
    </Element>
  )
}

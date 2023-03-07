import Sidebar from "../Sidebar"
import FrameSmallTikcets from "../FrameSmallTickets"
import { Link, Element } from 'react-scroll';
export default function CouponSection() {
    return (
        <Element className="flex flex-1 flex-row ml-40 mt-20 pt-20 pb-10 gap-10 h-screen" name="Coupons">
          <div>
            <Sidebar />
          </div>
          <div className="flex  w-full">
            <FrameSmallTikcets />
          </div>
        </Element>
    )
}
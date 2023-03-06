import Sidebar from "../Sidebar"
import FrameSmallTikcets from "../FrameSmallTickets"
export default function CouponSection() {
    return (
        <div className="flex flex-1 flex-row ml-40 mt-20  pb-10 gap-10 h-screen ">
          <div>
            <Sidebar />
          </div>
          <div className="flex  w-full">
            <FrameSmallTikcets />
          </div>
        </div>
    )
}
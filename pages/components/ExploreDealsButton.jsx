import { Link, Element } from 'react-scroll';
import Image from "next/image"
export default function ExploreDealsButton() {
    return (
        <Link to="Coupons" smooth={true} duration={500} className="flex h-[10vh] w-[19vh] relative">
            <Image src="/ExploreLatestDeals.svg" fill />
        </Link>)
}
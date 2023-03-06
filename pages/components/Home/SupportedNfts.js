import FrameImage from "../FrameImage"
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
export default function SupportedNfts() {
    return (
        <div className="flex flex-1 flex-row mt-10 justify-evenly items-center h-screen">
          <div className="flex flex-col">
            <p
              className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight `}
            >
              nft’s
              <br />
              THAT
              <br />
              support
              <br />
              US
            </p>
          </div>
          <FrameImage />
        </div>
    )
}
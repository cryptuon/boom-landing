import Image from 'next/image'
import FrameTickets from '../FrameTickets'
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
import { useAccount } from 'wagmi'
import UserNfts from '../UserNfts'
export default function LandingSection() {
  const { address, isConnected } = useAccount('')

  return (
    <div className="flex flex-1 flex-row justify-end h-screen">
      {isConnected ? (
        <div className="flex flex-1 flex-col pl-[10vw] pt-24">
          <p
            className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight `}
          >
            Hey
          </p>
          <div className="flex w-fit items-center justify-center">
            <input
              className={`${luckiestGuy.variable} font-display border-none text-[4.5vw] caret-[#9F9F9F] text-[#9F9F9F] animate-blinkCaret`}
              autoFocus
              size="10"
              placeholder={`${address.slice(0, 9)}...`}
            />
          </div>
          {/* <p
            className={`${luckiestGuy.variable} font-display text-[4.5vw] text-[#9F9F9F] leading-tight truncate`}
          >
            {address.slice(0, 9)}...
          </p> */}
          <UserNfts walletAddress={address} />
        </div>
      ) : (
        <div className="flex flex-1 flex-col items-center">
          <p
            className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight pt-24`}
          >
            Get
            <br />
            Amazing
            <br />
            offers
            <br />
            NOW
          </p>
          <div className="h-[4vw] w-[4vw] relative">
            <Image
              src="./bubbles.svg"
              fill
              className="z-[10] translate-x-20 -translate-y-5 "
            />
          </div>
        </div>
      )}
      <FrameTickets />
    </div>
  )
}

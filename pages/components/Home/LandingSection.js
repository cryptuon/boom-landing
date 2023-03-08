import Image from 'next/image'
import FrameTickets from '../FrameTickets'
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
import WalletButton from '../WalletConnectButton'
import { useAccount } from 'wagmi'
import UserNfts from '../UserNfts'
import ExploreDealsButton from '../ExploreDealsButton'
export default function LandingSection() {
  const { address, isConnected } = useAccount('')

  return (
    <div className="flex flex-col h-fit items-center md:flex-row md:items-start justify-between md:h-screen">
      <div className="order-2 md:order-1 md:pl-48">
        {isConnected ? (
          <div className="flex flex-1 flex-col items-center md:items-start h-fit w-fit ">
            <p
              className={`${luckiestGuy.variable} font-display text-4xl xl:text-8xl xl:leading-tight pt-24`}
            >
              Hey
            </p>
            <div className=" flex items-center md:items-start md:justify-start justify-center">
              <input
                className={`${luckiestGuy.variable} border-black text-center md:text-start font-display border-none text-4xl xl:text-8xl xl:leading-tight caret-unselected-gray placeholder:text-unselected-gray`}
                size="10"
                placeholder={`${address.slice(0, 9)}...`}
              />
            </div>
            <UserNfts walletAddress={address} />
          </div>
        ) : (
          <div className="flex flex-1 flex-col text-center items-center md:text-start h-fit md:pr-[11.6vw]">
            <p
              className={`${luckiestGuy.variable} font-display text-4xl xl:text-8xl xl:leading-tight pt-24`}
            >
              Get <br className="hidden md:block" />
              Amazing
              <br />
              offers <br className="hidden md:block" />
              NOW
            </p>
            <div className="flex flex-col items-center  gap-5 mt-5 md:m-0">
              <div className="md:hidden">
                <ExploreDealsButton />
              </div>
              <div className="h-[8vmax] w-[8vmax] relative ">
                <Image
                  src="./bubbles.svg"
                  fill
                  className="z-[10] md:translate-x-20 md:-translate-y-5 "
                />
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="order-1 md:order-1 h-fit pt-12 w-full">
        <FrameTickets />
      </div>
    </div>
  )
}

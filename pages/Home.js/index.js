import Image from 'next/image'
import Head from 'next/head'
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useEnsName,
} from 'wagmi'

import Ticket from '../components/Ticket'
import SmallTicket from '../components/SmallTicket'
import Sidebar from '../components/Sidebar'
import FrameImage from '../components/FrameImage'
import FrameTikcets from '../components/FrameTickets'
import FrameSmallTikcets from '../components/FrameSmallTickets'

export default function Home() {
  const { address, isConnected } = useAccount('')
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden caret-transparent">
        <div className="flex flex-1 flex-row justify-end h-screen">
          <div className="flex flex-1 flex-col pl-40 pt-24">
            <p
              className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight `}
            >
              Hey
            </p>
            <p
              className={`${luckiestGuy.variable} font-display text-[4.5vw] text-[#9F9F9F] leading-tight truncate`}
            >
              {address.slice(0, 9)}...
            </p>
          </div>
          <FrameTikcets />
        </div>
        <div className="flex flex-1 flex-row mt-10 justify-evenly items-center h-screen">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row justify-end items-end ">
              <SmallTicket />
              <div className="relative h-[13vw] w-[13vw]">
                <Image src="./free.svg" fill className="ml-5 justify-end" />
              </div>
            </div>
            <Ticket />
          </div>
          <div>
            <p
              className={`${luckiestGuy.variable} font-display text-[4.5vw] leading-tight `}
            >
              How to <br />
              Get
              <br />
              Coupons
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-row ml-40 mt-20  pb-10 gap-10 h-screen ">
          <div>
            <Sidebar />
          </div>
          <div className="flex  w-full">
            <FrameSmallTikcets />
          </div>
        </div>
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
      </div>
    </>
  )
}
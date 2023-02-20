import Image from 'next/image'
import Head from 'next/head'
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
import Ticket from './components/Ticket'
import SmallTicket from './components//SmallTicket'
import Sidebar from './components/Sidebar'
import FrameImage from './components/FrameImage'
import FrameTikcets from './components/FrameTickets'
import FrameSmallTikcets from './components/FrameSmallTickets'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <div className="flex flex-1 justify-end h-screen ">
          <div className="flex flex-1 flex-col items-center ">
            <p
              className={`${luckiestGuy.variable} font-display text-8xl pt-24`}
            >
              Get
              <br />
              Amazing
              <br />
              offers
              <br />
              NOW
            </p>
            <div>
              <Image
                src="./bubbles.svg"
                width={90}
                height={90}
                className="z-[10] translate-x-20 -translate-y-5"
              />
            </div>
          </div>
          <FrameTikcets />
        </div>
        <div className="flex flex-1 flex-row mt-10 justify-evenly items-center">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-row justify-end items-end ">
              <SmallTicket />
              <Image
                src="./free.svg"
                width={250}
                height={250}
                className="ml-5 justify-end"
              />
            </div>
            <Ticket />
          </div>
          <div>
            <p className={`${luckiestGuy.variable} font-display text-8xl `}>
              How to <br />
              Get
              <br />
              Coupons
            </p>
          </div>
        </div>
        <div className="flex flex-1 flex-row ml-40 mt-20 items-center pb-10 gap-10 ">
          <Sidebar />
          <FrameSmallTikcets />
        </div>
        <div className="flex flex-1 flex-row mt-10 justify-evenly items-center">
          <div className="flex flex-col">
            <p className={`${luckiestGuy.variable} font-display text-8xl `}>
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

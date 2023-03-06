import Head from 'next/head'
import SupportedNfts from './components/Home/SupportedNfts'
import CouponSection from './components/Home/CouponSection'
import HowToCoupons from './components/Home/HowToCoupons'
import LandingSection from './components/Home/LandingSection'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="overflow-x-hidden caret-transparent">
        <LandingSection />
        <HowToCoupons />
        <CouponSection />
        <SupportedNfts />
      </div>
    </>
  )
}

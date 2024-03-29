import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import Landing from './components/landing'
import Section from './components/Section'
import SectionD from './components/sectionD'

import Summary from './components/summary'
import Astro from './components/astro'
import Footer from './components/Footer'
export default function Home() {
  return (
    <>
      <Head>
        <title>Boom</title>
        <meta name="description" content="Easiest way to go web3!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="logo" content="/favicon.png" />
        <link rel="icon" type="image/png" href="https://boom.fan/favicon.png" />
      </Head>
      <main className="snap-y overflow-y-scroll snap-mandatory scroll-smooth overflow-x-hidden h-screen w-screen ">
        <Landing />
        <Section
        //
          title="Leverage the power of NFTs"
          description="Collaborate with the existing NFT collections using Boom and target their audience for your brand growth and sales."
          section="sectionA"
          order1="md:order-1 order-2"
          order2="md:order-2 order-1"
        />
        <Section
          title="Find out your target audience in web3"
          description="Using our analytics tools, find out the users who are showing interest in your product and want to avail your services."
          section="sectionB"
          order1="order-2"
          order2="order-1"
        />
        <Section
          title="Create a new sales channel for your brand"
          description="Create a new sales channel for your brand from the web3 space. Using Boom, create acquisition campaigns and launch them in minutes."
          section="sectionC"
          order1="md:order-1 order-2"
          order2="md:order-2 order-1"
        />
        <SectionD />
        <Summary />
        <Astro />
        <Footer />
      </main>
    </>
  )
}

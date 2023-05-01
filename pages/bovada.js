import Head from 'next/head';
import { useEffect, useState } from 'react';
import WalletButton from './components/WalletConnectButton';
import { configureChains, createClient, WagmiConfig, useAccount, useConnect, useEnsName } from 'wagmi'
import SmallTicketDetails from './components/SmallTicketsDetails';
import NavBar from './components/NavBar'

function Bovada() {
  const { address, isConnected } = useAccount('')

  const redirectToBovada = async () => {
    await increaseCount('bovada');
    window.location.href = 'https://bit.ly/BoomBV';
  }

  return (
    <>
        <Head>
            <title>Boom</title>
            <meta name="description" content="Easiest way to go web3!" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="logo" content="/favicon.png" />
            <link rel="icon" type="image/png" href="https://boom.fan/favicon.png" />

            <meta name="twitter:card" content="summary" />
            <meta property="twitter:url" content="https://boom.fan" />
            <meta property="twitter:title" content="Boom" />
            <meta name="twitter:description" content="Easiest way to go web3!" />
            <meta name="twitter:site" content="https://boom.fan" />
            <meta name="twitter:creator" content="@BoomRewards" />
        </Head>
            <div className='h-full w-full flex items-center justify-center'>
            {
              isConnected ? (
                <div className="text-center">
                  <button className="btn btn-primary" onClick={redirectToBovada}>Click here if you are not redirected</button>
                  <SmallTicketDetails
                    address={address}
                    details={{
                      OfferHeadline: 'Bovada',
                      OfferDescription: 'Bovada will match the first deposit of $25 or more made by you, up to a maximum of $1000! Click the button below to avail the offer!',
                      OfferImage: 'https://www.bovada.lv/content/images/logo_main.svg',
                    }}
                    link={ 'https://bit.ly/BoomBV'}
                    showSelected={true}
                  />
                </div>
              ) : (
                <div>
                    <NavBar />
                  <WalletButton />
                </div>
              )  
            }
          </div>
    </>
  );
}

async function increaseCount(name) {
  const response = await fetch('/api/increaseCount', {
    method: 'POST',
    body: JSON.stringify({ name: name }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export default Bovada;

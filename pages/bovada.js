import Head from 'next/head';
import { useEffect, useState } from 'react';
import WalletButton from './components/WalletConnectButton';
import { configureChains, createClient, WagmiConfig, useAccount, useConnect, useEnsName } from 'wagmi'
import SmallTicketDetails from './components/SmallTicketsDetails';
function Bovada() {
  const { address, isConnected } = useAccount('')

  const redirectToBovada = async () => {
    // await increaseCount('bovada');
    window.location.href = 'https://bit.ly/BoomBV';
  }

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     redirectToBovada();
  //   }, 1000);
  //   return () => clearTimeout(timer);
  // }, []);

  return (
    <>
      <Head>
        {/* <meta http-equiv="refresh" content="1; url= https://bit.ly/BoomBV" /> */}
      </Head>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center">Redirecting to Bovada...</h1>
            {
              isConnected ? (
                <div className="text-center">
                  <button className="btn btn-primary" onClick={redirectToBovada}>Click here if you are not redirected</button>
                  <SmallTicketDetails
                    address={address}
                    details={{
                      OfferHeadline: 'Bovada',
                      OfferDescription: 'Bovada is a trusted online gambling site offering sports betting, poker, casino games and betting on horse racing. Join today to claim your welcome bonuses!',
                      OfferImage: 'https://www.bovada.lv/wp-content/uploads/2021/03/bovada-logo-og.png',
                    }}
                    link={ 'https://bit.ly/BoomBV'}
                    showSelected={true}

                  />
                </div>
              ) : (
                <div className="text-center">
                  <WalletButton />
                </div>
              )
                 
            }
          </div>
        </div>
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

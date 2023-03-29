'use client'
import Image from 'next/image'
import Head from 'next/head'
import { useState } from 'react'

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useEnsName,
} from 'wagmi'

import { useWeb3Modal } from '@web3modal/react'
import Router from 'next/router'
async function getNFTs() {
  const baseURL =
    'https://eth-mainnet.g.alchemy.com/v2/_pI4M8h8oFOeo2dEpkvZvQK41y-jrRKc'
  const address = 'elanhalpern.eth'
  const url = `${baseURL}/getNFTs/?owner=${address}`

  var requestOptions = {
    method: 'get',
    redirect: 'follow',
  }

  try {
    const response = await fetch(url, requestOptions)
    const result = await response.json()
    const numNfts = result['totalCount']
    const nftList = result['ownedNfts']

    let i = 1

    for (let nft of nftList) {
      i++
    }
  } catch (err) {
    console.log(err)
  }
}

export default function Wallet({walletAddress}) {
  const { address, isConnected } = useAccount('')
  // const [address , setAddress] = useState('0x7A02A9b9A7Ce979cFEB7456D40B6c8b3C3d6E98B')
  // const [isConnected , setIsConnected] = useState(true)
  const [email, setEmail] = useState('')

  return (
    <>
      <Head>
        <title>Boom</title>
        <meta name="description" content="Generated by boom" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="flex flex-1 flex-row justify-evenly ">
        <div className="flex flex-col flex-1 pt-24 pl-36">
          <div>
            <p
              className={`font-display text-8xl pt-24`}
            >
              Wallet
              <br />
              Connected
            </p>
          </div>
          <div className="flex flex-col mt-5 font-semibold">
            <p className="text-lg">Wallet address</p>
            <div className="flex flex-row gap-x-3 ">
              <p className="border-2 border-black rounded-lg w-24 text-center">
                {address?.slice(0, 6)}
              </p>
              <p className="border-2 border-black rounded-lg w-24 text-center">
                {address?.slice(6, 12)}
              </p>
              <p className="border-2 border-black rounded-lg w-24 text-center">
                {address?.slice(12, 18)}
              </p>
              <p className="border-2 border-black rounded-lg w-24 text-center">
                {address?.slice(18, 24)}
              </p>
            </div>
          </div>
          <div className="flex flex-col mt-5 pt-5 font-semibold border-t-2">
            <p className="text-lg">
              To get the best coupons the faster than others, <br />
              let us mail you on your email address.
            </p>
            <div className="flex flex-col mt-5 font-semibold">
              <p className="text-lg">Email address</p>
              <div className="flex flex-row gap-x-3 ">
                <input className="border-2 border-black rounded-lg" 
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button className="border-2 border-black rounded-lg w-24 text-center hover:bg-boom-yellow"
                  onClick={() => {
                    addEmailToWallet({email, address}).then((data) => {
                      Router.push('/Verify?email='+email+'&address='+address, '/Verify',)
                    })

                  }}
                >
                  Verify
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-center items-center w-1/2 h-screen relative">
          <Image
            src="/Wallet/Illustration.svg"
            className="w-11/12 h-screen"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  )
}


async function addEmailToWallet({address,email}){
  let text = 'Your OTP is: '
  let response = await fetch('/api/sendOTPtoEmail', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, text}),
  })
  let data = await response.json()
  alert(data.message)
  response = await fetch('/api/addEmailToWallet', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({address,email}),
  })
  data = await response.json()
  console.log(data)
  return data
}
import '@/styles/globals.css'
import { useRouter } from 'next/router'
import NavBar from './components/NavBar'

import { useEffect, useState } from 'react'

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from '@web3modal/ethereum'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Web3Modal } from '@web3modal/react'

const chains = [arbitrum, mainnet, polygon]
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: 'bd46fa8128fb1ebc5d7b0b8b6ea44682' }),
])

import { configureChains, createClient, WagmiConfig, useAccount } from 'wagmi'

const wagmiClient = createClient({
  autoConnect: false,
  connectors: modalConnectors({
    projectId: 'bd46fa8128fb1ebc5d7b0b8b6ea44682',
    version: '1', // or "2"
    appName: 'web3Modal',
    chains,
  }),
  provider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'
  const isWallet = pathname === '/Wallet'
  const isVerify = pathname === '/Verify'
  const isBrand = pathname === '/Brand'

  const { address, isConnected } = useAccount('')
  // const [address, setAddress] = useState(
  //   '0x7A02A9b9A7Ce979cFEB7456D40B6c8b3C3d6E98B',
  // )
  // const [isConnected, setIsConnected] = useState(true)
  const [user, setUser] = useState(null)
  const [userNFTcollection, setUserNFTcollection] = useState(null)
  const [scale, setScale] = useState(0)
  //useEffect to set name on server /addName User change
  useEffect(() => {
    const addName = async () => {
      let res = await fetch('/api/addName', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: user, walletAddress: address }),
      })
      let data = await res.json()
      // do something with the data if needed
    }
    if (user) {
      addName()
    }
  }, [user, address])

  if (isWallet || isVerify || isBrand) {
    return <Component {...pageProps} />
  }
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <NavBar user={user} setScale={setScale} scale={scale} />
        <Component
          {...pageProps}
          user={user}
          setUser={setUser}
          setUserNFTcollection={setUserNFTcollection}
          userNFTcollection={userNFTcollection}
          setScale={setScale}
        />
        <Web3Modal
          projectId="bd46fa8128fb1ebc5d7b0b8b6ea44682"
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </>
  )
}

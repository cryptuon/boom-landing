import '@/styles/globals.css'
import { useRouter } from 'next/router'
import NavBar from './components/NavBar'

import { useEffect, useState } from 'react'

import { EthereumClient, modalConnectors, walletConnectProvider, } from '@web3modal/ethereum'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Web3Modal } from '@web3modal/react'


const chains = [arbitrum, mainnet, polygon]
const { provider } = configureChains(chains, [
  walletConnectProvider({ projectId: 'bd46fa8128fb1ebc5d7b0b8b6ea44682' }),
])

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
} from 'wagmi'

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

  const { address, isConnected } = useAccount('')
  const [user, setUser] = useState(null)
  const [userNFTcollection, setUserNFTcollection] = useState(null)

  // useEffect(() => {
  //   if (isConnected) {
  //     setUser(address)
  //   }
  // }, [isConnected])

  if (isWallet || isVerify) {
    return <Component {...pageProps} />
  }
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <NavBar user={user}/>
        <Component {...pageProps} setUser={setUser} setUserNFTcollection={setUserNFTcollection} userNFTcollection={userNFTcollection}/>
        <Web3Modal
          projectId="bd46fa8128fb1ebc5d7b0b8b6ea44682"
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </>
  )
}

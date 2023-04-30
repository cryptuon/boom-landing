import '@/styles/globals.css'
import Script from 'next/script'

import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from '@web3modal/ethereum'
import { arbitrum, mainnet, polygon } from 'wagmi/chains'
import { Web3Modal } from '@web3modal/react'

const chains = [arbitrum, mainnet, polygon]
const { provider } = configureChains(chains, [
  w3mProvider({ projectId: 'bd46fa8128fb1ebc5d7b0b8b6ea44682' }),
])

import { configureChains, createClient, WagmiConfig, useAccount } from 'wagmi'

const wagmiClient = createClient({
  autoConnect: false,
  connectors: w3mConnectors({
    projectId: 'bd46fa8128fb1ebc5d7b0b8b6ea44682',
    version: '1', // or "2"
    appName: 'web3Modal',
    chains,
  }),
  provider,
})

const ethereumClient = new EthereumClient(wagmiClient, chains)

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig client={wagmiClient}>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-4JHY83QRWQ"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){window.dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-4JHY83QRWQ');
        `}
        </Script>
        <Component {...pageProps} />
        <Web3Modal
          projectId="bd46fa8128fb1ebc5d7b0b8b6ea44682"
          ethereumClient={ethereumClient}
        />
      </WagmiConfig>
    </>
  )
}

// 'use client'
import Image from 'next/image'

import { Web3Button, useWeb3Modal } from '@web3modal/react'

import { InjectedConnector } from 'wagmi/connectors/injected'

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useEnsName,
} from 'wagmi'

export default function WalletButton() {
  const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
  // const { address, isConnected } = useAccount()
  // const { data: ensName } = useEnsName({ address })
  // const { connect } = useConnect({
  //   connector: new InjectedConnector(),
  // })
  // if (isConnected) return <div>Connected to {ensName ?? address}</div>
  return (
    <button
      onClick={() => open()}
      className="flex h-[6vh] w-[11.5vw] relative"
    >
      <Image src="/ConnectWallet.svg" fill />
    </button>
  )
}

'use client'
import Image from 'next/image'

import { Web3Modal } from '@web3modal/react'
import { Web3Button, useWeb3Modal } from '@web3modal/react'
import { InjectedConnector } from 'wagmi/connectors/injected'
import { useEffect } from 'react'

import {
  configureChains,
  createClient,
  WagmiConfig,
  useAccount,
  useConnect,
  useEnsName,
} from 'wagmi'

export default function WalletButton() {
  const { address, isConnected } = useAccount()
  // const { data: ensName } = useEnsName({ address })
  const { connect } = useConnect({
    connector: new InjectedConnector(),
  })
  if (isConnected) return <div>Connected to {ensName ?? address}</div>
  return (
    <button
      onClick={() => connect()}
      className="flex h-[5vh] w-[19vh] relative"
        >
      <Image src="/ConnectWallet.svg" fill />
    </button>
  )
}

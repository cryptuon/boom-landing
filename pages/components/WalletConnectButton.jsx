// 'use client'
import Image from 'next/image'

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
  // const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
  const { address, isConnected } = useAccount()
  const { data: ensName } = useEnsName({ address })
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

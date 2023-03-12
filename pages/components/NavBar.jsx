import Image from 'next/image'
import WalletButton from './WalletConnectButton'
import { useState } from 'react'
import { configureChains, createClient, WagmiConfig, useAccount, useConnect, useEnsName } from 'wagmi'

export default function NavBar({ user }) {
    // const { address, isConnected } = useAccount('')
    const [address , setAddress] = useState('0x7A02A9b9A7Ce979cFEB7456D40B6c8b3C3d6E98B')
    const [isConnected , setIsConnected] = useState(true)
    return (

        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-1 justify-between ">
                    <div className='relative h-[8vh] md:w-[8.5vw] w-[13vh]'>
                        <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                    </div>
                    {
                        isConnected ? (
                            <div className='flex flex-row items-center text-sm md:text-xl font-[500] gap-x-[1vw] pr-10'>
                                <div className='relative h-[5vh] w-[5vh] '>
                                    <Image src="/Profile.png" fill />
                                </div>
                                <p>{
                                    user ? (user == address ?
                                        address.slice(0, 6) + '...' + address.slice(-4) : user  
                                    ) : address.slice(0, 6) + '...' + address.slice(-4)
                                }</p>
                            </div>) : <WalletButton />
                    }
                </div>

            </nav>
        </header >


    );
}

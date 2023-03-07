import '@/styles/globals.css'
import { useRouter } from 'next/router'
import NavBar from './components/NavBar'

import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'
  const isWallet = pathname === '/Wallet'

  if (isWallet) {
    return <Component {...pageProps} />
  }
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
    </>
  )
}

import '@/styles/globals.css'
import { useRouter } from 'next/router'
import NavBar from './components/NavBar'
export default function App({ Component, pageProps }) {
  const router = useRouter()
  const { pathname } = router
  const isHome = pathname === '/'
  const isWallet = pathname === '/wallet'

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

import Image from 'next/image'
export default function Astro() {
  return (
    <div className="snap-start w-full h-[100vw] md:h-screen flex flex-col  bg-cover bg-no-repeat bg-center bg-[url('/astro.svg')]" />
  )
}

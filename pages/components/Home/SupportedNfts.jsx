import FrameImage from '../FrameImage'
export default function SupportedNfts() {
  return (
    <div className="flex flex-1 flex-col md:flex-row mt-36 md:mt-0 md:items-center px-[10vw] md:pl-[12vw] justify-between items-start h-fit md:h-screen ">
      <div className="flex flex-col  order-2 md:order-1 py-20 md:py-0 ">
        <p
          className={`font-display  text-4xl xl:text-8xl xl:leading-tight `}
        >
          nft’s {' '}
          <br className="hidden md:block" />
          THAT
          <br />
          support {' '}
          <br className="hidden md:block" />
          US
        </p>
      </div>
      <div className='order-1 md:w-fit w-full  md:order-2'>
        <FrameImage />
      </div>
    </div>
  )
}

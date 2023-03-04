import Image from 'next/image'
export default function FrameImage() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (1).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (2).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <div className="relative h-[6vw] w-[3vw]">
                </div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (3).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (4).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (5).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (6).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (7).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (8).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <div className="relative h-[6vw] w-[3vw]">
                </div>
                <div className="bg-[url('/icon_black.png')] relative bg-contain bg-no-repeat h-[6vw] w-[6vw]">
                    <Image src='/icon (9).png' fill className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
        </div>
    )
}
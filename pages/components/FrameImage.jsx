import Image from 'next/image'
export default function FrameImage() {
    return (
        <div className='flex flex-col'>
            <div className='flex flex-row'>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (1).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (2).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <Image src='/icon_half_white.png' width={50} height={100} />
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (3).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (4).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (5).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (6).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (7).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (8).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
            <div className='flex flex-row'>
                <Image src='/icon_half_white.png' width={50} height={100} />
                <div className="bg-[url('/icon_black.png')] bg-contain bg-no-repeat">
                    <Image src='/icon (9).png' width={100} height={100} className='animate-wiggleOut hover:animate-wiggle' /></div>
            </div>
        </div>
    )
}
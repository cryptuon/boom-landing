import Image from 'next/image'
import Link from 'next/link';

export default function NavBar({ user, scale, setScale }) {
    return (

        <header>
            <Link href={"/"}>
                <nav className="flex items-center justify-between flex-wrap p-6 400">
                    <div className="flex items-center flex-1 justify-between ">
                        <div className='relative h-[8vh] md:w-[8.5vw] w-[13vh]'>
                            <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                        </div>
                    </div>
                </nav>
            </Link>
        </header >


    );
}
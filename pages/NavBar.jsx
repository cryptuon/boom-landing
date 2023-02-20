import Image from 'next/image'
// import logo from '/logo.svg'
// import filter from '/filter.svg'

export default function NavBar() {
    return (
        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className='flex pr-10 items-center'>
                    <Image src="/logo.svg" alt="logo" width={163} height={70} className="mr-12" />
                    <form className="flex items-center">
                        <div className="rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] ">
                            <input type="text" placeholder="Eg. Jaguar" className="placeholder:text-black font-medium  border-2 border-black h-10 px-5 pr-16 rounded-lg rounded-r-none text-sm focus:outline-none " />
                            <button type="submit" className="font-medium h-10 px-5 rounded-lg rounded-l-none border-2 border-l-0 border-black">
                                Search
                            </button>
                        </div>
                    </form>
                    <div className='ml-10 flex'>
                        <p className="text-black font-medium mr-1">
                            Filter
                        </p>
                        <Image src='/filter.svg' alt="filter" width={15} height={15} />
                    </div>
                </div>
            </nav>
        </header >
    );
}
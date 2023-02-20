'use client';
import { useState } from 'react'

export default function Sidebar() {
    const [value, setValue] = useState("b");
    return (
        <div className='flex flex-col border-2 border-black py-5 gap-y-5 rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] w-2">'>

            <span value="a" className="font-medium px-5 " >The Bored Apes</span>
            <span value="a" className="font-medium px-5 border-2 border-black rounded-lg -translate-x-5 py-3 pl-10  bg-[#FFEB33] z-1 " >Fall guys</span>
            <span value="a" className="font-medium px-5" >Azuki</span>
            <span value="a" className="font-medium px-5" >CryptoPunks</span>
            <span value="a" className="font-medium px-5" >Mutant Ape</span>
            <span value="a" className="font-medium px-5" >Yacht Club</span>
            <span value="a" className="font-medium px-5" >Flyfish Club</span>

        </div>
    )
}
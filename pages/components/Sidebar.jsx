'use client';
import { useState } from 'react'
import SidebarComponents from './SidebarComponents.jsx'
export default function Sidebar() {
    const [value, setValue] = useState(
            ["The Bored Apes",
            "Fall guys",
            "Azuki",
            "CryptoPunks",
            "Mutant Ape",
            "Yacht Club",
            "Flyfish Club",
            "Bore",
            "Bored Ape Yacht Club",
            ]);
    const [selected, setSelected] = useState("The Bored Apes");

    return (
        <div className='flex flex-col border-2 border-black py-5 gap-y-5 rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] w-fit h-[30vmax] overflow-x-visible no-scrollbar'>
            <div className="rounded-lg mx-2">
                <input type="text" placeholder="Eg. Jaguar" className="flex placeholder:text-black text-[1.7vh] font-[500]  border-2 border-black h-[5vh] w-[20vh] px-5 rounded-lg  focus:outline-none " />
            </div>
            <div className='flex flex-col gap-y-5 overflow-y-hidden hover:overflow-y-auto '>
                {value.map((name) => {
                    return (
                        <div className='flex min-w-min' onClick={() => setSelected(name)}>
                            <SidebarComponents name={name} selected={selected === name} />
                        </div>
                    )
                }
                )}
            </div>
        </div>
    )
}

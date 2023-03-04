'use client';
import { useState } from 'react'
import SidebarComponents from './SidebarComponents.jsx'
export default function Sidebar() {
    const [value, setValue] = useState(["The Bored Apes", "Fall guys", "Azuki", "CryptoPunks", "Mutant Ape", "Yacht Club", "Flyfish Club"]);
    const [selected, setSelected] = useState("The Bored Apes");

    return (

        <div className='flex flex-col border-2 border-black py-5 gap-y-5 rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)]'>
            <div className="rounded-lg mx-2">
            {/* <div className="rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] mx-2"> */}
                <input type="text" placeholder="Eg. Jaguar" className="placeholder:text-black font-medium border-2 border-black h-10 px-5 rounded-lg text-sm focus:outline-none " />
            </div>
            {value.map((name) => {
                return (
                    <div className='flex min-w-min' onClick={() => setSelected(name)}>
                        <SidebarComponents name={name} selected={selected === name} />
                    </div>
                )
            }
            )}
        </div>
    )
}

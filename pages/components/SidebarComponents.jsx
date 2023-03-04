import { useState } from 'react'

export default function SidebarComponents({name, selected}) {
    if (selected) {
        return (
            <span value={name} className="font-medium px-5 border-2 border-black rounded-lg -translate-x-5 py-3 pl-10  bg-[#FFEB33] z-1 min-w-[20vh] max-w-[20vh]" >{name}</span>
        )
    } else {
        return (
            <span value={name} className="font-medium px-5 min-w-[20vh] max-w-[20vh]" >{name}</span>
        )
    }
} 
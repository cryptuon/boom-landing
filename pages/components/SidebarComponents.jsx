import { useState } from 'react'

export default function SidebarComponents({ name, selected }) {
    if (selected) {
        return (
            <p value={name} className="text-sm lg:text-base font-[500] px-[2vh] border-2 border-black rounded-lg -translate-x-5 py-[1vh] pl-10 bg-boom-yellow z-1 min-w-[10vh] max-w-[20vh]" >{name}</p>
        )
    } else {
        return (
            <p value={name} className="text-sm lg:text-base font-[500] px-[2vh] min-w-[10vh] max-w-[20vh]" >{name}</p>
        )
    }
} 
'use client';
import { useEffect, useState } from 'react'
import SidebarComponents from './SidebarComponents.jsx'
import { useAccount } from 'wagmi';
export default function Sidebar({ setOffers, userNFTcollection }) {

    const { isConnected } = useAccount('')

    useEffect(() => {
        console.log("useEffect")
        async function fetchNFTcollections() {
            const data = await getSideBarData({ userNFTcollection });
            setValue(data);
            if (data.length > 0) {
                setSelected(data[0].Name);
                setOffers(data[0].Offers);
            }
        }
        fetchNFTcollections()


    }, [isConnected, userNFTcollection])


    const [value, setValue] = useState([{ _id: null, Name: 'Loading...', Offers: [] }]);
    const [selected, setSelected] = useState(null);

    return (
        <>
            <div className='hidden md:flex flex-col border-2 border-black py-5 gap-y-5 rounded-lg shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] w-[12vw] h-[30vmax] overflow-x-visible no-scrollbar'>
                <div className=" rounded-lg mx-2">
                    <input type="text" placeholder="Search" className="flex placeholder:text-unselected-gray text-[1.7vh] font-[500]  border-2 border-black h-[5vh] w-[10vw] px-5 rounded-lg  focus:outline-none " />
                </div>
                <div className='flex flex-col gap-y-5 overflow-y-hidden hover:overflow-y-auto'>
                    {value.map((name) => {
                        let offers = name.Offers;
                        name = name.Name;

                        return (
                            <div className='flex min-w-min' onClick={() => {
                                setSelected(name)
                                setOffers(offers)
                            }}>
                                <SidebarComponents name={name} selected={selected === name} />
                            </div>
                        )
                    }
                    )}
                </div>


            </div>
            <select
                // selected={selected}
                className="md:hidden w-full bg-white border-2 border-black shadow-[5px_7px_0px_2px_rgba(0,0,0,1)] rounded-md py-2 px-3 mb-10 font-[500] sm:text-sm">
                {value.map((name) => {
                    let offers = name.Offers;
                    name = name.Name;
                    return (
                        <option value={name}>{name}</option>
                    )
                })}
            </select>
        </>

    )
}

async function getSideBarData({ userNFTcollection }) {
    // alert("sending  data")
    // alert(userNFTcollection)
    if (userNFTcollection) {
        const res1 = await fetch('/api/getForYou',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userNFTs: userNFTcollection }),
        }
        );
        let forYou = await res1.json();
        const res2 = await fetch('/api/getNFTCollections');
        const data = await res2.json();
        let SidebarData = [
            forYou, ...data
        ];
        return SidebarData;
    }
    else{
        const res2 = await fetch('/api/getNFTCollections');
        const data = await res2.json();
        let SidebarData = [
            ...data
        ];
        return SidebarData;
    }
}
'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { Link, Element } from 'react-scroll';
import ExploreDealsButton from "./ExploreDealsButton";
async function getNFTs({ walletAddress }) {
    console.log(walletAddress)
    // const baseURL =
    //   'https://eth-goerli.g.alchemy.com/v2/7-Yea8uVN6TmlCf1IoGyed6T47GpqI4W'
    const address = walletAddress
    const baseURL =
        'https://eth-mainnet.g.alchemy.com/v2/_pI4M8h8oFOeo2dEpkvZvQK41y-jrRKc'
    // const address = 'elanhalpern.eth'
    const url = `${baseURL}/getNFTs/?owner=${address}`

    var requestOptions = {
        method: 'get',
        redirect: 'follow',
    }


    try {
        var arrayOfNFTs = []
        const response = await fetch(url, requestOptions)
        const result = await response.json()
        // console.log(result)
        const numNfts = result['totalCount'];
        const nftList = result['ownedNfts'];
        // console.log(`Total NFTs owned by ${address}: ${numNfts} \n`)

        // console.log(nftList)
        let i = 1;
        // console.log(result)
        for (let nft of nftList) {
            // console.log(`${i}. ${nft['metadata']['name']}`)
            arrayOfNFTs.push(nft['metadata']['image'])
            i++;
        }
        console.log(arrayOfNFTs)
        return arrayOfNFTs
    } catch (err) {
        console.log(err)
    }
}


export default function UserNfts({ walletAddress }) {
    const [nfts, setNfts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchNFTs() {
            const nftsData = await getNFTs({ walletAddress });
            setNfts(nftsData);
            if (nftsData.length > 4) { setNfts(nftsData.slice(0, 4)) }
            setLoading(false);
        }
        fetchNFTs();
    }, [walletAddress]);
    return (
        <div className='mt-10 flex flex-col text-center justify-center items-center md:items-start md:text-start text-xl xl:text-2xl xl:leading-tight font-[700] gap-x-[1vw]'>
            <p>Welcome to the amazing <br className="hidden md:block"/>community of</p>
            <div className="flex flex-row pt-3">
                {
                    nfts.map((nft, index) => {
                        return (
                            <div key={index} className='relative h-[3vw] w-[3vw]'>
                                <Image src={nft} fill />
                            </div>
                        )
                    }
                    )
                }
            </div>
            <div className="mt-5">
                <ExploreDealsButton />
            </div>
        </div>
    )
}
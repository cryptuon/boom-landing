'use client'
import { useEffect, useState } from "react"
import Image from "next/image"
import { Link, Element } from 'react-scroll';
import ExploreDealsButton from "./ExploreDealsButton";

async function getNFTs({ walletAddress, setUserNFTcollection }) {
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
        var arrayOfNFTimages = []
        var arrayOfNFTcontractAddresses = [
            "0xB2D8b42A16f1C45eE5bAA205A197c1C958A8895D", 
            "0x8bD03aBBDdfE8ec4aB52763a6f9c4ebC14b1fF6", 
            "0x5cF889D3e59a921458edACB98655bC7A915f040F"]
        // const response = await fetch(url, requestOptions)
        // const result = await response.json()
        // const numNfts = result['totalCount'];
        // const nftList = result['ownedNfts'];

        // let i = 1;

        // for (let nft of nftList) {
            // arrayOfNFTimages.push(nft['metadata']['image'])
            // arrayOfNFTcontractAddresses.push(nft['contract']['address'])
            // i++;
        // }
        setUserNFTcollection(arrayOfNFTcontractAddresses)

        return arrayOfNFTimages
    } catch (err) {
        console.log(err)
    }
}


export default function UserNfts({ walletAddress, setUserNFTcollection }) {
    const [nfts, setNfts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchNFTs() {
            const nftsData = await getNFTs({ walletAddress, setUserNFTcollection });
            setNfts(nftsData);
            if (nftsData.length > 4) { setNfts(nftsData.slice(0, 4)) }
            setLoading(false);
        }
        fetchNFTs();
    }, [walletAddress]);
    return (
        <div className='mt-10 flex flex-col text-center justify-center items-center md:items-start md:text-start text-xl xl:text-2xl xl:leading-tight font-[700] gap-x-[1vw]'>
            <p>Welcome to the amazing <br className="hidden md:block" />community of</p>
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
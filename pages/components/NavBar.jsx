import Image from 'next/image'
import WalletButton from './WalletConnectButton'

import { configureChains, createClient, WagmiConfig, useAccount, useConnect, useEnsName } from 'wagmi'

export default function NavBar({ user }) {
    const { address, isConnected } = useAccount('')
    return (

        <header>
            <nav className="flex items-center justify-between flex-wrap p-6">
                <div className="flex items-center flex-1 justify-between ">
                    <div className='relative h-[8vh] md:w-[8.5vw] w-[13vh]'>
                        <Image src="/logo.svg" alt="logo" fill className="mr-12" />
                    </div>
                    {
                        isConnected ? (
                            <div className='flex flex-row items-center text-sm md:text-xl font-[500] gap-x-[1vw] pr-10'>
                                <div className='relative h-[5vh] w-[5vh] '>
                                    <Image src="/Profile.png" fill />
                                </div>
                                <p>{
                                    user ? (user == address ?
                                        address.slice(0, 6) + '...' + address.slice(-4) : user  
                                    ) : address.slice(0, 6) + '...' + address.slice(-4)
                                }</p>
                            </div>) : <WalletButton />
                    }
                </div>

            </nav>
        </header >


    );
}


// async function postDataToMongoDB() {
//     const dataToPush = [
//         {
//             "MEESHOCAMPAIGN1": {
//                 "details": {
//                     "MEESHO": "meesho_logo_svg"
//                 },
//                 "NFT_collection": {
//                     "name": "azuki",
//                     "logo": "azuki_logo",
//                     "address": "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
//                 },
//                 "offer_headline": "30% off on all products",
//                 "offer_description": "Azuki NFT holders will get 30% off on all the products on Meesho. This is a one time offer and can be availed one time for a single NFT.",
//                 "offer_avail_count": "300"
//             }
//         },
//         {
//             "BEWAKOOFCAMPAIGN1": {
//                 "details": {
//                     "BEWAKOOF": "https://images.bewakoof.com/web/ic-desktop-normal-bwkf-logo.svg"
//                 },
//                 "NFT_collection": [
//                     {
//                         "name": "0n1",
//                         "logo": "https://i.seadn.io/gae/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s?auto=format&w=384",
//                         "address": "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D"
//                     }
//                 ],
//                 "offer_headline": "10% off on all products",
//                 "offer_description": "0n1 NFT holders will get 10% off on all products on Bewakoof. This is a one time offer and can be availed one time for a single NFT.",
//                 "offer_avail_count": "237"
//             }
//         },
//         {
//             "BOVADACAMPAIGN1": {
//                 "details": {
//                     "BOVADA": "https://www.bovada.lv/content/images/logo_main.svg"
//                 },
//                 "NFT_collection": [{
//                     "name": "board ape",
//                     "logo": "https://ik.imagekit.io/bayc/assets/bayc-logo-z.png",
//                     "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
//                 },
//                 {
//                     "name": "azuki",
//                     "logo": "azuki_logo",
//                     "address": "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
//                 },
//                 {
//                     "name": "0n1",
//                     "logo": "https://i.seadn.io/gae/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s?auto=format&w=384",
//                     "address": "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D"
//                 }],
//                 "offer_headline": "Get 50$ on Bovada",
//                 "offer_description": "Get 50$ on Bovada when you sign up through BOOM.",
//                 "offer_avail_count": 5390,
//             }
//         },
//         {
//             "FANCRAZECAMPAIGN1": {
//                 "details": {
//                     "FANCRAZE": "https://www.fancraze.com/assets/logo-full.svg"
//                 },
//                 "NFT_collection": [
//                     {
//                         "name": "board ape",
//                         "logo": "https://ik.imagekit.io/bayc/assets/bayc-logo-z.png",
//                         "address": "0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D"
//                     },
//                     {
//                         "name": "azuki",
//                         "logo": "azuki_logo",
//                         "address": "0xED5AF388653567Af2F388E6224dC7C4b3241C544"
//                     },
//                     {
//                         "name": "0n1",
//                         "logo": "https://i.seadn.io/gae/7gOej3SUvqALR-qkqL_ApAt97SpUKQOZQe88p8jPjeiDDcqITesbAdsLcWlsIg8oh7SRrTpUPfPlm12lb4xDahgP2h32pQQYCsuOM_s?auto=format&w=384",
//                         "address": "0x3bf2922f4520a8BA0c2eFC3D2a1539678DaD5e9D"
//                     }
//                 ],
//                 "offer_headline": "20% off on Fancraze one NFT",
//                 "offer_description": "Get 20% off on fancraze one NFT.",
//                 "offer_avail_count": 7390
//             }
//         },
//         {
//             "DEMOCAMPAIGN1": {
//                 "details": {
//                     "DEMO": "demo_logo"
//                 },
//                 "NFT_collection": [
//                     {
//                         "name": "VeeFriends",
//                         "logo": "https://etherscan.io/token/images/veefriendsvft_32.png",
//                         "address": "0xa3AEe8BcE55BEeA1951EF834b99f3Ac60d1ABeeB"
//                     }
//                 ],
//                 "offer_headline": "10% off on DEMO apparels",
//                 "offer_description": "Get 10% off on Demo apparels using the coupon code",
//                 "offer_avail_count": 123
//             }
//         }


//     ];
//     let response = await fetch("http://localhost:3000/api/insert", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToPush),
//     });
//     let result = await response.json();
//     console.log(result);
// }
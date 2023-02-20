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
                            <button
                                type='button'
                                // type="submit"
                                className="font-medium h-10 px-5 rounded-lg rounded-l-none border-2 border-l-0 border-black"
                                // onClick={postDataToMongoDB}
                            >
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
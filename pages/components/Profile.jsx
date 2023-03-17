import { Web3Button, useWeb3Modal } from '@web3modal/react'

export default function Profile({
    address,
    email,
    scale
}) {
    const { isOpen, open, close, setDefaultChain } = useWeb3Modal()
    return (
        <div className={`rounded-lg flex flex-col gap-y-2 
                        border-2 border-black z-50 absolute
                         bg-white w-[20vh] md:w-[10vw] p-5 overflow-auto
                         items-start font-[500] text-lg
            ${scale === 0 ? 'scale-0' : ' animate-grow'
            } 
        `}
        onClick={(e) => {
            e.stopPropagation()
        }}
        >
            <p>Address</p>
            <p className="break-all text-sm">{address}</p>
            <p>Email</p>
            <p>{email}</p>
            <button
                onClick={() => {
                    open()
                }}

            >
                <p className="text-start underline">Manage Wallet</p>
            </button>
        </div>
    )
}
//mt-[8vh] -ml-[5vmax]

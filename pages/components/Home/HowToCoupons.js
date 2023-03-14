import SmallTicket from '../SmallTicket'
import Image from 'next/image'
import Ticket from '../Ticket'
import { Luckiest_Guy } from '@next/font/google'
const luckiestGuy = Luckiest_Guy({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-luckiestGuy',
})
import { useState } from 'react'
import { BsCircle, BsCircleFill } from 'react-icons/bs'

export default function HowToCoupons() {
  const [currentStep, setCurrentStep] = useState(1)
  const [steps, setSteps] = useState([1, 2, 3, 4])
  const [details, setDetails] = useState({
    CampaignCode: 'CAMPAIGN001',
    Brand: 'NikeID',
    OfferHeadline: 'Limited time offer!',
    OfferDescription: 'Buy 2 NFTs and get 1 free!',
    OfferAvailCount: 100,
  })
  return (
    <div
      className="flex flex-1 h-fit flex-col md:flex-row my-36 md:my-0 justify-evenly items-center md:h-screen"
      id="howto"
    >
      <div className="flex flex-row order-2 md:order-1">
        <div className="flex flex-col">
          <div className="h-[15vmax] w-[15vmax] relative ">
            <Image src={`/Step${currentStep}.svg`} fill />
          </div>
          <div className='flex w-[27vmax] justify-end'>
          <div className={`h-[10vmax] relative flex ${currentStep === 4 ? 'w-[10vmax]' : 'w-[27vmax]'}`}>
            <Image
                src={`/Step${currentStep}Image.svg`}
                fill
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-y-2 pl-5">
          {steps.map((step) => (
            <div
              className={`flex flex-row items-center gap-x-2 ${
                step === currentStep ? 'text-primary' : 'text-gray-400'
              } `}
            >
              <div
                className="flex flex-row items-center gap-x-2"
                onClick={() => setCurrentStep(step)}
              >
                {step === currentStep ? (
                  <BsCircleFill className="text-primary text-xs" />
                ) : (
                  <BsCircle className="text-gray-400 text-xs" />
                )}
                {/* <p
                  className={`font-display text-2xl ${
                    step === currentStep ? 'text-primary' : 'text-gray-400'
                  } `}
                >
                  Step {step}
                </p> */}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="order-2 md:order-1 ">
        <p
          className={`${luckiestGuy.variable} font-display text-center md:text-start text-4xl xl:text-8xl xl:leading-tight pt-24`}
        >
          How to <br className="hidden md:block" />
          Get
          <br />
          Coupons
        </p>
      </div>
    </div>
  )
}

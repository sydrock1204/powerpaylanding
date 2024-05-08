import gsap from 'gsap'
import { useEffect } from 'react'

import { Button } from '../ui/Button'
import EffectRotation from '../ui/EffectRotation'
import imgBTC from '@/assets/images/btc.svg'
import imgETH from '@/assets/images/eth.svg'
import imgTee from '@/assets/images/tee.svg'
import imgTransfer from '@/assets/images/transfer.svg'
import imgUSDC from '@/assets/images/usdc.svg'
import imgZee from '@/assets/images/zee.svg'

const Earn = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })
    tl.to('.cryptoEffect', { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'elastic.inOut' })
    tl.to('.cryptoEffect', { opacity: 0, duration: 0.5, stagger: 0.5, ease: 'elastic.inOut' })
  }, [])

  return (
    <section className="px-0">
      <div className="relative mb-[6.5rem] mt-20 flex h-[80vh] flex-col items-center justify-center rounded-3xl border-2 border-white px-2 text-center text-white md:mx-60 md:px-0">
        <div className="cryptoEffect absolute left-36 top-4 opacity-0 md:left-48 md:top-8">
          <img src={imgZee} alt="zee" className="w-8 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect absolute left-4 -mt-32 opacity-0 md:left-10 md:mt-16">
          <img src={imgBTC} alt="btc" className="w-8 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect absolute bottom-8 left-16 opacity-0 md:bottom-12 md:left-40">
          <img src={imgUSDC} alt="usdc" className="w-20 object-contain " />
        </div>
        <div className="cryptoEffect absolute top-12 opacity-0 md:right-44">
          <img src={imgTee} alt="tee" className="w-10 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect absolute bottom-24 right-4 opacity-0 md:right-16">
          <img src={imgETH} alt="eth" className="w-16 object-contain md:w-24 " />
        </div>
        <div className="cryptoEffect md:right-68 absolute bottom-8 right-56 opacity-0">
          <img src={imgTransfer} alt="transfer" className="w-10 object-contain " />
        </div>
        <div className="z-30">
          <h1 className="text-2xl font-[500] md:text-[1.6rem]">SMART EARN UP TO 25% APY ON USDT & USDC</h1>
          <p className="px-28 pt-3">get paid daily interest on your account with the flexibility to access your funds at any time.</p>
          <Button label="Get Started" variant="primary" className="mt-16 w-[384px]" />
        </div>
      </div>
      <div className="relative">
        <EffectRotation variant="btc" position="absolute left-18rem -top-[624px] w-[100px]" />
        <EffectRotation variant="eth" position="absolute left-[1600px] -top-[680px]" />
        <EffectRotation variant="bnb" position="absolute left-[1700px] -top-[450px]" />
        <EffectRotation variant="sol" position="absolute left-[200px] -top-[180px]" />
        <EffectRotation variant="xrp" position="absolute left-[1680px] -top-[900px]" />
        <EffectRotation variant="ada" position="absolute left-[130px] -top-[340px]" />
        <EffectRotation variant="avax" position="absolute left-[1610px] -top-[220px]" />
        <EffectRotation variant="terra" position="absolute left-[180px] -top-[780px]" />
      </div>
    </section>
  )
}

export default Earn

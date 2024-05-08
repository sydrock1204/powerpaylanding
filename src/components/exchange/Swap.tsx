import gsap from 'gsap'
import { useEffect } from 'react'

import { Button } from '../ui/Button'
import imgBTC from '@/assets/images/btc.svg'
import imgETH from '@/assets/images/eth.svg'
import imgTee from '@/assets/images/tee.svg'
import imgTransfer from '@/assets/images/transfer.svg'
import imgUSDC from '@/assets/images/usdc.svg'
import imgZee from '@/assets/images/zee.svg'

const Swap = () => {
  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1 })
    tl.to('.cryptoEffect', { rotationX: 360, duration: 2.5, stagger: 2.5, ease: 'elastic.inOut' })
  }, [])

  return (
    <section className="px-60">
      <div className="relative flex h-[70vh] flex-col items-center justify-center  rounded-3xl px-2 text-center text-white md:mx-20 md:my-10 md:px-0">
        <div className="cryptoEffect absolute left-4 top-8 md:left-24 md:top-0">
          <img src={imgZee} alt="zee" className="w-8 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect absolute left-4 -mt-8 md:left-10 md:-mt-0">
          <img src={imgBTC} alt="btc" className="w-8 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect md:left-38 absolute bottom-[50px] left-28 md:bottom-[68px]">
          <img src={imgUSDC} alt="usdc" className="w-20 object-contain " />
        </div>
        <div className="cryptoEffect absolute -top-4 md:left-[28rem]">
          <img src={imgTee} alt="tee" className="w-10 object-contain md:w-16 " />
        </div>
        <div className="cryptoEffect absolute right-0 top-56 md:right-0">
          <img src={imgETH} alt="eth" className="w-16 object-contain md:w-24 " />
        </div>
        <div className="cryptoEffect absolute bottom-44 right-10 md:right-40">
          <img src={imgTransfer} alt="transfer" className="w-10 object-contain " />
        </div>
        <div className="z-30">
          <h1 className="text-3xl font-[500] md:text-5xl">EXCHANGE OVER 70 CURRENCY PAIRS TO USDT</h1>
          <p className="pt-3">Convert GBP,EUR & USD to USDT in seconds.</p>
          <Button label="Exchange Now" variant="primary" className="mt-32 md:w-[404px]" />
        </div>
      </div>
    </section>
  )
}

export default Swap

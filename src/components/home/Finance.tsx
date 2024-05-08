import gsap from 'gsap'
import { useRef, useEffect } from 'react'

import EffectShimmering from '../ui/EffectShimmering'

const Finance = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3).to('.title4', { opacity: 1, duration: 1, ease: 'power1.inOut' }).to('.body4', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
      } else {
        tl.set('.title4', { opacity: 0 })
        tl.set('.body4', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section className="bg-[#0D0D0D]">
      <div ref={componentRef} className="mx-auto max-w-screen-xl px-4 pb-[6.5rem] pt-20">
        <div className="mb-10 text-center">
          <h1 className="title4 mb-5 h-10 text-[3rem] font-bold opacity-5">Exchange Fiat and Swap Crypto</h1>
          <h1 className="title4 mt-5 h-4 text-center text-[1rem] font-[500] text-white opacity-5">Discover low exchange rates from Fiat to USDT with T+0 settlement.</h1>
        </div>
        <div className="body4 relative flex flex-wrap items-center justify-between opacity-0">
          <div className="z-1 absolute -right-[500px] -top-[50px] mt-4 size-[800px] rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#000000]"></div>
          <div className="gap-10">
            <div className="mb-3 mt-16 w-[400px]">
              <h1 className="text-5xl font-bold">25%</h1>
              <h2 className="mb-1 mt-5 text-4xl font-bold text-primary-blue">PAY</h2>
              <p>Daily interest paid on USDT and USDC with Zero Lock up and compounding monthly.</p>
            </div>
            <div className="mb-3 mt-16 w-[400px]">
              <h1 className="text-5xl font-bold">Faster</h1>
              <h2 className="mb-1 mt-5 text-4xl font-bold text-primary-blue">Payments</h2>
              <p>Deposit GBP,EUR and USD in seconds.</p>
            </div>
            <div className="mb-3 mt-16 w-[400px]">
              <h1 className="text-5xl font-bold">Exchange</h1>
              <h2 className="mb-1 mt-5 text-4xl font-bold text-primary-blue">Crypto and Fiat</h2>
              <p>Experience the best prices on crypto and fiat exchange.</p>
            </div>
          </div>
          <div className="relative h-[366px] w-[412px] rounded-lg bg-stone-950  p-4">
            <div>
              <EffectShimmering variant="btc" position="left-4 top-[17rem] -mt-24 md:left-40 md:-mt-0" />
              <EffectShimmering variant="usdc" position="bottom-20 left-4 top-16 md:-left-36 md:bottom-28" />
              <EffectShimmering variant="tee" position="left-4 top-64 md:-left-[4.5rem] md:right-52" />
              <EffectShimmering variant="tee" position="-top-16 left-16 right-8 md:right-20" />
              <EffectShimmering variant="trans" position="-top-8 bottom-44 right-10 md:-right-8" />
            </div>

            <div className="z-30">
              <div className="my-8">
                <label htmlFor="from" className="mb-4 ml-2 text-lg font-semibold text-white">
                  From
                </label>
                <input type="" id="from" className="mt-4 h-[61px] w-full rounded-md border border-gray-200 bg-[#0F0F0F] p-4 text-white" placeholder="100 USD" disabled />
              </div>
              <div>
                <label htmlFor="to" className="mb-4 ml-2 text-lg font-semibold text-white">
                  To
                </label>
                <input type="text" id="to" className="mt-4 h-[61px] w-full rounded-md border border-gray-200 bg-[#0F0F0F] p-4 text-white" placeholder="99.99 USDT" disabled />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Finance

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgDollarThumbup from '@/assets/images/dollarThumbup.svg'
import imgDollarToEuro from '@/assets/images/dollarToEuro.svg'
import imgFasterPay from '@/assets/images/fasterPay.svg'

const SwapChoose = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        const tl = gsap.timeline()
        tl.to('.content', { right: 0, duration: 0.7, ease: 'power1.in' }).to('.content-card', {
          top: 0,
          duration: 0.7,
          stagger: 0.7,
          ease: 'power2.out',
        })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  const data = [
    {
      img: imgDollarThumbup,
      title: 'Competitive and transparent prices',
      text: 'Real time prices allow you to have the most competitive and transparent prices.',
    },
    {
      img: imgDollarToEuro,
      title: 'Exchange over 70+ pairs',
      text: 'We cover major currencies but also provide liquidity in Frontier and Emerging markets.',
    },
    {
      img: imgFasterPay,
      title: 'Faster payment and settlement',
      text: 'We settle GBP, EUR and USD in seconds and provide T+0 settlement in a number of currency pairs.',
    },
  ]

  return (
    <section ref={componentRef} className="content relative -right-[100%]  bg-[#0D0D0D] px-60">
      <div className="relative flex flex-col items-center justify-center pb-12 pt-20">
        <div className="absolute -right-[36rem] -mt-12 size-[968px] rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#000000] shadow-xl shadow-primary-blue/30"></div>
        <div className="z-30">
          <h1 className="text-center text-3xl font-[500] text-white md:text-5xl">Why Exchange using Powerpay?</h1>
          <div className="flex w-full flex-col items-center gap-12 overflow-hidden py-20 md:flex-row">
            {data.map((e, index) => (
              <div
                key={index}
                className="content-card relative top-[800px] flex h-[520px] w-[450px] flex-col items-center rounded-2xl bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] p-10 text-center"
              >
                <div className="size-[132px] rounded-lg bg-primary-blue p-2 shadow-xl">
                  <img
                    src={e.img}
                    alt="image11"
                    className="w-full items-center"
                    style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }}
                  />
                </div>
                <h2 className="relative top-16 text-[1.5rem] font-[500]">{e.title}</h2>
                <p className="relative top-24">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SwapChoose

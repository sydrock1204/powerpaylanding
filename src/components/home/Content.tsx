import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgCrypto from '@/assets/images/crypto.svg'
import imgPiechart from '@/assets/images/pie-chart.svg'
import imgStats from '@/assets/images/pie-chart.svg'

const Content = () => {
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

  return (
    <>
      <main ref={componentRef} className="content relative -right-full bg-[#0D0D0D] pb-6 pt-4">
        <div className="mx-24 px-4">
          <div className="relative z-10 flex flex-col justify-around gap-12  overflow-hidden px-2 py-20 lg:flex-row">
            <div className="content-card relative top-[800px] flex max-w-[30%] flex-col items-center rounded-2xl bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] p-10 text-center hover:cursor-pointer hover:bg-primary-blue">
              <img
                src={imgPiechart}
                width={84}
                alt="pie chart"
                className="rounded-lg bg-primary-blue p-2 shadow-xl"
                style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }}
              />
              <h1 className="relative top-8 text-2xl font-semibold">Buy Crypto in Seconds</h1>
              <p className="relative top-16 text-sm font-extralight">
                Easy to use crypto platform allowing you to buy BTC and other popular crypto at zero fees.
              </p>
            </div>
            <div className="content-card relative top-[800px] flex max-w-[30%] flex-col items-center rounded-2xl bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] p-10 text-center hover:cursor-pointer hover:bg-primary-blue">
              <img
                src={imgStats}
                width={84}
                alt="stats"
                className="rounded-lg bg-primary-blue p-2 shadow-xl"
                style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }}
              />
              <h1 className="relative top-8 text-2xl font-semibold">Earn Up to 16% Interest</h1>
              <p className="relative top-16 text-sm font-extralight">
                Earn passive income at your own terms on USDT and USDC. Collect daily interest automatically to your
                account with the flexibility to access your funds at any time.
              </p>
            </div>
            <div className="content-card relative top-[800px] flex max-w-[30%] flex-col items-center rounded-2xl bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] p-10 text-center hover:cursor-pointer hover:bg-primary-blue">
              <img
                src={imgCrypto}
                width={84}
                alt="crypto"
                className="my-[6px] rounded-lg bg-primary-blue p-2 shadow-xl"
                style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }}
              />
              <h1 className="relative top-8 text-2xl font-semibold">Exchange with 0 Fee</h1>
              <p className="relative top-16 text-sm font-extralight">
                Exchange EUR,GBP seamlessly and instantaneouly and several other frontier and emerging currencies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Content

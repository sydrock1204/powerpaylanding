import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgPercent from '@/assets/images/percent.svg'
import imgWorld from '@/assets/images/world.svg'

const ExchangeRate = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title1', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
          .to('.box1small', { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.inOut' })
          .to('.box1medium', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
          .to('.box1big', { opacity: 1, duration: 1, ease: 'power1.inOut' })
      } else {
        tl.set('.title1', { opacity: 0 })
        tl.set('.box1small', { opacity: 0 })
        tl.set('.box1big', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef} className="bg-gradient-to-b from-[#000000] to-[#0D0D0D] px-60 py-12">
      <div className="flex min-h-screen flex-col items-center justify-center md:gap-4">
        <h1 className="title1 text-center text-2xl font-[400] text-white opacity-0 md:text-4xl">Supporting Companies Globally to make borderless payments in USDT without friction.</h1>
        <div className="my-10 flex min-h-[720px] w-full flex-col gap-6 p-2 md:flex-row">
          <div className="flex basis-[55%] flex-col gap-6">
            <div className="flex basis-2/4 flex-row gap-6">
              <div className="box1small basis-2/4 rounded-[32px] border-2 border-white p-8 opacity-0">
                <h1 className="mb-1 mt-8 h-4 text-[1.4rem] font-[500]">Exchange Rate</h1>
                <h1 className="mt-6 text-[4rem] font-bold">0.5%</h1>
              </div>
              <div className="box1small basis-2/4 rounded-[32px] border-2 border-white bg-white p-8 text-center text-black opacity-0">
                <h1 className="mt-8 h-4 text-[1.5rem] font-[700]">Pay Fee</h1>
                <h1 className="mt-6 text-[1.3rem] font-[500]">only when sending money overseas</h1>
              </div>
            </div>
            <div className="box1medium relative flex basis-2/4 flex-col items-center justify-center overflow-hidden rounded-[32px] bg-primary-blue p-3 text-center opacity-0">
              <div className="absolute bottom-0 right-0  mt-4 opacity-15 md:mt-2">
                <img src={imgPercent} alt="percent" width={240} height={240} className="w-[300px]" />
              </div>
              <p className="px-4 text-3xl font-[500]">Keep money in any currency with no restrictions or fees</p>
            </div>
          </div>
          <div className="box1big relative flex basis-[45%] flex-col rounded-[32px] border-2 border-white pl-8 pt-8 opacity-0">
            <h1 className="mt-8 h-4 w-64 text-[1.2rem] font-[500]">Get n-cost incoming transaction from</h1>
            <h1 className="mt-6 text-[4rem] font-bold">150+</h1>
            <p className="text-3xl  font-[500] text-white md:text-2xl ">countries</p>
            <div className="absolute bottom-0 right-0  mt-4 md:mt-2">
              <img src={imgWorld} alt="world" className="w-[480px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExchangeRate

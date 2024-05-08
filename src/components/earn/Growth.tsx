import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgCalculator from '@/assets/images/calculator.svg'
import imgCalendar from '@/assets/images/calendar.svg'
import imgGrowth from '@/assets/images/growth.svg'

const Growth = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title2', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
          .to('.box1small', { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.inOut' })
          .to('.box1big', { opacity: 1, duration: 1, ease: 'power1.inOut' })
      } else {
        tl.set('.title2', { opacity: 0 })
        tl.set('.box1small', { opacity: 0 })
        tl.set('.box1big', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef} className="bg-[#0D0D0D] px-60">
      <div className="flex min-h-screen flex-col items-center justify-center md:gap-4">
        <h1 className="title2 mt-16 text-center font-[500] text-white md:mt-20 md:text-4xl opacity-0">
          Compound your Crypto holdings with Smart Earn
        </h1>
        <div className="mt-12 mb-[6.5rem] flex w-full flex-col justify-center gap-8 md:w-full md:flex-row">
          <div className="flex w-full flex-col gap-8 md:w-1/3">
            <div className="box1small flex flex-col items-center justify-center gap-5 rounded-2xl bg-primary-blue px-5 py-16 text-center text-white opacity-0">
              <img src={imgCalendar} alt="calendar" className="w-16" />
              <p className="font-[500]">Compound Monthly Earnings</p>
            </div>
            <div className="box1small flex flex-col items-center justify-center gap-5 rounded-2xl border-2 border-white px-5 py-16 text-center text-white opacity-0">
              <img src={imgGrowth} alt="growth" className="w-16" />
              <p className="px-4 font-[500]">
                Earn at your own terms with 30 days maturity, auto roll or any time redemption to access your principal
              </p>
            </div>
          </div>
          <div className="box1big flex min-h-[580px] w-full flex-col gap-1 rounded-2xl border-2 border-white px-10 py-10 text-center  text-white md:w-3/4 md:text-left opacity-0">
            <p className="text-2xl  font-[500] text-white md:text-[2.5rem] mb-2">Find out much you</p>
            <p className="text-2xl  font-[500] text-white md:text-[2.5rem] mb-2">could earn with</p>
            <p className="text-2xl  font-[500] text-white md:text-[2.5rem] mb-2">compounded earnings</p>
            <p className="text-2xl  font-[500] text-white md:text-[2.5rem] mb-2">using our compound</p>
            <p className="text-2xl  font-[500] text-white md:text-[2.5rem] mb-2">calculator</p>
            <div className="mt-10 flex w-full items-center justify-center md:mt-[7.5rem] md:items-end md:justify-end">
              <img src={imgCalculator} alt="calculator" className="w-32" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Growth

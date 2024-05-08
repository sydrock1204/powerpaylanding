import gsap from 'gsap'
import { useRef, useEffect } from 'react'

import { Button } from '../ui/Button'
import img24hours from '@/assets/images/24-hours.svg'
import imgLock from '@/assets/images/lock.svg'
import imgSafe from '@/assets/images/safe.svg'

const Choose = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.5)
          .to('.title1', { opacity: 1, duration: 0.8, ease: 'power1.inOut' })
          .to('.body1', { opacity: 1, duration: 0.5 })
      } else {
        tl.set('.title1', { opacity: 0 }).to('.body1', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section className="bg-[#0D0D0D] pt-16 pb-20">
      <div ref={componentRef} className="mx-auto max-w-screen-xl px-4">
        <div className="flex flex-col  items-center justify-center md:mx-20 md:mb-8 md:gap-4">
          <h1 className="title1 mt-5 text-center text-[3rem] font-[500] opacity-0 text-white md:text-5xl h-[2.5rem]">
            Why Choose Powerpay?
          </h1>
          <div className="body1 mt-20 flex h-[768px] w-full flex-col justify-center gap-5 md:w-full md:flex-row opacity-0">
            <div className="flex w-full flex-col gap-5 md:w-1/3">
              <div
                key="customer-support"
                className="flex h-1/2 flex-col items-center justify-center rounded-2xl bg-primary-blue px-5 py-12 text-center text-white"
              >
                <img src={img24hours} alt="24/7 support" className="size-16" />
                <p className="text-xl font-[500]">Customer Support 24/7</p>
              </div>
              <div className="flex h-1/2 flex-col items-center justify-center gap-5 rounded-2xl border-2 border-white px-5 py-16 text-center text-white">
                <img src={imgSafe} alt="safe" className="w-16" />
                <p className="px-4 text-xl font-[500]">Highly Secure Custody and insurance</p>
              </div>
            </div>
            <div className="flex size-full flex-col gap-1 rounded-2xl border-2 border-white px-10 py-14 text-center text-white md:w-[75%] md:text-left">
              <p className="text-3xl  font-[500] text-white md:text-5xl ">Licensed &</p>
              <p className="text-3xl  font-[500] text-white md:text-5xl ">Regulated Digital</p>
              <p className="text-3xl  font-[500] text-white md:text-5xl ">assets institution</p>
              <Button
                label="Start Now"
                variant="primary"
                className="mx-auto mt-12 h-[47px] w-[144px] text-[16px] md:mx-0"
              />
              <div className="mt-12 flex w-full items-center justify-center md:mt-12 md:items-end md:justify-end">
                <img src={imgLock} alt="lock" className="w-56" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose

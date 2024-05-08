import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { Button } from '../ui/Button'
import imgTeet from '@/assets/images/teet.svg'
import imgZee from '@/assets/images/zee.svg'

const NextStep = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.box4', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.title6', { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.inOut' })
          .to('.button4', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
          .to('.touchpad', { opacity: 1, rotation: 12, duration: 1, ease: 'power1.inOut' })
      } else {
        tl.set('.box4', { opacity: 0 })
        tl.set('.title6', { opacity: 0 })
        tl.set('.button4', { opacity: 0 })
        tl.set('.touchpad', { opacity: 0, rotation: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef} className="bg-[#0D0D0D] px-40 pb-[6.5rem] pt-20">
      <div className="box4 flex flex-col justify-center rounded-3xl border-2 border-white p-2 text-white opacity-0 md:flex-row md:px-4">
        <div className="flex flex-col justify-between text-center md:w-[70%] md:p-16 md:text-left">
          <div className="title6 opacity-0">
            <h1 className="mb-8 text-3xl font-[700] md:text-5xl">The Next Step Begins with a Tap. </h1>
            <p className="pt-9 text-xl font-[600]">Buy, Sell and securely Earn today</p>
          </div>
          <Button label="Get Started" variant="primary" className="button4 mt-32 font-[600] opacity-0 md:w-[360px]" />
        </div>
        <div className="mt-20 flex w-full items-center justify-center md:mt-0 md:w-[30%]">
          <div className="touchpad relative h-[320px] w-[260px] rotate-0 rounded-[30px] border-2 border-white bg-black opacity-0 shadow-2xl shadow-[#6a97ff]">
            <div className="flex h-full items-end justify-end p-6">
              <Button label="Get Started" className="w-full" variant="primary" link="/signup" />
            </div>
            <img src={imgTeet} alt="" className="absolute -ml-12 -mt-40 w-20" />
            <img src={imgZee} alt="" className="absolute -mt-40 ml-40 w-16" />
          </div>
          {/* <img src={imgTeet} alt="" className="absolute -ml-48 -mt-28 w-24" />
          <img src={imgZee} alt="" className="absolute ml-40 mt-8 w-20" /> */}
        </div>
      </div>
    </section>
  )
}

export default NextStep

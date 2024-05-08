import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { Button } from '../ui/Button'
import imgStopWatch from '@/assets/images/Stopwatch.svg'

const limitedTime = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.box2', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.image1', { opacity: 1, duration: 0.8, ease: 'power1.inOut' })
          .to('.title4', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
          .to('.button2', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
      } else {
        tl.set('.box2', { opacity: 0 })
        tl.set('.image1', { opacity: 0 })
        tl.set('.title4', { opacity: 0 })
        tl.set('.button2', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef} className="bg-[#0D0D0D] px-40 pb-[6.5rem] pt-20">
      <div className="box2 flex flex-col justify-center rounded-3xl border-2 border-white px-2 text-center text-white md:px-0 opacity-0">
        <div className="flex flex-col items-center">
          <img
            src={imgStopWatch}
            alt="stopwatch"
            width={840}
            height={840}
            className="image1 w-24 pb-12 pt-20 opacity-0"
          />
          <h1 className="title4 pb-6 text-3xl font-[700] md:text-4xl opacity-0">Introductory Offer</h1>
          <p className="title4 pb-12 md:w-[48%] opacity-0">
            Earn 25% APY on USDT & USDC payable daily and compounded monthly. This offer will only be available for our
            new customers.
          </p>
          <Button label="Explore Now" variant="primary" className="button2 mb-20 opacity-0" link="/signup" />
        </div>
      </div>
    </section>
  )
}

export default limitedTime

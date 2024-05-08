import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import CalculateInterest from './CalculateInterest'

const Interest = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title3', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.contentInterest', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
      } else {
        tl.set('.title3', { opacity: 0 })
        tl.set('.contentInterest', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])
  return (
    <section ref={componentRef} className="px-40">
      <div className="mb-[6.5rem] mt-20 flex h-full min-h-screen flex-col items-center justify-center ">
        <div className="title3 flex w-full flex-col items-center justify-center md:ml-10 opacity-0">
          <h1 className="text-center text-2xl font-[500] text-white md:text-4xl">
            Calculate your compound
            <br />
            interest
          </h1>
          <p className="pt-4 text-center text-[18px] text-[#FFFFFF]">
            Your results will display here once you enter the values and click “Calculate”
          </p>
        </div>
        <div className="contentInterest w-full opacity-0">
          <CalculateInterest />
        </div>
      </div>
    </section>
  )
}

export default Interest

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgBranches from '@/assets/images/branches.svg'
import imgDiagram from '@/assets/images/diagram.svg'
import imgInterest from '@/assets/images/interest.svg'

const Choose = () => {
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
      img: imgDiagram,
      title: 'Grow your Crypto wealth without the volatility',
      text: 'Earn daily passive income in a few clicks with an easy to use application.',
    },
    {
      img: imgBranches,
      title: 'zero lock up',
      text: 'Unlike most earn products Powerpay does not lock your funds up and provides you daily liquidity to your funds. Your funds remains yours at all time',
    },
    {
      img: imgInterest,
      title: 'Short term maturity of 30 days',
      text: 'Powerpay offers its users the ability to earn interest over a period of 30 days with the ability to roll your investment and compound it monthly.',
    },
  ]
  return (
    <section ref={componentRef} className="content bg-[#0D0D0D] px-30 relative -right-[100%]">
      <div className="relative flex flex-col items-center justify-center pt-20 pb-26">
        <div className="absolute -right-[28rem] -mt-12 size-[880px] rounded-full bg-gradient-to-b from-[#1E1E1E] to-[#000000] shadow-xl shadow-primary-blue/30"></div>
        <div className="z-30">
          <h1 className="text-center text-3xl font-[500] text-white md:text-4xl">Why Choose PowerPay Smart Earn?</h1>
          <div className="flex w-full flex-col items-center gap-16 py-20 md:flex-row overflow-hidden">
            {data.map((e, index) => (
              <div
                key={index}
                className="content-card flex h-[550px] w-[440px] relative top-[800px]  flex-col items-center gap-y-4 rounded-2xl bg-gradient-to-b from-[#1B1B1B] to-[#0E0E0E] p-10 text-center"
              >
                <img
                  src={e.img}
                  width={84}
                  height={56}
                  alt="card image"
                  className="rounded-lg bg-primary-blue p-2 shadow-xl"
                  style={{ boxShadow: '-12px -10px rgba(30, 102, 208, 0.5)' }}
                />
                <h2 className="relative top-8 text-[1rem] font-[500]">{e.title}</h2>
                <p className="relative top-16">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Choose

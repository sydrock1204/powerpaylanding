import gsap from 'gsap'
import { useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'

import { Button } from '../ui/Button'
import imgArrow from '@/assets/images/arrow.svg'
import imgDAI from '@/assets/images/dai.svg'
import imgGraph from '@/assets/images/Graph1.svg'
import imgUSDT from '@/assets/images/tee.svg'
import imgTUSD from '@/assets/images/tusd.svg'
import imgUSDC from '@/assets/images/usdc.svg'

const Ways = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title1', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.button1smartearn', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
          .to('.cardcontent', { opacity: 1, duration: 0.3, stagger: 0.3, ease: 'power1.inOut' })
          .to('.button1startearning', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
      } else {
        tl.set('.title1', { opacity: 0.0 })
        tl.set('.button1smartearn', { opacity: 0 })
        tl.set('.cardcontent', { opacity: 0 })
        tl.set('.button1startearning', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])
  const data = [
    {
      img: imgUSDT,
      title: 'USDT',
      link: '/earn',
      off: '25',
    },
    {
      img: imgUSDC,
      title: 'USDC',
      link: '/earn',
      off: '25',
    },
    {
      img: imgTUSD,
      title: 'TUSD',
      link: '/earn',
      off: '20',
    },
    {
      img: imgDAI,
      title: 'DAI',
      link: '/earn',
      off: '20',
    },
  ]
  return (
    <section ref={componentRef} className="px-40">
      <div className="mb-[6.5rem] flex flex-col items-center justify-center gap-4">
        <h1 className="title1 text-center text-3xl font-[500] text-white opacity-0 md:mt-20 md:text-4xl">Introducing Smart Earn</h1>
        <h1 className="title1 text-center text-sm font-medium opacity-0">Your journey into compounding your crypto wealth begins with SMART EARN</h1>
        <button className="button1smartearn z-20 mt-10 rounded-md border bg-[#D9D9D9] text-sm font-semibold text-black opacity-0 transition-all duration-300 ease-linear">Smart Earn</button>
        <div className="my-14 grid w-full grid-cols-1 items-center justify-center  gap-7 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {data.map((e, index) => (
            <div key={index} className="cardcontent flex w-full flex-col rounded-lg bg-[#161616] p-3 opacity-0">
              <div className="flex w-full items-center justify-between border-b border-[#777]/40 pb-4 text-white">
                <div className="flex items-center gap-2">
                  <img src={e.img} alt={e.title} className="w-10" />
                  <p>{e.title}</p>
                </div>
                <Link to={e.link}>
                  <img src={imgArrow} alt="arrow" className="w-4" />
                </Link>
              </div>
              <div className="flex w-full items-center justify-between pt-3">
                <p className="rounded-xl bg-[#FFF0F0] p-[10px] text-[12px] font-bold text-[#FE4331]">
                  Up to <span> {e.off}%</span>
                </p>
                <img src={imgGraph} alt="graph" className="w-14" />
              </div>
            </div>
          ))}
        </div>
        <Button className="button1startearning opacity-0" label="Start Earning" variant="primary" link="/earn" />
      </div>
    </section>
  )
}

export default Ways

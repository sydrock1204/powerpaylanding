import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgCash from '@/assets/images/cash.svg'
import imgAccount from '@/assets/images/createAcc.svg'
import imgUpload from '@/assets/images/uploadfile.svg'

const Others = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl1 = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl1
          .delay(0.3)
          .to('.title', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
          .to('#display-circle1', { backgroundColor: 'rgb(37 99 235)', duration: 0.3 })
          .to('#caption1', { color: 'rgb(37 99 235)', duration: 0.05 })
          .to('#exchange-line1', { width: '12rem', duration: 1, ease: 'circ.inOut' })
          .to('#display-circle2', { backgroundColor: 'rgb(37 99 235)', duration: 0.3 })
          .to('#caption2', { color: 'rgb(37 99 235)', duration: 0.05 })
          .to('#exchange-line2', { width: '12rem', duration: 1, ease: 'circ.inOut' })
          .to('#display-circle3', { backgroundColor: 'rgb(37 99 235)', duration: 0.3 })
          .to('#caption3', { color: 'rgb(37 99 235)', duration: 0.05 })
      } else {
        tl1.set('.title', { fontSize: '3rem', opacity: 0 })
        tl1.set('#display-circle1', { backgroundColor: 'rgb(20,20,20)' })
        tl1.to('#caption1', { color: 'white' })
        tl1.set('#exchange-line1', { width: 0 })
        tl1.set('#display-circle2', { backgroundColor: 'rgb(20,20,20)' })
        tl1.to('#caption2', { color: 'white' })
        tl1.set('#exchange-line2', { width: 0 })
        tl1.set('#display-circle3', { backgroundColor: 'rgb(20,20,20)' })
        tl1.to('#caption3', { color: 'white' })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)
    return () => observer.disconnect()
  }, [componentRef])

  return (
    <div ref={componentRef} className="mx-auto max-w-screen-xl px-4 pb-[5rem]">
      <div className="mt-20 text-center">
        <p className="title text-[3rem] font-medium h-[3rem] opacity-0">Start Growing Your Wealth </p>
      </div>
      <div className="flex justify-center">
        <div className="mt-36 mb-20 flex flex-col lg:flex-row">
          <div className="relative flex flex-col items-center">
            <div
              id="display-circle1"
              className="border-opacity-8  flex size-24 items-center justify-center rounded-full border-8 border-black bg-[#141414] p-8"
            >
              <h1 className="absolute z-10 mb-20 mr-28 text-[9rem] font-bold opacity-5">1</h1>
              <img src={imgAccount} alt="create account" width={68} height={84} />
            </div>
            <h1 id="caption1" className="mt-5 text-center text-[1rem] text-white md:w-[12rem]">
              Create an Account
            </h1>
          </div>
          <div className="flex h-24 items-center justify-start w-48 ">
            <hr id="exchange-line1" className="border-t-4 border-dashed border-blue-500 w-[0rem] exchange-line" />
          </div>
          <div className="relative flex flex-col items-center">
            <div
              id="display-circle2"
              className="border-opacity-8 flex size-24 items-center justify-center rounded-full border-8 border-black bg-[#141414] p-8"
            >
              <h1 className="absolute z-10 mb-20 mr-28 text-[9rem] font-bold opacity-5">2</h1>
              <img src={imgUpload} alt="upload" width={68} height={84} />
            </div>
            <h1 id="caption2" className="mt-5 text-center text-[1rem] md:w-[12rem]">
              Submit Documents
            </h1>
          </div>
          <div className="flex h-24 items-center justify-start w-48">
            <hr id="exchange-line2" className="border-t-4 border-dashed border-blue-500 w-[0rem] exchange-line" />
          </div>
          <div className="relative flex flex-col items-center">
            <div
              id="display-circle3"
              className="border-opacity-8 z-20 flex size-24 items-center justify-center rounded-full border-8 border-black bg-[#141414] p-8"
            >
              <h1 className="absolute z-10 mb-20 mr-28 text-[9rem] font-bold opacity-5">3</h1>
              <img src={imgCash} alt="cash" width={68} height={84} />
            </div>
            <h1 id="caption3" className="mt-5 text-center text-[1rem] md:w-[12rem]">
              Exchange, Trade and Earn
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Others

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { Button } from '../ui/Button'
import imgDropdown from '@/assets/images/dropdown.svg'
import imgEuro from '@/assets/images/eur.svg'
import imgLine from '@/assets/images/line.svg'
import imgRect from '@/assets/images/rectangle.svg'
import imgUSDT from '@/assets/images/usdt.svg'

const TradingPairs = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title2', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
          .to('.cardcontent2', { opacity: 1, duration: 0.5, stagger: 0.5, ease: 'power1.inOut' })
      } else {
        tl.set('.title2', { opacity: 0 })
        tl.set('.cardcontent2', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef} className="px-60 bg-gradient-to-b to-[#0D0D0D] from-[#000000] pb-20">
      <h1 className="title2 pt-20 text-center text-2xl font-[500] text-white md:text-4xl opacity-0">
        Swap Between 70+ Trading Pairs
      </h1>
      <div className="cardcontent2 flex justify-center opacity-0">
        <div className="relative z-10 mx-auto mt-16">
          <div>
            <img src={imgRect} width={470} height={208} className="max-w-[350px] lg:max-w-[470px]" alt="image" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="absolute left-[-11px] top-[70px] flex h-[480px] w-[373px] flex-col rounded-lg border-4 border-white bg-black p-2 text-white lg:left-[-100px] lg:top-[80px] lg:size-[680px] lg:p-8">
              <div>
                <span>You Sell:</span>
                <div className="mt-3 flex flex-row items-center rounded-lg border-2 border-white bg-slate-900 p-2">
                  <div className="grow">1000</div>
                  <div className="flex items-center">
                    <div className="mr-2 text-right">EUR</div>
                    <img src={imgEuro} alt="EUR" width="20" height="20" className="w-5" />
                    <img src={imgDropdown} alt="EUR" width="20" height="20" className="mx-3 w-10" />
                  </div>
                </div>
              </div>
              <div>
                <img src={imgLine} alt="EUR" width="20" height="20" className="h-[180px] w-12 lg:h-[267px]" />
              </div>
              <ul className="absolute top-[100px] ml-[2.3rem] list-disc lg:top-[200px] lg:ml-10">
                <li className="my-8 text-sm lg:text-xl">
                  Exchange Rate: <span className="ml-6 text-gray-500">$1 = 1.08</span>
                </li>
                <li className="my-8 text-sm lg:text-xl">
                  Fees: <span className="ml-24 text-gray-500 lg:ml-32">$5.00</span>
                </li>
              </ul>

              <div className="">
                <span>You Receive:</span>
                <div className="mt-3 flex flex-row items-center rounded-lg border-2 border-white bg-slate-900 p-2">
                  <div className="grow">1075</div>
                  <div className="flex items-center">
                    <div className="mr-2 text-right">USDT</div>
                    <img src={imgUSDT} alt="EUR" width="20" height="20" className="w-5" />
                    <img src={imgDropdown} alt="EUR" width="20" height="20" className="mx-3 w-10" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Button
                label="Get Started"
                variant="primary"
                className="absolute left-[14px] top-[479px] w-80 lg:left-[30px] lg:top-[680px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TradingPairs

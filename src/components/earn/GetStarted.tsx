import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import { Button } from '../ui/Button'
import imgCreateAccount from '@/assets/images/CreateAccount.svg'
import imgDepositCrypto from '@/assets/images/DepositCrypto.svg'
import imgEarning from '@/assets/images/Earning.svg'

const GetStarted = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title5', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.contentcard2', { opacity: 1, duration: 0.8, stagger: 0.8, ease: 'power1.inOut' })
          .to('.button3', { opacity: 1, duration: 0.3, ease: 'power1.inOut' })
      } else {
        tl.set('.title5', { opacity: 0 })
        tl.set('.contentcard2', { opacity: 0 })
        tl.set('.button3', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  const data = [
    {
      img: imgCreateAccount,
      title: 'Create your account',
      text: 'Fill in your details and create a profile in minutes.',
    },
    {
      img: imgDepositCrypto,
      title: 'Deposit Fiat or Crypto',
      text: 'Once your account has been verified, deposit Fiat via bank transfer or another wallet to your POwerpay wallet address.',
    },
    {
      img: imgEarning,
      title: 'Start Earning',
      text: 'Enjoy passive daily interest by simply following the steps under the Earn section on the web application',
    },
  ]
  return (
    <section ref={componentRef} className="bg-gradient-to-b from-[#000000] to-[#0D0D0D] px-60 pt-20">
      <div className="flex size-full flex-col items-center pb-12">
        <h1 className="title5 text-center text-3xl font-[600] text-white opacity-0 md:text-left md:text-4xl">How to Get Started</h1>
        <p className="title5 pt-4 text-center text-[24px] font-[400] text-[#FFFFFF] opacity-0 md:text-left">Our Crypto exchange is easy to use, whether you are new to crypto or a pro.</p>

        <div className="mt-20 flex w-full max-w-[530px] flex-col items-center justify-center gap-y-12">
          {data.map((e, index) => (
            <div key={index} className="contentcard2 flex flex-col items-center justify-center gap-2 text-center opacity-0 md:-mx-12 md:flex-row md:text-left">
              <img src={e.img} alt="started" className="w-14" />
              <div className="flex min-h-40 flex-col rounded-md bg-[#0b0b0b] p-6 text-white">
                <h2 className="text-[22px] font-[600]">{e.title}</h2>
                <p className="md:w-[90%]">{e.text}</p>
              </div>
            </div>
          ))}
          <Button label="Get Started" variant="primary" className="button3 mt-6 opacity-0" />
        </div>
      </div>
    </section>
  )
}

export default GetStarted

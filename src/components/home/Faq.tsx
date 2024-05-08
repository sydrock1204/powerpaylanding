import gsap from 'gsap'
import { useRef, useEffect } from 'react'

import GeneralQuestions from './GeneralQuestion'

const Faq = () => {
  const componentRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3).to('.title6', { opacity: 1, duration: 1 }).to('.faqheader', { opacity: 1, duration: 0.5 })
      } else {
        tl.set('.title6', { opacity: 0 })
        tl.set('.faqheader', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <section ref={componentRef}>
      <div className="mb-[6.5rem] mt-20 flex justify-center">
        <div className="flex w-full flex-col items-center gap-3 text-center">
          <h1 className="title6 h-12 text-center text-3xl font-[500] text-white opacity-0 md:text-left md:text-5xl">Frequently Asked Questions</h1>

          <div className="faqheader mt-20 flex w-full flex-col items-center justify-center opacity-0 md:flex-row">
            <div className="w-full md:w-2/3 ">
              <GeneralQuestions />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq

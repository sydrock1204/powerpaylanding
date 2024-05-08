import gsap from 'gsap'
import { useRef, useEffect, SetStateAction, useState } from 'react'

import CarouselGallery from './CarouselGallery'
import CarouselGallery2 from './CarouselGallery2'

const Security = () => {
  const componentRef = useRef(null)
  const [activeTab, setActiveTab] = useState('security')

  const handleClick = (tab: SetStateAction<string>) => {
    setActiveTab(tab)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(0.3)
          .to('.title3', { opacity: 1, duration: 1, ease: 'power1.inOut' })
          .to('.body3', { opacity: 1, duration: 0.5, ease: 'power1.inOut' })
      } else {
        tl.set('.title3', { opacity: 0.0 })
        tl.set('.body3', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])

  return (
    <div ref={componentRef} className="mt-20 flex flex-col items-center text-center">
      <h1 className="title3 mb-5 h-[2.5rem] font-bold opacity-0">Your Security Is Our Number One Priority</h1>
      <div className="body3 mt-6 mb-10 space-x-6 px-1 opacity-0">
        <button
          className={`rounded px-4 py-2 ${activeTab === 'security' ? 'bg-white text-black transition duration-300 hover:bg-gray-200' : 'bg-transparent text-gray-600 transition duration-300 hover:bg-gray-300'}`}
          onClick={() => handleClick('security')}
        >
          Security
        </button>
        <button
          className={`rounded px-4 py-2 ${activeTab === 'risk' ? 'bg-white text-black transition duration-300 hover:bg-gray-200' : 'bg-transparent text-gray-600 transition duration-300 hover:bg-gray-300'}`}
          onClick={() => handleClick('risk')}
        >
          Risk Management
        </button>
      </div>
      {activeTab == 'security' ? <CarouselGallery /> : <CarouselGallery2 />}
    </div>
  )
}

export default Security

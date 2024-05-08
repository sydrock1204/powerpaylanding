import gsap from 'gsap'
import { useRef, useEffect, JSXElementConstructor, ReactElement, ReactNode, ReactPortal } from 'react'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

const CarouselGallery = () => {
  const componentRef = useRef(null)
  const SecurityBox = [
    {
      heading: 'Compliance and regulation',
      content:
        "We adhere to all relevant regulations and compliance standards to ensure the safety and security of our clients' investments. Our compliance team continuously monitors changes in regulations and updates our processes accordingly.",
    },
    {
      heading: 'European based regulated company ',
      content:
        'As a European licensed entity we have to undergo monthly audit checks and risk assessments to validate security of our customer fund',
    },
    {
      heading: 'Security through out the trade cycle',
      content:
        'We constantly monitor and check our infrastructure for any possible vulnerability and provide insurance on all our client funds.',
    },
  ]

  const settings = {
    dots: true,
    dotsClass: 'slick-dots line-indicator',
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: true,
        },
      },
    ],

    customPaging: (
      i:
        | string
        | number
        | boolean
        | ReactElement<unknown, string | JSXElementConstructor<unknown>>
        | Iterable<ReactNode>
        | ReactPortal
        | null
        | undefined
    ) => <div className="mt-3 text-xs opacity-0">{i}</div>,
  }

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const entry = entries[0]
      const tl = gsap.timeline()
      if (entry.isIntersecting) {
        // You can perform actions here, like animation or data fetching
        tl.delay(1.6).to('.caroubody', { opacity: 1, duration: 0.3, ease: 'power1.in' })
      } else {
        tl.set('.caroubody', { opacity: 0 })
      }
    })
    if (componentRef.current) observer.observe(componentRef.current)

    return () => observer.disconnect()
  }, [componentRef])
  return (
    <div ref={componentRef} className="caroubody mt-10 h-[500px] w-full opacity-0">
      <Slider {...settings} className="w-full">
        {SecurityBox.map((box, index) => (
          <div
            className="xl-lg:px-1 group relative mb-10 max-w-[520px] cursor-pointer overflow-hidden px-3 opacity-90 outline-none transition-opacity duration-300 ease-in-out hover:opacity-100 md:mb-5 md:min-w-[400px]"
            key={index}
          >
            <div className="w-full rounded-3xl border border-transparent p-8 transition-all duration-200 hover:border-white">
              <h2 className="text-left text-xl font-semibold">{box.heading}</h2>
              <p className="mt-5 h-[8rem] overflow-y-auto text-left text-sm font-light text-white">{box.content}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}

export default CarouselGallery

import cx from 'classnames'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'

import imgBTC from '@/assets/images/btc.svg'
import imgETH from '@/assets/images/eth.svg'
import imgTee from '@/assets/images/tee.svg'
import imgTransfer from '@/assets/images/transfer.svg'
import imgUSDC from '@/assets/images/usdc.svg'
import imgZee from '@/assets/images/zee.svg'

interface Props {
  variant?: 'btc' | 'eth' | 'usdc' | 'tee' | 'trans' | 'zee'
  position?: string
  className?: string
}

interface ImageData {
  img: string
  alt: string
}

const data: { [key: string]: ImageData } = {
  btc: {
    img: imgBTC,
    alt: 'btc',
  },
  eth: {
    img: imgETH,
    alt: 'ethereum',
  },
  tee: {
    img: imgTee,
    alt: 'tee',
  },
  usdc: {
    img: imgUSDC,
    alt: 'usdc',
  },
  trans: {
    img: imgTransfer,
    alt: 'transfer',
  },
  zee: {
    img: imgZee,
    alt: 'zee',
  },
}

const EffectShimmering = ({ variant = 'btc', position, className }: Props) => {
  const effectTarget = useRef<HTMLDivElement>(null)
  const randomDuration: number = Math.random() * 1 + 1
  const randomOpacity: number = Math.random() * 0.5
  const tlNormal = gsap.timeline({ repeat: -1 })
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (effectTarget.current) {
      tlNormal
        .to(effectTarget.current, { duration: randomDuration, opacity: randomOpacity })
        .to(effectTarget.current, { duration: randomDuration, opacity: 0.5 })
      tlNormal.play() // Start the animation on initial render
    }

    return () => {
      tlNormal.pause() // Cleanup timeline on unmount
    }
  }, [])

  useEffect(() => {
    const handleMouseEnter = () => {
      setOpacity(1) // Set opacity to 1 on mouse enter
      tlNormal.pause() // Pause the normal animation
    }

    const handleMouseLeave = () => {
      setOpacity(randomOpacity) // Set opacity to random value on mouse leave
      tlNormal.resume() // Resume the normal animation
    }

    if (effectTarget.current) {
      effectTarget.current.addEventListener('mouseenter', handleMouseEnter)
      effectTarget.current.addEventListener('mouseleave', handleMouseLeave)
    }

    return () => {
      if (effectTarget.current) {
        effectTarget.current.removeEventListener('mouseenter', handleMouseEnter)
        effectTarget.current.removeEventListener('mouseleave', handleMouseLeave)
      }
    }
  }, [effectTarget])

  return (
    <div
      ref={effectTarget}
      className={cx('absolute hover:cursor-pointer', position, className, 'effectshimmering')}
      style={{ opacity }}
    >
      <img src={data[variant]?.img} alt={data[variant]?.alt || 'cryptocurrency'} />
    </div>
  )
}

export default EffectShimmering

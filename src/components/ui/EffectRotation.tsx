import cx from 'classnames'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'

import imgADA from '@/assets/images/cryptosymbols/ada_dark.svg'
import imgAVAX from '@/assets/images/cryptosymbols/avax_dark.svg'
import imgBNB from '@/assets/images/cryptosymbols/bnb_dark.svg'
import imgBTC from '@/assets/images/cryptosymbols/btc_dark.svg'
import imgETH from '@/assets/images/cryptosymbols/eth_dark.svg'
import imgSOL from '@/assets/images/cryptosymbols/sol_dark.svg'
import imgTerra from '@/assets/images/cryptosymbols/terra_dark.svg'
import imgXRP from '@/assets/images/cryptosymbols/xrp_dark.svg'

interface Props {
  label?: string
  variant?: 'btc' | 'eth' | 'bnb' | 'sol' | 'ada' | 'xrp' | 'avax' | 'terra'
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
    alt: 'eth',
  },
  bnb: {
    img: imgBNB,
    alt: 'bnb',
  },
  sol: {
    img: imgSOL,
    alt: 'sol',
  },
  xrp: {
    img: imgXRP,
    alt: 'xrp',
  },
  ada: {
    img: imgADA,
    alt: 'ethereum',
  },
  avax: {
    img: imgAVAX,
    alt: 'avax',
  },
  terra: {
    img: imgTerra,
    alt: 'terra',
  },
}

const EffectCrypto = ({ variant = 'btc', position, className }: Props) => {
  const effectTarget = useRef<HTMLDivElement>(null)
  const randomDuration = Math.floor(Math.random() * 160) + 1440
  const randomDirection = randomDuration === 1520 ? 1 : Math.sign(randomDuration - 1520)

  useEffect(() => {
    if (effectTarget.current) {
      // Check if element exists before animation
      gsap.to(effectTarget.current, {
        rotate: 36000 * randomDirection,
        duration: randomDuration,
        ease: 'none',
        repeat: 1000,
      })
    }
  }, [])

  // variant = 'btc';

  return (
    <div ref={effectTarget} className={cx('absoulte', position, className, 'effectcrypto')}>
      <img src={data[variant]?.img} alt={data[variant]?.alt || 'cryptocurrency'} />
    </div>
  )
}

export default EffectCrypto

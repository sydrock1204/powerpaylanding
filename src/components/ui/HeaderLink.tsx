/* eslint-disable prettier/prettier */
import cx from 'classnames'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

interface Props {
  label: string
  to: string
  className?: string
  hoverColor?: string
  animationDuration?: number
  isActive?: boolean,
  onClick?: () => void
}

export const HeaderLink = ({ label, to, className, hoverColor = '#007bff', animationDuration = 300, isActive, onClick }: Props) => {
  const effectTarget = useRef<HTMLAnchorElement>(null)
  const selectColor = isActive? 'border-b-4' : ''

  useEffect(() => {
    const timeline = gsap.timeline({ paused: true })
    timeline.to(effectTarget.current, { color: hoverColor, duration: animationDuration / 1000, ease: 'power2.inOut' }) // GSAP animation

    const handleMouseEnter = () => timeline.play()
    const handleMouseLeave = () => timeline.reverse()

    effectTarget.current?.addEventListener('mouseenter', handleMouseEnter)
    effectTarget.current?.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      timeline.kill() // Cleanup GSAP animation on unmount
      effectTarget.current?.removeEventListener('mouseenter', handleMouseEnter)
      effectTarget.current?.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [effectTarget, hoverColor, animationDuration])

  return (
    <Link ref={effectTarget} className={`${cx(className)} ${selectColor}`} to={to} onClick={onClick}>
      {label}
    </Link>
  )
}

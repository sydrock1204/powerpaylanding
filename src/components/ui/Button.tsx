import cx from 'classnames'
import { MouseEventHandler, forwardRef } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
  label?: string
  variant: 'primary' | 'secondary'
  className?: string
  link?: string
  onClick?: MouseEventHandler<HTMLButtonElement>
}

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ label, variant = 'primary', className, link, onClick }: Props, ref) => {
    const backgroundClass = cx({
      'bg-[#1E66D0] hover:bg-transparent transition-all ease-linear duration-300': variant === 'primary',
      'bg-transparent border border-white hover:bg-white hover:text-black transition-all ease-linear duration-300':
        variant === 'secondary',
    })

    const textColorClass = cx('text-white')

    const navigate = useNavigate()

    const handleClick: MouseEventHandler<HTMLButtonElement> = event => {
      onClick?.(event)
      link && navigate(link)
    }

    return (
      <button
        className={`${className} ${backgroundClass} ${textColorClass} rounded-lg px-6 py-2`}
        onClick={handleClick}
        ref={ref}
      >
        <span>{label}</span>
      </button>
    )
  }
)

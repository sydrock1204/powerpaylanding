import { useState } from 'react'
import { Link } from 'react-router-dom'

import { Button } from './ui/Button'
import { HeaderLink } from './ui/HeaderLink'
import logo from '@/assets/images/logo.svg'

const NavBar = () => {
  const [currentUrl, setCurrentUrl] = useState(window.location.pathname)

  const handleLinkClick = (url: string) => {
    setCurrentUrl(url)
  }
  return (
    <div className="flex w-full items-center justify-between rounded-full px-[40px] py-[20px] backdrop-blur-lg">
      <Link to="/" onClick={() => handleLinkClick('/')}>
        <img src={logo} className="logo" alt="logo" />
      </Link>
      <div className="flex gap-12">
        <HeaderLink className="text-white transition duration-300" isActive={currentUrl === '/earn'} to="/earn" label="Earn" onClick={() => handleLinkClick('/earn')} />
        <HeaderLink className="text-white transition duration-300" isActive={currentUrl === '/exchange'} to="/exchange" label="Exchange" onClick={() => handleLinkClick('/exchange')} />
      </div>
      <div className="flex gap-4">
        <Button label="Login" variant="secondary" link="/login" />
        <Button label="Sign Up" variant="primary" link="/signup" />
      </div>
    </div>
  )
}

export default NavBar

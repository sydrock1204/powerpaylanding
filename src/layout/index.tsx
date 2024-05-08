import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'

interface Props {
  children?: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <div className="relative flex min-h-screen flex-col items-center bg-black">
      <Header />
      {children}
      <Footer />
    </div>
  )
}

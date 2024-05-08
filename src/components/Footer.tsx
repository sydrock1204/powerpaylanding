import cx from 'classnames'
import { CiFacebook, CiInstagram } from 'react-icons/ci'
import { FaSnapchatSquare } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

import PowerPayLogo from '@/assets/images/logo.svg'
import MFRPLogo from '@/assets/images/MFRP.svg'

const Footer = () => {
  const linkStyle = cx('text-white text-[22px] font-[600]')
  const subLinkStyle = cx('text-gray-300 text-[16px] font-normal')

  return (
    <footer className="w-full bg-[#0F0F0F]">
      <div className="mx-auto w-full max-w-[1440px] p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <a href="" className="flex items-center">
              <img src={MFRPLogo} alt="PowerPay MFRP Logo" width={280} height={280} />
            </a>
            <div className="w-[300px] lg:w-[610px]">
              <p className="mb-2 text-sm font-light">
                Powerpay Sp. z.o.o is a Polish Limited liabiliyy company with a registration of activities in the field of virtual currencies under the number RDWW-1064.
              </p>
              <Link className="cursor-pointer text-sm font-light text-white" to={'https://shorturl.at/asGLP'}>
                https://www.slaskie.kas.gov.pl/
              </Link>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-12 sm:grid-cols-4 sm:gap-12">
            <div>
              <h2 className={linkStyle}>About Us</h2>
              <ul className="font-medium">
                <li className="">
                  <Link to={'/earn'} className={subLinkStyle}>
                    EARN
                  </Link>
                </li>
                <li className="">
                  <Link to={'/exchange'} className={subLinkStyle}>
                    EXCHANGE
                  </Link>
                </li>
                <li className="">
                  <Link to={'/exchange'} className={subLinkStyle}>
                    Legal
                  </Link>
                </li>
                <li className="">
                  <Link to={'/exchange'} className={subLinkStyle}>
                    Price
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={linkStyle}>Services</h2>
              <ul className="font-medium">
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    App Download
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    Buy Crypto
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    Sell Crypto
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={linkStyle}>Learn</h2>
              <ul className="font-medium">
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    What is Crypto?
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    Crypto Prices
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    Community
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className={linkStyle}>Purchase</h2>
              <ul className="font-medium">
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    USDT
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    BTC
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    USDC
                  </a>
                </li>
                <li className="">
                  <a href="#" className={subLinkStyle}>
                    LTC
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-4" />
        <div className="gap-6 sm:flex sm:items-center sm:justify-between">
          <div className="relative mt-2 mb-0.5 flex w-72 gap-x-4">
            <label className="sr-only">Email address</label>
            <input className="min-w-0 flex-auto rounded-md border-0 bg-white py-1.5 pl-3.5 pr-24 text-black shadow-sm sm:text-sm sm:leading-6" placeholder="Enter your Email" />
            <button type="submit" className="focus-visible: absolute right-[5px] mt-[5px] flex-none rounded-md bg-blue-600 px-3.5 py-1 text-sm text-white hover:bg-blue-400">
              Subscribe
            </button>
          </div>
          <span className="">
            <Link to={'/'}>
              <img src={PowerPayLogo} alt="PowerPay logo" className="my-5 w-40 md:my-0" />
            </Link>
          </span>
          <div className="mt-4 flex flex-col gap-4 sm:mt-0 sm:flex-row sm:justify-center">
            <a className="cursor-pointer text-white">
              <CiFacebook size={40} />
            </a>
            <a className="cursor-pointer text-white">
              <CiInstagram size={40} />
            </a>
            <a className="cursor-pointer text-white">
              <FaSquareXTwitter size={40} />
            </a>
            <a className="cursor-pointer text-white">
              <FaSnapchatSquare size={40} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

import NavBar from './Navbar'

const Header = () => {
  return (
    <div className="item-center fixed top-0 z-[999] flex w-full justify-center px-[116px] py-[40px] transition-all duration-100 ease-in md:sticky">
      <NavBar />
    </div>
  )
}

export default Header

import Choose from '../../components/home/Choose'
import Content from '../../components/home/Content'
import Faq from '../../components/home/Faq'
import Finance from '../../components/home/Finance'
import Hero from '../../components/home/Hero'
import Others from '../../components/home/Others'
import Security from '../../components/home/Security'

const HomePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <Content />
      <Others />
      <Choose />
      <Security />
      <Finance />
      <Faq />
    </div>
  )
}

export default HomePage

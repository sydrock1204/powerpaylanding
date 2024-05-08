import Choose from '../../components/earn/Choose'
import Earn from '../../components/earn/Earn'
import GetStarted from '../../components/earn/GetStarted'
import Growth from '../../components/earn/Growth'
import Interest from '../../components/earn/Interest'
import LimitedTime from '../../components/earn/LimitedTime'
import NextStep from '../../components/earn/NextStep'
import Ways from '../../components/earn/Ways'
import Faq from '../../components/home/Faq'

const EarnPage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Earn />
      <Choose />
      <Ways />
      <Growth />
      <Interest />
      <LimitedTime />
      <GetStarted />
      <NextStep />
      <Faq />
    </div>
  )
}

export default EarnPage

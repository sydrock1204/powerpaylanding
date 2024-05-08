import GetStarted from '../../components/earn/GetStarted'
import ExchangeRate from '../../components/exchange/ExchangeRate'
import Swap from '../../components/exchange/Swap'
import SwapChoose from '../../components/exchange/SwapChoose'
import TradingPairs from '../../components/exchange/TradingPairs'
import Faq from '../../components/home/Faq'

const ExchangePage = () => {
  return (
    <div className="w-full overflow-hidden">
      <Swap />
      <SwapChoose />
      <ExchangeRate />
      <TradingPairs />
      <GetStarted />
      <Faq />
    </div>
  )
}

export default ExchangePage

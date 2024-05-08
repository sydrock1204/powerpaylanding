import { Button } from '../ui/Button'
import EffectRotation from '../ui/EffectRotation'
import imgLoading from '@/assets/images/loading.svg'
import imgRect from '@/assets/images/rectangle.svg'
import imgScreen from '@/assets/images/Screen_Ele.png'

const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="relative z-10 mx-auto mt-8">
          <div>
            <img src={imgRect} width={470} height={208} className="max-w-[350px] lg:max-w-[470px]" alt="Rectangle" />
          </div>
          <div className="flex flex-col justify-center">
            <div className="absolute left-[15px] top-[60px] lg:left-[42px]">
              <img src={imgScreen} width={404} height={32} alt="screen" className="max-w-[320px] lg:max-w-[470px]" />
            </div>
            <div className="absolute left-[-11px] top-[143px] flex h-[201px] w-[373px] flex-col items-center justify-center rounded-lg border-4 border-white bg-black p-8 text-white lg:left-[-68px] lg:top-[126px] lg:h-[311px] lg:w-[604px] hover:cursor-pointer hover:bg-primary-blue">
              <h1 className="mb-4 text-center text-2xl font-medium lg:text-4xl">Where Crypto Grows</h1>
              <p className="text-md text-center font-extralight lg:text-lg">
                Enjoy daily passive income on 15+ crypto assets, on your own terms. Click on Get Started to start your
                journey with us starting today.
              </p>
            </div>
            <div className="absolute left-[50px] top-[382px] lg:left-[80px] lg:top-[505px]">
              <img src={imgLoading} width={320} height={32} alt="image3" className="max-w-[250px] lg:max-w-[470px]" />
            </div>
            <Button
              label="Get Started"
              variant="primary"
              className="absolute left-[14px] top-[479px] w-[320px] text-[18px] lg:left-[80px] lg:top-[645px]"
            />
          </div>
        </div>
        <div className="relative">
          <EffectRotation variant="btc" position="absolute left-[25%] -top-[624px] w-[100px]" />
          <EffectRotation variant="eth" position="absolute left-[1400px] -top-[680px]" />
          <EffectRotation variant="bnb" position="absolute left-[1300px] -top-[190px]" />
          <EffectRotation variant="sol" position="absolute left-[280px] -top-[200px]" />
          <EffectRotation variant="xrp" position="absolute left-[1480px] -top-[440px]" />
          <EffectRotation variant="ada" position="absolute left-[130px] -top-[540px]" />
          <EffectRotation variant="avax" position="absolute left-[1610px] -top-[220px]" />
          <EffectRotation variant="terra" position="absolute left-[240px] -top-[720px]" />
        </div>
      </div>
    </>
  )
}

export default Hero

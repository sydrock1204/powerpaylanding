import SingleQuestion from '../ui/Question'

const QAs = [
  {
    id: 1,
    title: 'What products does PowerPay provide?',
    content: [
      {
        info: 'POWERPAY allows its customers to exchange up to 70 currencies into USDT and USDC at low costs and quick settlement times. Powerpay also allows customers to lend their USDT and USDC to earn daily interest for a period of up to 30 days with zero lock up.',
      },
    ],
  },
  {
    id: 2,
    title: 'How do I buy bitcoin on PowerPay?',
    content: [
      {
        info: 'POWERPAY is connected to a number of exchanges and provides the customer access to the best prices on BTC,ETH and other popular crypto currencies at zero fees.',
      },
    ],
  },
  {
    id: 3,
    title: 'Where is PowerPay based?',
    content: [
      {
        info: 'Powerpay Sp. z.o.o is a polish based limited liability company and fully licensed and regulated by the Polish Ministry of Justice.',
      },
    ],
  },
  {
    id: 4,
    title: 'Can U.S. citizens use PowerPay?',
    content: [
      {
        info: 'Unfortunately, Powerpay cannot accept U.S citizens at this moment.',
      },
    ],
  },
  {
    id: 5,
    title: 'Is Powerpay Safe?',
    content: [
      {
        info: 'Powerpay is a licensed and regulated European entity which requires a monthly audit to validate and reconcile customer funds held. this exercise has to be undergone by an external auditor and submission to the Ministry of Finance.',
      },
    ],
  },
  {
    id: 6,
    title: 'How do I open an account with Powerpay?',
    content: [
      {
        info: 'The onboarding is quite simple and customers can easily fill in their details on the web application, submit their documents for KYC and upon approval fund their accounts.',
      },
    ],
  },
]
const GeneralQuestions = () => {
  return (
    <div>
      <div className="container-faq">
        <section className="info">
          {QAs.map(question => (
            <SingleQuestion key={question.id} {...question} />
          ))}
        </section>
      </div>
    </div>
  )
}

export default GeneralQuestions

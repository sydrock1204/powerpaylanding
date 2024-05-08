import { useState } from 'react'

import { Button } from '../ui/Button'
import imgLineChart from '@/assets/images/LineChart.png'

const CalculateInterest = () => {
  const [initialDeposit, setInitialDeposit] = useState('')
  const [contribution, setContribution] = useState('')
  const [yearOfGrowth, setYearOfGrowth] = useState('')
  const [contributionFrequency, setContributionFrequency] = useState('monthly')
  const [interestRate, setInterestRate] = useState('')
  const [compoundFrequency, setCompoundFrequency] = useState('yearly')
  const [showResults, setShowResults] = useState(false)
  const [totalAmount, setTotalAmount] = useState('')
  const [totalInterestEarned, setTotalInterestEarned] = useState('')
  const [allTimeRateOfReturn, setAllTimeRateOfReturn] = useState('')
  const [currency, setCurrency] = useState('USD')

  const calculateInterest = () => {
    const principal = parseFloat(initialDeposit)
    const rate = parseFloat(interestRate) / 100
    const years = parseInt(yearOfGrowth)
    let n = 1

    switch (compoundFrequency) {
      case 'quarterly':
        n = 4
        break
      case 'monthly':
        n = 12
        break
    }

    const totalAmount = principal * Math.pow(1 + rate / n, n * years)
    const totalInterestEarned = totalAmount - principal
    const allTimeRateOfReturn = (totalInterestEarned / principal) * 100

    setTotalAmount(totalAmount.toFixed(2))
    setTotalInterestEarned(totalInterestEarned.toFixed(2))
    setAllTimeRateOfReturn(allTimeRateOfReturn.toFixed(2))
    setShowResults(true)
  }

  const handleCalculateClick = () => {
    calculateInterest()
  }

  return (
    <div className="w-full rounded bg-black p-2 text-white md:p-8">
      <div>
        <label htmlFor="currency" className="my-3 block font-[500] text-white">
          Currency
        </label>
        <div className="my-6 space-x-3 px-1">
          <button
            className={`rounded px-4 py-2 text-xl font-bold ${currency === 'USD' ? 'bg-white text-black transition duration-300 hover:bg-gray-200' : 'bg-transparent text-gray-600 transition duration-300 hover:bg-gray-300'}`}
            onClick={() => setCurrency('USD')}
          >
            $
          </button>
          <button
            className={`rounded px-4 py-2 text-xl font-bold ${currency === 'EUR' ? 'bg-white text-black transition duration-300 hover:bg-gray-200' : 'bg-transparent text-gray-600 transition duration-300 hover:bg-gray-300'}`}
            onClick={() => setCurrency('EUR')}
          >
            €
          </button>
          <button
            className={`rounded px-4 py-2 text-xl font-bold ${currency === 'GBP' ? 'bg-white text-black transition duration-300 hover:bg-gray-200' : 'bg-transparent  text-gray-600 transition duration-300 hover:bg-gray-300'}`}
            onClick={() => setCurrency('GBP')}
          >
            £
          </button>
        </div>
      </div>
      <div className="grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3">
        <div className="w-full">
          <label htmlFor="initialDeposit" className="my-3 block font-[500] text-white">
            Initial Deposit
          </label>
          <input
            type="number"
            id="initialDeposit"
            value={initialDeposit}
            onChange={e => setInitialDeposit(e.target.value)}
            placeholder={`${currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}15000`}
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          />
        </div>

        <div className="w-full">
          <label htmlFor="initialDeposit" className="my-3 inline-block font-[500] text-white">
            Contribution
          </label>
          <span className="relative left-24 inline-block text-[#545353]">optional</span>
          <input
            type="number"
            id="contribution"
            value={contribution}
            onChange={e => {
              setContribution(e.target.value)
            }}
            placeholder={`${currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}15000`}
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          />
        </div>

        <div>
          <label htmlFor="ContributionFrequency" className="my-3 block font-[500] text-white">
            Contribution Frequency
          </label>
          <select
            id="contributionFrequency"
            value={contributionFrequency}
            onChange={e => setContributionFrequency(e.target.value)}
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          >
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>

        <div>
          <label htmlFor="yearOfGrowth" className="my-3 block font-[500] text-white">
            Year of Growth
          </label>
          <input
            type="number"
            id="yearOfGrowth"
            value={yearOfGrowth}
            onChange={e => setYearOfGrowth(e.target.value)}
            placeholder="10 Years"
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="interestRate" className="my-3 block font-[500] text-white">
            Annual Interest Rate
          </label>
          <input
            type="number"
            id="interestRate"
            value={interestRate}
            onChange={e => setInterestRate(e.target.value)}
            placeholder="5.50%"
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          />
        </div>
        <div>
          <label htmlFor="compoundFrequency" className="my-3 block font-[500] text-white">
            Compound Frequency
          </label>
          <select
            id="compoundFrequency"
            value={compoundFrequency}
            onChange={e => setCompoundFrequency(e.target.value)}
            className="w-full rounded-lg border border-white bg-black p-2 font-[500] text-[#A3A3A3] focus:outline-none"
          >
            <option value="yearly">Yearly</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <Button label="Calculate" variant="primary" className="mt-10 rounded-md md:w-[340px]" onClick={handleCalculateClick} />
        {showResults && (
          <>
            {/* Results */}
            <hr />
            <h1 className="mt-10 text-white">Interest calculation for {yearOfGrowth} years</h1>
            <div className="mt-5 grid w-[350px] animate-fadeIn grid-cols-1 gap-4 gap-x-10 rounded-lg bg-[#0F0F0F] p-10 text-white opacity-0 md:w-[1000px] md:grid-cols-2">
              {/* First column */}
              <div className="flex flex-col justify-center">
                <hr />
                <div className="mx-2 my-4">
                  <p className="text-sm">Future investment value</p>
                  <p className="text-3xl font-semibold text-white">
                    {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'} {totalAmount}
                  </p>
                </div>
                <div className="mx-2 mb-4">
                  <p className="text-sm">Total Interest Earned</p>
                  <p className="text-3xl font-semibold text-white">
                    {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}
                    {totalInterestEarned}
                  </p>
                </div>
                <div className="mx-2 mb-4">
                  <p className="text-sm">Initial balance</p>
                  <p className="text-3xl font-semibold text-blue-600">
                    {currency === 'USD' ? '$' : currency === 'EUR' ? '€' : '£'}
                    {initialDeposit}
                  </p>
                </div>
                <hr className="hidden lg:block" />
              </div>
              {/* Second column */}
              <div className="flex flex-col">
                <hr className="" />
                <div className="mb-2 mt-3">
                  <p className="text-sm">Interest Rate (yearly)</p>
                  <p className="text-3xl font-semibold text-white">{interestRate}%</p>
                </div>

                <div>
                  <p className="text-sm">All time rate of return</p>
                  <p className="text-3xl font-semibold text-white">{allTimeRateOfReturn}%</p>
                </div>
                <hr className="mt-[15px] md:mt-[100px]" />
              </div>
            </div>
          </>
        )}
      </div>
      <hr className="-mx-[140px] my-20 border-gray-800 lg:my-20"></hr>
      <div className="-mx-[160px] flex flex-col items-center justify-center">
        <img src={imgLineChart} width={1400} height={400} />
      </div>
    </div>
  )
}

export default CalculateInterest

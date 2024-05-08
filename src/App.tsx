import { useEffect } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'

import { Layout } from './layout'
import EarnPage from './pages/earn'
import ExchangePage from './pages/exchange'
import HomePage from './pages/home'

const ScrollTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const App = () => {
  return (
    <Layout>
      <ScrollTop />
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/earn" element={<EarnPage />} />
        <Route path="/exchange" element={<ExchangePage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Layout>
  )
}

export default App

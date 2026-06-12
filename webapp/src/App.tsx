import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './components/Dashboard'
import { SustainabilityDashboard } from './components/SustainabilityDashboard'
import { Navbar } from './components/Navbar'
import './styles/storelytics.css'

export const App = () => (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/sustainability" element={<SustainabilityDashboard />} />
    </Routes>
  </BrowserRouter>
)

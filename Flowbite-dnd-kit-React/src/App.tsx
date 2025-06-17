import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { ProductionDashboard } from './pages/ProductionDashboard'
import { ProductionScheduler } from './pages/ProductionScheduler'
import { ResourceManagement } from './pages/ResourceManagement'
import { ProductionOrders } from './pages/ProductionOrders'
import { FlowbiteShowcase } from './pages/FlowbiteShowcase'
import { DndKitShowcase } from './pages/DndKitShowcase'
import { ShowcaseThemeProvider } from './components/ShowcaseTheme'

function App() {
  return (
    <ShowcaseThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<ProductionDashboard />} />
          <Route path="/scheduler" element={<ProductionScheduler />} />
          <Route path="/orders" element={<ProductionOrders />} />
          <Route path="/resources" element={<ResourceManagement />} />
          <Route path="/flowbite" element={<FlowbiteShowcase />} />
          <Route path="/dnd-kit" element={<DndKitShowcase />} />
        </Routes>
      </Router>
    </ShowcaseThemeProvider>
  )
}
export default App

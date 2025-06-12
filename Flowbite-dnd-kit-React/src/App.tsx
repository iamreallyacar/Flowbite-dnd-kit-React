import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { FlowbiteShowcase } from './pages/FlowbiteShowcase'
import { DndKitShowcase } from './pages/DndKitShowcase'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/flowbite" element={<FlowbiteShowcase />} />
        <Route path="/dnd-kit" element={<DndKitShowcase />} />
      </Routes>
    </Router>
  )
}
export default App

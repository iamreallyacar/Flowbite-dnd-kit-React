import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { MainPage } from './pages/MainPage'
import { FlowbiteShowcase } from './pages/FlowbiteShowcase'
import { DndKitShowcase } from './pages/DndKitShowcase'
import { ShowcaseThemeProvider } from './components/ShowcaseTheme'

function App() {
  return (
    <ShowcaseThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/flowbite" element={<FlowbiteShowcase />} />
          <Route path="/dnd-kit" element={<DndKitShowcase />} />
        </Routes>
      </Router>
    </ShowcaseThemeProvider>
  )
}
export default App

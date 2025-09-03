
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Technology from './pages/Technology'
import Business from './pages/Business'
import About from './pages/About'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900 font-serif">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/business" element={<Business />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App

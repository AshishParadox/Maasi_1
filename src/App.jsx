import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import AboutUs from './components/AboutUs'
import HireMaasi from './components/HireMaasi'
import ContactUs from './components/ContactUs'
import MaasiProfile from './components/MaasiProfile'
import Footer from './components/Footer'



function App() {
 

  return (
    <Router>
      <div className="App">
        <Navbar/>

      

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/hire" element={<HireMaasi />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/maasi/:id" element={<MaasiProfile />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  )
}

export default App

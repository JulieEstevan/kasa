import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import "./style/main.css"
import Home from './pages/Home'
import Housing from './pages/Housing'
import Error from './pages/Error'
import About from './pages/About'
import Header from './components/Header'
import Footer from './components/Footer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Fiche-Logement" element={<Housing />} />
        <Route path="/A-Propos" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
)
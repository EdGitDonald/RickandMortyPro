import { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Homepage from './pages/Homepage/Homepage'
import About from './pages/About/About'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Episodes from './pages/Episodes/Episodes'
import './App.css'
import CharacterDetails from './pages/CharacterDetails/CharacterDetails'
import ThemeContextProvider from './contexts/ThemeContext'




function App() {
  

  return (
    <BrowserRouter>
    <ThemeContextProvider>
      <Header />

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/about' element={<About />} />
        <Route path='/details/:characterId' element={<CharacterDetails />} />
        <Route path='/episodes' element={<Episodes />} />
      </Routes>

      <Footer />
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App

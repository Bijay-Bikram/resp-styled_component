import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Service from './pages/Service'
import Error from './pages/Error.jsx'
import Header from './components/Header'
import Footer from './components/Footer'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './GlobalStyle.js'
import GoToTop from './components/GoToTop.jsx'

const App = () => {
  const theme = {
    colors: {
      header: '#101313',
      text: '#0f0b0b',
      white: '#fff',
      black: "#212529",
      helper: "#8490ff",
      bg: '#f5f5f5',
      footer_bg: '#0a1435',
      btn: "rgb(98,84,243)",
      border: 'rgba(98,84,243,0.5)',
      hr: '#ffffff',
      gradient: "linear-gradient(93.12deg, #fcb045 0.52%, #fd1f8e 100%)",
      shadow: "rgba(0,0,0,0.02) 0px 1px 3px 0px,rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: 'rgba(0,0,0,0.16) 0px 1px 4px'
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='service' element={<Service />} />
          <Route path='about' element={<About />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <GoToTop />
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App

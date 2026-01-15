import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

export default App

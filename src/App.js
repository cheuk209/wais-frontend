import React from 'react'
import { Article, Brand, CTA, Navbar, Feature } from './components'
import { Footer, Features, Header, Quantise } from './containers'
import './App.css'

const App = () => {
  return (    
    <div className='App'>
      <div className='gradient__bg'>
        <div className='navbar'>
          <Navbar />
          <Header />
        </div>
      </div>
      <Brand />
      <div className='section__padding' />
      <Quantise />
      <Features />
      <CTA />
      <Footer />
    </div>
  )
}

export default App
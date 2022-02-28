import { React, useState } from 'react'
import './wais.css'
import App from '../App'
import { Navbar } from '../components'
import SubtestCalculation from './subtestCalculation'

const Wais = () => {


  return (
    <div className='App'>
      <div className='gradient__bg'>
        <div className='navbar'>
          <Navbar />
        </div>
      </div>
      <div className='wais section__padding'>
        <div>progress bar</div>
        <div>
          <SubtestCalculation />
        </div>
      </div>
      
    </div>
  )
}

export default Wais
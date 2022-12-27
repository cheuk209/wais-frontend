import React from 'react'
import './header.css'
import woman from '../../assets/woman-visiting.png'

function Header() {
  return (
    <div className='header section__padding' id='Home'>
      <div className='header-content'>
        <h1 className='gradient__text'>Psychology, powered by tech.</h1>
        <p>Learn how AI and technology can transform <br/> the way you work.  </p>
      </div>
      <div className='header-image'>
        <img src={woman} alt='woman visit' />
      </div>
    </div>
  )
}

export default Header
import React , { useState } from 'react'
import './navbar.css'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import logo from '../../assets/Quantise.png'
import { Link } from 'react-router-dom'

const Menu = () => {
  return (
    <>
    <p><Link to="/">Home</Link></p>
    <p><a href="#quantise">Who are we?</a></p>
    <p><a href='#features'>Features</a></p>
    <p><Link to='/wais'>WAIS-IV</Link></p>
    </>
  )
}

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='navbar-container'>
      <div className='navbar-links'>
        <div className="navbar-links-logo">
          <img src={logo} alt="Quantise" />  
        </div>
        <div className='links_container'>
          <Menu />
        </div>
      </div>
      <div className='navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign Up</button>
      </div>
      <div className='navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#fff' size={25} onClick={() => setToggleMenu(false)}></RiCloseLine>
          : <RiMenu3Line color='#fff' size={25} onClick={() => setToggleMenu(true)}></RiMenu3Line>
        }
        {toggleMenu && (
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <button type='button' className='sign-up'>Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}


export default Navbar
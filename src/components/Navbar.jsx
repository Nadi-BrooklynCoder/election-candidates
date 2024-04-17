import React from 'react';
import flag from '../assets/image.png'
import '../index.css'

const Navbar = () => {
  return (
    <nav className='navBar'>
      <ul>
      <img src= {flag} alt="flag" id='flag' />
      </ul>
    </nav>
  )
}

export default Navbar
import React, { useState } from 'react'
import Logo from '../Logo'
import Nav from '../Nav'
import './styles.scss';

const Header = () => {
  const [activeNav, setActiveNav] = useState(false)

  return (
    <header className='header'>
      <Logo />
      <Nav menuActive={activeNav} />
      <span
        className='nav-toggle'
        onClick={() => setActiveNav(!activeNav)}
      >
        MENU
      </span>
    </header>
  )
}

export default Header

import React from 'react'
import Logo from '../Logo'
import Social from '../Social'
import "./styles.scss"

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='footer'>
      <Logo footer={true} />
      <Social footer={true} />
      <p className='footer__copyright'>
        &copy;{currentYear} Kendall Whitman Photography. All rights reserved.
      </p>
    </footer>
  )
}

export default Footer

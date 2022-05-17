import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from '@reach/router'
import { navData } from '../../data'
import './styles.scss'

const Nav = ({ menuActive = false }) => {
  const { pathname } = useLocation()

  return (
    <nav className={`nav ${menuActive ? 'nav--active' : ''}`}>
      <ul className='nav__list'>
        {navData?.map((item) => (
          <li className='nav__item' key={item.url}>
            <Link
              to={item.url}
              activeClassName={pathname === item.url ? 'nav__link--active' : ''}
              className='nav__link'
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Nav

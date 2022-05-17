import React from 'react'
import { Link } from 'gatsby';
import { globalData } from '../../data';
import './styles.scss';

const Logo = ({ footer = false }) => (
  <Link to='/' className={`logo ${footer ? 'logo--footer' : ''}`}>
    <span className='logo__text'>
      {globalData.nameFirst}
    </span>
    <span className='logo__text logo__text--accent'>
      {globalData.nameSecond}
    </span>

    <span className='logo__text logo__text--mobile'>
      {globalData.nameFirstShort}
    </span>
    <span className='logo__text logo__text--accent logo__text--mobile'>
      {globalData.nameSecondShort}
    </span>
  </Link>
)

export default Logo

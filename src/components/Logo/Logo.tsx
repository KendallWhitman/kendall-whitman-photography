import React from 'react'
import { Link } from 'gatsby';
import { globalData } from '../../data';
import './styles.scss';

const Logo = ({ footer = false }) => (
  <Link to='/' className={`logo ${footer ? 'logo--footer' : ''}`}>
    <span className='logo__text'>
      {globalData.companyNameFirst}
    </span>
    <span className='logo__text logo__text--accent'>
      {globalData.companyNameSecond}
    </span>
  </Link>
)

export default Logo

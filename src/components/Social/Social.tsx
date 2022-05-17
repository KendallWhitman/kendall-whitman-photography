import React from 'react'
import { socialData } from '../../data'
import "./styles.scss"

const Social = ({ footer = false, dark = false }) => (
  <ul className={`social ${footer ? 'social--footer' : ''}`}>
    {socialData?.map(({ icon, iconDark, name, url }) => (
      <li className='social__item' key={url}>
        <a href={url} className='social__link'>
          <img
            src={dark ? iconDark : icon}
            alt={name}
            className='social__icon'
          />
        </a>
      </li>
    ))}
  </ul>
);

export default Social

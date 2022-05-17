import React from 'react'
import { useLocation } from '@reach/router'
import { navData } from '../../data'
import './styles.scss'

const PageTitle = () => {
  const { pathname } = useLocation()
  const page = navData.filter(item => item.url === pathname.replace(/\/$/g, ''))
  const title = page[0] ? page[0].label : ''

  if (title !== '') {
    return (
      <h2 className='headline'>{title}</h2>
    )
  }

  return null;
}

export default PageTitle

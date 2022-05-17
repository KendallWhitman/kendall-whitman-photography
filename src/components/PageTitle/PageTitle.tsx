import React from 'react'
import { useLocation } from '@reach/router'
import { navData } from '../../data'
import usePageTitle from '../../hooks/usePageTitle'
import './styles.scss'

const PageTitle = () => {
  const title = usePageTitle();

  if (title !== 'Home') {
    return (
      <h2 className='headline'>{title}</h2>
    )
  }

  return null;
}

export default PageTitle

import React from 'react'
import PropTypes from 'prop-types'
import Header from '../Header'
import Seo from '../Seo'
import Footer from '../Footer'
import PageTitle from '../PageTitle'
import './styles.scss'

const Layout = ({ children, constrained }) => (
  <>
    <Seo />
    <Header />
    <main className={`main ${constrained ? 'main--constrained' : ''}`}>
      <PageTitle />
      {children}
    </main>
    <Footer />
  </>
)

Layout.defaultProps = {
  constrained: false,
}

Layout.PropTypes = {
  constrained: PropTypes.bool,
}

export default Layout

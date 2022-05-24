import React from 'react'
import PropTypes from 'prop-types'
import {
  Footer,
  Header,
  PageTitle,
  Seo,
} from '..'
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

Layout.propTypes = {
  constrained: PropTypes.bool,
}

export default Layout

import React from 'react'
import PropTypes from "prop-types"
import Header from '../Header'
import Seo from '../Seo'
import Footer from '../Footer'
import PageTitle from '../PageTitle';

const Layout = ({ children, constrained = false, title }) => (
  <>
    <Seo title={title} />
    <Header />
    <main className={`main ${constrained ? 'main--constrained' : ''}`}>
      <PageTitle />
      {children}
    </main>
    <Footer />
  </>
)

Layout.defaultProps = {
  title: 'Home',
}

Layout.PropTypes = {
  title: PropTypes.string,
}

export default Layout

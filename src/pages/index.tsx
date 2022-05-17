import React from 'react'
import { graphql } from 'gatsby'
import HomePage from './home'
import '../styles/index.scss'

const IndexPage = ({ data }) => (
  <HomePage data={data} />
)

export default IndexPage;

export const pageQuery = graphql`
  query {
    allFile(
      filter: {relativeDirectory: {eq: "slideshow"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              quality: 100,
            )
          }
        }
      }
    }
  }
`

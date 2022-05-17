import React from "react"
import { graphql } from "gatsby"
import { Layout } from '../../components'
import { aboutData, globalData } from '../../data'
import './styles.scss'

const AboutPage = ({ data }) => {
  return (
    <Layout constrained>
      <div className='section'>
        <img
          src={data.allFile.edges[0].node.childImageSharp.fixed.src}
          alt={globalData.companyNameFirst}
          className='section__image'
        />
        <div>
          <h3 className='headline'>{globalData.companyNameFirst}</h3>
          <p className='text'>{aboutData.description}</p>
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query {
    allFile(
      filter: {relativePath: {eq: "profile.jpg"}}
    ) {
      edges {
        node {
          childImageSharp {
            fixed(
              fit: CONTAIN,
              height: 700,
              quality: 100,
            ) {
              src
            }
          }
        }
      }
    }
  }
`

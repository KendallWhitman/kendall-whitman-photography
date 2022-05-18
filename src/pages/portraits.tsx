import React from "react"
import { graphql } from 'gatsby'
import { Carousel, Layout } from "../components";

const PortraitPage = ({ data }) => {
  return (
    <Layout constrained>
      <Carousel
        images={data.fullRes.edges}
        thumbnails={data.thumbnails.edges}
      />
    </Layout>
  )
}

export default PortraitPage

export const pageQuery = graphql`
  query {
    thumbnails: allFile(
      filter: {relativeDirectory: {eq: "portraits"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              formats: [WEBP, JPG],
              placeholder: BLURRED,
              width: 300,
              height: 300,
              quality: 100,
            )
          }
        }
      }
    }
    fullRes: allFile(
      filter: {relativeDirectory: {eq: "portraits"}}
      sort: {fields: base, order: ASC}
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

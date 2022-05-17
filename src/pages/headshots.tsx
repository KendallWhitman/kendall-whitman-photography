import React from "react"
import { graphql } from 'gatsby'
import { Carousel, Layout } from "../components";

const HeadshotPage = ({ data }) => {
  return (
    <Layout constrained>
      <Carousel
        images={data.fullRes.edges}
        thumbnails={data.thumbnails.edges}
      />
    </Layout>
  )
}

export default HeadshotPage

export const pageQuery = graphql`
  query {
    thumbnails: allFile(
      filter: {relativeDirectory: {eq: "headshots"}}
      sort: {fields: base, order: ASC}
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
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
      filter: {relativeDirectory: {eq: "headshots"}}
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

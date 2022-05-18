import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import '../styles/index.scss'
import { Layout } from '../components';

const IndexPage = ({ data }) => {
  const [index, setIndex] = useState(0)
  const imageArr = data?.allFile?.edges
  const endOfImages = index < imageArr?.length - 1
  
  useEffect(() => {
    setTimeout(() => setIndex(endOfImages ? index + 1 : 0), 5000);
  }, [index]);

  return (
    <Layout>
      <GatsbyImage
        alt=''
        className='slideshow'
        image={getImage(imageArr[index].node)}
      />
    </Layout>
  )
}

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
              formats: [WEBP, JPG],
              placeholder: BLURRED,
              quality: 100,
            )
          }
        }
      }
    }
  }
`

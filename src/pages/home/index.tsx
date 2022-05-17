import React, { useEffect, useState } from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Layout } from '../../components';
import './styles.scss';

const HomePage = ({ data }) => {
  const [index, setIndex] = useState(0)
  const imageArr = data.allFile.edges
  const endOfImages = index < imageArr.length - 1
  
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

export default HomePage

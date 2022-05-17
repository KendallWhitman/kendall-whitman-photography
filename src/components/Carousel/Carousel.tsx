import React, { useState } from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import NextArrow from '../../images/icons/arrow-right.svg'
import PrevArrow from '../../images/icons/arrow-left.svg'
import Close from '../../images/icons/close-round.svg'
import './styles.scss'

interface Types {
  thumbnails: any
  images: any
  mosaic?: boolean
}

const Carousel = ({thumbnails, images, mosaic}: Types) => {
  const [pos, setPos] = useState(null)

  const toggleCarousel = (key: string) => {
    setPos(key)
    document.body.style.overflowY = key !== null ? 'hidden' : 'initial'
  }

  const changeImage = (dir: string = '') => {
    const imageCount = images.length - 1

    dir === 'next'
      ? setPos(pos !== imageCount ? pos + 1 : 0)
      : setPos(pos > 0 ? pos - 1 : imageCount)
  }

  const handleKeyPress = (e: any) => {
    switch (e.key) {
      case 'Escape':
        toggleCarousel(null)
        break
      case ' ':
        changeImage('next')
        break
      case 'ArrowRight':
        changeImage('next')
        break
      case 'ArrowLeft':
        changeImage()
        break
      default:
        return null
    }
  }

  if (typeof window !== `undefined`) {
    window.onkeydown = pos !== null ? handleKeyPress : null
  }

  return (
    <div className={`carousel ${mosaic ? 'carousel--mosaic' : ''}`}>
      {thumbnails?.map((image: any, key: string) => (
        <div
          className={`carousel__item ${mosaic ? 'carousel__item--mosaic' : ''}`}
          onClick={() => toggleCarousel(key)}
          key={key}
        >
          <GatsbyImage
            key={key}
            image={getImage(image.node)}
            alt=''
            className='carousel__thumbnail'
          />
        </div>
      ))}

      {pos !== null &&
        <div className='carousel__wrapper'>
          <img
            src={Close}
            alt="Close Carousel"
            className='carousel__button carousel__button--close'
            onClick={() => toggleCarousel(null)}
          />
          <img
            src={PrevArrow}
            alt="Previous"
            className='carousel__button carousel__button--prev'
            onClick={() => changeImage()}
          />
          <img
            src={images[pos].node.childImageSharp.fixed.src}
            alt="Carousel"
            className='carousel__image'
            onClick={() => changeImage('next')}
          />
          <img
            src={NextArrow}
            alt="Next"
            className='carousel__button carousel__button--next'
            onClick={() => changeImage('next')}
          />
        </div>
      }
    </div>
  )
}

export default Carousel

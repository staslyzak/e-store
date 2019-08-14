import React from 'react'
import './FrontPage.sass'
import { Typography } from '@material-ui/core'
import { Button, withStyles } from '@material-ui/core'
import Carousel from './Carousel/Carousel'
import CustomSwiper from './CustomSwiper/CustomSwiper'

const CustomTypography = withStyles(() => ({
  root: {
    marginBottom: 40
  }
}))(Typography)

const NewsButton = withStyles(() => ({
  root: {
    color: '#444',
    background: 'rgba(255, 255, 255, .8)',
    '&:focus': {
      background: 'rgba(255, 255, 255, .8)',
    },
    '&:hover': {
      background: 'rgba(255, 255, 255, .1)',
      color: '#fff'
    },
  }
}))(Button)

const carouselData = [
  { url: './images/slide_1.jpg', title: 'THE BEST CHOISE' },
  { url: './images/slide_2.jpg', title: 'THE BEST BIKE GEAR TO BUY THiS SPRING' },
  { url: './images/slide_3.jpg', title: 'GET A SECOND WIND' }
]

const swiperData = [
  { title: 'Pureboost Go Shoes', img: './images/trending/t_1.jpg' },
  { title: 'Duramo 9 Shoes', img: './images/trending/t_2.jpg' },
  { title: '3-Stripes Leggings', img: './images/trending/t_3.jpg' },
  { title: 'Badge Of Sport Classic Tee', img: './images/trending/t_4.jpg' },
  { title: 'SST Track Pants', img: './images/trending/t_5.jpg' },
  { title: 'Falcon Shoes', img: './images/trending/t_6.jpg'}
]

function FrontPage(props) {

  const News = ({img, text}) => (
    <div className='news-cont-item'>
      <img src={img} alt='img' />
      <div>
        <p>{text}</p>
        <NewsButton color='inherit' children={'Shop'} />
      </div>
    </div>
  )

  return (
    <>
      <Carousel data={carouselData} />
      <div>
        <div className='brand_container'>
          <Typography variant='h4' component='h2' align='center' children='OUR BRANDS' />
          <div className='brand_wrapper'>
            <img src={'./images/nike_brand.png'} alt='img' className='brand' />
            <img src={'./images/puma_brand.png'} alt='img' className='brand' />
            <img src={'./images/adidas_brand.png'} alt='img' className='brand' />
          </div>
        </div>
      </div>

      <CustomSwiper data={swiperData} title='NEW ARRIVALS' />

      <div className='news'>
        <CustomTypography variant='h4' component='h2' align='center' children='STORE NEWS' />
        <div className='news-cont'>
          <News img={'./images/slide_4.jpg'} text={'Shoes made for running high'} />
          <News img={'./images/slide_5.jpg'} text={'Waterproof features'} />
        </div>
      </div>

      <CustomSwiper data={swiperData} title='TRENDING' />
    </>
  )
}

export default FrontPage
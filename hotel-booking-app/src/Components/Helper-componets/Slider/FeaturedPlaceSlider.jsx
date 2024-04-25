import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import './FeaturedPlaceSlider.css'

export const FeaturedPlaceSlider = () => {

  var settings = {
    dots: true,
    dotsClass: 'custom-dots',
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]

  };

  

  return (
    <div className='ImageSlider-main-wrapper'>
      <div className='offer-wrapper'><p>-10% today</p></div>
      <Slider {...settings} >
        <div className='ImageSlider-wrapper'>
          <img className='FP-slider-img' src='https://images.pexels.com/photos/1268871/pexels-photo-1268871.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div className='ImageSlider-wrapper'>
          <img className='FP-slider-img' src='https://images.pexels.com/photos/1179156/pexels-photo-1179156.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div className='ImageSlider-wrapper'>
          <img className='FP-slider-img' src='https://images.pexels.com/photos/2506988/pexels-photo-2506988.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
        <div className='ImageSlider-wrapper'>
          <img className='FP-slider-img' src='https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' />
        </div>
      </Slider>
    </div>
  )
}

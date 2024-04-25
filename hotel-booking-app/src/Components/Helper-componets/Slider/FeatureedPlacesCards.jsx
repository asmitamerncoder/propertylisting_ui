import React from 'react'
import './FeaturedPlacesCards.css'
import { FeaturedPlaceSlider } from './FeaturedPlaceSlider'


export const FeatureedPlacesCards = ({card}) => {
  return (
    <div className='fP-card-main-wrapper'>
      <div className='fP-carousel-wrapper'>
        <FeaturedPlaceSlider/>
      </div>
      <div className='fP-text-wrapper'>
        <p className='p-text-bedsCount'>{card.beds ? card.beds  : ""}</p>
        <div className='ads-text-wrapper'>
          <span className='ads-bg'>ADS</span>
          <p className='FP-cards-title'>{card.title ? card.title :''}</p>
        </div>
        <div className='location-text-wrapper'>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
          <p>{card.location ? card.location :''}</p>
        </div>
        <div className='location-star-wrapper'>
          <div className='pernight-wrapper'>
            <span className='price-text'>{card.cost ? card.cost :''}</span>
            <p className='plain-text'>/night</p>
          </div>
          <div>
            <div className='pernight-wrapper'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" starvisual w-[18px] h-[18px] text-orange-500"><path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd"></path></svg>
              <span className='text-star'>{card.ratings ? card.ratings :''}</span>
              <p className='plain-text'>(28)</p>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

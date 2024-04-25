import React from 'react';
import './CityCards.css'

export const CityCards = (props) => {
    return (
        <div className='city-cards-wrapper'>
            <div className='counter-main-wrapper'>
                <div className='prop-count-wrapper'>
                    <p>{props.count}</p>
                </div>
            </div>
            <div className='pic-text-wrapper'>
                <div className='pic-wrapper'>
                    <img className='card-image' src={props.pic} />
                </div>
                <div className='card-text-wrapper'>
                    <p className='cards-title'>{props.title}</p>
                    <p className='city-card-text'>{props.text}</p>
                </div>
            </div>

        </div>
    )
}

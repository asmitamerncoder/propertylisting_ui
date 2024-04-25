import React from 'react'
import './Author.css'

export const Author = (props) => {
    return (
        <div className='author-card-wrapper'>
            <div className='bg-pic-cards'>
                <div className='text-arrow-wrapper'>
                    <span>{props.propCount}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-yellow-600 ml-3"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
                </div>
                <div className='author-pic-title-wrapper'>
                    <div className='white-circle-wrapper'>
                        <img className='author-pic' src={props.pic}/>
                    </div>
                    <div>
                        <p className='author-name'>{props.name}</p>
                        <p className='author-job'>{props.job}</p>
                    </div>
                </div>
            </div>


        </div>
    )
}

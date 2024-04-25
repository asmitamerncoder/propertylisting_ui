import React from 'react'
import './Header.css';
import { Link } from 'react-router-dom';


const header = () => {
    return (
        <div className='header-main-container lg:px-24  '>
            <div className='nav-wrapper relative px-4 lg:container h-[88px] flex items-center justify-between'>
                <div className='logo-wrapper'>
                    <img src="/Logo.png" alt="Logo" className="logo" />
                </div>
                <div className='search-bar-main-wrapper pl-9 lg:flex-none mx-auto  '>
                    <div className='search-bar-wrapper w-full relative flex items-center justify-between border border-neutral-200 dark:border-neutral-6000 rounded-full shadow hover:shadow-md transition-all visible'>
                        <div className='loc-checkin-addguest-wrapper flex items-center'>
                            <span className='block pl-5 pr-4 cursor-pointer py-3' >Location</span>
                            <span className='h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700'></span>
                            <span className='block px-4 cursor-pointer py-3 '>Check In</span>
                            <span className='h-5 w-[1px] bg-neutral-300 dark:bg-neutral-700'></span>
                            <span className='block px-4 cursor-pointer py-3' >Add guests</span>
                        </div>
                        <div className='search-icon-wrapper flex-shrink-0 ml-auto pr-2 cursor-pointer'>
                            <span className='search-icon w-8 h-8 flex items-center justify-center rounded-full bg-primary-6000  text-white'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 48 48">
                                    <circle cx="18.451" cy="18.451" r="12.951" fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
                                    <path fill="none" stroke="white" strokeLinecap="round" strokeLinejoin="round" d="m27.61 27.61l1.507 1.507m0 0v3.771l9.612 9.612l3.771-3.771l-9.612-9.612z" />
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className='profile-main-wrapper md:flex relative z-10 flex-none items-center justify-end text-neutral-700 dark:text-neutral-100'>
                    <div className='items-center flex space-x-1'>
                        <Link className='property-listing-wrapper  xl:inline-flex text-opacity-90  px-4 py-2 border border-neutral-300 hover:border-neutral-400 dark:border-neutral-700 rounded-full items-center text-sm text-gray-700 dark:text-neutral-300 font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>List your property</Link>
                        <button className='dark-light-toggle-btn text-2xl md:text-3xl w-12 h-12 rounded-full text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none flex items-center justify-center' type='button'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" className="w-7 h-7">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                            </svg>
                        </button>
                        <div className='notification-wrapper pr-1.5'>
                            <div className='margin-manag-wrapper ml-2 xl:-ml-1'>
                                <div className='notifiction-btn-wrapper relative'>
                                    <button className='bell-notification-btn text-opacity-90 group p-3 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full inline-flex items-center text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 relative' type='button'>
                                        <span className='notification-dot w-2 h-2 absolute top-2 right-2 rounded-full'></span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='profile-pic-wrapper'>
                            <div className='profile-cover relative'>
                                <button className='prof-dropdown-btn inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75' type='button'>
                                    <div className='prof-img-wrapper wil-avatar relative flex-shrink-0 inline-flex items-center justify-center text-neutral-100 uppercase font-semibold shadow-inner rounded-full w-8 h-8 sm:w-9 sm:h-9 ring-1 ring-white dark:ring-neutral-900'>
                                        <img className="profile-pic absolute inset-0 w-full h-full object-cover rounded-full" src="/author-pic.jpeg" alt="Asmita Rai" />
                                    </div>
                                </button>
                            </div>
                        </div>
                        <div className='small-navbar-wrapper'>
                            <button className='small-navbar focus:outline-none flex items-center justify-center p-2.5 rounded-lg text-neutral-700 dark:text-neutral-300'>
                                <svg xmlns="http://www.w3.org/2000/svg" className=" nav h-7 w-7" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                            </svg>

                        </button>
                    </div>

                </div>

            </div>
        </div>
        </div >

    )
}

export default header
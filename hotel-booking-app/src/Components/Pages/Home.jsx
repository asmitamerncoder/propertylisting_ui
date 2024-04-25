import React from 'react'
import { BannerSlider } from '../Helper-componets/Slider/BannerSlider'
import './Home.css'
import { CityCards } from '../Helper-componets/Slider/CityCards'
import { Author } from '../Helper-componets/Slider/Author'
import { Footer } from '../Footer/Footer'
import { FeatureedPlacesCards } from '../Helper-componets/Slider/FeatureedPlacesCards'
import { fpData } from '../../data'

const properties = [
  {
    propList_1: {
      title: "Enjoy the great cold",
      text: "188,288 properties"
    },
    propList_2: {
      title: "Cool in the deep forest",
      text: "188,288 properties"
    },
    propList_3: {
      title: "Sleep in a floating way",
      text: "188,288 properties"
    },
    propList_4: {
      title: "In the billionaire's house",
      text: "188,288 properties"
    }
  }
]



export const Home = () => {
  return (
    <div className='body-wrapper'>
      <BannerSlider />
      {/* GALLERY CARD */}
      <div className='main-card-wrapper' >
        {properties.map((property, index) => {
          return (<div key={index} className='card-wrapper'>
            <div className='card_1'>
              <h3 className='card-title'>{property.propList_1.title}</h3>
              <p className='card-text'>{property.propList_1.text}</p>
            </div>
            <div className='card_2-3_wrapper'>
              <div className='card_2'>
                <h3 className='card-title'>{property.propList_2.title}</h3>
                <p className='card-text'>{property.propList_2.text}</p>
              </div>
              <div className='card_3'>
                <h3 className='card-title'>{property.propList_3.title}</h3>
                <p className='card-text'>{property.propList_3.text}</p>
              </div>
            </div>
            <div className='card_4'>
              <h3 className='card-title'>{property.propList_4.title}</h3>
              <p className='card-text'>{property.propList_4.text}</p>
            </div>
          </div>)
        })}
      </div>
      {/* EXPLORE NEARBY */}
      <div className='explore-nearby-wrapper'>
        <h1 className='explore-title'>Explore nearby</h1>
        <p className='explore-text'>Discover great places near where you live</p>
      </div>
      {/* CITY CARDS */}
      <div className='city-cards-main-wrapper'>
        <div className='four-set-cards-wrapper'>
          <CityCards count="1,882" title="New Yourk" text="19 minutes drive" pic="https://res.cloudinary.com/dobhwtwgx/image/upload/c_scale,w_242/v1713760998/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271_jmthle.webp" />
          <CityCards count="8,288" title="Singapore" text="19 minutes drive" pic="https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <CityCards count="1,288" title="Paris" text="19 minutes drive" pic="https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <CityCards count="112" title="London" text="19 minutes drive" pic="https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
        </div>
        <div className='four-set-cards-wrapper'>
          <CityCards count="323" title="Tokyo" text="19 minutes drive" pic="https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" />
          <CityCards count="2,223" title="Maldives" text="19 minutes drive" pic="https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          <CityCards count="1,775" title="New Yourk" text="19 minutes drive" pic="https://res.cloudinary.com/dobhwtwgx/image/upload/c_scale,w_242/v1713760998/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271_jmthle.webp" />
          <CityCards count="1,288" title="Singapore" text="19 minutes drive" pic="https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
      </div>
      {/* AUTHOR CARDS */}
      <div className='author-card-main-wrapper'>
        <div>
          <h1 className='author-card-main-wrapper-title'>Top 10 author of the month</h1>
          <p className='author-card-main-wrapper-text'>Rating based on customer reviews</p>
        </div>

        <div className='authors-cards-wrapper'>
          <div className='four-set-cards-wrapper'>
            <Author propCount="40" pic='https://chisfis-template.vercel.app/static/media/Image-1.90baa8cc883db8970fda.png' name="Truelock Alric" job="@Author Job" />
            <Author propCount="113" pic="https://chisfis-template.vercel.app/static/media/Image-2.405c62ff9ad88c47e28c.png" name="Birrell Chariot" job="@Author Job" />
            <Author propCount="43" pic="https://chisfis-template.vercel.app/static/media/Image-3.f257bc3c2ce5ae3a57db.png" name="Foulcher Nathanil" job="@Author Job" />
            <Author propCount="36" pic="https://chisfis-template.vercel.app/static/media/Image-4.36899b28c72dc4bc41a9.png" name="Falconar Agnes" job="@Author Job" />
            <Author propCount="38" pic="https://chisfis-template.vercel.app/static/media/Image-5.b1088376a574bcedc983.png" name="Tousy Vita" job="@Author Job" />
          </div>
          <div className='four-set-cards-wrapper'>
            <Author propCount="31" pic="https://chisfis-template.vercel.app/static/media/Image-6.f9fbe7060b79c99c7a60.png" name="Friar Donna" job="@Author Job" />
            <Author propCount="102" pic="https://chisfis-template.vercel.app/static/media/Image-7.c88583919650f636b191.png" name="Royal Sergei" job="@Author Job" />
            <Author propCount="35" pic="https://chisfis-template.vercel.app/static/media/Image-8.5ae85a64aab1965e33a5.png" name="Sleite Claudetta" job="@Author Job" />
            <Author propCount="21" pic="https://chisfis-template.vercel.app/static/media/Image-9.d879028d45de09c9ca3b.png" name="Pillifant Vern" job="@Author Job" />
            <Author propCount="111" pic="https://chisfis-template.vercel.app/static/media/Image-10.93048ca791076288cf69.png" name="Fones Mimi" job="@Author Job" />
          </div>
        </div>
        <div className='show-more-btn-wrapper'>
          <button className='show-me-more-btn'>Show me more</button>
          <button className='become-host-btn'>Become a host</button>
        </div>
      </div>
      {/* HOW IT WORKS */}
      <div className='how-it-works-wrapper'>
        <h1 className='author-card-main-wrapper-title'>How it work</h1>
        <p className='author-card-main-wrapper-text'>Keep calm & travel on</p>
        <div className='bg-line-img-wrapper'>
          <img src='https://chisfis-template.vercel.app/static/media/VectorHIW.2a56b4d0aa5690494df25bc0b2bb3bf6.svg' />
        </div>
        <div className='how-it-work-img-text-wrapper'>
          <div className='img-text-wrapper'>
            <img className='how-it-work-img' src='https://chisfis-template.vercel.app/static/media/HIW1.bbef046fd6951afd08a7.png' />
            <div className='how-it-works-cards-text-wrapper'>
              <h1 className='how-it-works-cards-title'>Book & relax</h1>
              <p className='how-it-works-cards-text'>Let each trip be an inspirational journey,<br></br> each room a peaceful space</p>
            </div>
          </div>
          <div className='img-text-wrapper'>
            <img className='how-it-work-img' src='https://chisfis-template.vercel.app/static/media/HIW2.f68577684c76e764a351.png' />
            <div className='how-it-works-cards-text-wrapper'>
              <h1 className='how-it-works-cards-title'>Smart checklist</h1>
              <p className='how-it-works-cards-text'>Let each trip be an inspirational journey,<br></br> each room a peaceful space</p>
            </div>
          </div>
          <div className='img-text-wrapper'>
            <img className='how-it-work-img' src='https://chisfis-template.vercel.app/static/media/HIW3.b650d652a9db697619b9.png' />
            <div className='how-it-works-cards-text-wrapper'>
              <h1 className='how-it-works-cards-title'>Save more</h1>
              <p className='how-it-works-cards-text'>Let each trip be an inspirational journey,<br></br> each room a peaceful space</p>
            </div>
          </div>
        </div>
      </div>
      {/* FEAYURED PLACES */}
      <div className='featured-places-wrapper'>
        <h1 className='featured-places-main-wrapper-title'>Featured places to stay</h1>
        <p className='featured-places-main-wrapper-text'>Popular places to stay that Chisfis recommends for you</p>
        <div className='menu-btn-main-wrapper'>
          <div className='menu-btn-wrapper'>
            <span className='menu-btn'>New York</span>
            <span className='menu-btn'>Tokyo</span>
            <span className='menu-btn'>Paris</span>
            <span className='menu-btn'>London</span>
          </div>
          <div className='view-all-btn'>
            <span>View all</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="w-5 h-5 text-gray-600 ml-3"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
          </div>
        </div>
        <div className='FeatureedPlacesCards-main-wrapper'>
          <div className='eight-fp-cards-wrapper'>

            {fpData.map((data ,index) => (

              <FeatureedPlacesCards  card={data} key={index} />

            ))}

          </div>
          <div className='show-me-more-btn-main-wrapper'>
            <div className='show-me-more-btn-wrapper'>
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              <span>Show me more</span>
            </div>
          </div>
        </div>
      </div>
      {/* NEWSLETTER WRAPPER */}
      <div className='newsletter-wrapper'>
        <div className='text-searchbar-wrapper'>
          <h1 className='nwzletter-title'>Join our newsletter 🎉</h1>
          <p className='nwzletter-text'>Read and share new perspectives on just about any topic.<br /> Everyone’s welcome.</p>
          <div className='span-p-main-wrapper'>
            <div className='span-p-wrapper'>
              <span className='bg-span1' style={{ color: "#3C5BBB" }}>01</span>
              <p className='span-adhere-text'>Get more discount</p>
            </div>
            <div className='span-p-wrapper'>
              <span className='bg-span2' style={{ color: "#991B1B" }}>02</span>
              <p className='span-adhere-text'>Get premium magazines</p>
            </div>
          </div>
          <form className='form'>
            <input type='search' placeholder='Enter your email' className='nwz-letter-search-input'></input>
            <div className='submit-btn-wrapper'></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className=" submit-btn w-4 h-4 text-white ml-3"><path fillRule="evenodd" d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z" clipRule="evenodd"></path></svg>
          </form>
        </div>
        <div className='image-wrapper'>
          <img className='img-newsletter' src='https://chisfis-template.vercel.app/static/media/SVG-subcribe2.efb832b25bd6eca32484.png' />
        </div>
      </div>
      <Footer />

    </div>
  )
}

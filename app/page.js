"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Vedoc takes care of it all',
    'Whether it\'s a flat tire',
    'Or unexpected breakdown',
    'Vedoc is your one-stop',
    'Auto-care solution!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      {/* Hero */}
      <div className="flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 pt-36">
        <h2 className='text-xl md:text-4xl lg:text-6xl font-medium uppercase font-roboto text-vedoc-black text-center' id="text-carousel">
          {texts[currentText]}
        </h2>
        <p className='py-6 text-sm lg:text-xl leading-8 text-center font-light'>Start now, connect with trusted auto pros or list your shop with Vedoc today!</p>
        <div className='flex flex-wrap justify-center gap-2 lg:pb-10 py-2 md:py-5 lg:py-0'>
          <Link href="#" className=''><div className='app-store-icon'></div></Link>
          <Link href="#" className=''><div className='google-play-icon'></div></Link>
        </div>
        <div className='hero-image'></div>
      </div>

      {/* Benefits section */}
      <section>
        <div className='flex flex-col items-center px-8 md:px-24 pb-10 md:pb-20'>
          <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Benefits</h3>
          <h2 className='font-roboto uppercase font-medium text-xl lg:text-4xl pt-7 pb-10 text-center'>Why choose Vedoc</h2>

          {/* Desktop version */}
          <div className='hidden lg:flex lg:flex-wrap'>
            <div className='benefit-card'>
              <Image  src='/images/benefits_01.png' alt='One-stop auto solution' width={100} height={100} quality={100} className='benefit-icon' />
              <div className='benefit-card-info'>
                <h5>One-stop auto solution</h5>
                <p>Vedoc is your one-stop solution for all things auto-related. Whether it&apos;s repairs, styling, or assistance on the roadside, our platform seamlessly connects you with providers, ensuring all your vehicle needs are met conveniently in one place.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image  src='/images/benefits_02.png' alt='Peer-to-Peer Connectivity' width={100} height={100} quality={100} className='benefit-icon' />
              <div className='benefit-card-info'>
                <h5>Peer-to-Peer Connectivity</h5>
                <p>No more phone calls, no more endless online searches. Vedoc&apos;s peer-to-peer connectivity ensures a swift connection to a reputable provider through our user-friendly app. Our unique features streamline the process, making your interaction smooth and efficient.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image  src='/images/benefits_03.png' alt='A Win-Win for Everyone Involved' width={100} height={100} quality={100} className='benefit-icon' />
              <div className='benefit-card-info'>
                <h5>A Win-Win for Everyone Involved</h5>
                <p>Vedoc operates on a win-win principle. Users find what they need, reputable providers gain visibility, and Vedoc facilitates the connection, ensuring a harmonious ecosystem. By driving traffic to small-medium businesses, Vedoc not only serves users but also nurtures the growth of local enterprises.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image  src='/images/benefits_04.png' alt='Transparency in Every Transaction' width={100} height={100} quality={100} className='benefit-icon' />
              <div className='benefit-card-info'>
                <h5>Transparency in Every Transaction</h5>
                <p>No more hidden costs or surprises. Vedoc thrives on transparency. Our users can easily obtain estimates from nearby vetted providers, empowering them with the information they need. We scrutinize service quality records and customer ratings, only accepting the best into our app for a transparent and trustworthy experience.</p>
              </div>
            </div>
          </div>

          {/* Mobile version */}
          <div className='swiper-container'>

            <Swiper modules={[Navigation, Pagination]} spaceBetween={0} slidesPerView={1} pagination={{ clickable: true }} loop={true}
                style={{
                  "--swiper-pagination-color": "#FFE473",
                }}
                navigation={{
                  nextEl: '.custom-next',
                  prevEl: '.custom-prev',
                }}
                >


              <SwiperSlide>
                <div className='benefit-card'>
                  <Image src='/images/benefits_01.png' alt='One-stop auto solution' width={100} height={100} quality={100} className='benefit-icon' />
                  <div className='benefit-card-info'>
                    <h5>One-stop auto solution</h5>
                    <p>Vedoc is your one-stop solution for all things auto-related. Whether it&apos;s repairs, styling, or assistance on the roadside, our platform seamlessly connects you with providers, ensuring all your vehicle needs are met conveniently in one place.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='benefit-card'>
                  <Image src='/images/benefits_02.png' alt='Peer-to-Peer Connectivity' width={100} height={100} quality={100} className='benefit-icon' />
                  <div className='benefit-card-info'>
                    <h5>Peer-to-Peer Connectivity</h5>
                    <p>No more phone calls, no more endless online searches. Vedoc&apos;s peer-to-peer connectivity ensures a swift connection to a reputable provider through our user-friendly app. Our unique features streamline the process, making your interaction smooth and efficient.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='benefit-card'>
                  <Image src='/images/benefits_03.png' alt='A Win-Win for Everyone Involved' width={100} height={100} quality={100} className='benefit-icon' />
                  <div className='benefit-card-info'>
                    <h5>A Win-Win for Everyone Involved</h5>
                    <p>Vedoc operates on a win-win principle. Users find what they need, reputable providers gain visibility, and Vedoc facilitates the connection, ensuring a harmonious ecosystem. By driving traffic to small-medium businesses, Vedoc not only serves users but also nurtures the growth of local enterprises.</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className='benefit-card'>
                  <Image src='/images/benefits_04.png' alt='Transparency in Every Transaction' width={100} height={100} quality={100} className='benefit-icon' />
                  <div className='benefit-card-info'>
                    <h5>Transparency in Every Transaction</h5>
                    <p>No more hidden costs or surprises. Vedoc thrives on transparency. Our users can easily obtain estimates from nearby vetted providers, empowering them with the information they need. We scrutinize service quality records and customer ratings, only accepting the best into our app for a transparent and trustworthy experience.</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>

            <div className='customNavigation'>
              <button className='custom-prev customButton'>
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <button className='custom-next customButton'>
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* How it works section */}
      <section>
        <div className='flex flex-col items-center px-8 md:px-24 pb-20'>
          <h3 className='text-xs md:text-lg font-medium leading-8'>How It Works</h3>
          <h2 className='font-roboto uppercase font-medium text-xl md:text-4xl py-8 text-center'>Simplified Auto Care Experience on Vedoc</h2>
          <div className='flex flex-wrap pt-6 justify-center xl:justify-between'>
            <div className='how-it-works-card'>
              <div className='num'>
                <h5>01</h5>
              </div>
              <h4>Pick Your Service Category</h4>
              <p>Begin your car care adventure by selecting the service category that suits your vehicle&apos;s needs. Whether it&apos;s routine maintenance, repairs, or diagnostics, Vedoc offers a comprehensive array of services. Our intuitive platform allows you to browse through various categories, ensuring that you find the perfect match for your car&apos;s requirements.</p>
            </div>
            <div className='how-it-works-card'>
              <div className='num'>
                <h5>02</h5>
              </div>
              <h4>Provide Details About Your Car</h4>
              <p>Personalization is key, and Vedoc empowers you to provide specific details about your vehicle. From make and model to year and mileage, sharing these insights ensures that our vetted auto professionals can deliver accurate estimates tailored to your car&apos;s unique specifications. It&apos;s about precision, transparency, and a service uniquely crafted for your vehicle.</p>
            </div>
            <div className='how-it-works-card'>
              <div className='num'>
                <h5>03</h5>
              </div>
              <h4>Shop Sends Estimate Directly to You</h4>
              <p>Once you&apos;ve submitted your car details and selected your desired service category, our network of trusted auto professionals swings into action. Vetted shops and mobile providers review your request and send detailed estimates directly to you.</p>
            </div>
            <div className='how-it-works-card'>
              <div className='num'>
                <h5>04</h5>
              </div>
              <h4>Schedule a Service with a Shop </h4>
              <p>With estimates in hand, the power is now in your hands. Choose the service provider that aligns with your preferences, budget, and scheduling needs. Vedoc ensures a seamless transition from estimate to appointment, allowing you to schedule your preferred service with a trusted shop or mobile provider directly through our platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section>
        <div className='flex flex-col items-center p-8 md:px-24 md:pt-20 md:pb-10 bg-vedoc-light-yellow'>
          <h3 className='text-xs md:text-lg font-medium leading-8'>Testimonials</h3>
          <h2 className='font-roboto uppercase font-medium text-xl md:text-4xl py-4 md:py-8 text-center'>Our customers love what we do</h2>
          <div className='flex flex-wrap md:py-10 justify-between w-full'>
            <div className='testimonial-card'>
              <div>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
              </div>
              <div className='pt-4'>
                <p>They came yesterday and did an incredible job! I can&apos;t even begin to explain how good of a job! We left for Alaska this morning and having my car clean was life giving. I told some of my girlfriends and they are ready to book.</p>
                <h5>Elizabeth L</h5>
                <p>Detroit Mi</p>
              </div>
            </div>
            <div className='testimonial-card'>
              <div>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
              </div>
              <div className='pt-4'>
                <p>Yoguef was fantastic I locked my keys in my vehicle and he was in the right place at the right time. Amazing service, very kind and professional If you need someone to help you give him a call.</p>
                <h5>Millis E</h5>
                <p>Houston TX</p>
              </div>
            </div>
            <div className='testimonial-card'>
              <div>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
                <FontAwesomeIcon icon={faStar} className='rating-star'/>
              </div>
              <div className='pt-4'>
                <p>This is looking really great. The process is so much easier going through the app versus trying to find a place; having communications through the app is super helpful. Also, the app is pretty intuitive and simple to use.</p>
                <h5>Judith L</h5>
                <p>Austin TX</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

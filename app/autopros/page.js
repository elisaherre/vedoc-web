"use client";

import Link from 'next/link';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Slider from 'react-slick';

import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Autopros() {


    const settings = {
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 1000, // Transition duration between slides
      autoplaySpeed: 3000, // Duration each slide is displayed
      cssEase: "linear"
    };

  return (
  <div>
    {/* Header */}
    {/* flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 pt-36 */}
    <div className="pt-36 w-screen px-6 lg:px-24">
      <h2 className='page-title lg:px-40'>Boost your shop&apos;s visibility with Vedoc</h2>
      <p className='subtitle-text py-6'>Reach more clients in Houston, Austin and Detroit</p>
      <div className='flex flex-wrap justify-center gap-2 lg:pb-10 py-2 md:py-5 lg:py-0'>
        <Link href="#" className=''><div className='app-store-icon'></div></Link>
        <Link href="#" className=''><div className='google-play-icon'></div></Link>
      </div>

    <Slider {...settings}>
      <div className='autopros-page-image'>
        <Image src='/images/autopros_01.png' alt='Autopro page image' width={100} height={100} quality={100} unoptimized={true} />
      </div>
      <div className='autopros-page-image'>
        <Image src='/images/autopros_02.png' alt='Autopro page image' width={100} height={100} quality={100} unoptimized={true} />
      </div>
      <div className='autopros-page-image'>
        <Image src='/images/autopros_03.png' alt='Autopro page image' width={100} height={100} quality={100} unoptimized={true} />
      </div>
      <div className='autopros-page-image'>
        <Image src='/images/autopros_04.png' alt='Autopro page image' width={100} height={100} quality={100} unoptimized={true} />
      </div>
    </Slider>

    </div>

    {/* Why join Vedoc section */}
    <section>
      <div className='flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 md:mb-20'>
        <h3 className='intro-title'>Why join Vedoc</h3>
        <h2 className='section-title'>Partner with Vedoc</h2>
        <div className='flex flex-wrap pb-12 lg:pb-0'>
          <div className='benefit-card'>
            <Image  src='/images/join_01.png' alt='Local reach, targeted visibility' width={100} height={100} quality={100} unoptimized={true} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Local reach, targeted visibility</h5>
              <p>You as an AutoPro can accept service requests from car owners in your vicinity, expanding your customer base. Vedoc, with its exclusive focus on automotive services, ensures your shop gains targeted visibility among potential clients.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_02.png' alt='Flexible suscription, total control' width={100} height={100} quality={100} unoptimized={true} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Flexible suscription, total control</h5>
              <p>Enjoy a flexible monthly subscription model, pay upon   receiving your first listing of $100. Vedoc empowers you with complete control over your business, allowing you to set your own service prices and operate without long-term commitments.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_03.png' alt='Features for business growth' width={100} height={100} quality={100} unoptimized={true} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Features for business growth</h5>
              <p>Benefit from all-inclusive features, including the ability to post job openings, run unlimited 48-hour flash promotions, and accept an unlimited number of service requests. These features are designed to maximize visibility and enhance your business growth.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_04.png' alt='Exclusive networking access' width={100} height={100} quality={100} unoptimized={true} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Exclusive networking access</h5>
              <p>Receive invitations to special events, expanding your network and opening new business opportunities. Vedoc not only connects you with local clients but also fosters connections within the automotive community, creating avenues for growth and collaboration.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

    {/* How it works for Autopros */}
    <section>
      <div className='flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 mb-10 lg:mb-20'>
        <div className='flex flex-col items-center'>
          <h3 className='intro-title'>Vedoc for AutoPros</h3>
          <h2 className='section-title'>How it works for autopros</h2>
        </div>
        <div className='w-full flex flex-col lg:flex-row lg:py-12 justify-center items-center'>
          <div class="timeline pb-10 lg:pb-0">
            <div class="timeline-item">
                <div class="timeline-circle">01</div>
                <div class="timeline-content">
                    <h2>Sign Up and Customize</h2>
                    <p>Register your AutoPro business on Vedoc.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-circle">02</div>
                <div class="timeline-content">
                    <h2>Post Services and Accept Request</h2>
                    <p>Set your own service prices and list multiple services. Receive service requests from nearby drivers, expanding your client base. Run unlimited 48-hour flash promotions to boost visibility and attract more users.</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-circle">03</div>
                <div class="timeline-content">
                    <h2>Activate Your Subscription</h2>
                    <p>Activate your subscription after receiving your first listing of $100+</p>
                </div>
            </div>
            <div class="timeline-item">
                <div class="timeline-circle">04</div>
                <div class="timeline-content">
                    <h2>Enjoy Exclusive Benefits</h2>
                    <p>Attend special events and connect with the automotive community. Grow your business with Vedoc’s comprehensive features tailored for automotive excellence.</p>
                </div>
            </div>
          </div>
          <div className='flex w-full md:w-1/2 justify-center items-center'>
            <div className='technician-phone'></div>
            {/* <Image src='/images/autopros_phone.png' alt='Mobile technician phone' width={100} height={100} quality={100} className='bg-content bg-no-repeat bg-center w-full'/> */}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className='bg-vedoc-light-yellow w-full pt-12 h-fit pb-24 md:pb-10 lg:pb-20'>
      <div className='px-6 lg:px-24 flex flex-col items-center md:mb-2'>
          <h3 className='intro-title'>Testimonials</h3>
          <h2 className='section-title'>Autopros share their Vedoc experience</h2>

          <div className='swiper-container-full'>
            <Swiper modules={[Navigation, Pagination]} spaceBetween={0} slidesPerView={1} pagination={false} loop={true}
                  navigation={{
                    nextEl: '.custom-next',
                    prevEl: '.custom-prev',
                  }}
                  >
              <SwiperSlide>
              <div className='autopro-testimonial-card'>
                <div className='autopro-text'>
                  <p>As a mechanic in Austin, Vedoc has truly transformed the way I manage my shop. With its user-friendly platform, I can easily list my services and availability, attracting more customers than ever before. The streamlined booking system has helped me stay organized, saving me time and effort. Vedoc&apos;s focus on connecting local mechanics with customers in Austin is commendable, and I&apos;m grateful to be a part of this innovative platform.</p>
                  <h5>John</h5>
                  <p>Owner of John&apos;s Auto Care, Austin</p>
                </div>
                <div className='autopro-testimonial-image'>
                  <Image src='/images/testimonial_01.png' alt='Autopro testimonial' width={100} height={100} quality={100} unoptimized={true} />
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='autopro-testimonial-card'>
                <div className='autopro-text'>
                  <p>Since joining Vedoc, my business in Houston has seen a significant boost in clientele. The platform&apos;s targeted approach to local marketing has brought in more customers seeking automotive services in the Houston area. The ability to showcase my shop&apos;s specialties and availability has helped me attract customers who are looking for specific services. Vedoc&apos;s commitment to supporting mechanics in Houston is evident, and I&apos;m thrilled to be a part of this thriving community.</p>
                  <h5>Sarah</h5>
                  <p>Owner of Sarah&apos;s Garage, Houston</p>
                </div>
                <div className='autopro-testimonial-image'>
                  <Image src='/images/testimonial_02.png' alt='Autopro testimonial' width={100} height={100} quality={100} unoptimized={true} />
                </div>
              </div>
              </SwiperSlide>
              <SwiperSlide>
              <div className='autopro-testimonial-card'>
                <div className='autopro-text'>
                  <p>Vedoc has been a game-changer for my auto repair shop in Detroit. With Vedoc&apos;s platform, I&apos;ve been able to reach a wider audience and grow my customer base in the Detroit area. The platform&apos;s emphasis on promoting local businesses like mine has been instrumental in increasing my shop&apos;s visibility and driving more bookings. Vedoc&apos;s dedication to serving mechanics in Detroit is evident, and I&apos;m grateful for the opportunity to be part of such an innovative platform.</p>
                  <h5>Michael</h5>
                  <p>Owner of MotorCity Auto Repair, Detroit</p>
                </div>
                <div className='autopro-testimonial-image'>
                  <Image src='/images/testimonial_03.png' alt='Autopro testimonial' width={100} height={100} quality={100} unoptimized={true} />
                </div>
              </div>
              </SwiperSlide>
            </Swiper>

            <div className='customNavigationFull'>
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

  </div>
)
}

import Link from 'next/link';
import Image from 'next/image';

export default function Autopros() {
  return (
  <div>
    {/* Header */}
    <div className="flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 pt-36">
      <h2 className='text-xl md:text-4xl lg:px-40 lg:text-5xl font-medium uppercase font-roboto text-vedoc-black text-center'>Boost your shop&apos;s visibility with Vedoc</h2>
      <p className='py-6 text-sm lg:text-xl leading-8 text-center font-light'>Reach more clients in Houston, Austin and Detroit</p>
      <div className='flex flex-wrap justify-center gap-2 lg:pb-10 py-2 md:py-5 lg:py-0'>
        <Link href="#" className=''><div className='app-store-icon'></div></Link>
        <Link href="#" className=''><div className='google-play-icon'></div></Link>
      </div>
      <div className='autopros-page-image mb-20'></div>
    </div>

    {/* Why join Vedoc section */}
    <section>
      <div className='flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 md:mb-20'>
        <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Why join Vedoc</h3>
        <h2 className='font-roboto uppercase font-medium text-xl lg:text-4xl pt-7 pb-10 text-center'>Partner with Vedoc</h2>

        {/* Desktop version */}
        <div className='hidden lg:flex lg:flex-wrap'>
          <div className='benefit-card'>
            <Image  src='/images/join_01.png' alt='Local reach, targeted visibility' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Local reach, targeted visibility</h5>
              <p>You as an AutoPro can accept service requests from car owners in your vicinity, expanding your customer base. Vedoc, with its exclusive focus on automotive services, ensures your shop gains targeted visibility among potential clients.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_02.png' alt='Flexible suscription, total control' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Flexible suscription, total control</h5>
              <p>Enjoy a flexible monthly subscription model, pay upon   receiving your first listing of $100. Vedoc empowers you with complete control over your business, allowing you to set your own service prices and operate without long-term commitments.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_03.png' alt='Features for business growth' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Features for business growth</h5>
              <p>Benefit from all-inclusive features, including the ability to post job openings, run unlimited 48-hour flash promotions, and accept an unlimited number of service requests. These features are designed to maximize visibility and enhance your business growth.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/join_04.png' alt='Exclusive networking access' width={100} height={100} quality={100} className='benefit-icon' />
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
      <div className='flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 md:mb-20'>
        <div className='flex flex-col items-center'>
          <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Vedoc for AutoPros</h3>
          <h2 className='font-roboto uppercase font-medium text-xl lg:text-4xl pt-7 pb-10 text-center'>How it works for autopros</h2>
        </div>
        <div className='flex py-12'>
          <div class="timeline">
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
          <div className='flex w-1/2 justify-center'>
            <div className='technician-phone'></div>
            {/* <Image src='/images/autopros_phone.png' alt='Mobile technician phone' width={100} height={100} quality={100} className='bg-content bg-no-repeat bg-center w-full'/> */}
          </div>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className='bg-vedoc-light-yellow w-full py-12'>
      <div className='px-24 flex flex-col items-center md:mb-20'>
          <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Testimonials</h3>
          <h2 className='font-roboto uppercase font-medium text-xl lg:text-4xl pt-7 pb-10 text-center'>Autopros share their Vedoc experience</h2>

          <div className='autopro-testimonial-card'>
            <div className='autopro-text'>
              <p>As a mechanic in Austin, Vedoc has truly transformed the way I manage my shop. With its user-friendly platform, I can easily list my services and availability, attracting more customers than ever before. The streamlined booking system has helped me stay organized, saving me time and effort. Vedoc&apos;s focus on connecting local mechanics with customers in Austin is commendable, and I&apos;m grateful to be a part of this innovative platform.</p>
              <h5>John</h5>
              <p>Owner of John&apos;s Auto Care, Austin</p>
            </div>
            <div className='autopro-testimonial-image'>
              <Image src='/images/testimonial_01.png' alt='Autopro testimonial' width={100} height={100} quality={100} />
            </div>
          </div>

      </div>
    </section>

  </div>
)
}

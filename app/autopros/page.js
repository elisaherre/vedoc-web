import Link from 'next/link';
import Image from 'next/image';

export default function Autopros() {
  return (
  <div className="flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 pt-36">
    {/* Header */}
    <h2 className='text-xl md:text-4xl lg:text-6xl font-medium uppercase font-roboto text-vedoc-black text-center'>Boost your shop&apos;s visibility with Vedoc</h2>
    <p className='py-6 text-sm lg:text-xl leading-8 text-center font-light'>Reach more clients in Houston, Austin and Detroit</p>
    <div className='flex flex-wrap justify-center gap-2 lg:pb-10 py-2 md:py-5 lg:py-0'>
      <Link href="#" className=''><div className='app-store-icon'></div></Link>
      <Link href="#" className=''><div className='google-play-icon'></div></Link>
    </div>

    {/* Why join Vedoc section */}
    <section>
      <div className='flex flex-col items-center px-8 md:px-24 pb-10 md:pb-20'>
        <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Why join Vedoc</h3>
        <h2 className='font-roboto uppercase font-medium text-xl lg:text-4xl pt-7 pb-10 text-center'>Partner with Vedoc</h2>

        {/* Desktop version */}
        <div className='hidden lg:flex lg:flex-wrap'>
          <div className='benefit-card'>
            <Image  src='/images/benefits_01.png' alt='One-stop auto solution' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Local reach, targeted visibility</h5>
              <p>You as an AutoPro can accept service requests from car owners in your vicinity, expanding your customer base. Vedoc, with its exclusive focus on automotive services, ensures your shop gains targeted visibility among potential clients.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/benefits_02.png' alt='Peer-to-Peer Connectivity' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Flexible suscription, total control</h5>
              <p>Enjoy a flexible monthly subscription model, pay upon   receiving your first listing of $100. Vedoc empowers you with complete control over your business, allowing you to set your own service prices and operate without long-term commitments.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/benefits_03.png' alt='A Win-Win for Everyone Involved' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Features for business growth</h5>
              <p>Benefit from all-inclusive features, including the ability to post job openings, run unlimited 48-hour flash promotions, and accept an unlimited number of service requests. These features are designed to maximize visibility and enhance your business growth.</p>
            </div>
          </div>
          <div className='benefit-card'>
            <Image  src='/images/benefits_04.png' alt='Transparency in Every Transaction' width={100} height={100} quality={100} className='benefit-icon' />
            <div className='benefit-card-info'>
              <h5>Exclusive networking access</h5>
              <p>Receive invitations to special events, expanding your network and opening new business opportunities. Vedoc not only connects you with local clients but also fosters connections within the automotive community, creating avenues for growth and collaboration.</p>
            </div>
          </div>
        </div>

      </div>
    </section>

  </div>
)
}

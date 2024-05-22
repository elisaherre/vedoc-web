import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div>

      <div className="flex flex-col w-full justify-center items-center bg-white px-24 pt-40">
          <h2 className='text-6xl font-bold uppercase font-roboto'>Vedoc takes care of it all</h2>
          <p className='text-xl py-6'>Start now, connect with trusted auto pros or list your shop with Vedoc today!</p>
            <div className='flex'>
              <Link href="#" className=''>
              <Image
                src='/images/app_store.png'
                alt='Download on App Store'
                width={100}
                height={100}
                quality={100}
                className='h-14 w-auto pr-4'
              />
              </Link>
              <Link href="#" className=''>
              <Image
                src='/images/google_play.png'
                alt='Download on Google Play'
                width={100}
                height={100}
                quality={100}
                className='h-14 w-auto'
              />
              </Link>
            </div>
          <div className='hero-image'>
          </div>
      </div>

      <section>
        <div className='flex flex-col items-center'>
          <h4 className='font-semibold text-lg'>Benefits</h4>
          <h2 className='uppercase text-4xl font-roboto font-semibold py-10'>Why use Vedoc</h2>
          <div className='px-24 flex flex-wrap'>
            <div className='benefit-card'>
              <Image
                src='/images/benefits_01.png'
                alt='One Stop Auto Solution'
                width={100}
                height={100}
                quality={100}
                className='benefit-icon'
              />
              <div className='benefit-card-info'>
                <h5>One-Stop Auto Solution</h5>
                <p>Vedoc is your one-stop solution for all things auto-related. Whether it&apos;s repairs, styling, or assistance on the roadside, our platform seamlessly connects you with providers, ensuring all your vehicle needs are met conveniently in one place.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image
                src='/images/benefits_02.png'
                alt='Peer-to-Peer Connectivity'
                width={100}
                height={100}
                quality={100}
                className='benefit-icon'
              />
              <div className='benefit-card-info'>
                <h5>Peer-to-Peer Connectivity</h5>
                <p>No more phone calls, no more endless online searches. Vedoc&apos;s peer-to-peer connectivity ensures a swift connection to a reputable provider through our user-friendly app. Our unique features streamline the process, making your interaction smooth and efficient.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image
                src='/images/benefits_03.png'
                alt='A Win-Win for Everyone Involved'
                width={100}
                height={100}
                quality={100}
                className='benefit-icon'
              />
              <div className='benefit-card-info'>
                <h5>A Win-Win for Everyone Involved</h5>
                <p>Vedoc operates on a win-win principle. Users find what they need, reputable providers gain visibility, and Vedoc facilitates the connection, ensuring a harmonious ecosystem. By driving traffic to small-medium businesses, Vedoc not only serves users but also nurtures the growth of local enterprises.</p>
              </div>
            </div>
            <div className='benefit-card'>
              <Image
                src='/images/benefits_04.png'
                alt='Transparency in Every Transaction'
                width={100}
                height={100}
                quality={100}
                className='benefit-icon'
              />
              <div className='benefit-card-info'>
                <h5>Transparency in Every Transaction</h5>
                <p>No more hidden costs or surprises. Vedoc thrives on transparency. Our users can easily obtain estimates from nearby vetted providers, empowering them with the information they need. We scrutinize service quality records and customer ratings, only accepting the best into our app for a transparent and trustworthy experience.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex flex-col items-center'>
          <h4 className='font-semibold text-lg'>How it Works</h4>
          <h2 className='uppercase text-4xl font-roboto font-semibold py-10'>Simplified Auto Care Experience on Vedoc</h2>
        </div>
      </section>
    </div>
  );
}

import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex flex-col w-full justify-center items-center fixed top-28 mt-16 bg-white px-24">
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
  );
}

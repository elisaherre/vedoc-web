import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Ad() {
  return (
    <div className='ad-section pt-24 lg:px-24'>
      <div className='flex flex-col w-full lg:w-3/5 lg:pb-24 lg:pr-10'>
        <h3 className='font-roboto text-5xl uppercase font-medium pb-7'>
          Empowering Auto Experts and Car Owners with Vedoc
        </h3>
        <p className='leading-7 font-light text-xl w-5/6 pb-7'>Vedoc revolutionizes car care for both mechanics and users. Mechanics, amplify your business with Vedoc&apos;s tailored platform. Users, dive into a new era of automotive convenience. Download Vedoc now.</p>
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
      </div>
      <div className='flex relative'>
        <div className='phones'>
        </div>
      </div>
    </div>
  )
}

import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Ad() {
  return (
    <div className='ad-section'>
      <div className='flex flex-col w-2/3 py-16 pl-20'>
        <h3 className='font-roboto text-5xl uppercase font-medium pb-6'>
          Empowering Auto Experts and Car Owners with Vedoc
        </h3>
        <p className='text-base leading-7 font-normal w-3/4 pb-4'>Vedoc revolutionizes car care for both mechanics and users. Mechanics, amplify your business with Vedoc&apos;s tailored platform. Users, dive into a new era of automotive convenience. Download Vedoc now.</p>
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
      <div className='flex relative justify-end overflow-hidden'>
        <Image
            src='/images/ad_app.png'
            alt='Vedoc Ad'
            width={500}
            height={650}
            quality={100}
            className='relative -bottom-32'
          />
      </div>
    </div>
  )
}

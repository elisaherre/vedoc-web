import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Ad() {
  return (
    <div className='ad-section'>

      {/* Info */}
      <div className='flex flex-col w-full lg:w-4/5 xl:w-3/5 xl:pb-24 xl:pr-10'>
        <h3 className='font-roboto text-2xl md:text-4xl xl:text-5xl uppercase font-medium lg:pb-5 xl:pb-7'>
          Empowering Auto Experts and Car Owners with Vedoc
        </h3>
        <p className='leading-7 font-light text-base xl:text-xl w-5/6 lg:pb-5 xl:pb-7'>Vedoc revolutionizes car care for both mechanics and users. Mechanics, amplify your business with Vedoc&apos;s tailored platform. Users, dive into a new era of automotive convenience. Download Vedoc now.</p>
        <div className='flex flex-wrap justify-start gap-2 lg:pb-10 py-5 lg:py-0'>
          <Link href="#" className=''><div className='app-store-icon'></div></Link>
          <Link href="#" className=''><div className='google-play-icon'></div></Link>
        </div>
      </div>

      {/* Image */}
      <div className='flex relative justify-center w-full lg:w-2/5'>
        <div className='phones'>
        </div>
      </div>
    </div>
  )
}

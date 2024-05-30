import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faXTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Footer () {
  return (
    <footer className='flex flex-col w-screen items-center px-4 md:px-10 lg:px-24 bg-white'>
      {/* Above section */}
      <div className='flex flex-wrap md:justify-between w-full border-b py-10 lg:py-14'>

        {/* Contact & Social */}
        <div>
          <Image
          src='/images/vedoc_logo.png'
          alt='Vedoc Logo'
          width={100}
          height={70}
          quality={100}
          className='pb-5'
          />
          <div className='flex items-center'>
            <div className='fa-icon-container mr-2'>
              <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/>
            </div>
            <p className='text-sm font-light text-vedoc-black'>info@vedocapp.com</p>
          </div>
          <ul className='flex items-center pt-5 justify-between pb-10 lg:pb-0'>
            <li><Link href="https://www.linkedin.com/company/vedoc-app"><div className='fa-icon-container'><FontAwesomeIcon icon={faLinkedinIn} className='fa-icon'/></div></Link></li>
            <li><Link href="https://twitter.com/vedocapp"><div className='fa-icon-container'><FontAwesomeIcon icon={faXTwitter} className='fa-icon'/></div></Link></li>
            <li><Link href="https://facebook.com/vedocapp"><div className='fa-icon-container'><FontAwesomeIcon icon={faFacebook} className='fa-icon'/></div></Link></li>
            <li><Link href="https://www.instagram.com/vehicledoctor"><div className='fa-icon-container'><FontAwesomeIcon icon={faInstagram} className='fa-icon'/></div></Link></li>
          </ul>
        </div>

        {/* Suscription Form */}
        <div className='flex flex-col md:w-3/5 lg:w-2/5 xl:w-1/3 justify-center'>
          <p className='pb-5 text-sm font-light text-vedoc-black'>Subscribe to Vedoc&apos;s Newsletter for new features updates and articles delivered right to your inbox.</p>
          <form className="max-w-sm relative">
            <input type="email" id="email" className="shadow bg-white border border-gray-400 text-gray-700 text-sm text-light rounded-lg focus:ring-vedoc-yellow focus:border-vedoc-yellow block w-full p-5" placeholder="Email address" required/>
            <button type="submit" className="button-vedoc">Subscribe</button>
          </form>

        </div>
      </div>

      {/* Terms */}
      <div className='flex pb-8 pt-10 lg:pb-10 lg:pt-12 w-full'>
        <ul className='vedoc-footer'>
          <li>© 2024 Vedoc. All rights reserved.</li>
          <li><Link href="#" className='underline'>Terms & Conditions</Link></li>
          <li><Link href="#" className='underline'>Privacy Policy</Link></li>
        </ul>
      </div>

    </footer>
  )
}

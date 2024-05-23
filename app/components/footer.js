import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer () {
  return (
    <footer className='flex flex-col w-full items-center px-24 bg-white'>
      <div className='flex justify-between w-full border-b py-14'>
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
            <Image
            src='/images/icon_mail.png'
            alt='Mail'
            width={42}
            height={42}
            quality={100}
            className='pr-2'
            />
            <p className='text-sm'>info@vedocapp.com</p>
          </div>
          <ul className='flex items-center pt-5 justify-between'>
            <li><Link href="https://www.linkedin.com/company/vedoc-app"><Image src='/images/icon_linkedin.png' alt='LinkedIn' width={35} height={35} quality={100} className='icon'/></Link></li>
            <li><Link href="https://twitter.com/vedocapp"><Image src='/images/icon_x.png' alt='X' width={35} height={35} quality={100} className='icon'/></Link></li>
            <li><Link href="https://facebook.com/vedocapp"><Image src='/images/icon_fb.png' alt='Facebook' width={35} height={35} quality={100} className='icon'/></Link></li>
            <li><Link href="https://www.instagram.com/vehicledoctor"><Image src='/images/icon_ig.png' alt='Instagram' width={35} height={35} quality={100} className='icon'/></Link></li>
          </ul>
        </div>
        <div class='flex flex-col w-1/3 justify-center'>
          <p className='pb-5 text-sm'>Subscribe to Vedoc&apos;s Newsletter for new features updates and articles delivered right to your inbox.</p>
          <form class="max-w-sm relative">
            <input type="email" id="email" class="shadow bg-white border border-gray-400 text-gray-700 text-sm rounded-lg focus:ring-vedoc-yellow focus:border-vedoc-yellow block w-full p-5" placeholder="Email address" required/>
            <button type="submit" class="button-vedoc">Subscribe</button>
          </form>

        </div>
      </div>
      <div className='flex pb-10 pt-14 w-full'>
        <ul className='vedoc-footer flex text-sm text-vedoc-black font-light'>
          <li>© 2024 Vedoc. All rights reserved.</li>
          <li><Link href="#" className='underline'>Terms & Conditions</Link></li>
          <li><Link href="#" className='underline'>Privacy Policy</Link></li>
        </ul>
      </div>
    </footer>
  )
}

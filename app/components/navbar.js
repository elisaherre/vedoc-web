import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'

export default function navbar() {
  return (
    <header>
      <div className='flex navbar'>
        <Image
          src='/images/vedoc_logo.png'
          alt='Vedoc Logo'
          width={100}
          height={70}
          quality={100}
        />
        <nav>
          <ul className='flex'>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
            <li>
              <Link href="/autopros">Auto Pros</Link>
            </li>
            <li>
              <Link href="/faqs">FAQs</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className='button-lg'>Download App</Link>
        <Link href="#" className='burguer-menu'>
          <Image
            src='/images/menu.png'
            alt='Menu'
            width={30}
            height={30}
          />
        </Link>
      </div>
    </header>
  )
}

"use client";

import '../globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {

  const pathname = usePathname();
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  }

  return (
    <header>
    <div className='flex navbar'>

      {/* Logo */}
      <Image
        src='/images/vedoc_logo.png'
        alt='Vedoc Logo'
        width={100}
        height={70}
        quality={100}
      />

      {/* Desktop Version */}
      <nav>
      <ul className='flex'>
        <li>
          <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
        </li>
        <li>
          <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
        </li>
        <li>
          <Link href="/autopros" className={pathname === '/autopros' ? 'active' : ''}>Auto Pros</Link>
        </li>
        <li>
          <Link href="/faqs" className={pathname === '/faqs' ? 'active' : ''}>FAQs</Link>
        </li>
        <li>
          <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link>
        </li>
        <li>
          <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
        </li>
      </ul>
      </nav>
      <Link href="#" className='button-lg'>Download App</Link>

      {/* Mobile Version */}
      <Link href="#" className='burguer-menu' onClick={toggleDropdown}>
        <Image
          src='/images/menu.png'
          alt='Menu'
          width={30}
          height={30}
        />
      </Link>
    </div>

    {dropdownVisible && (
      <div className='dropdown-menu'>
        <ul className=''>
          <li>
            <Link href="/" className={pathname === '/' ? 'active' : ''}>Home</Link>
          </li>
          <li>
            <Link href="/about" className={pathname === '/about' ? 'active' : ''}>About Us</Link>
          </li>
          <li>
            <Link href="/autopros" className={pathname === '/autopros' ? 'active' : ''}>Auto Pros</Link>
          </li>
          <li>
            <Link href="/faqs" className={pathname === '/faqs' ? 'active' : ''}>FAQs</Link>
          </li>
          <li>
            <Link href="/blog" className={pathname === '/blog' ? 'active' : ''}>Blog</Link>
          </li>
          <li>
            <Link href="/contact" className={pathname === '/contact' ? 'active' : ''}>Contact Us</Link>
          </li>
          <Link href="#" className='button-md'>Download App</Link>
        </ul>
      </div>
    )}
  </header>

  )
}

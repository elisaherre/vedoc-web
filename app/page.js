"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const [currentText, setCurrentText] = useState(0);
  const texts = [
    'Vedoc takes care of it all',
    'Whether it\'s a flat tire',
    'Or unexpected breakdown',
    'Vedoc is your one-stop',
    'Auto-care solution!'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prevText) => (prevText + 1) % texts.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div>
      <div className="flex flex-col w-full justify-center items-center bg-white px-24 pt-40">
        <h2 className='text-6xl font-bold uppercase font-roboto' id="text-carousel">
          {texts[currentText]}
        </h2>
        <p className='py-6 text-xl leading-8'>Start now, connect with trusted auto pros or list your shop with Vedoc today!</p>
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
        <div className='hero-image'></div>
      </div>
      {/* Rest of the code */}
    </div>
  );
}

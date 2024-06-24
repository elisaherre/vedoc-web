"use client";

import Accordion from '../components/accordion';
import Link from 'next/link'

export default function Faqs() {

  const faqs = [
    {
      question: 'What is Vedoc?',
      answer: 'Vedoc is a peer-to-peer automotive services platform connecting users with vetted mechanics and auto service providers. It serves as a one-stop solution for all car care needs, offering transparency, convenience, and a seamless connection between users and professionals.',
    },
    {
      question: 'What services does Vedoc offer?',
      answer: 'Vedoc offers a diverse range of services, including tire service, auto locksmith, towing, performance facility, roadside assistance, auto detailing, window tinting, windshield repair, mobile auto repair, and more. The platform caters to the complete spectrum of car care needs.',
    },
    {
      question: 'How does Vedoc work for Users?',
      answer: 'Users simply download the Vedoc app, browse services, select a provider, and schedule the desired service. Vedoc ensures transparent pricing, quality vetted professionals, and a user-friendly experience from start to finish.',
    },
    {
      question: 'How does Vedoc benefit Mechanics and Auto Service Providers?',
      answer: 'Vedoc provides mechanics and service providers with a dedicated platform to showcase their expertise, connect with a broader clientele, and efficiently manage their businesses. It offers a subscription model for shops and a transaction fee for users, creating a fair and sustainable marketplace.',
    },
    {
      question: 'Is Vedoc available in my location?',
      answer: 'Vedoc is currently available in Houston, TX, Austin, TX, and Detroit, MI, with plans to expand to more areas in the near future. Check the app for the latest updates on service availability in your region.',
    },
    {
      question: 'Can I schedule recurring maintenance with Vedoc?',
      answer: 'Yes, Vedoc allows users to schedule recurring maintenance tasks, making it convenient for regular check-ups and ensuring the longevity of your vehicle. The platform sends timely reminders, helping you stay on top of your car care routine.',
    }
    ];

  return (
    <div>
      {/* Header */}
      <div className="pt-36 w-screen px-6 lg:px-24">
        <h3 className='intro-title text-center'>FAQs</h3>
        <h2 className='page-title'>Frequently Asked Questions</h2>
        <p className='subtitle-text pb-16 lg:px-80'>We compiled a list of commonly asked questions to provide you with quick and informative answers.</p>
      </div>

      {/* FAQ */}
      <section>
        <div className="flex flex-col w-full justify-center items-center bg-white px-6 lg:px-24 md:mb-20">
          {faqs.map((faq, index) => (
            <Accordion key={index} title={faq.question} content={faq.answer} />
            ))}
        </div>
      </section>

      {/* Contact */}
      <section className='px-6 lg:px-24 mb-12'>
        <div className='bg-vedoc-light-yellow p-12 flex flex-col items-center justify-center'>
          <h3 className='font-roboto font-medium text-xl md:text-xl lg:text-4xl py-5 md:py-8'>Still have a question?</h3>
          <p className='content-text w-1/2 text-center'>Email, or complete the form to ask questions or learn on how Vedoc can solve your autocare problem. Our friendly team would love to hear from you.</p>
          <Link href="/contact" className='text-vedoc-black bg-vedoc-yellow hover:bg-vedoc-ad-yellow focus:outline-none focus:ring-gray-400 rounded-lg text-sm px-10 py-2 text-center border border-gray-400 m-5'>Contact Us</Link>
        </div>
      </section>

    </div>
  )
}

"use client";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Should handle form submission logic here:
    console.log('Form submitted:', formData);
  };

  return (
    <div>
      {/* Header */}
      <div>
        <div className="pt-36 w-screen px-6 lg:px-24 md:pb-6">
          <h2 className='page-title'>Contact Us</h2>
          <p className='subtitle-text md:px-10 xl:px-40'>Email, or complete the form to ask questions or learn on how Vedoc can solve your autocare problem. Our friendly team would love to hear from you.</p>
          <div className='flex justify-center py-6'>
            <div className='fa-icon-container mr-2'>
              <FontAwesomeIcon icon={faEnvelope} className='fa-icon'/>
            </div>
            <p className='subtitle-text'>info@vedocapp.com</p>
          </div>
        </div>
      </div>

      {/* Contact Form */}
      <div className="w-screen px-6 lg:px-24 pb-6">
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className='md:flex md:justify-between md:gap-3.5'>
            <div className="mb-6 md:w-1/2">
              <label htmlFor="firstName" className="content-text">First Name</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="mt-1 p-2 w-full block shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
              />
            </div>
            <div className="mb-6 md:w-1/2">
              <label htmlFor="lastName" className="content-text">Last Name</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="mt-1 p-2 w-full block shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
              />
            </div>
          </div>
          <div className='md:flex md:justify-between md:gap-3.5'>
            <div className="mb-6 md:w-1/2">
              <label htmlFor="email" className="content-text">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
              />
            </div>
            <div className="mb-6 md:w-1/2">
              <label htmlFor="phone" className="content-text">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
              />
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="content-text">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
              rows="4"
            ></textarea>
          </div>
          <p className="content-text">By submitting the form, you agree to the privacy policy and confirm that the information is stored in a database.</p>
          <div className="flex justify-center pt-8 pb-10">
            <button type="submit" className="w-full bg-vedoc-gray text-white py-4 rounded-md">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

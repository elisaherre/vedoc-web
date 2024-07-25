"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Early() {
  const [textToShow, setTextToShow] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const text = "The future of car service!";

  useEffect(() => {
    let index = 0;
    const intervalDuration = 100;
    const restartDelay = 2000;
    let interval;

    const animateText = () => {
      interval = setInterval(() => {
        if (index <= text.length) {
          setTextToShow(text.substring(0, index));
          index++;
        } else {
          clearInterval(interval);
          setTimeout(() => {
            index = 0;
            setTextToShow('');
            animateText();
          }, restartDelay);
        }
      }, intervalDuration);
    };

    animateText();

    return () => clearInterval(interval);
  }, []);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = {};
    const { firstName, lastName, email, phone, service } = formData;

    if (!firstName) newErrors.firstName = 'First name is required';
    if (!lastName) newErrors.lastName = 'Last name is required';
    if (!email) newErrors.email = 'Email address is required';
    if (!phone) newErrors.phone = 'Phone number is required';
    if (!service) newErrors.service = 'Please select a service';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return; // Exit the function if validation fails
    }

    // Clear errors if validation passes
    setErrors({});

    // Set form as submitted
    setFormSubmitted(true);

    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <div className='flex items-center justify-center min-h-screen'>
      <div className='text-cente'>
        {/* Access button screen */}
        <div className='flex flex-col items-center'>
          <div className='w-36'>
            <Image src='/images/vedoc_logo2.png' alt='Vedoc' width={100} height={100} quality={100} unoptimized={true} className='w-full pt-20 pb-10' />
          </div>
          {!showForm && !formSubmitted && <p className='main-title h-10 py-48'>{textToShow}</p>}
          {!showForm && !formSubmitted && <button onClick={handleButtonClick} className='button-md mt-20 mb-10'>Tap here to begin</button>}

          {/* Form */}
          {showForm && !formSubmitted && (
            <div>
              <h2 className='section-title text-center'>Sign up with Vedoc</h2>
              <p className='subtitle-text pb-8'>Become an early user to receive special access to our new beta.</p>

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
                    {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
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
                    {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
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
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
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
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                  </div>
                </div>
                <div className="mb-6">
                  <label htmlFor="service" className="content-text">My car needs:</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="mt-1 p-2 block w-full shadow-sm sm:text-sm border-vedoc-gray rounded-sm"
                  >
                    <option value="">Select an option</option>
                    <option value="maintenance">Maintenance</option>
                    <option value="diagnosis">Diagnosis</option>
                    <option value="detail">Detail</option>
                    <option value="windshield_repair">Windshield Repair</option>
                    <option value="tire_replacement">Tire Replacement</option>
                    <option value="brake_job">Brake Job</option>
                  </select>
                  {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}
                </div>
                <p className="content-text">By submitting the form, you agree to the privacy policy and confirm that the information is stored in a database.</p>
                <div className="flex justify-center pt-8 pb-10">
                  <button type="submit" className="w-full bg-vedoc-gray text-white py-4 rounded-md">Send Message</button>
                </div>
              </form>
            </div>
          )}

          {/* Thank You Message */}
          {formSubmitted && (
            <div className='flex flex-col items-center'>
              <h2 className='font-roboto font-medium text-xl md:text-xl lg:text-4xl py-5 md:py-8 text-center'>Thank you for joining, {capitalizeFirstLetter(formData.firstName)}!</h2>
              <p className='subtitle-text'>We&apos;ll be in touch very soon 💛</p>
              <p className='subtitle-text pb-8'>Scan the code below to visit our website.</p>
              <div className='w-48'>
                <Image src='/images/code.png' alt='Vedoc' width={100} height={100} quality={100} unoptimized={true} className='w-full py-10' />
              </div>
              <button
                className='button-md my-10'
                onClick={() => {
                  setShowForm(false);
                  setFormSubmitted(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    service: ''
                  });
                }}>
                I&apos;m done!
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

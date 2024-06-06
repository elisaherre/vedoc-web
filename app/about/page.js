

export default function About() {
  return (
    <div className="w-full bg-white px-6 lg:px-24 pt-36">
      {/* Header */}
      <section className='flex flex-col items-center px-8 md:px-24 pb-5'>
        <h3 className='text-lg font-medium leading-8 pt-16 lg:pt-0'>Hello,</h3>
        <h2 className='font-roboto uppercase font-medium text-xl lg:text-5xl py-5 text-center'>We are Vedoc</h2>
        <p className='py-6 text-sm lg:text-xl leading-8 text-center font-light'>Vedoc is not just an app, it&apos;s a commitment to empowering both mechanics and users. Vedoc is  where automotive care is personalized, efficient, and trustworthy.</p>
        <div className='page-image'></div>
      </section>
      {/* About Us */}
      <section className='flex flex-col items-start'>
        <h3 className='text-xs md:text-lg font-medium leading-8'>About Us</h3>
        <h2 className='font-roboto uppercase font-medium text-xl md:text-4xl py-8'>What Vecoc is all about and how we started</h2>
        <p className="text-xl leading-8 font-light pb-10">Vedoc, is a revolutionary app launched in 2023 that is transforming the way users connect with vetted Auto professionals for a wide array of vehicle-related services. Vedoc is not just an app; it&apos;s a game-changer in the automotive service landscape, designed to address the challenges users face in finding transparent, fairly priced, and comprehensive car care solutions.</p>
        <p className="text-xl leading-8 font-light pb-10">Vedoc is your go-to platform, simplifying the process of connecting with trusted Auto professionals. Whether you&apos;re searching for the best-priced car service or require prompt roadside assistance, Vedoc is here to assist every driver in their automotive journey. Vedoc caters to the needs of every driver, providing a one-stop-shop solution for all car service requirements. We prioritize transparency, affordability, and convenience, ensuring a seamless experience for users.</p>
        <p className="text-xl leading-8 font-light pb-10">Vedoc is your go-to platform, simplifying the process of connecting with trusted Auto professionals. Whether you&apos;re searching for the best-priced car service or require prompt roadside assistance, Vedoc is here to assist every driver in their automotive journey.</p>
        <p className="text-xl leading-8 font-light pb-10">The platform serves as a comprehensive directory for Auto professionals, making it easier for them to list their services and attract new customers. Vedoc addresses three significant challenges in the automotive service landscape: the need for increased transparency, combating overpriced services, and fulfilling the demand for a one-stop-shop catering to all car service needs.</p>
        <p className="text-xl leading-8 font-light pb-10">Embarking on our journey in 2019 with a shared idea and vision, Vedoc has swiftly evolved into a transformative force in the automotive service landscape. In 2021, we unveiled our first beta version, marking the beginning of Vedoc&apos;s innovative platform. The same year marked the acquisition of our first users, propelling us into the automotive service industry. In 2022, we expanded our user base, solidifying Vedoc&apos;s presence. In 2023, Vedoc proudly launched publicly marking a crucial milestone. In 2024, we doubled our team size and introduced beta 2, a testament to our commitment to continuous improvement. This journey reflects Vedoc&apos;s dedication to redefining the automotive service industry, providing transformative solutions for users and businesses alike.</p>
        <div className="mb-7">
          <h3 className='text-xs md:text-lg font-medium leading-8 pb-8'>Our Mission</h3>
          <div className="flex g-10">
            <h2 className='font-roboto uppercase text-xl md:text-4xl w-1/2'>Transparent and valuable automotive experiences</h2>
            <p className="text-xl leading-8 font-light w-1/2">Our mission is to help every day drivers and shop owners use technology to their advantage without reinventing the wheel by delivering transparency and value to everyone who uses Vedoc app</p>
          </div>
        </div>
        <div className="mb-20">
          <h3 className='text-xs md:text-lg font-medium leading-8 pb-8'>Our Vision</h3>
          <div className="flex g-10">
            <h2 className='font-roboto uppercase text-xl md:text-4xl w-1/2'>Driving market dominance in auto services</h2>
            <p className="text-xl leading-8 font-light w-1/2">We aim to dominate the market and become indispensable in the automotive service industry.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

"use client";

import { Open_Sans } from "next/font/google";
import { usePathname } from 'next/navigation';
import "./globals.css";

// Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Ad from "./components/ad";

const OpenSans = Open_Sans({ subsets: ["latin"] });

// export const metadata = {
//   title: "Vedoc",
//   description: "Request Auto Services Nationwide Easily",
// };


export default function RootLayout({ children }) {

  // temporary fix for hiding components on the early access page
  const pathname = usePathname(); // Use usePathname to get the current path
  const hideComponents = pathname === '/early';

  return (
    <html lang="en">
      <body className={OpenSans.className}>
        {!hideComponents && <Navbar />}
        {children}
        {!hideComponents && <Ad />}
        {!hideComponents && <Footer />}
      </body>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"/> */}
    </html>
  );
}

import { Open_Sans } from "next/font/google";
import "./globals.css";

//Components
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Ad from "./components/ad";

const OpenSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Vedoc",
  description: "Request Auto Services Nationwide Easily",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={OpenSans.className}>
        <Navbar />
        {children}
        <Ad />
        <Footer />
      </body>
      {/* <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js"/> */}
    </html>
  );
}

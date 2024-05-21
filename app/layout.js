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
        <Ad />
        <Footer />
        {children}
      </body>
    </html>
  );
}


import { Inter } from "next/font/google";
import { Cinzel } from "next/font/google";
import "./css/loaders.css";
import "./globals.css";
import "./css/component.css";
import "./css/media.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });
const ciznel = Cinzel({subsets:["latin"]})
export const metadata = {
  title: "The Latest Victim",
  description: "The Latest Victim's Official Website",
};

export default function RootLayout({ children }) {
  return (
    
    <html lang="en">
      
      <body className={ciznel.className}>
        
        
      <Navbar />
        {children}
      <Footer />
        </body>
    </html>
  );
}

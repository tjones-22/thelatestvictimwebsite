"use client";

import Link from "next/link";
import { Cinzel } from "next/font/google";
import Image from "next/image";
import { useState } from "react";
import LinkMenu from "./LinkMenu";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: "400",
});

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevMenu) => !prevMenu);
  };

  return (
    <>
      {/* <div className="video-background">
        <video autoPlay muted loop>
          <source src="/video/WebBackground.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <nav className="navbar">
          <div>
            <button onClick={toggleMenu}>
              <Image
                src="/Icons/HamburgerIcon.png"
                alt="Menu Icon"
                width={50}
                height={50}
                id="menu-icon"
              />
            </button>
          </div>
        
          {menu && <LinkMenu isOpen={menu} toggleMenu={toggleMenu} />}
        </nav>
      </div> */}

      <div className="navbar">

      <div>
            <button onClick={toggleMenu}>
              <Image
                src="/Icons/HamburgerIcon.png"
                alt="Menu Icon"
                width={50}
                height={50}
                id="menu-icon"
              />
            </button>
          </div>
        {menu && <LinkMenu isOpen={menu} toggleMenu={toggleMenu} />}
      </div>
    </>
  );
};

export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import header from "./header.module.css";
import { assets } from "@/app/data";
import Image from "next/image";
import localFont from "next/font/local";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-scroll";

export default function TopHeader() {
  const [menuClicked, setMenuClicked] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = 24;
    if (window.scrollY > scrollThreshold) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (
    <>
      <header className={header.topHeader} id="home">
        <span>Call Us: 076 8080 517</span>
      </header>

      <header
        className={header.header}
        style={isScrolled ? { display: "flex" } : null}
      >
        {/* <span>TUKIE's HAIR DRESSING</span> */}
        <Image
          src={assets.websiteLogo}
          width={120}
          height={80}
          className={header.logo}
        />

        <ul className={header.ul}>
          {/* <li className={header.li}>SHOP</li> */}
          <Link to="our-services" smooth={true} duration={500}>
            <li className={header.li}>OUR SERVICES</li>
          </Link>
          <Link to="about-us" smooth={true} duration={500}>
            <li className={header.li}>ABOUT</li>
          </Link>
          <Link to="our-gallery" smooth={true} duration={500}>
            <li className={header.li}>OUR GALLERY</li>
          </Link>
          <Link to="testimonials" smooth={true} duration={500}>
            <li className={header.li}>TESTIMONIALS</li>
          </Link>
          <Link to="contact-us" smooth={true} duration={500}>
            <li className={header.li}>CONTACT US</li>
          </Link>

          {/* <li>VACANCIES</li> */}
        </ul>

        <div className={header.socialIcon}>
          <Image
            src={assets.social[0].icon}
            alt={assets.social[0].alt}
            width={30}
            height={30}
          />
        </div>

        <div className={header.menuIcon}>
          {menuClicked ? <BiX size={40} /> : <BiMenu size={40} />}
        </div>
      </header>
    </>
  );
}

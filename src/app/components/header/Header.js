"use client";
import React, { useEffect, useState } from "react";
import header from "./header.module.css";
import { assets } from "@/app/data";
import Image from "next/image";
import localFont from "next/font/local";
import { BiMenu, BiX } from "react-icons/bi";
import { Link } from "react-scroll";
import { Fascinate } from "next/font/google";

export default function Header({ condition }) {
  const [menuClicked, setMenuClicked] = useState(condition);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const scrollThreshold = 30;
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
        style={
          isScrolled
            ? {
                display: "flex",
                backgroundColor: "white",
                border: "none",
                margin: 0,
              }
            : null
        }
      >
        <div className={header.top}>
          <Link
            to="home"
            smooth={true}
            duration={500}
            onClick={() => setMenuClicked(false)}
          >
            <Image
              src={
                isScrolled ? assets.websiteLogoBlack : assets.websiteLogoWhite
              }
              alt={assets.websiteLogoBlack}
              width={100}
              height={80}
              className={header.logo}
            />
          </Link>

          <ul>
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

          <Link
            to="title"
            smooth={true}
            duration={500}
            className={header.menuIcon}
            onClick={() => setMenuClicked(!menuClicked)}
          >
            {menuClicked ? <BiX size={40} /> : <BiMenu size={40} />}
          </Link>
        </div>
        {menuClicked && isScrolled ? (
          <div className={header.nav}>
            <ul>
              {/* <li className={header.li}>SHOP</li> */}
              <Link
                to="home"
                smooth={true}
                duration={500}
                onClick={() => setMenuClicked(false)}
              >
                <li className={header.li}>HOME</li>
              </Link>
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
          </div>
        ) : null}
        <div></div>
      </header>
    </>
  );
}

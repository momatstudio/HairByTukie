"use client";
import React from "react";
import footer from "./footer.module.css";
import Image from "next/image";
import { assets } from "@/app/data";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
  return (
    <section className={footer.section} id="footer">
      <br />
      <div className={footer.contact}>
        {/* <Image src={assets.websiteLogo} width={100} height={100} /> */}
        <h1>Hair by Tukie</h1>
        <br />
        <span>076 8080 517</span>
        <br />
        <span className={footer.address}>
          Naledi A 2, Ga-Maphalle, Molototsi 0827
        </span>
        <br />
      </div>
      <br />
      <div className={footer.menu}>
        <ul className={footer.ul}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <li className={footer.li}>HOME</li>
          </ScrollLink>
          <ScrollLink to="our-services" smooth={true} duration={500}>
            <li className={footer.li}>OUR SERVICES</li>
          </ScrollLink>
          <ScrollLink to="about-us" smooth={true} duration={500}>
            <li className={footer.li}>ABOUT US</li>
          </ScrollLink>
          <ScrollLink to="our-gallery" smooth={true} duration={500}>
            <li className={footer.li}>OUR GALLERY</li>
          </ScrollLink>
          <ScrollLink to="testimonials" smooth={true} duration={500}>
            <li className={footer.li}>TESTIMONIALS</li>
          </ScrollLink>
          <ScrollLink to="contact-us" smooth={true} duration={500}>
            <li className={footer.li}>CONTACT US</li>
          </ScrollLink>
        </ul>
      </div>
      <div className={footer.website_creater}>
        <span className={footer.span}>
          <Link href="https://www.momatstudio.co.za">
            Created by - Momatstudio Web Solutions
          </Link>
        </span>
      </div>
    </section>
  );
};

export default Footer;

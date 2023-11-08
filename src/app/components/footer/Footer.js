import React from "react";
import footer from "./footer.module.css";
import Image from "next/image";
import { assets } from "@/app/data";
import Link from "next/link";

const Footer = () => {
  return (
    <section className={footer.section} id="footer">
      <br />
      <div className={footer.contact}>
        <span>Hair By Tukie</span>
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
          <li className={footer.li}>Home</li>
          <li className={footer.li}>Our Services</li>
          <li className={footer.li}>About Us</li>
          <li className={footer.li}>Our Gallery</li>
          <li className={footer.li}>Testimonials</li>
          <li className={footer.li}>Contact Us</li>
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

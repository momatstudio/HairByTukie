"use client";
import React, { useState } from "react";
import cover from "./cover.module.css";
import { assets, coverData } from "@/app/data";
import Image from "next/image";
import localFont from "next/font/local";
import { BiMenu, BiX } from "react-icons/bi";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import TopHeader from "../header/Header";

const myFont = localFont({ src: "./GreatVibes-Regular.ttf" });
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["Great_Vibes"] });

export default function Cover() {
  const [menuClicked, setMenuClicked] = useState(false);

  return (
    <>
      <TopHeader condition={menuClicked} />
      <section
        className={cover.section}
        style={{
          backgroundImage: `url("Web 1920 – 1.png")`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className={cover.cover_header}>
          <ScrollLink to="home" smooth={true} duration={500}>
            <Image
              src={assets.websiteLogoGray}
              alt={assets.websiteLogoGray}
              width={140}
              height={100}
              className={cover.logo}
            />
          </ScrollLink>

          <ul className={cover.ul}>
            {/* <li className={header.li}>SHOP</li> */}
            <ScrollLink to="our-services" smooth={true} duration={500}>
              <li className={cover.li}>OUR SERVICES</li>
            </ScrollLink>
            <ScrollLink to="about-us" smooth={true} duration={500}>
              <li className={cover.li}>ABOUT</li>
            </ScrollLink>
            <ScrollLink to="our-gallery" smooth={true} duration={500}>
              <li className={cover.li}>OUR GALLERY</li>
            </ScrollLink>
            <ScrollLink to="testimonials" smooth={true} duration={500}>
              <li className={cover.li}>TESTIMONIALS</li>
            </ScrollLink>
            <ScrollLink to="contact-us" smooth={true} duration={500}>
              <li className={cover.li}>CONTACT US</li>
            </ScrollLink>

            {/* <li>VACANCIES</li> */}
          </ul>

          <div className={cover.SocialIcon}>
            <Link href={"https://facebook.com/matthews.modika"}>
              <Image
                src={assets.social[0].icon}
                alt={assets.social[0].alt}
                width={30}
                height={30}
              />
            </Link>
          </div>
          <ScrollLink to="title" smooth={true} duration={500}>
            <div
              className={cover.menuIcon}
              onClick={() => setMenuClicked(true)}
            >
              {<BiMenu size={40} />}
            </div>
          </ScrollLink>
        </div>

        <div className={cover.container}>
          <div className={cover.box + " " + cover.left}></div>
          <div className={cover.box + " " + cover.right}>
            <h1 className={cover.h1} id="title">
              {coverData.title}
            </h1>
            <h1 className={cover.h1}>{coverData.titleTwo}</h1>
            <span className={cover.description}>{coverData.description}</span>

            <div className={cover.buttons}>
              <button className={cover.button_one}>
                {coverData.buttonOne}
              </button>
              <ScrollLink to="our-gallery" smooth={true} duration={500}>
                <button className={cover.button_two}>
                  {coverData.buttonTwo}
                </button>
              </ScrollLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

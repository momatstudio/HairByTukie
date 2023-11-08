"use client";
import React, { useState } from "react";
import cover from "./cover.module.css";
import { assets, coverData } from "@/app/data";
import Image from "next/image";
import localFont from "next/font/local";
import { BiMenu, BiX } from "react-icons/bi";

const myFont = localFont({ src: "./GreatVibes-Regular.ttf" });
// import { Inter } from "next/font/google";

// const inter = Inter({ subsets: ["Great_Vibes"] });

export default function Cover() {
  const [menuClicked, setMenuClicked] = useState(false);
  return (
    <section
      className={cover.section}
      style={{
        backgroundImage: `url("Web 1920 – 1.png")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <div className={cover.cover_header}>
        <div>
          <Image
            src={assets.websiteLogoGray}
            width={140}
            height={100}
            className={cover.logo}
          />
        </div>

        <ul className={cover.ul}>
          <li className={cover.li}>OUR SERVICES</li>
          <li className={cover.li}>ABOUT</li>
          <li className={cover.li}>OUR GALLERY</li>
          <li className={cover.li}>TESTIMONIALS</li>
          <li className={cover.li}>CONTACT US</li>
        </ul>

        <div className={cover.SocialIcon}>
          <Image
            src={assets.social[0].icon}
            alt={assets.social[0].alt}
            width={30}
            height={30}
          />
        </div>
        <div className={cover.menuIcon}>
          {menuClicked ? <BiX size={40} /> : <BiMenu size={40} />}
        </div>
      </div>

      <div className={cover.container}>
        <div className={cover.box + " " + cover.left}></div>
        <div className={cover.box + " " + cover.right}>
          <h1 className={cover.h1}>{coverData.title}</h1>
          <h1 className={cover.h1}>{coverData.titleTwo}</h1>
          <span className={cover.description}>{coverData.description}</span>

          <div className={cover.buttons}>
            <button className={cover.button_one}>{coverData.buttonOne}</button>
            <button className={cover.button_two}>{coverData.buttonTwo}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

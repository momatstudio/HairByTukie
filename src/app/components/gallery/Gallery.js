"use client";
import gallery from "./gallery.module.css";
import GalleryContainer from "./GalleryContainer";
import SectionTitle from "../independents/SectionTitle";
import { myWork } from "@/app/data";
import { useState } from "react";
// import { servicesData } from "@/app/data";

export default function Gallery() {
  const [isViewAllActive, setIsViewAllActive] = useState(false);
  // console.log(data);

  return (
    <section className={gallery.section} id="our-gallery">
      <SectionTitle
        title="OUR GALLERY"
        description="These are some of the work weve done"
      />
      <ul className={gallery.view_all}>
        <li onClick={() => setIsViewAllActive(!isViewAllActive)}>All</li>
        <li onClick={() => setIsViewAllActive(!isViewAllActive)}>
          Straight Back
        </li>
        <li onClick={() => setIsViewAllActive(!isViewAllActive)}>
          Straight Up
        </li>
        <li onClick={() => setIsViewAllActive(!isViewAllActive)}>Free Hand</li>
        <li onClick={() => setIsViewAllActive(!isViewAllActive)}>Bonding</li>
      </ul>
      <div className={gallery.container}>
        {myWork.map((item, index) => (
          <GalleryContainer {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

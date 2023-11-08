"use client";
import gallery from "./gallery.module.css";
import GalleryContainer from "./GalleryContainer";
import SectionTitle from "../independents/SectionTitle";
// import { servicesData } from "@/app/data";

export default function Gallery({ data, title, description }) {
  // console.log(data);

  return (
    <section className={gallery.section}>
      <SectionTitle title={title} description={description} />
      <div className={gallery.container}>
        {data.map((item, index) => (
          <GalleryContainer {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

"use client";
import services from "./services.module.css";
import Service from "./Service";
import SectionTitle from "../independents/SectionTitle";
// import { servicesData } from "@/app/data";

export default function Services({ data, title, description }) {
  // console.log(data);

  return (
    <section className={services.section} id="our-services">
      {/* <div className={services.title}>
        <h2>OUR SERVICES</h2>
        <span></span>
      </div> */}
      <SectionTitle title={title} description={description} />
      <div className={services.container}>
        {data.map((item, index) => (
          <Service {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

"use client";
import services from "./services.module.css";
import Service from "./Service";
import SectionTitle from "../independents/SectionTitle";
import { servicesData } from "@/app/data";

export default function Services() {
  // console.log(data);

  return (
    <section className={services.section} id="our-services">
      {/* <div className={services.title}>
        <h2>OUR SERVICES</h2>
        <span></span>
      </div> */}
      <SectionTitle
        title="OUR SERVICES"
        description="This is the list of hair styles we do"
      />
      <div className={services.container}>
        {servicesData.map((item, index) => (
          <Service {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

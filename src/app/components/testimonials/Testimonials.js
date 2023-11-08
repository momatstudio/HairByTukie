import React from "react";
import testimonials from "./testimonials.module.css";
import SectionTitle from "../independents/SectionTitle";
import { testimonialsData } from "@/app/data";
import Testimonial from "./Testimonial";

export default function Testimonials() {
  return (
    <section className={testimonials.section}>
      <SectionTitle
        title={"TESTIMONIALS"}
        description={"Hear what our clients have to say about us"}
      />
      <div className={testimonials.parent}>
        {testimonialsData.map((item, index) => (
          <Testimonial {...item} key={index} />
        ))}
      </div>
    </section>
  );
}

import React from "react";
import testimonials from "./testimonials.module.css";
import Image from "next/image";

const Quote = ({ width, height }) => {
  const leftQuote = "/left-quotes-sign -white.png";
  return (
    <img src={leftQuote} width={width} height={height} alt={"left quotes"} />
  );
};

export default function Testimonial({ name, description, image }) {
  return (
    <div className={testimonials.child}>
      <div className={testimonials.quote}>
        <div className={testimonials.left_qoute}>
          <Quote width={30} height={30} />
        </div>
      </div>

      <span className={testimonials.span}>{description}</span>

      <div className={testimonials.quote}>
        <div className={testimonials.right_qoute}>
          <Quote width={30} height={30} />
        </div>
      </div>
      <div className={testimonials.box}>
        <b className={testimonials.b}>{name}</b>
        <div className={testimonials.circle}>
          <img src={image} className={testimonials.image} />
        </div>
      </div>
    </div>
  );
}

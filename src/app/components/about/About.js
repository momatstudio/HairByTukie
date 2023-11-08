import React from "react";
import about from "./about.module.css";
import { aboutMe } from "@/app/data";

export default function About({}) {
  const { image, title, description, secondTitle } = aboutMe;
  return (
    <section className={about.section}>
      <div
        className={about.left}
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className={about.right}>
        <h2 className={about.h2}>{title}</h2>
        <h2 className={about.h2}>{secondTitle}</h2>
        <br />
        <br />
        {description.split("\n\n").map((paragraph, index) => (
          <span className={about.span} key={index}>
            {paragraph}
          </span>
        ))}
        <br />
        <br />
        <br />
        <button className={about.button}>READ MORE</button>
      </div>
    </section>
  );
}

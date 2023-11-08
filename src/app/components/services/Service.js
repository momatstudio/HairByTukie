"use client";
import React, { useState } from "react";
import services from "../services/services.module.css";

export default function Service({ image, title }) {
  const [childIsActive, setChildIsActive] = useState(false);

  // const image = "/images.jpeg";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className={services.child_wrapper}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={services.child}
        onMouseMove={() => setChildIsActive(true)}
        onMouseLeave={() => setChildIsActive(false)}
      >
        {title && (
          <div
            className={services.sub_title}
            style={{ display: childIsActive ? "flex" : "none" }}
          >
            BOOK NOW
          </div>
        )}
      </div>
      <div className={services.title}>
        <span className={services.span}>{title}</span>
      </div>
    </div>
  );
}

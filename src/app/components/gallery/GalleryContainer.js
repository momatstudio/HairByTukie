"use client";
import React, { useState } from "react";
import gallery from "./gallery.module.css";

export default function GalleryContainer({ image, title }) {
  const [childIsActive, setChildIsActive] = useState(false);

  // const image = "/images.jpeg";

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
      className={gallery.child_wrapper}
    >
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className={gallery.child}
        onMouseMove={() => setChildIsActive(true)}
        onMouseLeave={() => setChildIsActive(false)}
      >
        {title && (
          <div
            className={gallery.sub_title}
            style={{ display: childIsActive ? "flex" : "none" }}
          >
            BOOK NOW
          </div>
        )}
      </div>
      <div className={gallery.title}>
        <span className={gallery.span}>{title}</span>
      </div>
    </div>
  );
}

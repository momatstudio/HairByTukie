"use client";
import React, { useState } from "react";
import gallery from "./gallery.module.css";
import Image from "next/image";

export default function GalleryContainer({ image, title }) {
  const [childIsActive, setChildIsActive] = useState(false);

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
        style={
          {
            // backgroundImage: `url(${image})`,
          }
        }
        className={gallery.child}
        onMouseMove={() => setChildIsActive(true)}
        onMouseLeave={() => setChildIsActive(false)}
      >
        <Image
          src={image}
          alt={image}
          width={554}
          height={554}
          style={{ width: "100%", height: "100%" }}
        />
        {title && (
          <div
            className={gallery.sub_title}
            style={{ display: childIsActive ? "flex" : "none" }}
          >
            BOOK NOW
          </div>
        )}
      </div>
      {/* <div className={gallery.title}>
        <span className={gallery.span}>{title}</span>
      </div> */}
    </div>
  );
}

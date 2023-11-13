"use client";
import React, { useState } from "react";
import services from "../services/services.module.css";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            href={"https://wa.me/+27768080517"}
            className={services.sub_title}
            style={{ display: childIsActive ? "flex" : "none" }}
          >
            BOOK NOW
          </Link>
        )}
      </div>
      <div className={services.title}>
        <span className={services.span}>{title}</span>
      </div>
    </div>
  );
}

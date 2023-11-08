"use client";
import React from "react";

export default function SectionTitle({ title, description }) {
  return (
    <>
      <div className={"title"}>
        <h2>{title}</h2>
        {/* <span>{description}</span> */}
      </div>

      <style jsx>{`
        .title {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 40px 0;
        }
        span {
          text-align: center;
        }
        @media (max-width: 580px) {
          h2 {
            font-size: 30px;
          }
        }
      `}</style>
    </>
  );
}

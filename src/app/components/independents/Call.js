"use client";
import React from "react";
import { assets } from "@/app/data";

export default function Call() {
  return (
    <>
      <a href={"https://wa.me/0768080517"}>
        <div style={{ backgroundImage: `url(${assets.whatsappIcon})` }}></div>
      </a>

      <style jsx>{`
        div {
            position: fixed;
            display: flex
            justify-content: center;
            align-items: center;
            height: 50px;
            width: 50px;
            border-radius: 50%;
            background-color: #00ffff;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            bottom: 0;
            right:0;
            margin-bottom: 40px;
            margin-right: 40px;
            cursor: pointer;
            z-index: 100;

        }
      `}</style>
    </>
  );
}

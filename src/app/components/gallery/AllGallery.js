"use client";
import gallery from "./gallery.module.css";
import GalleryContainer from "./GalleryContainer";
import SectionTitle from "../independents/SectionTitle";
import { myWork } from "@/app/data";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";

export default function AllGallery() {
  const [selectedGallery, setSelectedGallery] = useState("all");
  const [ourGallery, setOurGallery] = useState(myWork);
  const [filteredCategory, setFilteredCategory] = useState([]);

  useEffect(() => {
    //display unique categories. No duplicates
    const newCategory = ourGallery.filter(
      (currentObj, index, self) =>
        self.findIndex((obj) => obj.name === currentObj.name) === index
    );
    setFilteredCategory(newCategory);
  }, []);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className={gallery.section} id="our-gallery">
        <SectionTitle
          title="OUR GALLERY"
          description="These are some of the work weve done"
        />

        <ul className={gallery.view}>
          <li
            onClick={() => setSelectedGallery("all")}
            className={
              selectedGallery === "all" ? gallery.highlight_element : null
            }
          >
            {"All"}
          </li>
          {filteredCategory.map((item, index) => (
            <li
              key={index}
              onClick={() => setSelectedGallery(item.name)}
              className={
                selectedGallery === item.name ? gallery.highlight_element : null
              }
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div className={gallery.container}>
          {selectedGallery === "all"
            ? ourGallery.map((item, index) => (
                <GalleryContainer {...item} key={index} />
              ))
            : ourGallery
                .filter((item) => item.name === selectedGallery)

                .map((item, index) => (
                  <GalleryContainer {...item} key={index} />
                ))}
        </div>
      </section>
      <br />
      <Footer />
    </>
  );
}

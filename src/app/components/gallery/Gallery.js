"use client";
import gallery from "./gallery.module.css";
import GalleryContainer from "./GalleryContainer";
import SectionTitle from "../independents/SectionTitle";
import { myWork } from "@/app/data";
import { useEffect, useState } from "react";

export default function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState("all");
  const [ourGallery, setOurGallery] = useState(myWork);
  const [filteredCategory, setFilteredCategory] = useState([]);
  const [viewAll, setViewAll] = useState(false);

  useEffect(() => {
    //display unique categories. No duplicates
    const newCategory = ourGallery.filter(
      (currentObj, index, self) =>
        self.findIndex((obj) => obj.name === currentObj.name) === index
    );
    setFilteredCategory(newCategory);
  }, []);

  const GalleriesContainer = () => {
    return !viewAll ? (
      <div className={gallery.container}>
        {selectedGallery === "all"
          ? ourGallery
              .slice(0, 4)
              .map((item, index) => <GalleryContainer {...item} key={index} />)
          : ourGallery
              .filter((item) => item.name === selectedGallery)
              .slice(0, 4)
              .map((item, index) => <GalleryContainer {...item} key={index} />)}
      </div>
    ) : (
      <div className={gallery.container}>
        {selectedGallery === "all"
          ? ourGallery.map((item, index) => (
              <GalleryContainer {...item} key={index} />
            ))
          : ourGallery
              .filter((item) => item.name === selectedGallery)
              .map((item, index) => <GalleryContainer {...item} key={index} />)}
      </div>
    );
  };

  return (
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
      <GalleriesContainer />
      <div className={gallery.view_all}>
        <span onClick={() => setViewAll(!viewAll)}>
          View {viewAll ? "less" : "more"}
        </span>
      </div>
    </section>
  );
}

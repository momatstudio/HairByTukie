"use ";
import Header from "./components/header/Header";
import Cover from "./components/cover/Cover";
import Services from "./components/services/Services";
import styles from "./page.module.css";
import About from "./components/about/About";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Call from "./components/independents/Call";
import AllGallery from "./components/gallery/AllGallery";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <AllGallery /> */}
      <Cover />
      <Services />
      <About />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <Call />
    </main>
  );
}

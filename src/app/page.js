"use ";
import Header from "./components/header/Header";
import Cover from "./components/cover/Cover";
import Services from "./components/services/Services";
import styles from "./page.module.css";
import About from "./components/about/About";
import { servicesData, myWork } from "./data";
import Testimonials from "./components/testimonials/Testimonials";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Call from "./components/independents/Call";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* <Header /> */}
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

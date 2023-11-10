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
      <Services
        data={servicesData}
        title={"OUR SERVICES"}
        description={"This is the list of hair styles we do"}
      />
      <About />
      <Gallery
        data={myWork}
        title={"OUR GALLERY"}
        description={"These are some of the work weve done"}
      />
      <Testimonials />
      <Contact />
      <Footer />
      <Call />
    </main>
  );
}

import React from "react";
import contact from "./contact.module.css";

export default function Contact() {
  const image = "/display.png";
  return (
    <section className={contact.section} id="contact-us">
      <div className={contact.container}>
        <div className={contact.left}>
          <b className={contact.b}>CONTACT INFO</b>
          <br />

          <div className={contact.child}>
            <span> CALL: (076) 8080 517</span>
          </div>
          <br />
          <div className={contact.child}>
            <span>WHATSAPP:(076) 8080 517</span>
          </div>
          <br />
          <div className={contact.child}>
            <span>EMAIL: hairbytukie@info.co.za</span>
          </div>
          <br />
          <br />
          <b className={contact.b}>ADDRESS</b>

          <div className={contact.child}>
            <br />
            <span>Naledi A 2, Ga-Maphalle Molototsi 0827</span>
            <br />
            <br />
            <div className={contact.openning_hours}>
              <b className={contact.b}>OPENING HOURS</b>
              <br />
              <br />
              <div className={contact.hours}>
                <div className={contact.row}>
                  <span className={contact.day}>Monday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Tuesday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Wednesday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Thursday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Friday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Saturday</span>
                  <span>06h00 - 18H00</span>
                </div>
                <div className={contact.row}>
                  <span className={contact.day}>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <br />
        <br />
        <button>BOOK FOR AN APOINTMENT</button> */}

        <div
          className={contact.right}
          style={{ backgroundImage: `url(${image})` }}
        ></div>
      </div>
    </section>
  );
}

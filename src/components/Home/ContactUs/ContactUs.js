import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section className="contact-container text-center mt-5 pt-4" id="contact">
      <div>
        <h5 style={{ color: "#1CC7C1" }}>CONTACT US</h5>
        <h1 style={{ color: "white" }}>Always Connect With Us</h1>
      </div>
      <div style={{ margin: "0 auto" }} class="w-50">
        <div class="mb-3 mt-5">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Email Address*"
          />
        </div>
        <div class="mb-3">
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="Subject*"
          />
        </div>
        <div class="mb-3">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
            placeholder="Your Message*"
          ></textarea>
        </div>
        <div>
          <button className="btn btn-brand mt-2">SUBMIT</button>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;

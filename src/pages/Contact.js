import React from "react";
import Footer from '../components/Main-Footer';
import Hero from "../components/Contact-Hero";
import Right_side from "../components/Contact-Right-side";
import Left_side from "../components/Conatct-Left-side";
import Cta from "../components/Contact-Cta";

function Contact() {
  return (
    <div>
    <div className="container my-5">

      {/* HERO SECTION */}
      <Hero/>

      <div className="row g-5">

        {/* LEFT SIDE */}
        <Left_side/>

        {/* RIGHT SIDE FORM */}
        <Right_side/>

      </div>

      {/* CTA STRIP */}
      <Cta/>

    </div>
    </div>
  );
}

export default Contact;
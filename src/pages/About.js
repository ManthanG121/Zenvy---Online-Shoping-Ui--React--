import React from "react";
import Hero from "../components/About-Hero";
import Statement from "../components/About-Brand-Statement";
import Who_We_Are from "../components/About-Who-We-Are";
import Features_Strip from "../components/About-Features-Strip";
import Collection_Image from "../components/About-Collection-Image";
import Our_Mission from "../components/About-Our-Mission";
import Big_Banner from "../components/About-Big-Banner";
import Footer from '../components/Main-Footer';

function About() {
  return (
    <div>
      <div className="container my-5">

        {/* HERO (Full Impact) */}
        <Hero />

        {/* BRAND STATEMENT */}
        <Statement />

        {/* WHO WE ARE (Split Premium Layout) */}
        <Who_We_Are />

        {/* FEATURES STRIP (Like Big Brands) */}
        <Features_Strip />

        {/* COLLECTION + IMAGE ALTERNATE */}
        <Collection_Image />

        {/* MINIMAL MISSION (CENTERED – PREMIUM STYLE) */}
        <Our_Mission />

        {/* BIG CTA BANNER */}
        <Big_Banner />
      </div>
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default About;
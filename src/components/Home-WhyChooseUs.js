import React from "react";
import Card from "./Home-Why-Choose-Us-Card";
import data from "../data/Home-Why-Choose-Us-Card.json";
function WhyChooseUs() {
  return (
    <div className="container my-5">

      {/* Title */}
      <div className="text-center mb-5">
        <h2 className="fw-bold">Why Choose Us</h2>
        <p className="text-muted">
          We provide the best shopping experience for you
        </p>
      </div>

      <div className="row text-center g-4">

        {/* Features */}
        {data.map((data)=>(
        <Card
        femoji = {data.emogi}
        ftitle = {data.title}
        ftext = {data.text}
        />
        ))}

      </div>
    </div>
  );
}

export default WhyChooseUs;
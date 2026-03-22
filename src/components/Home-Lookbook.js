import React from "react";

function Lookbook() {
  return (
    <div className="container my-5">

      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Style Inspiration</h2>
        <p className="text-muted">
          Get inspired with our curated fashion looks
        </p>
      </div>

      <div className="row g-4">

        {/* Left Big Image */}
        <div className="col-lg-6">
          <div className="card border-0 text-white">

            <img
              src="https://img.freepik.com/free-photo/stylish-happy-girl-shopping-portrait-modern-woman-with-shop-bag-laughing-smiling-satisfied_1258-119361.jpg?semt=ais_hybrid&w=740&q=80"
              className="card-img"
              alt="Look 1"
            />

            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
              <h3 className="fw-bold">Summer Collection</h3>
              <button className="btn btn-light btn-sm w-50">
                Shop Look
              </button>
            </div>

          </div>
        </div>

        {/* Right Grid */}
        <div className="col-lg-6">
          <div className="row g-4">

            {/* Top Right */}
            <div className="col-12">
              <div className="card border-0 text-white">

                <img
                  src="https://img.freepik.com/free-photo/attractive-smiling-asian-woman-holding-shopping-bags-wearing-sunglasses-cute-dress-standing-agai_1258-153611.jpg?semt=ais_hybrid&w=740&q=80"
                  className="card-img"
                  alt="Look 2"
                />

                <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold">Street Style</h5>
                  <button className="btn btn-light btn-sm w-50">
                    View
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Right */}
            <div className="col-12">
              <div className="card border-0 text-white">

                <img
                  src="https://img.freepik.com/free-photo/shopping-fashion-concept-beautiful-asian-senior-woman-looking-dreamy-upper-left-corner-im_1258-147288.jpg?semt=ais_rp_50_assets&w=740&q=80"
                  className="card-img"
                  alt="Look 3"
                />

                <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold">Winter Style</h5>
                  <button className="btn btn-light btn-sm w-50">
                    Explore
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Lookbook;
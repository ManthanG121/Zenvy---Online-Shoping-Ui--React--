import React from "react";

function OfferBanner() {
  return (
    <div className="container my-5">

      {/* Section Title */}
      <div className="text-center mb-4">
        <h2 className="fw-bold">Exclusive Offers</h2>
        <p className="text-muted">Grab the best deals before they’re gone</p>
      </div>

      <div className="row g-4">

        {/* Big Left Banner */}
        <div className="col-lg-6">
          <div className="card border-0 text-white">

            <img
              src="https://media.istockphoto.com/id/1406853369/vector/shopping-bag-handbag-sale-discount-promotion-shopping-concept.jpg?s=612x612&w=0&k=20&c=P-CwKGyXdU2mBenFJga2DszxeL3PTzjK1565Kz_IsSU="
              className="card-img"
              alt="New"
            />

            <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
              <h5 className="fw-bold">New Collection</h5>
              <button className="btn btn-light btn-sm w-50">
                View
              </button>
            </div>

          </div>
        </div>


        {/* Right Side (2 small banners) */}
        <div className="col-lg-6">
          <div className="row g-4">

            {/* Top Right */}
            <div className="col-12">
              <div className="card border-0 text-white">

                <img
                  src="https://static.vecteezy.com/system/resources/thumbnails/058/335/193/small/bright-yellow-fashion-sale-banner-featuring-floating-clothing-shoes-and-an-alarm-clock-bold-typography-emphasizes-discounts-creating-an-eye-catching-shopping-promotion-3d-rendering-photo.jpg"
                  className="card-img"
                  alt="Offer"
                />

                <div className="card-img-overlay d-flex flex-column justify-content-end p-3">
                  <h5 className="fw-bold">Buy 1 Get 1 Free</h5>
                  <button className="btn btn-light btn-sm w-50">
                    Explore
                  </button>
                </div>

              </div>
            </div>

            {/* Bottom Right */}


          </div>
        </div>
        <div className="col-lg-12">
          <div className="card border-0 text-white">

            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/058/335/198/small/minimalist-sale-concept-with-bright-yellow-tones-featuring-elegant-fashion-items-and-floating-elements-perfect-for-showcasing-seasonal-promotions-and-stylish-shopping-deals-3d-rendering-photo.jpg"

              className="card-img"
              alt="Sale"
            />

            <div className="card-img-overlay d-flex flex-column justify-content-end p-4">
              <span className="badge bg-danger mb-1">HOT DEAL</span>
              <h3 className="fw-bold">End of Season Sale</h3>
              <p>Up to 60% OFF</p>
              <button className="btn btn-light btn-sm w-50">
                Shop Now
              </button>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default OfferBanner;
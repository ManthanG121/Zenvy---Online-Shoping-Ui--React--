import React from 'react'
import Carousel from '../components/Home-Screen-Carousel';
import Home_Info_Card from '../components/Home-Info-Card';
import Trending_Card from '../components/Home-Trending-Card';
import NewArrivals_Card from '../components/Home-NewArrivals-Card';
import OfferBanner from '../components/Home-OfferBanner';
import Lookbook from '../components/Home-Lookbook';
import WhyChooseUs from '../components/Home-WhyChooseUs';
import Reviews from '../components/Home-Customer-Reviews';
import Footer from '../components/Main-Footer';

import Features_Card_Data from "../data/Home-Features-Card";
import product_data from "../data/Trending-Products.json";
import New_Product_data from "../data/NewArrivals-Products.json";
import review_data from "../data/Home-Reviews.json"

const Home = () => {
  return (
    <div>
      {/* Slider */}


      <Carousel />



      {/* Special Feacters */}
      <div className='container-fluid p-4 row'>
        <h2 className="text-center mb-2 fw-bold">Our Services</h2>
        <hr/>
        {Features_Card_Data.map((FCData) => (
          <Home_Info_Card
            ftitle={FCData.title}
            ftext={FCData.text}
          />
        ))}
      </div>
    



      {/* Trending Now */ }
  <div className="container py-5">
    <h2 className="text-center mb-2 fw-bold">Trending Now</h2>
    <p className="text-center text-muted mb-4">
      Stay ahead of the trend with our most loved styles
    </p>

    <div className="row">
      {product_data.map((pd) => (
        <Trending_Card
          id = {pd.id}
          pimage={pd.image}
          pname={pd.name}
          pofferprice={pd.Offer_price}
          porignalprice={pd.Orignal_Price}
        />
      ))}
    </div>
  </div>



  {/* New Arrivals */ }
  <div className="container py-5">
    <h2 className="text-center fw-bold mb-2">New Arrivals</h2>
    <p className="text-center text-muted mb-4">
      Fresh styles just dropped — upgrade your wardrobe today
    </p>

    <div className="row">
      {New_Product_data.map((npdata) => (
        <NewArrivals_Card
          id = {npdata.id}
          nproduct_name={npdata.name}
          nproduct_image={npdata.image}
          nproduct_price={npdata.price}
        />
      ))}
    </div>
  </div>




  {/* Offer Banner */ }
  <OfferBanner />

  {/* LookBook */ }
  <Lookbook />

  {/* WhyChooseUs */ }
  <WhyChooseUs />




  {/* Customer Reviews */ }
  <div className="container my-5">

    <div className="text-center mb-5">
      <h2 className="fw-bold">What Our Customers Say</h2>
      <p className="text-muted">
        Real reviews from happy customers
      </p>
    </div>

    <div className="row g-4">
      {review_data.map((data) => (
        <Reviews
          rname={data.name}
          rimage={data.image}
          rratings={data.ratings}
          rtext={data.text}
        />
      ))}
    </div>
  </div>

    </div >

  )
}

export default Home;

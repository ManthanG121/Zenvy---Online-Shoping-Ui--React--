import React from 'react'

const Footer = () => {
    return (

        <footer className="bg-dark text-white pt-5 pb-3 mt-5">

            <div className="container">
                <div className="row">

                    {/* Brand */}
                    <div className="col-md-3 mb-4">
                        <h4 className="fw-bold">Zenvy</h4>
                        <p className="text-muted">
                            Elevate your style with Zenvy — your destination for modern fashion.
                        </p>
                    </div>

                    {/* Shop */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold">Shop</h6>
                        <ul className="list-unstyled">
                            <li>Men</li>
                            <li>Women</li>
                            <li>New Arrivals</li>
                            <li>Trending</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold">Support</h6>
                        <ul className="list-unstyled">
                            <li>Contact Us</li>
                            <li>Returns & Exchanges</li>
                            <li>Shipping Info</li>
                            <li>FAQs</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-md-3 mb-4">
                        <h6 className="fw-bold">Contact</h6>
                        <p className="mb-1">Email: support@zenvy.com</p>
                        <p className="mb-1">Phone: +91 9876543210</p>
                        <p>Mumbai, India</p>
                    </div>

                </div>

                <hr className="border-secondary" />

                <div className="text-center">
                    <p className="mb-0">
                        © 2026 Zenvy. All rights reserved.
                    </p>
                </div>

            </div>

        </footer>

    )
}

export default Footer;

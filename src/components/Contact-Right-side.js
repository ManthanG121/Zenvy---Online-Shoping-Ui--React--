import React from 'react'

const Right_side = () => {
  return (
    <div className="col-lg-7">

          <div
            className="p-4 shadow-sm"
            style={{ borderRadius: "10px" }}
          >
            <h4 className="fw-bold mb-4">Send Message</h4>

            <div className="row g-3">

              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your Name"
                  style={{ padding: "12px" }}
                />
              </div>

              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Your Email"
                  style={{ padding: "12px" }}
                />
              </div>

              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  style={{ padding: "12px" }}
                />
              </div>

              <div className="col-12">
                <textarea
                  className="form-control"
                  rows="4"
                  placeholder="Your Message"
                  style={{ padding: "12px" }}
                ></textarea>
              </div>

              <div className="col-12">
                <button
                  className="btn btn-dark w-100"
                  style={{ padding: "12px", fontWeight: "600" }}
                >
                  Send Message
                </button>
              </div>

            </div>

          </div>

        </div>
  )
}

export default Right_side

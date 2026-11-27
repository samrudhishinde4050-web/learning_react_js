
const Contact = () => {
  return (
    <section className="bg-subtle-warning py-5" id="contact">
      <div className="container">
        <div className="row align-items-center">

          {/* Left Side - Contact Form */}
          <div className="md:col-6 p-6">
            <h2>Get In Touch</h2>
            <p>Get in touch with us</p>

            <form>
              {/* Full Name */}
              <div className="mb-3">
                <label className="form-label">
                  Full Name
                </label>

                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Address */}
              <div className="mb-3">
                <label className="form-label">
                  Email Address
                </label>

                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone Number */}
              <div className="mb-3">
                <label className="form-label">
                  Phone Number
                </label>

                <input
                  type="tel"
                  className="form-control"
                  placeholder="Enter your phone number"
                />
              </div>

              {/* Message */}
              <div className="mb-3">
                <label className="form-label">
                  Message
                </label>

                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Enter your message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side - Google Map */}
          <div className="md:col-6 p-6">
            <h2>Our Location</h2>
            <p>Visit us at our location</p>

            <iframe
              src="https://www.google.com/maps?q=Pune,Maharashtra&output=embed"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: "10px" }}
              allowFullScreen
              loading="lazy"
              title="Our Location - Pune"
            ></iframe>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

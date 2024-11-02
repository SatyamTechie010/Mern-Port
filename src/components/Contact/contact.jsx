import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
  };

  return (
    <>
      <section className="firstSection">
        <main>
          <div className="container">
            <h1 className="heading">Contact.</h1>
            <p>
              Get in touch or shoot me an email directly at
              <a href="mailto:satyamkanha1127@gmail.com">
                {" "}satyamkanha1127@gmail.com
              </a>
            </p>
          </div>
          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  minLength="10"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  required
                  minLength="50"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn">Send Message</button>
            </form>
          </div>
        </main>
      </section>

      <section className="last">
        <span className="get">Get Back Home</span>
        <i className="fa-sharp fa-solid fa-arrow-right fa-beat" aria-hidden="true"></i>
      </section>

      <footer className="footer">
        <div className="foot">
          <a href="https://x.com/satyam_sahu_07" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-twitter" aria-hidden="true" />
          </a>
          <a href="" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-facebook" aria-hidden="true" />
          </a>
          <a href="https://www.linkedin.com/in/satyamsivamsahu010/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-linkedin" aria-hidden="true" />
          </a>
          <a href="https://github.com/SatyamTechie010/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
          <a href="https://www.instagram.com/satyam_wanderlust/" target="_blank" rel="noopener noreferrer">
            <i className="fa-brands fa-instagram" aria-hidden="true" />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Contact;

import React from "react";
import "./../../index.css";
import upwork from '../../assets/img/icons/common/upwork.png';

const Contact = () => {
  return (
    <section className="contact-container" name="contact" id="contact">
      <div className="profile-image"></div>
      <h1 className="heading">Contact</h1>

      <div className="cards-container">
        {/* Card 1 - Email */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-envelope"></i>
          </div>
          <div className="contact-text">
            <span>Email</span>
          </div>
          <div className="contact-links">
            <span><a href="mailto:alinasir85@live.com">alinasir85@live.com</a></span>
          </div>
        </div>

        {/* Card 2 - Social Media */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-globe"></i>
          </div>
          <div className="contact-text">
            <span>Channels</span>
          </div>
          <div className="contact-links">
            {/* github */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://github.com/alinasir85?tab=repositories"
            >
              <i className="fab fa-github" title="github" id="github"></i>
            </a>

            {/* facebook */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.upwork.com/freelancers/aghamuhammadalin"
            >
              <img src={upwork} alt={"upwork"} style={{width: '44%',paddingTop: '8%', height:'40%'}}/>
            </a>

            {/* linkedIn */}
            <a
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/ali-nasir-04158817a/"
            >
              <i className="fab fa-linkedin" title="linkedin" id="linkedin"></i>
            </a>
          </div>
        </div>

        {/* Card 3 - Phone */}
        <div className="cards">
          <div className="contact-icons">
            <i className="fas fa-phone"></i>
          </div>
          <div className="contact-text">
            <span>Phone</span>
          </div>
          <div className="contact-links">
            <span>(+92) 333 8656455 </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

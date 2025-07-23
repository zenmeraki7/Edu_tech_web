import React from 'react';
import {
  FaTwitter,
  FaLinkedinIn,
  FaEnvelope,
  FaMobileAlt,
  FaCodeBranch,
  FaCloud,
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';


function Footer() {
  return (
    <div className="bg-white pt-5 pb-4">
      <div className="container">
        <div className="row g-4">
          {/* Company Info */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <strong className="fs-5">ZENMERAKI</strong>
            <p className="mt-3 text-justify fs-6 lh-lg">
              We specialize in transforming ideas into impactful solutions. From cutting-edge applications to intuitive designs, our work reflects a commitment to excellence and innovation in all we deliver.
            </p>
            <div className="mt-4 d-flex gap-3">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaTwitter size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                <FaLinkedinIn size={20} />
              </a>
              <a href="mailto:someone@example.com" className="text-dark">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-bold">Services</h6>
            <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px' }}></div>
            <div className="d-flex align-items-center footer-clickable footer-service mb-2">
              <FaMobileAlt className="me-2 footer-icon" /> Mobile Development
            </div>
            <div className="d-flex align-items-center footer-clickable footer-service mb-2">
              <FaCodeBranch className="me-2 footer-icon" /> Web Development
            </div>
            <div className="d-flex align-items-center footer-clickable footer-service mb-2">
              <FaCloud className="me-2 footer-icon" /> Cloud Solutions
            </div>
            <div className="d-flex align-items-center footer-clickable footer-service">
              <FaStar className="me-2 footer-icon" /> AI/ML Integration
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-bold">Quick Links</h6>
            <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px' }}></div>
            <a href="#about" className="footer-clickable footer-link text-dark text-decoration-none mb-2 d-block">About Us</a>
            <a href="#services" className="footer-clickable footer-link text-dark text-decoration-none mb-2 d-block">Services</a>
            <a href="#careers" className="footer-clickable footer-link text-dark text-decoration-none mb-2 d-block">Careers</a>
            <a href="#contact" className="footer-clickable footer-link text-dark text-decoration-none d-block">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="col-12 col-md-6 col-lg-3 footer-section">
            <h6 className="fw-bold">Contact</h6>
            <div className="bg-success mt-2 mb-3" style={{ width: '40px', height: '3px' }}></div>

            {/* Location */}
            <div className="bg-white shadow-sm p-2 mb-2 rounded footer-clickable">
              <div className="d-flex align-items-center mb-1">
                <FaMapMarkerAlt className="text-success me-2" /> <strong>Location</strong>
              </div>
              <div className="ms-4">Thrissur, Kerala</div>
            </div>

            {/* Email */}
            <div className="bg-white shadow-sm p-2 mb-2 rounded footer-clickable">
              <div className="d-flex align-items-center mb-1">
                <FaEnvelope className="text-success me-2" /> <strong>Email</strong>
              </div>
              <div className="ms-4">official@zenmeraki.com</div>
            </div>

            {/* Phone */}
            <div className="bg-white shadow-sm p-2 rounded footer-clickable">
              <div className="d-flex align-items-center mb-1">
                <FaPhoneAlt className="text-success me-2" /> <strong>Phone</strong>
              </div>
              <div className="ms-4">+91 6282346108</div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default Footer;

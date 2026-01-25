import React from 'react';
import './Footer.css';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaHeart } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container footer-container">
                <div className="footer-about">
                    <span className="footer-logo">Freshpod</span>
                    <p className="footer-desc">
                        India's first revolutionary helmet disinfectant machine.
                        Making every ride fresh, safe, and hygienic.
                    </p>
                    <div className="social-icons">
                        <a href="https://instagram.com/freshpod_india" target="_blank" rel="noreferrer" className="social-icon"><FaInstagram /></a>
                        <a href="https://wa.me/917815908571" target="_blank" rel="noreferrer" className="social-icon"><FaWhatsapp /></a>
                        <a href="mailto:hello@freshpod.in" className="social-icon"><FaEnvelope /></a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Quick Links</h4>
                    <ul className="footer-links">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#about">About Us</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#calculator">Calculator</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Contact Us</h4>
                    <ul className="contact-info">
                        <li><FaMapMarkerAlt /> Tanuku, Andhra Pradesh</li>
                        <li><FaWhatsapp /> +91 78159 08571</li>
                        <li><FaEnvelope /> hello@freshpod.in</li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4 className="footer-title">Newsletter</h4>
                    <p style={{ color: '#a0aec0', fontSize: '0.9rem' }}>Subscribe for updates & offers.</p>
                    <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
                        <input type="email" placeholder="Your Email" className="newsletter-input" />
                        <button className="newsletter-btn">Go</button>
                    </form>
                </div>
            </div>

            <div className="container footer-bottom">
                <p>© 2026 Freshpod India. All rights reserved.</p>
                <p style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    Made with <FaHeart color="#e25555" /> in India
                </p>
            </div>
        </footer>
    );
};

export default Footer;

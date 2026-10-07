import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Footer({ showToast }) {
  return (
    <footer className="site-footer-v2">
      {/* Decorative Transparent Motifs */}
      <div className="footer-decor-layer" aria-hidden="true">
        <img src="/assets/decor/footer_cherry_top_right.png" alt="" className="footer-motif motif-top-right" />
        <img src="/assets/decor/footer_polish_spill.png" alt="" className="footer-motif motif-top-left" />
      </div>

      {/* Main Luxury 3-Column Footer with Centered Logo */}
      <div className="footer-bottom-red-section">
        <div className="container">
          <div className="footer-arch-grid">

            {/* Column 1: Left Navigation / Quick Links */}
            <div className="footer-arch-col footer-col-left">
              <h4 className="footer-arch-heading">NAVIGATION</h4>
              <ul className="footer-arch-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop All Nails</Link></li>
                <li><Link to="/bundle-and-save">Bundle &amp; Save</Link></li>
                <li><Link to="/sizing">Sizing &amp; Fit Guide</Link></li>
                <li><Link to="/gallery">Artistry Gallery</Link></li>
                <li><Link to="/about">About Atelier</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
              </ul>
            </div>

            {/* Column 2: Center Logo & Brand Identity (Matching Reference Sample) */}
            <div className="footer-arch-col footer-col-center">
              <div className="footer-center-logo-wrap">
                <Link to="/" className="footer-center-logo-link" title="X-ON Luxury Nails">
                  <img src="/assets/logo.png" alt="X-ON Luxury Nails" className="footer-center-logo-img" />
                </Link>
              </div>

              <h2 className="footer-center-brand-title">X-on Luxury Nails</h2>
              <p className="footer-center-desc">
                Bespoke nail atelier crafting salon-quality elegance, custom artistry, and lasting confidence.
              </p>

              <div className="footer-center-contact-info">
                <div className="footer-center-contact-item">
                  <MapPin size={13} style={{ display: 'inline', marginRight: '6px', verticalAlign: 'middle' }} />
                  <span>3168 Bill Beck Blvd, Kissimmee, FL 34744</span>
                </div>
                <div className="footer-center-contact-row">
                  <a href="tel:4071234567" className="contact-link">
                    <Phone size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> (407) 123-4567
                  </a>
                  <span className="contact-sep">•</span>
                  <a href="mailto:hello@xon-nails.com" className="contact-link">
                    <Mail size={13} style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }} /> hello@xon-nails.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 3: Right Follow Us & Newsletter */}
            <div className="footer-arch-col footer-col-right">
              <div className="footer-newsletter-block">
                <h4 className="footer-arch-heading">SIGN UP FOR THE NEWSLETTER</h4>
                <p className="footer-newsletter-note">
                  Subscribe for exclusive drops, private atelier events and VIP seasonal nail styles.
                </p>

                <form
                  className="footer-newsletter-form"
                  onSubmit={(e) => {
                    e.preventDefault();
                    showToast('✨ Thank you for subscribing to our VIP list!');
                    e.target.reset();
                  }}
                >
                  <div className="footer-newsletter-input-wrap">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      required
                      className="footer-newsletter-input"
                    />
                    <button type="submit" className="footer-newsletter-btn" aria-label="Subscribe">
                      <Send size={14} />
                    </button>
                  </div>
                </form>
              </div>

              <div className="footer-social-icons">
                <a
                  href="#"
                  className="footer-social-btn ig-btn"
                  aria-label="Instagram"
                  onClick={(e) => { e.preventDefault(); showToast('📸 Follow @XONNails on Instagram'); }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-btn tiktok-btn"
                  aria-label="TikTok"
                  onClick={(e) => { e.preventDefault(); showToast('🎵 Follow @XONNails on TikTok'); }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.89 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.35 0 .69.06 1 .18V9.45a6.38 6.38 0 0 0-1-.08A6.34 6.34 0 0 0 3 15.71 6.34 6.34 0 0 0 9.34 22a6.34 6.34 0 0 0 6.34-6.29V8.65a8.28 8.28 0 0 0 4.84 1.55v-3.46a4.85 4.85 0 0 1-.93-.05z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="footer-social-btn fb-btn"
                  aria-label="Facebook"
                  onClick={(e) => { e.preventDefault(); showToast('👍 Join our Facebook Community'); }}
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Deep Red Copyright Bottom Strip */}
        <div className="footer-copyright-strip">
          <div className="container">
            <p>&copy; 2026 X-ON Nail &amp; Beauty Atelier. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}






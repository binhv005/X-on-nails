import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactPage({ showToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'general',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 70, spread: 60 });
    showToast('💌 Thank you for contacting X-ON! Our studio concierge will reply within 12 hours.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: 'general',
      message: ''
    });
  };

  return (
    <div className="contact-page">
      
      {/* Contact Hero Banner with x-onpic.png background & sharp protective contrast overlay */}
      <section
        className="page-hero-banner contact-hero-banner reveal reveal-up"
        style={{
          backgroundImage: 'url(/assets/decor/x-onpic.png)'
        }}
      >
        <div className="page-hero-banner-overlay" />

        <div className="page-hero-banner-content">
          <span className="page-hero-eyebrow">
            GET IN TOUCH
          </span>
          <h1 className="page-hero-title">
            Contact Us &amp; Studio Concierge
          </h1>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 20px 70px' }}>

      <div className="contact-main-grid">
        
        {/* Contact Form */}
        <div className="reveal reveal-left" style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '36px', boxShadow: 'var(--shadow-sm)' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', marginBottom: '8px' }}>Send Us a Message</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Fill in the form and our specialist will respond promptly.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-two-col-grid">
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Your Name *</label>
                <input
                  type="text"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="e.g. Amanda Smith"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Your Email *</label>
                <input
                  type="email"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="amanda@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="form-two-col-grid">
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Phone (Optional)</label>
                <input
                  type="tel"
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="(407) 123-4567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Inquiry Topic</label>
                <select
                  className="cart-coupon-input"
                  style={{ width: '100%', background: '#FFFFFF' }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                >
                  <option value="general">General Inquiries</option>
                  <option value="custom-order">Custom / Bridal Order</option>
                  <option value="sizing">Sizing & Fit Assistance</option>
                  <option value="wholesale">Wholesale & B2B</option>
                  <option value="order-status">Track Existing Order</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Your Message *</label>
              <textarea
                required
                rows="5"
                className="cart-coupon-input"
                style={{ width: '100%', resize: 'vertical' }}
                placeholder="How can we help make your nail aesthetic flawless?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              <Send size={15} /> Send Message
            </button>
          </form>
        </div>

        {/* Studio Location & Details */}
        <div className="reveal reveal-right" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          <div style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '32px' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '14px' }}>
              Studio Location & Contact
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '0.88rem', color: 'var(--text-main)' }}>
              <div>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-gold)', marginBottom: '3px' }}>
                  <MapPin size={15} /> Atelier Studio:
                </strong>
                <span style={{ color: 'var(--text-muted)', paddingLeft: '21px', display: 'block' }}>3168 Bill Beck Blvd, Kissimmee, FL 34744</span>
              </div>

              <div>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-gold)', marginBottom: '3px' }}>
                  <Phone size={15} /> Phone:
                </strong>
                <span style={{ paddingLeft: '21px', display: 'block' }}>
                  <a href="tel:4071234567" style={{ color: 'var(--text-muted)' }}>(407) 123-4567</a>
                </span>
              </div>

              <div>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-gold)', marginBottom: '3px' }}>
                  <Mail size={15} /> Email:
                </strong>
                <span style={{ paddingLeft: '21px', display: 'block' }}>
                  <a href="mailto:hello@xon-nails.com" style={{ color: 'var(--text-muted)' }}>hello@xon-nails.com / concierge@xon-nails.com</a>
                </span>
              </div>

              <div>
                <strong style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-gold)', marginBottom: '3px' }}>
                  <Clock size={15} /> Studio Hours:
                </strong>
                <span style={{ color: 'var(--text-muted)', paddingLeft: '21px', display: 'block', lineHeight: 1.6 }}>
                  Monday – Friday: 9:00 AM – 7:00 PM EST<br />
                  Saturday: 10:00 AM – 6:00 PM EST<br />
                  Sunday: Closed (Online Orders Open 24/7)
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
);
}


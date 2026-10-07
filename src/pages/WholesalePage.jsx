import React, { useState } from 'react';
import { Check, Star, Crown, Award, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function WholesalePage({ showToast }) {
  const [formData, setFormData] = useState({
    businessName: '',
    contactPerson: '',
    email: '',
    phone: '',
    website: '',
    monthlyVolume: '20-50',
    notes: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    confetti({ particleCount: 80, spread: 60 });
    showToast('🎉 Wholesale application submitted! Our B2B representative will contact you within 24 hours.');
    setFormData({
      businessName: '',
      contactPerson: '',
      email: '',
      phone: '',
      website: '',
      monthlyVolume: '20-50',
      notes: ''
    });
  };

  return (
    <div className="wholesale-page">

      {/* Wholesale Hero Banner with background image & sharp protective contrast overlay */}
      <section
        className="page-hero-banner wholesale-hero-banner reveal reveal-up"
        style={{
          backgroundImage: 'url(/assets/decor/Create_logo_inside_nail_store_20261007141503.jpg)'
        }}
      >
        <div className="page-hero-banner-overlay" />

        <div className="page-hero-banner-content">
          <span className="page-hero-eyebrow">
            B2B &amp; SALON PARTNERSHIPS
          </span>
          <h1 className="page-hero-title">
            Wholesale Partner Program
          </h1>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 20px 70px' }}>

        {/* Wholesale Tier Cards (Ticket Coupon Stamp Design matching Image 1) */}
        <div className="ticket-voucher-grid reveal-stagger">

          {/* Tier 1: Starter Tier */}
          <div className="ticket-voucher-card">
            <div className="ticket-sawtooth ticket-sawtooth-top">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,12 7.5,0 15,12 22.5,0 30,12 37.5,0 45,12 52.5,0 60,12 67.5,0 75,12 82.5,0 90,12 97.5,0 105,12 112.5,0 120,12 127.5,0 135,12 142.5,0 150,12 157.5,0 165,12 172.5,0 180,12 187.5,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,12" fill="#7A1C30" />
              </svg>
            </div>

            <div className="ticket-body-top">
              <div className="ticket-script-eyebrow">Starter</div>
              <div className="ticket-block-title">WHOLESALE</div>
              <div className="ticket-condition-text">Minimum order: 10 - 24 sets</div>
              <div className="ticket-discount-wrap">
                <div className="ticket-discount-number">30%</div>
                <div className="ticket-discount-off">OFF</div>
              </div>
            </div>

            <div className="ticket-punch-row">
              <div className="ticket-notch ticket-notch-left" />
              <div className="ticket-perforation-line" />
              <div className="ticket-notch ticket-notch-right" />
            </div>

            <div className="ticket-body-bottom" style={{ padding: '12px 20px 26px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.84rem', color: '#FFE0E8', letterSpacing: '0.04em', lineHeight: '1.4' }}>
                Only at<br />
                <span style={{ fontWeight: 600 }}>xon-luxury-nails.com</span>
              </div>
            </div>

            <div className="ticket-sawtooth ticket-sawtooth-bottom">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,0 7.5,12 15,0 22.5,12 30,0 37.5,12 45,0 52.5,12 60,0 67.5,12 75,0 82.5,12 90,0 97.5,12 105,0 112.5,12 120,0 127.5,12 135,0 142.5,12 150,0 157.5,12 165,0 172.5,12 180,0 187.5,12 190,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,0" fill="#601424" />
              </svg>
            </div>
          </div>

          {/* Tier 2: Pro Salon Tier */}
          <div className="ticket-voucher-card">
            <div className="ticket-sawtooth ticket-sawtooth-top">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,12 7.5,0 15,12 22.5,0 30,12 37.5,0 45,12 52.5,0 60,12 67.5,0 75,12 82.5,0 90,12 97.5,0 105,12 112.5,0 120,12 127.5,0 135,12 142.5,0 150,12 157.5,0 165,12 172.5,0 180,12 187.5,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,12" fill="#7A1C30" />
              </svg>
            </div>

            <div className="ticket-body-top">
              <div className="ticket-script-eyebrow">Pro Salon</div>
              <div className="ticket-block-title">WHOLESALE</div>
              <div className="ticket-condition-text">Minimum order: 25 - 99 sets</div>
              <div className="ticket-discount-wrap">
                <div className="ticket-discount-number">40%</div>
                <div className="ticket-discount-off">OFF</div>
              </div>
            </div>

            <div className="ticket-punch-row">
              <div className="ticket-notch ticket-notch-left" />
              <div className="ticket-perforation-line" />
              <div className="ticket-notch ticket-notch-right" />
            </div>

            <div className="ticket-body-bottom" style={{ padding: '12px 20px 26px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.84rem', color: '#FFE0E8', letterSpacing: '0.04em', lineHeight: '1.4' }}>
                Only at<br />
                <span style={{ fontWeight: 600 }}>xon-luxury-nails.com</span>
              </div>
            </div>

            <div className="ticket-sawtooth ticket-sawtooth-bottom">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,0 7.5,12 15,0 22.5,12 30,0 37.5,12 45,0 52.5,12 60,0 67.5,12 75,0 82.5,12 90,0 97.5,12 105,0 112.5,12 120,0 127.5,12 135,0 142.5,12 150,0 157.5,12 165,0 172.5,12 180,0 187.5,12 190,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,0" fill="#601424" />
              </svg>
            </div>
          </div>

          {/* Tier 3: Enterprise & Distributor */}
          <div className="ticket-voucher-card">
            <div className="ticket-sawtooth ticket-sawtooth-top">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,12 7.5,0 15,12 22.5,0 30,12 37.5,0 45,12 52.5,0 60,12 67.5,0 75,12 82.5,0 90,12 97.5,0 105,12 112.5,0 120,12 127.5,0 135,12 142.5,0 150,12 157.5,0 165,12 172.5,0 180,12 187.5,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,12" fill="#7A1C30" />
              </svg>
            </div>

            <div className="ticket-body-top">
              <div className="ticket-script-eyebrow">Enterprise</div>
              <div className="ticket-block-title">WHOLESALE</div>
              <div className="ticket-condition-text">Minimum order: 100+ sets</div>
              <div className="ticket-discount-wrap">
                <div className="ticket-discount-number">50%</div>
                <div className="ticket-discount-off">OFF</div>
              </div>
            </div>

            <div className="ticket-punch-row">
              <div className="ticket-notch ticket-notch-left" />
              <div className="ticket-perforation-line" />
              <div className="ticket-notch ticket-notch-right" />
            </div>

            <div className="ticket-body-bottom" style={{ padding: '12px 20px 26px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.84rem', color: '#FFE0E8', letterSpacing: '0.04em', lineHeight: '1.4' }}>
                Only at<br />
                <span style={{ fontWeight: 600 }}>xon-luxury-nails.com</span>
              </div>
            </div>

            <div className="ticket-sawtooth ticket-sawtooth-bottom">
              <svg viewBox="0 0 300 12" preserveAspectRatio="none">
                <polygon points="0,0 7.5,12 15,0 22.5,12 30,0 37.5,12 45,0 52.5,12 60,0 67.5,12 75,0 82.5,12 90,0 97.5,12 105,0 112.5,12 120,0 127.5,12 135,0 142.5,12 150,0 157.5,12 165,0 172.5,12 180,0 187.5,12 190,0 195,12 202.5,0 210,12 217.5,0 225,12 232.5,0 240,12 247.5,0 255,12 262.5,0 270,12 277.5,0 285,12 292.5,0 300,0" fill="#601424" />
              </svg>
            </div>
          </div>

        </div>

        {/* Wholesale Application Form */}
        <div className="reveal reveal-up wholesale-form-card">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.5rem, 4vw, 1.8rem)', marginBottom: '8px' }}>Apply for a Wholesale Account</h2>
          <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
            Fill out the application below and our team will approve your B2B wholesale portal access within 1 business day.
          </p>

          <form onSubmit={handleSubmit}>
            <div className="form-two-col-grid">
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Business / Salon Name *</label>
                <input
                  type="text"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="e.g. Bella Nail Studio"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Contact Person Name *</label>
                <input
                  type="text"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="e.g. Sarah Jenkins"
                  value={formData.contactPerson}
                  onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                />
              </div>
            </div>

            <div className="form-two-col-grid">
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Business Email *</label>
                <input
                  type="email"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="orders@bellanails.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Phone Number *</label>
                <input
                  type="tel"
                  required
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="(407) 555-0199"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
            </div>

            <div className="form-two-col-grid">
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Website / Social Media Handle</label>
                <input
                  type="text"
                  className="cart-coupon-input"
                  style={{ width: '100%' }}
                  placeholder="@bellanails_studio"
                  value={formData.website}
                  onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                />
              </div>
              <div>
                <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Estimated Monthly Sets</label>
                <select
                  className="cart-coupon-input"
                  style={{ width: '100%', background: '#FFFFFF' }}
                  value={formData.monthlyVolume}
                  onChange={(e) => setFormData({ ...formData, monthlyVolume: e.target.value })}
                >
                  <option value="10-24">10 - 24 sets / month</option>
                  <option value="25-50">25 - 50 sets / month</option>
                  <option value="50-100">50 - 100 sets / month</option>
                  <option value="100+">100+ sets / month (Enterprise)</option>
                </select>
              </div>
            </div>

            <div style={{ marginBottom: '24px' }}>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Additional Comments / Specific Needs</label>
              <textarea
                rows="3"
                className="cart-coupon-input"
                style={{ width: '100%', resize: 'vertical' }}
                placeholder="Tell us about your salon, target styles, or custom requests..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              />
            </div>

            <button type="submit" className="btn-primary wholesale-submit-btn">
              <Send size={15} /> Submit Wholesale Application
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}


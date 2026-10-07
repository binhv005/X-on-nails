import React from 'react';
import { Leaf, Gem, Ruler } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero Intro Banner with backgroundXon.jpg */}
      <section
        className="page-hero-banner about-hero-banner reveal reveal-up"
        style={{
          backgroundImage: 'url(/assets/decor/backgroundXon.jpg)'
        }}
      >
        <div className="page-hero-banner-overlay" />

        <div className="page-hero-banner-content">
          <span className="page-hero-eyebrow">
            OUR STORY &amp; ATELIER
          </span>
          <h1 className="page-hero-title">
            Press On. Slay On. Repeat.
          </h1>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 20px 70px' }}>

        {/* 2-Column Story Section */}
        <div className="about-story-grid reveal reveal-up">
          <div>
            <span style={{ fontSize: '0.8rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#8E233B', fontWeight: 700, display: 'block', marginBottom: '10px' }}>
              WELCOME TO X-ON
            </span>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.85rem, 3.8vw, 2.4rem)', fontWeight: 600, lineHeight: '1.25', color: 'var(--text-main)', marginBottom: '20px' }}>
              Where Modern Nail Artistry Meets Effortless Beauty.
            </h2>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-main)', lineHeight: '1.75', marginBottom: '16px' }}>
              Created for nail lovers and professionals alike, <strong>X-ON</strong> offers handmade press-on nails and carefully selected nail essentials designed with quality, style, and performance in mind.
            </p>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-muted)', lineHeight: '1.75', marginBottom: '24px' }}>
              From statement-making nail sets to everyday professional supplies, every X-ON product is chosen to make beautiful nails easier, faster, and more accessible—without compromising on a polished, luxury finish.
            </p>
            <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.08rem', fontWeight: 700, color: 'var(--text-main)', letterSpacing: '0.02em', marginTop: '12px' }}>
              X-ON — Press On. Slay On. Repeat.
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <img
              src="/assets/decor/x-onpic.png"
              alt="X-ON Studio Workshop"
              style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-sm)', boxShadow: 'var(--shadow-md)' }}
            />
          </div>
        </div>

        {/* 3 Value Pillars - Luxury Floral Editorial Cards */}
        <div className="about-pillars-grid reveal-stagger">

          {/* Card 1: Zero Natural Nail Damage */}
          <div className="pillar-floral-card">
            <div className="pillar-floral-bg" style={{ backgroundImage: 'url(/assets/decor/floral_card_bg.jpg)' }} />
            <div className="pillar-floral-overlay" />
            <div className="pillar-floral-content">
              <div className="pillar-floral-header">
                <span className="pillar-top-eyebrow">CARE &amp; PROTECTION</span>
                <span className="pillar-script-eyebrow">pure care</span>
                <div className="pillar-highlight-title">
                  <span className="pillar-big-text">0%</span>
                  <span className="pillar-sub-text">DAMAGE</span>
                </div>
              </div>

              <h3 className="pillar-main-title">Zero Natural Nail Damage</h3>
              <p className="pillar-desc-text">
                Safe, non-toxic adhesion with gentle peel/soak-off removal. Keep your natural nail beds healthy and strong without harmful drilling.
              </p>

              <div className="pillar-white-tag">
                Safe &amp; Gentle Soak-Off Removal
              </div>
            </div>
          </div>

          {/* Card 2: Authentic Salon Quality */}
          <div className="pillar-floral-card">
            <div className="pillar-floral-bg" style={{ backgroundImage: 'url(/assets/decor/floral_card_bg.jpg)' }} />
            <div className="pillar-floral-overlay" />
            <div className="pillar-floral-content">
              <div className="pillar-floral-header">
                <span className="pillar-top-eyebrow">SALON ARTISTRY</span>
                <span className="pillar-script-eyebrow">master grade</span>
                <div className="pillar-highlight-title">
                  <span className="pillar-big-text">100%</span>
                  <span className="pillar-sub-text">SALON</span>
                </div>
              </div>

              <h3 className="pillar-main-title">Authentic Salon Quality</h3>
              <p className="pillar-desc-text">
                Skip the 2-hour salon appointments and $100+ bills. Enjoy luxury salon-level luxury at home in under 10 minutes.
              </p>

              <div className="pillar-white-tag">
                Luxury Salon Quality Under 10 Min
              </div>
            </div>
          </div>

          {/* Card 3: Custom Sizing & Fit */}
          <div className="pillar-floral-card">
            <div className="pillar-floral-bg" style={{ backgroundImage: 'url(/assets/decor/floral_card_bg.jpg)' }} />
            <div className="pillar-floral-overlay" />
            <div className="pillar-floral-content">
              <div className="pillar-floral-header">
                <span className="pillar-top-eyebrow">PERFECT FIT</span>
                <span className="pillar-script-eyebrow">custom made</span>
                <div className="pillar-highlight-title">
                  <span className="pillar-big-text">100%</span>
                  <span className="pillar-sub-text">CUSTOM</span>
                </div>
              </div>

              <h3 className="pillar-main-title">Custom Sizing &amp; Fit</h3>
              <p className="pillar-desc-text">
                Tailored millimeter fits from XS to XL, or completely custom measurements so your nails never pop off prematurely.
              </p>

              <div className="pillar-white-tag">
                Tailored Millimeter Fit From XS to XL
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}


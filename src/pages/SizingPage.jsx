import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Ruler, Lightbulb, ShoppingBag, ArrowRight } from 'lucide-react';

export default function SizingPage() {
  const [thumb, setThumb] = useState(15);
  const [index, setIndex] = useState(11);
  const [middle, setMiddle] = useState(12);
  const [ring, setRing] = useState(11);
  const [pinky, setPinky] = useState(9);

  // Helper to determine closest standard size
  const calculateRecommendedSize = () => {
    const avg = (Number(thumb) + Number(index) + Number(middle) + Number(ring) + Number(pinky)) / 5;
    if (avg <= 10.5) return { size: 'XS', label: 'Extra Small' };
    if (avg <= 11.8) return { size: 'S', label: 'Small (Most Popular)' };
    if (avg <= 13.0) return { size: 'M', label: 'Medium' };
    if (avg <= 14.5) return { size: 'L', label: 'Large' };
    return { size: 'XL', label: 'Extra Large' };
  };

  const recommendation = calculateRecommendedSize();

  return (
    <div className="sizing-page">

      {/* Sizing Hero Banner with background image & sharp unblurred contrast layer */}
      <section
        className="page-hero-banner sizing-hero-banner reveal reveal-up"
        style={{
          backgroundImage: 'url(/assets/decor/9be77b10-8c19-469d-8301-c5f15e621ce1.png)'
        }}
      >
        <div className="page-hero-banner-overlay" />

        <div className="page-hero-banner-content">
          <span className="page-hero-eyebrow">
            FIND YOUR PERFECT FIT
          </span>
          <h1 className="page-hero-title">
            Nail Sizing Chart &amp; Fit Calculator
          </h1>
        </div>
      </section>

      <div className="container" style={{ padding: '40px 20px 70px' }}>

        {/* Sizing Table Card (Burgundy Red Background & Zero Side Gaps) */}
        <div className="sizing-table-card reveal reveal-up">
          <div className="sizing-table-header">
            <h2 className="sizing-table-title">Standard Size Reference Table</h2>
          </div>

          <div style={{ overflowX: 'auto', width: '100%' }}>
            <table className="sizing-table-red">
              <thead>
                <tr>
                  <th>Standard Size</th>
                  <th>Thumb</th>
                  <th>Index</th>
                  <th>Middle</th>
                  <th>Ring</th>
                  <th>Pinky</th>
                </tr>
              </thead>
              <tbody>
                <tr className={recommendation.size === 'XS' ? 'highlight-size' : ''}>
                  <td><strong>XS</strong></td>
                  <td>14mm</td>
                  <td>10mm</td>
                  <td>11mm</td>
                  <td>10mm</td>
                  <td>8mm</td>
                </tr>
                <tr className={recommendation.size === 'S' ? 'highlight-size' : ''}>
                  <td><strong>S</strong></td>
                  <td>15mm</td>
                  <td>11mm</td>
                  <td>12mm</td>
                  <td>11mm</td>
                  <td>9mm</td>
                </tr>
                <tr className={recommendation.size === 'M' ? 'highlight-size' : ''}>
                  <td><strong>M</strong></td>
                  <td>16mm</td>
                  <td>12mm</td>
                  <td>13mm</td>
                  <td>12mm</td>
                  <td>10mm</td>
                </tr>
                <tr className={recommendation.size === 'L' ? 'highlight-size' : ''}>
                  <td><strong>L</strong></td>
                  <td>18mm</td>
                  <td>13mm</td>
                  <td>14mm</td>
                  <td>13mm</td>
                  <td>11mm</td>
                </tr>
                <tr className={recommendation.size === 'XL' ? 'highlight-size' : ''}>
                  <td><strong>XL</strong></td>
                  <td>19mm</td>
                  <td>14mm</td>
                  <td>15mm</td>
                  <td>14mm</td>
                  <td>12mm</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Interactive Sizing Calculator & Full-Bleed Video Guide (0-Gap Seamless 2-Column Banner) */}
        <div className="sizing-interactive-wrap reveal reveal-up">

          {/* Left Column: Interactive Calculator */}
          <div className="sizing-calculator-card">
            <div>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <Ruler size={18} color="#6B1D2F" /> Interactive Size Calculator
              </h3>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
                Enter your 5 natural nail measurements in millimeters to find your match:
              </p>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '14px' }}>
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '3px', color: 'var(--text-main)' }}>Thumb</label>
                  <input type="number" min="8" max="22" value={thumb} onChange={(e) => setThumb(e.target.value)} className="cart-coupon-input" style={{ width: '100%', textAlign: 'center', padding: '6px 4px', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-light)' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '3px', color: 'var(--text-main)' }}>Index</label>
                  <input type="number" min="8" max="22" value={index} onChange={(e) => setIndex(e.target.value)} className="cart-coupon-input" style={{ width: '100%', textAlign: 'center', padding: '6px 4px', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-light)' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '3px', color: 'var(--text-main)' }}>Middle</label>
                  <input type="number" min="8" max="22" value={middle} onChange={(e) => setMiddle(e.target.value)} className="cart-coupon-input" style={{ width: '100%', textAlign: 'center', padding: '6px 4px', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-light)' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '3px', color: 'var(--text-main)' }}>Ring</label>
                  <input type="number" min="8" max="22" value={ring} onChange={(e) => setRing(e.target.value)} className="cart-coupon-input" style={{ width: '100%', textAlign: 'center', padding: '6px 4px', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-light)' }} />
                </div>
                <div>
                  <label style={{ fontSize: '0.7rem', fontWeight: 700, display: 'block', marginBottom: '3px', color: 'var(--text-main)' }}>Pinky</label>
                  <input type="number" min="8" max="22" value={pinky} onChange={(e) => setPinky(e.target.value)} className="cart-coupon-input" style={{ width: '100%', textAlign: 'center', padding: '6px 4px', fontSize: '0.85rem', background: 'rgba(255, 255, 255, 0.95)', border: '1px solid var(--border-light)' }} />
                </div>
              </div>

              <div style={{ background: 'rgba(255, 255, 255, 0.95)', backdropFilter: 'blur(6px)', padding: '12px 14px', borderRadius: 'var(--radius-sm)', border: '1px solid rgba(255, 255, 255, 0.9)', textAlign: 'center', boxShadow: '0 4px 16px rgba(107, 29, 47, 0.08)' }}>
                <span style={{ fontSize: '0.72rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', fontWeight: 600 }}>
                  Recommended Standard Size:
                </span>
                <div style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 700, color: 'var(--text-main)', margin: '2px 0' }}>
                  Size {recommendation.size}
                </div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-gold)', fontWeight: 600 }}>
                  {recommendation.label}
                </div>
              </div>
            </div>

            <Link to="/shop" className="btn-primary" style={{ width: '100%', marginTop: '14px', padding: '11px 16px', fontSize: '0.84rem', textAlign: 'center', justifyContent: 'center', display: 'flex', alignItems: 'center', gap: '6px', boxShadow: '0 4px 14px rgba(107, 29, 47, 0.25)' }}>
              <ShoppingBag size={15} /> Shop Nails in Size {recommendation.size} <ArrowRight size={15} />
            </Link>
          </div>

          {/* Right Column: Full-Bleed Video Guide */}
          <div className="sizing-video-card">
            <div className="sizing-video-overlay-header">
              <h3>Video Guide: How to Measure at Home</h3>
            </div>

            <video
              src="/nail-size.mp4"
              className="sizing-video-element"
              controls
              autoPlay
              loop
              muted
              playsInline
            />

            <div className="sizing-video-overlay-tip" style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
              <Lightbulb size={16} color="#C5A059" style={{ flexShrink: 0 }} />
              <span><strong>Pro Tip:</strong> If between two sizes, choose the larger size — gently file edges for a bespoke fit!</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}


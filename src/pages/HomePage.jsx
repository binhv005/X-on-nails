import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Eye,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
  Star,
  CheckCircle2
} from 'lucide-react';
import { PRODUCTS, REVIEWS } from '../data/products';

export default function HomePage({
  selectedSizes,
  setSelectedSizes,
  wishlist,
  toggleWishlist,
  onOpenQuickView,
  onAddToCart,
  showToast
}) {
  const [reviewIdx, setReviewIdx] = useState(0);
  const prevIdx = (reviewIdx - 1 + REVIEWS.length) % REVIEWS.length;
  const currentReview = REVIEWS[reviewIdx];
  const nextIdx = (reviewIdx + 1) % REVIEWS.length;
  const prevReview = REVIEWS[prevIdx];
  const nextReview = REVIEWS[nextIdx];

  return (
    <div className="home-page">

      {/* 3 Side-by-Side Edge-to-Edge Hero Videos (video01.mp4, video02.mp4, video03.mp4) */}
      <section className="hero-videos-section" id="hero">
        <div className="hero-videos-grid">
          <div className="hero-video-col">
            <video
              src="/video01.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="hero-video-item"
            />
          </div>
          <div className="hero-video-col">
            <video
              src="/video02.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="hero-video-item"
            />
          </div>
          <div className="hero-video-col">
            <video
              src="/video03.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="hero-video-item"
            />
          </div>
        </div>
      </section>

      {/* Main Page Content */}
      <main className="container">

        {/* Handmade Section (Full Width, All 8 Luxury Designs) */}
        <section className="handmade-section" id="handmade-section">
          <div className="section-header section-header-centered reveal reveal-up">
            <div className="section-title-wrap">
              <h2>Handmade X-On Nails</h2>
              <p>Stunning designs. Effortless beauty.</p>
            </div>
            <Link to="/shop" className="view-all-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', marginTop: '12px' }}>
              VIEW ALL <ArrowRight size={14} />
            </Link>
          </div>

          <div className="product-grid-4 reveal-stagger">
            {PRODUCTS.map((product) => {
              const currentSize = selectedSizes[product.id] || 'S';
              const isWish = wishlist.includes(product.id);

              return (
                <div className="product-card" key={product.id}>
                  <div className="product-thumb-wrap">
                    {product.badge === 'sale' && <span className="product-badge sale">Sale</span>}
                    {product.badge === 'new' && <span className="product-badge new">New</span>}

                    <img src={product.image} alt={product.name} loading="lazy" />
                    <button type="button" className="product-quickview-btn" onClick={() => onOpenQuickView(product)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                      <Eye size={14} /> Quick View
                    </button>
                  </div>

                  <div className="product-info">
                    <h4 className="product-title" onClick={() => onOpenQuickView(product)} style={{ cursor: 'pointer' }}>
                      {product.name}
                    </h4>
                    <div className="product-pricing">
                      <span className="price-current">${product.price.toFixed(2)}</span>
                      {product.originalPrice && <span className="price-original">${product.originalPrice.toFixed(2)}</span>}
                    </div>

                    <div className="size-selector">
                      {product.sizes.map((size) => (
                        <button
                          key={size}
                          type="button"
                          className={`size-pill ${size === currentSize ? 'selected' : ''}`}
                          onClick={() => setSelectedSizes({ ...selectedSizes, [product.id]: size })}
                        >
                          {size}
                        </button>
                      ))}
                    </div>

                    <button type="button" className="btn-add-cart" onClick={() => onAddToCart(product, currentSize, 1)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                      <ShoppingBag size={14} />
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Embellish Your Day / Confidence & Nail Art Section (Full Width Edge-to-Edge Red Background) */}
      <section className="confidence-section-fullwidth" id="confidence-section">
        <div className="container">
          <div className="confidence-header reveal reveal-up">
            <span className="confidence-eyebrow">EMBELLISH YOUR DAY</span>
            <h2 className="confidence-heading">Nothing Says Confidence Like A Bold Nail Polish Color</h2>
          </div>

          <div className="confidence-gallery-grid reveal-stagger">
            {/* Column 1: Single Center-Aligned Image */}
            <div className="confidence-col-1">
              <div className="confidence-gallery-item col1-item">
                <img src="/assets/IMG_7098.JPG" alt="Nail Art Showcase" loading="lazy" />
              </div>
            </div>

            {/* Column 2: Tall Top + Short Bottom */}
            <div className="confidence-gallery-stack">
              <div className="confidence-gallery-item col2-top">
                <img src="/assets/IMG_7101.JPG" alt="Emerald Gemstone Nails" loading="lazy" />
              </div>
              <div className="confidence-gallery-item col2-bottom">
                <img src="/assets/IMG_7105.JPG" alt="Nail Details Closeups" loading="lazy" />
              </div>
            </div>

            {/* Column 3: Short Top + Tall Bottom */}
            <div className="confidence-gallery-stack">
              <div className="confidence-gallery-item col3-top">
                <img src="/assets/IMG_7103.JPG" alt="Chrome & Shimmer Nails" loading="lazy" />
              </div>
              <div className="confidence-gallery-item col3-bottom">
                <img src="/assets/IMG_7104.JPG" alt="Pink Aura Crystal Nails" loading="lazy" />
              </div>
            </div>

            {/* Column 4: Medium Top + Bottom */}
            <div className="confidence-gallery-stack">
              <div className="confidence-gallery-item col4-top">
                <img src="/assets/IMG_7100.JPG" alt="French Pearl Tip Nails" loading="lazy" />
              </div>
              <div className="confidence-gallery-item col4-bottom">
                <img src="/assets/IMG_7107.JPG" alt="Master Nailbox Packaging" loading="lazy" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-Width Client Reviews Carousel Section (Matching Sample) */}
      <section className="client-reviews-fullwidth reveal reveal-up" id="reviews-section">
        <div className="client-reviews-header">
          <div className="client-reviews-accent-line"></div>
          <h2 className="client-reviews-title">What Our Clients Say</h2>
        </div>

        <div className="client-reviews-carousel-wrap">
          {/* Left Nav Button */}
          <button
            type="button"
            className="client-review-arrow-btn prev-btn"
            onClick={() => setReviewIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
            aria-label="Previous Review"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="client-reviews-track">
            {/* Left Card (Side Faded) */}
            <div
              className="client-review-card side-card left-card"
              onClick={() => setReviewIdx(prevIdx)}
            >
              <p className="side-card-quote">{prevReview.quote}</p>
              <h5 className="side-card-author">{prevReview.name} - {prevReview.location}</h5>
            </div>

            {/* Center Card (Active with Giant Quote Mark) */}
            <div className="client-review-card center-card active">
              <div className="client-review-stars">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    fill={i < currentReview.rating ? "#D81B60" : "#E8DCE0"}
                    color={i < currentReview.rating ? "#D81B60" : "#E8DCE0"}
                  />
                ))}
              </div>

              <p className="center-card-quote">{currentReview.quote}</p>
              <h4 className="center-card-author">{currentReview.name} - {currentReview.location}</h4>

              {/* Giant Pink Quote Mark at Bottom Right */}
              <div className="client-review-giant-quote-mark" aria-hidden="true">
                <svg width="52" height="52" viewBox="0 0 24 24" fill="#D81B60">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Right Card (Side Faded) */}
            <div
              className="client-review-card side-card right-card"
              onClick={() => setReviewIdx(nextIdx)}
            >
              <p className="side-card-quote">{nextReview.quote}</p>
              <h5 className="side-card-author">{nextReview.name} - {nextReview.location}</h5>
            </div>
          </div>

          {/* Right Nav Button */}
          <button
            type="button"
            className="client-review-arrow-btn next-btn"
            onClick={() => setReviewIdx((prev) => (prev + 1) % REVIEWS.length)}
            aria-label="Next Review"
          >
            <ChevronRight size={28} />
          </button>
        </div>
      </section>

      {/* 3 Full-Width Edge-to-Edge Videos Section (Sample Photo 2) */}
      <section className="videos-fullwidth-showcase reveal reveal-up" id="gallery-section">
        <div className="videos-3col-grid reveal-stagger">
          <div className="video-col-item">
            <video src="/1K34PRO8E_DMCL0D.mp4" autoPlay loop muted playsInline className="video-full-cover"></video>
          </div>
          <div className="video-col-item">
            <video src="/1K34PRO8K_DMCL0D.mp4" autoPlay loop muted playsInline className="video-full-cover"></video>
          </div>
          <div className="video-col-item">
            <video src="/1K34PRO84_DMCL0D.mp4" autoPlay loop muted playsInline className="video-full-cover"></video>
          </div>
        </div>
      </section>

      {/* Full Width Edge-to-Edge Bottom Info Grid: Find Us & Newsletter */}
      <section className="bottom-info-section-fullwidth" id="find-us-section">
        <div className="info-banner-grid-fullwidth">

          {/* Find Us Card */}
          <div className="find-us-card reveal reveal-left">
            <img src="/assets/decor/x-onpic.png" alt="X-ON Nail Studio Kissimmee FL" className="find-us-bg" />
            <div className="find-us-content">
              <h3 className="find-us-title">Find Us</h3>
              <p className="find-us-address">3168 Bill Beck Blvd, Kissimmee, FL 34744</p>
              <Link to="/contact" className="btn-find-us" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                FIND US / CONTACT X-ON <ArrowRight size={14} />
              </Link>
            </div>
          </div>

          {/* Newsletter Card */}
          <div className="newsletter-card reveal reveal-right">
            <div className="newsletter-card-inner">
              <h3 className="newsletter-title">Newsletter / Updates</h3>
              <p className="newsletter-desc">Be the first to know about new collections, special offers and more.</p>

              <form className="newsletter-form" onSubmit={(e) => {
                e.preventDefault();
                showToast('✨ Thank you for subscribing! Check your email for 15% off.');
                e.target.reset();
              }}>
                <div className="newsletter-input-group">
                  <input type="email" className="newsletter-input" placeholder="Enter your email address" required />
                  <button type="submit" className="btn-subscribe">SUBSCRIBE</button>
                </div>
                <label className="newsletter-checkbox">
                  <input type="checkbox" required defaultChecked />
                  <span>I agree to the Terms & Conditions and Privacy Policy</span>
                </label>
              </form>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}


import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, ArrowLeft, X, ShoppingBag } from 'lucide-react';

const BLOG_ARTICLES = [
  {
    id: 'how-to-make-X-On-nails-last',
    title: 'How to Make Your X-On Nails Last 3+ Weeks Without Popping Off',
    date: 'October 2026',
    author: 'Elena Vance, Master Nail Artist',
    readTime: '4 min read',
    image: '/assets/blush_dream.jpg',
    excerpt: 'The secret to long-lasting X-Ons is 90% nail preparation. Discover our salon secrets for rock-solid adhesion.',
    content: `
      <h3>1. Dehydrate and Cleanse the Nail Plate</h3>
      <p>Natural oils on your nails are the number one reason X-On nails lift prematurely. Always wash hands thoroughly with dish soap, push cuticles back with the wooden orange stick, and use an alcohol pad to thoroughly dehydrate the nail surface.</p>
      
      <h3>2. Gently Etch the Surface</h3>
      <p>Lightly buff the shine off your natural nail with a 180-grit nail buffer. This creates microscopic texture for the glue to anchor securely.</p>
      
      <h3>3. The 45-Degree Angle Application Technique</h3>
      <p>Apply 1 small drop of glue to your natural nail and 1 drop inside the X-On base. Place the X-On nail at a 45-degree angle starting right at the cuticle line, then press down slowly to push out any trapped air bubbles.</p>

      <h3>4. Hold with Firm Pressure for 25 Seconds</h3>
      <p>Maintain firm, steady pressure for at least 20-30 seconds per finger. Avoid submerging hands in hot water for the first 2 hours while the bond fully cures!</p>
    `
  },
  {
    id: '2026-luxury-nail-trends',
    title: 'Top Nail Art Trends for 2026: Chrome Aura, 3D Florals & Pearl French',
    date: 'September 2026',
    author: 'Chloe Dupont, Creative Director',
    readTime: '3 min read',
    image: '/assets/white_aura.jpg',
    excerpt: 'From metallic celestial foils to glazed donut ombre finishes, explore what is dominating luxury runways this season.',
    content: `
      <h3>The Reign of Chrome Aura</h3>
      <p>Subtle iridescent chrome powders blended seamlessly over sheer nude and milky jelly bases are replacing heavy opaque polishes. The result is a clean, ethereal glow that shifts color depending on lighting.</p>
      
      <h3>Hand-Sculpted 3D Petals & Gem Accents</h3>
      <p>Tactile nail art is here to stay. Raised floral petals sculpted with crystalline builder gel and centered with micro freshwater pearls turn every fingertip into miniature jewelry.</p>
      
      <h3>Modernized Micro French Tips</h3>
      <p>Thin mirror-chrome silver and rose gold tips on natural almond shapes offer understated elegance suitable for both boardrooms and evening galas.</p>
    `
  },
  {
    id: 'safe-removal-guide',
    title: 'How to Safely Remove X-On Nails Without Natural Nail Damage',
    date: 'August 2026',
    author: 'Dr. Audrey Lin, Nail Care Specialist',
    readTime: '3 min read',
    image: '/assets/rose_gold_luxe.jpg',
    excerpt: 'Never rip or forcefully pry off your X-Ons! Follow our warm soapy soak method to protect your nail health and keep sets reusable.',
    content: `
      <h3>The Warm Water + Dish Soap + Oil Soak</h3>
      <p>Fill a small bowl with warm water, add 1 pump of dish soap, and a few drops of cuticle oil or olive oil. Soak your fingers for 10-15 minutes.</p>
      
      <h3>Gently Wiggle the Sidewalls</h3>
      <p>Use the wooden cuticle stick to gently nudge the sides of the nail. As the soapy oil penetrates the adhesive, the nail will naturally lift without any tearing or pain.</p>
      
      <h3>Clean and Store for Next Time</h3>
      <p>Gently buff any remaining glue from the underside of the X-On nails, store them in your original X-ON luxury box, and they are ready to wear again!</p>
    `
  }
];

export default function BlogPage() {
  const [selectedArticle, setSelectedArticle] = useState(null);

  return (
    <div className="blog-page">

      {/* Hero Intro Banner with backgroundXon.jpg */}
      <section
        className="page-hero-banner blog-hero-banner reveal reveal-up"
        style={{
          backgroundImage: 'url(/assets/decor/backgroundXon.jpg)'
        }}
      >
        <div className="page-hero-banner-overlay" />

        <div className="page-hero-banner-content">
          <span className="page-hero-eyebrow">
            ATELIER JOURNAL &amp; GUIDES
          </span>
          <h1 className="page-hero-title">
            Nail Artistry &amp; Care
          </h1>
        </div>
      </section>

      <div className="container journal-container">

        {/* Section Heading */}
        <div className="reveal reveal-up journal-section-header">

          <h2 className="journal-heading">
            Latest Articles &amp; Styling Tips
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="journal-articles-grid reveal-stagger">
          {BLOG_ARTICLES.map((article) => (
            <article key={article.id} className="journal-article-card">
              <div className="journal-article-img-wrap">
                <img
                  src={article.image}
                  alt={article.title}
                  className="journal-article-img"
                  loading="lazy"
                />
              </div>

              <div className="journal-article-body">
                <div className="journal-article-meta">
                  <span className="journal-meta-item">
                    <Calendar size={12} /> {article.date}
                  </span>
                  <span>•</span>
                  <span className="journal-meta-item">
                    <Clock size={12} /> {article.readTime}
                  </span>
                </div>
                <h3 className="journal-article-title">
                  {article.title}
                </h3>
                <p className="journal-article-excerpt">
                  {article.excerpt}
                </p>
                <button
                  type="button"
                  className="btn-outline journal-read-btn"
                  onClick={() => setSelectedArticle(article)}
                >
                  Read Full Article <ArrowRight size={13} />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Article Reader Modal */}
        {selectedArticle && (
          <div className="modal-backdrop open" onClick={() => setSelectedArticle(null)}>
            <div className="modal-card journal-modal-card" onClick={(e) => e.stopPropagation()}>
              <button type="button" className="modal-close-btn" onClick={() => setSelectedArticle(null)} aria-label="Close article">
                <X size={18} />
              </button>

              <div className="journal-modal-meta">
                <Calendar size={13} /> {selectedArticle.date} • By {selectedArticle.author}
              </div>

              <h2 className="journal-modal-title">
                {selectedArticle.title}
              </h2>

              <img
                src={selectedArticle.image}
                alt={selectedArticle.title}
                className="journal-modal-img"
              />

              <div
                className="blog-full-content"
                dangerouslySetInnerHTML={{ __html: selectedArticle.content }}
              />

              <div className="journal-modal-footer">
                <button type="button" className="btn-outline" onClick={() => setSelectedArticle(null)} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ArrowLeft size={14} /> Back to Articles
                </button>
                <Link to="/shop" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                  <ShoppingBag size={14} /> Shop Related Nails
                </Link>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { X, Star, Ruler, Minus, Plus, ShoppingBag } from 'lucide-react';

export default function QuickViewModal({
  product,
  onClose,
  onAddToCart,
  onOpenSizing
}) {
  if (!product) return null;

  const [selectedSize, setSelectedSize] = useState('S');
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('desc');
  const [mainImage, setMainImage] = useState(product.image);

  useEffect(() => {
    if (product) {
      setMainImage(product.image);
      setSelectedSize('S');
      setQty(1);
      setActiveTab('desc');
    }
  }, [product]);

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close details">
          <X size={18} />
        </button>
        <div className="product-detail-layout">

          <div className="detail-gallery">
            <div className="detail-main-img">
              <img src={mainImage} alt={product.name} />
            </div>
            <div className="detail-thumbs">
              {product.images && product.images.map((img, idx) => (
                <div
                  key={idx}
                  className={`detail-thumb-item ${img === mainImage ? 'active' : ''}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`${product.name} preview ${idx + 1}`} />
                </div>
              ))}
            </div>
          </div>

          <div className="detail-content">
            <h2 className="detail-title">{product.name}</h2>
            <div className="detail-pricing" style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
              <span className="detail-price">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="detail-price-orig">${product.originalPrice.toFixed(2)}</span>
              )}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '2px', marginLeft: '4px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={13} fill="#E29578" color="#E29578" />
                ))}
                <span style={{ fontSize: '0.75rem', color: '#E29578', marginLeft: '4px' }}>
                  ({product.reviewsCount || 42})
                </span>
              </div>
            </div>

            <div className="detail-meta-row">
              <span><strong>Shape:</strong> {product.shape}</span>
              <Link to="/sizing" className="detail-size-guide-btn" onClick={onClose} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                Size Guide <Ruler size={13} />
              </Link>
            </div>

            <div className="detail-sizes">
              {product.sizes && product.sizes.map((size) => (
                <button
                  key={size}
                  type="button"
                  className={`detail-size-btn ${size === selectedSize ? 'selected' : ''}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>

            <div className="detail-qty-wrap">
              <span style={{ fontSize: '0.82rem', fontWeight: 600 }}>Quantity:</span>
              <div className="qty-stepper">
                <button type="button" className="qty-btn" onClick={() => setQty(Math.max(1, qty - 1))} aria-label="Decrease quantity">
                  <Minus size={13} />
                </button>
                <span className="qty-val">{qty}</span>
                <button type="button" className="qty-btn" onClick={() => setQty(qty + 1)} aria-label="Increase quantity">
                  <Plus size={13} />
                </button>
              </div>
            </div>

            <div className="detail-actions">
              <button
                type="button"
                className="btn-primary"
                style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                onClick={() => {
                  onAddToCart(product, selectedSize, qty);
                  onClose();
                }}
              >
                <ShoppingBag size={16} /> Add to Bag - ${(product.price * qty).toFixed(2)}
              </button>
            </div>

            <div className="detail-tabs">
              <div className="detail-tab-nav">
                <button
                  type="button"
                  className={`detail-tab-btn ${activeTab === 'desc' ? 'active' : ''}`}
                  onClick={() => setActiveTab('desc')}
                >
                  Description
                </button>
                <button
                  type="button"
                  className={`detail-tab-btn ${activeTab === 'how-to' ? 'active' : ''}`}
                  onClick={() => setActiveTab('how-to')}
                >
                  How to Apply
                </button>
                <button
                  type="button"
                  className={`detail-tab-btn ${activeTab === 'specs' ? 'active' : ''}`}
                  onClick={() => setActiveTab('specs')}
                >
                  Kit Includes
                </button>
              </div>

              {activeTab === 'desc' && (
                <div className="detail-tab-pane active">{product.description}</div>
              )}
              {activeTab === 'how-to' && (
                <div className="detail-tab-pane active">
                  1. Prep: Push cuticles back and lightly buff nail surface with buffer.<br />
                  2. Cleanse: Wipe with alcohol pad to remove natural surface oils.<br />
                  3. Apply: Add 1-2 drops of X-ON nail glue and press firmly for 20 seconds.
                </div>
              )}
              {activeTab === 'specs' && (
                <div className="detail-tab-pane active">
                  • 10 Handcrafted Custom X-On Nails<br />
                  • X-ON Ultra-Hold Salon Nail Glue (2g)<br />
                  • Adhesive Sticky Jelly Tabs (Sheet of 24)<br />
                  • Dual-Sided Professional Nail File & Buffer<br />
                  • Wooden Cuticle Stick & Alcohol Prep Pad
                </div>
              )}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}


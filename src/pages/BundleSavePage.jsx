import React, { useState } from 'react';
import { Check, Sparkles, Flame, ShoppingBag, Plus, Trash2 } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function BundleSavePage({ onAddToCart, showToast }) {
  const [selectedBundleItems, setSelectedBundleItems] = useState([]);
  const [bundleSizes, setBundleSizes] = useState({});

  const toggleProductInBundle = (product) => {
    setSelectedBundleItems((prev) => {
      const exists = prev.find((p) => p.id === product.id);
      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  const count = selectedBundleItems.length;
  let discountRate = 0;
  if (count === 2) discountRate = 0.15;
  if (count >= 3) discountRate = 0.25;

  const rawTotal = selectedBundleItems.reduce((sum, item) => sum + item.price, 0);
  const discountAmount = rawTotal * discountRate;
  const finalBundleTotal = rawTotal - discountAmount;

  const handleAddBundleToCart = () => {
    if (count < 2) {
      showToast('⚠️ Please select at least 2 sets to create a discounted bundle!');
      return;
    }

    selectedBundleItems.forEach((product) => {
      const size = bundleSizes[product.id] || 'S';
      onAddToCart(product, size, 1);
    });

    showToast(`🎉 Added ${count}-set Bundle to your cart with ${(discountRate * 100)}% OFF!`);
    setSelectedBundleItems([]);
  };

  return (
    <div className="container" style={{ padding: '40px 20px 70px' }}>
      
      {/* Header */}
      <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 36px' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-gold)', fontWeight: 600 }}>
          Mix & Match Deals
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 500, margin: '8px 0 14px' }}>
          Bundle & Save Luxury Atelier
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Build your personalized nail wardrobe. Buy 2 sets get <strong>15% OFF</strong>, or buy 3+ sets and unlock <strong>25% OFF</strong> instantly.
        </p>
      </div>

      {/* Bundle Progress Tracker Bar */}
      <div className="reveal reveal-up" style={{ background: '#FAF3F0', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '24px', maxWidth: '900px', margin: '0 auto 40px', textAlign: 'center' }}>
        <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', marginBottom: '16px', flexWrap: 'wrap', gap: '10px' }}>
          <div style={{ opacity: count >= 1 ? 1 : 0.5, fontWeight: count >= 1 ? 700 : 500, display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Check size={14} /> 1. Pick 1st Set ({count >= 1 ? 'Selected' : 'Pending'})
          </div>
          <div style={{ opacity: count >= 2 ? 1 : 0.5, fontWeight: count >= 2 ? 700 : 500, color: count >= 2 ? '#2b8a3e' : 'inherit', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Sparkles size={14} /> 2. Pick 2nd Set ({count >= 2 ? '15% OFF Unlocked!' : 'Save 15%'})
          </div>
          <div style={{ opacity: count >= 3 ? 1 : 0.5, fontWeight: count >= 3 ? 700 : 500, color: count >= 3 ? '#2b8a3e' : 'inherit', display: 'inline-flex', alignItems: 'center', gap: '5px' }}>
            <Flame size={14} /> 3. Pick 3rd Set ({count >= 3 ? '25% VIP Discount!' : 'Save 25%'})
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#FFFFFF', padding: '16px 24px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border-light)', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Selected in Bundle: </span>
            <strong>{count} sets</strong>
            {discountRate > 0 && (
              <span style={{ marginLeft: '12px', background: '#e6fcf5', color: '#0ca678', padding: '3px 8px', borderRadius: '4px', fontSize: '0.78rem', fontWeight: 700 }}>
                {(discountRate * 100)}% DISCOUNT APPLIED
              </span>
            )}
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
            <div style={{ textAlign: 'right' }}>
              {discountAmount > 0 && (
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textDecoration: 'line-through', marginRight: '8px' }}>
                  ${rawTotal.toFixed(2)}
                </span>
              )}
              <span style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--text-main)' }}>
                ${finalBundleTotal.toFixed(2)}
              </span>
            </div>

            <button
              type="button"
              className="btn-primary"
              disabled={count < 2}
              style={{ opacity: count < 2 ? 0.6 : 1, cursor: count < 2 ? 'not-allowed' : 'pointer', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
              onClick={handleAddBundleToCart}
            >
              <ShoppingBag size={16} /> Add {count}-Set Bundle to Bag
            </button>
          </div>
        </div>
      </div>

      {/* Product Selection Grid */}
      <div className="product-grid-4 reveal-stagger">
        {PRODUCTS.map((product) => {
          const isSelected = selectedBundleItems.some((p) => p.id === product.id);
          const currentSize = bundleSizes[product.id] || 'S';

          return (
            <div
              key={product.id}
              className={`product-card ${isSelected ? 'bundle-selected' : ''}`}
              style={{
                borderColor: isSelected ? 'var(--text-gold)' : 'var(--border-light)',
                boxShadow: isSelected ? '0 0 0 2px var(--text-gold)' : 'none'
              }}
            >
              <div className="product-thumb-wrap">
                {isSelected && (
                  <span style={{ position: 'absolute', top: '8px', left: '8px', background: 'var(--text-gold)', color: '#FFFFFF', fontSize: '0.7rem', fontWeight: 700, padding: '3px 8px', borderRadius: '2px', zIndex: 3, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Check size={11} /> In Bundle
                  </span>
                )}
                <img src={product.image} alt={product.name} />
              </div>

              <div className="product-info">
                <h4 className="product-title">{product.name}</h4>
                <div className="product-pricing">
                  <span className="price-current">${product.price.toFixed(2)}</span>
                  <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: 'auto' }}>
                    {product.shape} Shape
                  </span>
                </div>

                <div className="size-selector">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      type="button"
                      className={`size-pill ${size === currentSize ? 'selected' : ''}`}
                      onClick={(e) => {
                        e.stopPropagation();
                        setBundleSizes({ ...bundleSizes, [product.id]: size });
                      }}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  className={isSelected ? 'btn-outline' : 'btn-primary'}
                  style={{ width: '100%', fontSize: '0.75rem', padding: '9px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}
                  onClick={() => toggleProductInBundle(product)}
                >
                  {isSelected ? (
                    <>
                      <Trash2 size={13} /> Remove from Bundle
                    </>
                  ) : (
                    <>
                      <Plus size={13} /> Add to Bundle
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}


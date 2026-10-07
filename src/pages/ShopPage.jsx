import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ShoppingBag, Eye, Search, RotateCcw } from 'lucide-react';
import { PRODUCTS } from '../data/products';

export default function ShopPage({
  selectedSizes,
  setSelectedSizes,
  wishlist,
  toggleWishlist,
  onOpenQuickView,
  onAddToCart,
  showToast
}) {
  const [searchParams, setSearchParams] = useSearchParams();
  const shapeFilterParam = searchParams.get('shape') || 'all';

  const [selectedShape, setSelectedShape] = useState(shapeFilterParam);
  const [selectedBadge, setSelectedBadge] = useState('all');
  const [priceRange, setPriceRange] = useState(50);
  const [sortBy, setSortBy] = useState('featured');
  const [searchKeyword, setSearchKeyword] = useState('');

  // Shapes list
  const shapes = ['all', 'Almond', 'Coffin', 'Oval', 'Stiletto', 'Square'];

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      // Shape filter
      if (selectedShape !== 'all' && p.shape.toLowerCase() !== selectedShape.toLowerCase()) {
        return false;
      }
      // Badge filter
      if (selectedBadge !== 'all') {
        if (selectedBadge === 'sale' && p.badge !== 'sale') return false;
        if (selectedBadge === 'new' && p.badge !== 'new') return false;
      }
      // Price filter
      if (p.price > priceRange) return false;
      // Search keyword
      if (searchKeyword.trim()) {
        const kw = searchKeyword.toLowerCase();
        const matchName = p.name.toLowerCase().includes(kw);
        const matchDesc = p.description.toLowerCase().includes(kw);
        const matchShape = p.shape.toLowerCase().includes(kw);
        if (!matchName && !matchDesc && !matchShape) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'name') return a.name.localeCompare(b.name);
      return 0; // featured
    });
  }, [selectedShape, selectedBadge, priceRange, sortBy, searchKeyword]);

  return (
    <div className="container" style={{ padding: '36px 20px 60px' }}>

      {/* Page Header */}
      <div className="section-header reveal reveal-up" style={{ marginBottom: '32px', borderBottom: '1px solid var(--border-light)', paddingBottom: '20px' }}>
        <div className="section-title-wrap">
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.18em', color: 'var(--text-gold)', textTransform: 'uppercase', fontWeight: 600 }}>
            Curated Collections
          </span>
          <h1 style={{ fontFamily: "'Roboto', sans-serif", fontSize: '2.4rem', fontWeight: 700, color: '#6B1D2F', marginTop: '4px', lineHeight: 1.2 }}>
            Handmade X-On Nails
          </h1>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)' }}>
            Discover salon-quality handcrafted luxury sets. Reusable, custom fit, and ready to wear.
          </p>
        </div>
        <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Showing <strong>{filteredProducts.length}</strong> styles
        </div>
      </div>

      <div className="shop-main-layout">

        {/* Sidebar Filters */}
        <aside style={{ background: 'var(--bg-card)', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-sm)', padding: '24px' }}>

          {/* Keyword Search */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Search Design</h4>
            <div style={{ position: 'relative' }}>
              <input
                type="text"
                placeholder="e.g. Chrome, Rose Gold..."
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="cart-coupon-input"
                style={{ width: '100%', fontSize: '0.82rem', paddingLeft: '32px' }}
              />
              <Search size={15} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
            </div>
          </div>

          {/* Nail Shape */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Nail Shape</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {shapes.map((s) => (
                <label key={s} style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                  <input
                    type="radio"
                    name="shapeFilter"
                    checked={selectedShape.toLowerCase() === s.toLowerCase()}
                    onChange={() => {
                      setSelectedShape(s);
                      if (s === 'all') searchParams.delete('shape');
                      else searchParams.set('shape', s);
                      setSearchParams(searchParams);
                    }}
                  />
                  {s === 'all' ? 'All Shapes' : s}
                </label>
              ))}
            </div>
          </div>

          {/* Badge Filter */}
          <div style={{ marginBottom: '24px' }}>
            <h4 style={{ fontSize: '0.82rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '10px' }}>Offers & New</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="radio" name="badgeFilter" checked={selectedBadge === 'all'} onChange={() => setSelectedBadge('all')} />
                All Products
              </label>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="radio" name="badgeFilter" checked={selectedBadge === 'sale'} onChange={() => setSelectedBadge('sale')} />
                On Sale (Discounted)
              </label>
              <label style={{ fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                <input type="radio" name="badgeFilter" checked={selectedBadge === 'new'} onChange={() => setSelectedBadge('new')} />
                New Arrivals
              </label>
            </div>
          </div>

          {/* Price Range Slider */}
          <div style={{ marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.82rem' }}>
              <span style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>Max Price</span>
              <strong>${priceRange}.00</strong>
            </div>
            <input
              type="range"
              min="20"
              max="50"
              step="1"
              value={priceRange}
              onChange={(e) => setPriceRange(Number(e.target.value))}
              style={{ width: '100%', accentColor: 'var(--text-main)' }}
            />
          </div>

          {/* Reset Filters */}
          <button
            type="button"
            className="btn-outline"
            style={{ width: '100%', fontSize: '0.75rem', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}
            onClick={() => {
              setSelectedShape('all');
              setSelectedBadge('all');
              setPriceRange(50);
              setSearchKeyword('');
              setSortBy('featured');
              searchParams.delete('shape');
              setSearchParams(searchParams);
            }}
          >
            <RotateCcw size={13} /> Reset All Filters
          </button>
        </aside>

        {/* Product Grid & Top Sort Bar */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', marginBottom: '20px', gap: '10px' }}>
            <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="cart-coupon-input"
              style={{ padding: '6px 12px', fontSize: '0.82rem', background: '#FFFFFF', cursor: 'pointer' }}
            >
              <option value="featured">Featured / Popular</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="name">Alphabetical (A-Z)</option>
            </select>
          </div>

          {filteredProducts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px', background: 'var(--bg-card)', borderRadius: 'var(--radius-sm)' }}>
              <p style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '8px' }}>No designs matched your filter criteria</p>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '16px' }}>Try clearing filters or changing price range.</p>
              <button
                type="button"
                className="btn-primary"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                onClick={() => {
                  setSelectedShape('all');
                  setSelectedBadge('all');
                  setPriceRange(50);
                  setSearchKeyword('');
                }}
              >
                <RotateCcw size={14} /> Clear Filters
              </button>
            </div>
          ) : (
            <div className="product-grid-4 reveal-stagger">
              {filteredProducts.map((product) => {
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
          )}
        </div>

      </div>
    </div>
  );
}


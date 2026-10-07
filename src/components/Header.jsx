import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Search, ShoppingBag, ChevronDown, Menu, X, Sparkles, Heart, HelpCircle } from 'lucide-react';

export default function Header({
  cartItemCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  showToast
}) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileShopSubmenu, setMobileShopSubmenu] = useState(false);

  // Auto close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="site-header" id="header">
      <div className="container">

        {/* Top Row: Hamburger / Spacer, Center Logo Image, Action Icons */}
        <div className="header-top-row">
          
          {/* Mobile Hamburger Toggle Button */}
          <button
            type="button"
            className="mobile-menu-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop Left Spacer */}
          <div className="header-top-spacer"></div>

          {/* Centered Logo Image */}
          <Link to="/" className="header-center-logo-link" title="X-ON / LALAFOLIE Luxury X-On Nails">
            <img src="/assets/logo.png" alt="LALAFOLIE NAIL & BEAUTY" className="header-logo-image" />
          </Link>

          {/* Action Icons: Search, Cart */}
          <div className="header-actions">
            {/* Search Icon */}
            <button
              type="button"
              className="header-icon-btn"
              onClick={onOpenSearch}
              aria-label="Search"
            >
              <Search size={19} strokeWidth={2} />
            </button>

            {/* Shopping Bag / Basket Icon */}
            <button
              type="button"
              className="header-icon-btn"
              onClick={onOpenCart}
              aria-label="Shopping Bag"
            >
              <ShoppingBag size={19} strokeWidth={2} />
              {cartItemCount > 0 && <span className="icon-badge">{cartItemCount}</span>}
            </button>
          </div>
        </div>
      </div>

      {/* Full-Width Luxury Red Navigation Bar */}
      <div className="header-nav-bar-strip">
        <div className="container">
          <nav className="header-bottom-nav" aria-label="Main Navigation">
            {/* 1. HOME */}
            <Link to="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
              HOME
            </Link>

            {/* 2. SHOP (with Dropdown) */}
            <div className="nav-dropdown">
              <Link to="/shop" className={`nav-link-item ${isActive('/shop') || isActive('/bundle-and-save') || isActive('/gallery') ? 'active' : ''}`} style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                SHOP <ChevronDown size={13} />
              </Link>
              <div className="dropdown-menu">
                <Link to="/shop" className="dropdown-item">All Handmade Nails</Link>
                <Link to="/bundle-and-save" className="dropdown-item">Bundle &amp; Save</Link>
                <Link to="/gallery" className="dropdown-item">Artistry Gallery</Link>
                <Link to="/shop?shape=Almond" className="dropdown-item">Almond Shapes</Link>
                <Link to="/shop?shape=Coffin" className="dropdown-item">Coffin Shapes</Link>
                <Link to="/shop?shape=Stiletto" className="dropdown-item">Stiletto Shapes</Link>
              </div>
            </div>

            {/* 3. OUR STORY */}
            <Link to="/about" className={`nav-link-item ${isActive('/about') ? 'active' : ''}`}>
              OUR STORY
            </Link>

            {/* 4. FIT GUIDE */}
            <Link to="/sizing" className={`nav-link-item ${isActive('/sizing') ? 'active' : ''}`}>
              FIT GUIDE
            </Link>

            {/* 5. WHOLESALE */}
            <Link to="/wholesale" className={`nav-link-item ${isActive('/wholesale') ? 'active' : ''}`}>
              WHOLESALE
            </Link>

            {/* 6. JOURNAL */}
            <Link to="/blog" className={`nav-link-item ${isActive('/blog') ? 'active' : ''}`}>
              JOURNAL
            </Link>

            {/* 7. CONTACT */}
            <Link to="/contact" className={`nav-link-item ${isActive('/contact') ? 'active' : ''}`}>
              CONTACT
            </Link>
          </nav>
        </div>
      </div>

      {/* Mobile Slide-Over Navigation Drawer (Rendered at top-level via Portal) */}
      {typeof document !== 'undefined' && createPortal(
        <>
          <div 
            className={`mobile-nav-backdrop ${mobileMenuOpen ? 'open' : ''}`}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden={!mobileMenuOpen}
          />
          <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
            <div className="mobile-nav-header">
              <Link to="/" onClick={() => setMobileMenuOpen(false)}>
                <img src="/assets/logo.png" alt="X-ON Nails" style={{ height: '48px', width: 'auto' }} />
              </Link>
              <button 
                type="button" 
                className="mobile-nav-close-btn" 
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-nav-links-wrap">
              <Link to="/" className={`mobile-nav-link ${isActive('/') ? 'active' : ''}`}>
                HOME
              </Link>

              {/* Collapsible Shop Submenu */}
              <div className="mobile-nav-collapsible">
                <button 
                  type="button" 
                  className={`mobile-nav-link mobile-nav-accordion-btn ${isActive('/shop') ? 'active' : ''}`}
                  onClick={() => setMobileShopSubmenu(!mobileShopSubmenu)}
                >
                  <span>SHOP COLLECTION</span>
                  <ChevronDown size={16} style={{ transform: mobileShopSubmenu ? 'rotate(180deg)' : 'none', transition: 'transform 0.25s ease' }} />
                </button>
                {mobileShopSubmenu && (
                  <div className="mobile-submenu-list">
                    <Link to="/shop" className="mobile-submenu-item">✨ All Handmade Nails</Link>
                    <Link to="/bundle-and-save" className="mobile-submenu-item">🎁 Bundle &amp; Save (Up to 25% OFF)</Link>
                    <Link to="/gallery" className="mobile-submenu-item">💎 Artistry Gallery</Link>
                    <Link to="/shop?shape=Almond" className="mobile-submenu-item">💅 Almond Shapes</Link>
                    <Link to="/shop?shape=Coffin" className="mobile-submenu-item">💅 Coffin Shapes</Link>
                    <Link to="/shop?shape=Stiletto" className="mobile-submenu-item">💅 Stiletto Shapes</Link>
                  </div>
                )}
              </div>

              <Link to="/about" className={`mobile-nav-link ${isActive('/about') ? 'active' : ''}`}>
                OUR STORY &amp; ATELIER
              </Link>

              <Link to="/sizing" className={`mobile-nav-link ${isActive('/sizing') ? 'active' : ''}`}>
                NAIL SIZING &amp; FIT GUIDE
              </Link>

              <Link to="/wholesale" className={`mobile-nav-link ${isActive('/wholesale') ? 'active' : ''}`}>
                WHOLESALE PARTNERSHIP
              </Link>

              <Link to="/blog" className={`mobile-nav-link ${isActive('/blog') ? 'active' : ''}`}>
                JOURNAL &amp; CARE GUIDES
              </Link>

              <Link to="/contact" className={`mobile-nav-link ${isActive('/contact') ? 'active' : ''}`}>
                CONTACT &amp; CONCIERGE
              </Link>
            </div>

            {/* Mobile Quick Action Buttons */}
            <div className="mobile-nav-footer">
              <button 
                type="button" 
                className="mobile-quick-action-btn"
                onClick={() => { setMobileMenuOpen(false); onOpenSearch(); }}
              >
                <Search size={16} /> Search Nails
              </button>
              <button 
                type="button" 
                className="mobile-quick-action-btn primary"
                onClick={() => { setMobileMenuOpen(false); onOpenCart(); }}
              >
                <ShoppingBag size={16} /> View Bag ({cartItemCount})
              </button>
            </div>
          </div>
        </>,
        document.body
      )}
    </header>
  );
}


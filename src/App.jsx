import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import { PRODUCTS, ESSENTIALS } from './data/products';
import Header from './components/Header';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import QuickViewModal from './components/QuickViewModal';
import SearchModal from './components/SearchModal';
import CheckoutModal from './components/CheckoutModal';
import AdminDashboard from './components/AdminDashboard';

// Pages
import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import AboutPage from './pages/AboutPage';
import SizingPage from './pages/SizingPage';
import GalleryPage from './pages/GalleryPage';
import WholesalePage from './pages/WholesalePage';
import BundleSavePage from './pages/BundleSavePage';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import confetti from 'canvas-confetti';

// Auto Scroll to Top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Admin Route Wrapper
function AdminRouteWrapper({ showToast }) {
  const navigate = useNavigate();
  return (
    <AdminDashboard
      onBackToStore={() => navigate('/')}
      showToast={showToast}
    />
  );
}

import BackgroundDecor from './components/BackgroundDecor';
import useScrollReveal from './hooks/useScrollReveal';

function MainLayout({
  children,
  cartItemCount,
  wishlistCount,
  onOpenCart,
  onOpenSearch,
  showToast
}) {
  useScrollReveal();

  return (
    <div className="x-on-app">
      <Header
        cartItemCount={cartItemCount}
        wishlistCount={wishlistCount}
        onOpenCart={onOpenCart}
        onOpenSearch={onOpenSearch}
        showToast={showToast}
      />
      
      <main className="site-content">
        <BackgroundDecor />
        {children}
      </main>

      <Footer showToast={showToast} />
    </div>
  );
}

export default function App() {
  // Global Cart & Wishlist State
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem('xon_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const saved = localStorage.getItem('xon_wishlist');
    return saved ? JSON.parse(saved) : [];
  });

  const [selectedSizes, setSelectedSizes] = useState({});
  const [discountPercent, setDiscountPercent] = useState(0);
  const [toasts, setToasts] = useState([]);

  // Modals & Drawers State
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('xon_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('xon_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Toast Notification
  const showToast = (message) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 3200);
  };

  // Cart operations
  const addToCart = (productOrId, sizeParam = null, quantity = 1) => {
    const product = typeof productOrId === 'string'
      ? PRODUCTS.find(p => p.id === productOrId) || ESSENTIALS.find(e => e.id === productOrId)
      : productOrId;

    if (!product) return;

    const size = sizeParam || selectedSizes[product.id] || 'S';
    const cartItemId = `${product.id}-${size}`;

    setCart((prev) => {
      const idx = prev.findIndex(item => item.cartItemId === cartItemId);
      if (idx > -1) {
        const updated = [...prev];
        updated[idx].qty += quantity;
        return updated;
      } else {
        return [...prev, {
          cartItemId,
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          size: size,
          qty: quantity
        }];
      }
    });

    showToast(`Added ${product.name} (${size}) to bag!`);
    setIsCartOpen(true);
  };

  const updateItemQty = (cartItemId, delta) => {
    setCart((prev) => {
      return prev.map(item => {
        if (item.cartItemId === cartItemId) {
          const newQty = item.qty + delta;
          return newQty > 0 ? { ...item, qty: newQty } : null;
        }
        return item;
      }).filter(Boolean);
    });
  };

  const removeCartItem = (cartItemId) => {
    setCart((prev) => prev.filter(item => item.cartItemId !== cartItemId));
    showToast('Item removed from cart');
  };

  const applyCoupon = (code) => {
    const cleanCode = code.trim().toUpperCase();
    if (cleanCode === 'XON10' || cleanCode === 'SLAY10') {
      setDiscountPercent(0.10);
      showToast('Promo code applied: 10% OFF discount!');
    } else if (cleanCode === 'VIP20') {
      setDiscountPercent(0.20);
      showToast('VIP Promo code applied: 20% OFF discount!');
    } else {
      showToast('Invalid promo code. Try XON10 or VIP20');
    }
  };

  // Wishlist toggle
  const toggleWishlist = (productId) => {
    setWishlist((prev) => {
      if (prev.includes(productId)) {
        showToast('Removed from wishlist');
        return prev.filter(id => id !== productId);
      } else {
        showToast('Added to wishlist ❤️');
        return [...prev, productId];
      }
    });
  };

  // Quick View
  const handleOpenQuickView = (product) => {
    setQuickViewProduct(product);
  };

  // Checkout confirmation
  const handleConfirmOrder = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    setCart([]);
    setIsCheckoutOpen(false);
    setIsCartOpen(false);
    showToast('🎉 Thank you! Your order has been placed successfully.');
  };

  // Cart Calculations
  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);
  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
  const discountAmount = subtotal * discountPercent;
  const total = Math.max(0, subtotal - discountAmount);
  const freeShippingThreshold = 50.0;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  // Search Results
  const searchResults = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.shape.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <BrowserRouter>
      <ScrollToTop />

      {/* Toast Notifications container */}
      <div className="toast-container" aria-live="polite">
        {toasts.map((toast) => (
          <div key={toast.id} className="toast-item">
            {toast.message}
          </div>
        ))}
      </div>

      <Routes>
        {/* Admin Dashboard Page */}
        <Route path="/admin" element={<AdminRouteWrapper showToast={showToast} />} />

        {/* Public Storefront Routes with Main Layout */}
        <Route
          path="/*"
          element={
            <MainLayout
              cartItemCount={cartItemCount}
              wishlistCount={wishlist.length}
              onOpenCart={() => setIsCartOpen(true)}
              onOpenSearch={() => setIsSearchOpen(true)}
              showToast={showToast}
            >
              <Routes>
                {/* Home Page */}
                <Route
                  path="/"
                  element={
                    <HomePage
                      selectedSizes={selectedSizes}
                      setSelectedSizes={setSelectedSizes}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      onOpenQuickView={handleOpenQuickView}
                      onAddToCart={addToCart}
                      showToast={showToast}
                    />
                  }
                />

                {/* Shop / Collections Page */}
                <Route
                  path="/shop"
                  element={
                    <ShopPage
                      selectedSizes={selectedSizes}
                      setSelectedSizes={setSelectedSizes}
                      wishlist={wishlist}
                      toggleWishlist={toggleWishlist}
                      onOpenQuickView={handleOpenQuickView}
                      onAddToCart={addToCart}
                      showToast={showToast}
                    />
                  }
                />

                {/* About Atelier Page */}
                <Route path="/about" element={<AboutPage />} />

                {/* Sizing Chart Page */}
                <Route path="/sizing" element={<SizingPage />} />

                {/* Gallery Page */}
                <Route path="/gallery" element={<GalleryPage />} />

                {/* Wholesale B2B Page */}
                <Route path="/wholesale" element={<WholesalePage showToast={showToast} />} />

                {/* Bundle & Save Page */}
                <Route
                  path="/bundle-and-save"
                  element={
                    <BundleSavePage
                      onAddToCart={addToCart}
                      showToast={showToast}
                    />
                  }
                />

                {/* Blog & Nail Care Guides */}
                <Route path="/blog" element={<BlogPage />} />

                {/* Contact & Studio Location */}
                <Route path="/contact" element={<ContactPage showToast={showToast} />} />
              </Routes>
            </MainLayout>
          }
        />
      </Routes>

      {/* Cart Drawer */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cart={cart}
        updateItemQty={updateItemQty}
        removeCartItem={removeCartItem}
        subtotal={subtotal}
        discountAmount={discountAmount}
        total={total}
        remainingForFreeShipping={remainingForFreeShipping}
        progressPercent={progressPercent}
        applyCoupon={applyCoupon}
        onProceedCheckout={() => {
          setIsCartOpen(false);
          setIsCheckoutOpen(true);
        }}
      />

      {/* Quick View Modal */}
      <QuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={addToCart}
      />

      {/* Live Search Modal */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        searchResults={searchResults}
        onSelectProduct={(product) => handleOpenQuickView(product)}
      />

      {/* Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cart={cart}
        total={total}
        onConfirmOrder={handleConfirmOrder}
      />
    </BrowserRouter>
  );
}

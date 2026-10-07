import React, { useState } from 'react';
import { X, Lock, ShieldCheck } from 'lucide-react';

export default function CheckoutModal({
  isOpen,
  onClose,
  cart,
  total,
  onConfirmOrder
}) {
  if (!isOpen) return null;

  const [shippingInfo, setShippingInfo] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: 'FL',
    zip: '',
    paymentMethod: 'card'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirmOrder(shippingInfo);
  };

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-card" style={{ maxWidth: '640px', padding: '32px' }} onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close checkout">
          <X size={18} />
        </button>

        <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Lock size={22} color="#6B1D2F" /> Secure Checkout
        </h2>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px' }}>
          Enter your delivery details to finalize your handmade luxury X-On order.
        </p>

        <form onSubmit={handleSubmit} className="checkout-form">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '14px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Full Name *</label>
              <input
                type="text"
                required
                className="cart-coupon-input"
                style={{ width: '100%' }}
                placeholder="e.g. Jessica Miller"
                value={shippingInfo.name}
                onChange={(e) => setShippingInfo({ ...shippingInfo, name: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Email Address *</label>
              <input
                type="email"
                required
                className="cart-coupon-input"
                style={{ width: '100%' }}
                placeholder="jessica@example.com"
                value={shippingInfo.email}
                onChange={(e) => setShippingInfo({ ...shippingInfo, email: e.target.value })}
              />
            </div>
          </div>

          <div style={{ marginBottom: '14px' }}>
            <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Delivery Address *</label>
            <input
              type="text"
              required
              className="cart-coupon-input"
              style={{ width: '100%' }}
              placeholder="123 Luxury Blvd, Suite 400"
              value={shippingInfo.address}
              onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
            />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>City *</label>
              <input
                type="text"
                required
                className="cart-coupon-input"
                style={{ width: '100%' }}
                placeholder="Kissimmee / Orlando"
                value={shippingInfo.city}
                onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>State</label>
              <input
                type="text"
                className="cart-coupon-input"
                style={{ width: '100%' }}
                value={shippingInfo.state}
                onChange={(e) => setShippingInfo({ ...shippingInfo, state: e.target.value })}
              />
            </div>
            <div>
              <label style={{ fontSize: '0.78rem', fontWeight: 600, display: 'block', marginBottom: '4px' }}>Zip Code *</label>
              <input
                type="text"
                required
                className="cart-coupon-input"
                style={{ width: '100%' }}
                placeholder="34744"
                value={shippingInfo.zip}
                onChange={(e) => setShippingInfo({ ...shippingInfo, zip: e.target.value })}
              />
            </div>
          </div>

          <div style={{ background: 'var(--bg-card-alt)', padding: '16px', borderRadius: 'var(--radius-sm)', marginBottom: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
              <span>Items in Order:</span>
              <span><strong>{cart.reduce((s, i) => s + i.qty, 0)} sets</strong></span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.05rem', fontWeight: 700 }}>
              <span>Total Payable:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <button type="submit" className="btn-primary" style={{ width: '100%', padding: '14px', fontSize: '0.88rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
            <ShieldCheck size={18} /> Place Order (${total.toFixed(2)})
          </button>
        </form>
      </div>
    </div>
  );
}


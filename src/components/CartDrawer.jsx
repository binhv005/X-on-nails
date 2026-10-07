import React, { useState } from 'react';
import { X, ShoppingBag, Minus, Plus, Trash2, Sparkles, ArrowRight } from 'lucide-react';

export default function CartDrawer({
  isOpen,
  onClose,
  cart,
  updateItemQty,
  removeCartItem,
  subtotal,
  discountAmount,
  total,
  remainingForFreeShipping,
  progressPercent,
  applyCoupon,
  onProceedCheckout
}) {
  const [couponInput, setCouponInput] = useState('');

  return (
    <div className={`drawer-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
      <div className="cart-drawer" onClick={(e) => e.stopPropagation()}>
        <div className="cart-header">
          <h3>Shopping Bag</h3>
          <button type="button" className="modal-close-btn" onClick={onClose} style={{ position: 'static' }} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        <div className="free-shipping-progress-wrap">
          <div className="free-shipping-text">
            {remainingForFreeShipping === 0 ? (
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                <Sparkles size={15} color="#C5A059" /> You unlocked <strong>FREE SHIPPING</strong>!
              </span>
            ) : (
              <>
                <span>Add <strong>${remainingForFreeShipping.toFixed(2)}</strong> for FREE shipping</span>
                <span>{Math.round(progressPercent)}%</span>
              </>
            )}
          </div>
          <div className="progress-bar-track">
            <div className="progress-bar-fill" style={{ width: `${progressPercent}%` }}></div>
          </div>
        </div>

        <div className="cart-items-list">
          {cart.length === 0 ? (
            <div className="cart-empty-state">
              <ShoppingBag size={48} strokeWidth={1.5} color="var(--text-muted)" />
              <p style={{ fontWeight: 600, marginBottom: '4px', marginTop: '12px' }}>Your bag is empty</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Explore our handmade designs to get started.</p>
            </div>
          ) : (
            cart.map((item) => (
              <div className="cart-item" key={item.cartItemId}>
                <div className="cart-item-thumb">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-variant">Size: {item.size}</span>
                  <span className="cart-item-price">${(item.price * item.qty).toFixed(2)}</span>
                </div>
                <div className="cart-item-actions">
                  <div className="cart-item-qty">
                    <button type="button" className="cart-qty-btn" onClick={() => updateItemQty(item.cartItemId, -1)} aria-label="Decrease quantity">
                      <Minus size={13} />
                    </button>
                    <span className="cart-qty-val">{item.qty}</span>
                    <button type="button" className="cart-qty-btn" onClick={() => updateItemQty(item.cartItemId, 1)} aria-label="Increase quantity">
                      <Plus size={13} />
                    </button>
                  </div>
                  <button type="button" className="cart-item-remove" onClick={() => removeCartItem(item.cartItemId)} style={{ display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {cart.length > 0 && (
          <div className="cart-footer">
            <div className="cart-coupon-wrap">
              <input
                type="text"
                className="cart-coupon-input"
                placeholder="Promo code (XON10, VIP20)"
                value={couponInput}
                onChange={(e) => setCouponInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    applyCoupon(couponInput);
                    setCouponInput('');
                  }
                }}
              />
              <button
                type="button"
                className="btn-apply-coupon"
                onClick={() => {
                  applyCoupon(couponInput);
                  setCouponInput('');
                }}
              >
                Apply
              </button>
            </div>

            <div className="cart-subtotal-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            {discountAmount > 0 && (
              <div className="cart-subtotal-row" style={{ color: '#2b8a3e' }}>
                <span>Discount</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}
            <div className="cart-total-row">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>

            <button type="button" className="btn-checkout" onClick={onProceedCheckout} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
              Proceed to Checkout <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


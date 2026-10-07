import React from 'react';
import { Search, X } from 'lucide-react';

export default function SearchModal({
  isOpen,
  onClose,
  searchQuery,
  setSearchQuery,
  searchResults,
  onSelectProduct
}) {
  if (!isOpen) return null;

  return (
    <div className="modal-backdrop open" onClick={onClose}>
      <div className="modal-card search-modal-card" onClick={(e) => e.stopPropagation()}>
        <button type="button" className="modal-close-btn" onClick={onClose} aria-label="Close search">
          <X size={18} />
        </button>

        <div className="search-bar-input-wrap">
          <Search size={20} />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="search-bar-input"
            placeholder="Search X-On styles, shapes, colors..."
          />
        </div>

        <div className="search-results-grid">
          {searchResults.length === 0 ? (
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'center', padding: '24px' }}>
              No matching nail designs found. Try "almond", "pink", "chrome", or "sparkle".
            </p>
          ) : (
            searchResults.map((product) => (
              <div
                key={product.id}
                className="search-result-item"
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
              >
                <img src={product.image} className="search-result-thumb" alt={product.name} />
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.88rem' }}>{product.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                    {product.shape} Shape • ${product.price.toFixed(2)}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}


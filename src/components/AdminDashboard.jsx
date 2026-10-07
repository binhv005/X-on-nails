import React, { useState } from 'react';
import {
  ArrowLeft,
  RefreshCw,
  Plus,
  Download,
  Edit2,
  Package,
  ShoppingBag,
  Mail,
  DollarSign,
  Sparkles,
  Users,
  TrendingUp
} from 'lucide-react';
import { PRODUCTS, ESSENTIALS } from '../data/products';

export default function AdminDashboard({ onBackToStore, showToast }) {
  const [activeTab, setActiveTab] = useState('products');
  const [productsList, setProductsList] = useState(PRODUCTS);
  const [ordersList, setOrdersList] = useState([
    { id: 'XON-89213', customer: 'Sarah Jenkins', email: 'sarah.j@gmail.com', item: 'Blush Dream (M)', total: 28.00, date: 'Today, 09:15 AM', status: 'Processing' },
    { id: 'XON-89212', customer: 'Elena Rostova', email: 'elena.r@yahoo.com', item: 'Midnight Sparkle (S) + Nail Glue', total: 40.00, date: 'Yesterday', status: 'Shipped' },
    { id: 'XON-89211', customer: 'Chloe Bennett', email: 'chloe.b@outlook.com', item: 'White Aura (L)', total: 26.00, date: 'Oct 05, 2026', status: 'Delivered' },
    { id: 'XON-89210', customer: 'Amanda Hayes', email: 'amanda.h@gmail.com', item: 'Beverly Hills (XS) x 2', total: 64.00, date: 'Oct 04, 2026', status: 'Delivered' }
  ]);
  const [subscribers, setSubscribers] = useState([
    { email: 'sarah.j@gmail.com', date: '2026-10-07' },
    { email: 'elena.r@yahoo.com', date: '2026-10-06' },
    { email: 'chloe.b@outlook.com', date: '2026-10-05' },
    { email: 'vip.client@beauty.com', date: '2026-10-04' }
  ]);

  // Quick edit price or toggle badge
  const handleUpdatePrice = (id, newPrice) => {
    setProductsList(prev => prev.map(p => p.id === id ? { ...p, price: parseFloat(newPrice) || p.price } : p));
    showToast('Product price updated');
  };

  const handleToggleBadge = (id, badgeType) => {
    setProductsList(prev => prev.map(p => {
      if (p.id === id) {
        return { ...p, badge: p.badge === badgeType ? null : badgeType };
      }
      return p;
    }));
    showToast('Badge updated');
  };

  const handleUpdateOrderStatus = (orderId, newStatus) => {
    setOrdersList(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
    showToast(`Order ${orderId} marked as ${newStatus}`);
  };

  return (
    <div style={{ backgroundColor: '#F8F6F3', minHeight: '100vh', padding: '30px 20px', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        
        {/* Top Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '28px', backgroundColor: '#FFFFFF', padding: '18px 24px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img src="/assets/logo.png" alt="LALAFOLIE Logo" style={{ height: '56px', objectFit: 'contain' }} />
            <div>
              <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', lineHeight: 1.1, color: 'var(--text-main)' }}>X-ON / LALAFOLIE Admin Console</h1>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Store Manager & Inventory Dashboard</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button
              onClick={onBackToStore}
              className="btn-outline"
              style={{ padding: '8px 16px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <ArrowLeft size={14} /> Back to Storefront
            </button>
            <button
              onClick={() => showToast('Data refreshed')}
              className="btn-primary"
              style={{ padding: '8px 16px', fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '6px' }}
            >
              <RefreshCw size={14} /> Refresh Data
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '18px', marginBottom: '28px' }}>
          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Revenue</div>
              <DollarSign size={18} color="var(--text-gold)" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '6px 0', color: 'var(--text-main)' }}>$4,820.00</div>
            <span style={{ fontSize: '0.72rem', color: '#2b8a3e', fontWeight: 600, display: 'inline-flex', alignItems: 'center', gap: '3px' }}>
              <TrendingUp size={13} /> +18.4% from last month
            </span>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Total Orders</div>
              <ShoppingBag size={18} color="var(--text-gold)" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '6px 0', color: 'var(--text-main)' }}>142</div>
            <span style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>12 orders pending fulfillment</span>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Live Products</div>
              <Sparkles size={18} color="var(--text-gold)" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '6px 0', color: 'var(--text-main)' }}>{productsList.length} Sets</div>
            <span style={{ fontSize: '0.72rem', color: '#C5A059', fontWeight: 600 }}>100% Handmade Luxury</span>
          </div>

          <div style={{ background: '#FFFFFF', padding: '20px', borderRadius: '8px', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Subscribers</div>
              <Users size={18} color="var(--text-gold)" />
            </div>
            <div style={{ fontSize: '1.8rem', fontWeight: 700, margin: '6px 0', color: 'var(--text-main)' }}>{subscribers.length * 28}</div>
            <span style={{ fontSize: '0.72rem', color: '#2b8a3e', fontWeight: 600 }}>+12 new this week</span>
          </div>
        </div>

        {/* Dashboard Navigation Tabs */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', borderBottom: '1px solid var(--border-light)', paddingBottom: '8px' }}>
          <button
            onClick={() => setActiveTab('products')}
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '4px',
              backgroundColor: activeTab === 'products' ? 'var(--bg-dark)' : 'transparent',
              color: activeTab === 'products' ? '#FFFFFF' : 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Package size={16} /> Products & Inventory
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '4px',
              backgroundColor: activeTab === 'orders' ? 'var(--bg-dark)' : 'transparent',
              color: activeTab === 'orders' ? '#FFFFFF' : 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <ShoppingBag size={16} /> Orders Management ({ordersList.length})
          </button>

          <button
            onClick={() => setActiveTab('subscribers')}
            style={{
              padding: '10px 20px',
              fontSize: '0.85rem',
              fontWeight: 600,
              borderRadius: '4px',
              backgroundColor: activeTab === 'subscribers' ? 'var(--bg-dark)' : 'transparent',
              color: activeTab === 'subscribers' ? '#FFFFFF' : 'var(--text-muted)',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px'
            }}
          >
            <Mail size={16} /> Newsletter Subscribers
          </button>
        </div>

        {/* TAB 1: Products */}
        {activeTab === 'products' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-light)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>Catalog Inventory</h3>
              <button className="btn-primary" style={{ fontSize: '0.75rem', padding: '8px 16px', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => showToast('✨ Add New Product modal')}>
                <Plus size={14} /> Add New Design
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card-alt)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '12px' }}>Product</th>
                  <th style={{ padding: '12px' }}>Category / Shape</th>
                  <th style={{ padding: '12px' }}>Price</th>
                  <th style={{ padding: '12px' }}>Badges</th>
                  <th style={{ padding: '12px' }}>Status</th>
                  <th style={{ padding: '12px' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {productsList.map((product) => (
                  <tr key={product.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <img src={product.image} alt={product.name} style={{ width: '44px', height: '44px', objectFit: 'cover', borderRadius: '4px' }} />
                      <div>
                        <div style={{ fontWeight: 600 }}>{product.name}</div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Sizes: {product.sizes.join(', ')}</div>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ textTransform: 'capitalize' }}>{product.category}</span> • {product.shape}
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                        <span>$</span>
                        <input
                          type="number"
                          defaultValue={product.price}
                          onBlur={(e) => handleUpdatePrice(product.id, e.target.value)}
                          style={{ width: '60px', padding: '4px', border: '1px solid var(--border-light)', borderRadius: '2px' }}
                        />
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <div style={{ display: 'flex', gap: '4px' }}>
                        <button
                          onClick={() => handleToggleBadge(product.id, 'sale')}
                          style={{
                            fontSize: '0.65rem',
                            padding: '2px 6px',
                            borderRadius: '2px',
                            border: '1px solid var(--border-light)',
                            backgroundColor: product.badge === 'sale' ? '#8B2626' : '#FAF8F6',
                            color: product.badge === 'sale' ? '#FFF' : '#666'
                          }}
                        >
                          SALE
                        </button>
                        <button
                          onClick={() => handleToggleBadge(product.id, 'new')}
                          style={{
                            fontSize: '0.65rem',
                            padding: '2px 6px',
                            borderRadius: '2px',
                            border: '1px solid var(--border-light)',
                            backgroundColor: product.badge === 'new' ? '#386641' : '#FAF8F6',
                            color: product.badge === 'new' ? '#FFF' : '#666'
                          }}
                        >
                          NEW
                        </button>
                      </div>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <span style={{ color: '#2b8a3e', fontWeight: 600, fontSize: '0.78rem' }}>● In Stock</span>
                    </td>
                    <td style={{ padding: '12px' }}>
                      <button
                        onClick={() => showToast(`Editing ${product.name}`)}
                        style={{ fontSize: '0.75rem', color: 'var(--text-gold)', textDecoration: 'underline', display: 'inline-flex', alignItems: 'center', gap: '3px' }}
                      >
                        <Edit2 size={12} /> Edit Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 2: Orders */}
        {activeTab === 'orders' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-light)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', marginBottom: '18px' }}>Customer Orders</h3>
            
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card-alt)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '12px' }}>Order ID</th>
                  <th style={{ padding: '12px' }}>Customer</th>
                  <th style={{ padding: '12px' }}>Items</th>
                  <th style={{ padding: '12px' }}>Total</th>
                  <th style={{ padding: '12px' }}>Date</th>
                  <th style={{ padding: '12px' }}>Status</th>
                </tr>
              </thead>
              <tbody>
                {ordersList.map((order) => (
                  <tr key={order.id} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px', fontWeight: 700 }}>{order.id}</td>
                    <td style={{ padding: '12px' }}>
                      <div>{order.customer}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{order.email}</div>
                    </td>
                    <td style={{ padding: '12px' }}>{order.item}</td>
                    <td style={{ padding: '12px', fontWeight: 600 }}>${order.total.toFixed(2)}</td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{order.date}</td>
                    <td style={{ padding: '12px' }}>
                      <select
                        value={order.status}
                        onChange={(e) => handleUpdateOrderStatus(order.id, e.target.value)}
                        style={{ padding: '4px 8px', borderRadius: '4px', border: '1px solid var(--border-light)', fontSize: '0.78rem' }}
                      >
                        <option value="Processing">Processing</option>
                        <option value="Shipped">Shipped</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* TAB 3: Subscribers */}
        {activeTab === 'subscribers' && (
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: '8px', border: '1px solid var(--border-light)', padding: '24px', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '18px' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>Newsletter VIP List</h3>
              <button className="btn-outline" style={{ fontSize: '0.75rem', padding: '6px 14px', display: 'flex', alignItems: 'center', gap: '6px' }} onClick={() => showToast('Exported CSV file')}>
                <Download size={14} /> Export CSV
              </button>
            </div>

            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.85rem' }}>
              <thead>
                <tr style={{ backgroundColor: 'var(--bg-card-alt)', textAlign: 'left', borderBottom: '1px solid var(--border-light)' }}>
                  <th style={{ padding: '12px' }}>Subscriber Email</th>
                  <th style={{ padding: '12px' }}>Discount Code Issued</th>
                  <th style={{ padding: '12px' }}>Join Date</th>
                </tr>
              </thead>
              <tbody>
                {subscribers.map((sub, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid var(--border-light)' }}>
                    <td style={{ padding: '12px', fontWeight: 500 }}>{sub.email}</td>
                    <td style={{ padding: '12px' }}><span style={{ backgroundColor: '#F4E7E2', padding: '3px 8px', borderRadius: '3px', fontSize: '0.75rem', fontWeight: 600 }}>XON10 (10% OFF)</span></td>
                    <td style={{ padding: '12px', color: 'var(--text-muted)' }}>{sub.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

      </div>
    </div>
  );
}


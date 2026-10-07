import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Video, Camera, X, ShoppingBag } from 'lucide-react';

const GALLERY_ITEMS = [
  { id: 1, type: 'video', src: '/1K34PRO84_DMCL0D.mp4', title: 'Glazed Holographic Shimmer Set', category: 'videos' },
  { id: 2, type: 'video', src: '/1K34PRO8E_DMCL0D.mp4', title: 'Blush Floral & French Tips', category: 'videos' },
  { id: 3, type: 'video', src: '/1K34PRO8K_DMCL0D.mp4', title: 'Chrome Cat-Eye Swirl Art', category: 'videos' },
  { id: 4, type: 'image', src: '/assets/blush_dream.jpg', title: 'Blush Dream 3D Petals', category: 'closeups' },
  { id: 5, type: 'image', src: '/assets/midnight_sparkle.jpg', title: 'Midnight Obsidian Crystals', category: 'closeups' },
  { id: 6, type: 'image', src: '/assets/white_aura.jpg', title: 'Celestial Aura 24k Gold Foil', category: 'closeups' },
  { id: 7, type: 'image', src: '/assets/rose_gold_luxe.jpg', title: 'Rose Gold Wave Art', category: 'closeups' },
  { id: 8, type: 'image', src: '/assets/beverly_hills.jpg', title: 'Beverly Hills Chrome Tiara', category: 'closeups' },
  { id: 9, type: 'image', src: '/assets/pink_obsession.jpg', title: 'Pink Obsession Crystals', category: 'closeups' },
  { id: 10, type: 'image', src: '/assets/IMG_7098.JPG', title: 'Studio Swatch Showcase', category: 'studio' },
  { id: 11, type: 'image', src: '/assets/IMG_7101.JPG', title: 'Emerald Geometry Statement Set', category: 'studio' },
  { id: 12, type: 'image', src: '/assets/IMG_7107.JPG', title: 'Master Nail Box Display', category: 'studio' }
];

export default function GalleryPage() {
  const [lightboxItem, setLightboxItem] = useState(null);

  return (
    <div className="container" style={{ padding: '40px 20px 70px' }}>
      
      {/* Header */}
      <div className="reveal reveal-up" style={{ textAlign: 'center', maxWidth: '780px', margin: '0 auto 40px' }}>
        <span style={{ fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-gold)', fontWeight: 600 }}>
          Visual Showcase
        </span>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: '2.6rem', fontWeight: 500, margin: '8px 0 14px' }}>
          Artistry in Motion & Studio Gallery
        </h1>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
          Explore our handcrafted collections through studio 4K closeups, artistic application videos, and luxury nail designs.
        </p>
      </div>

      {/* Media Grid */}
      <div className="reveal-stagger" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {GALLERY_ITEMS.map((item) => (
          <div
            key={item.id}
            style={{
              position: 'relative',
              borderRadius: 'var(--radius-sm)',
              overflow: 'hidden',
              aspectRatio: '1 / 1',
              backgroundColor: '#121212',
              cursor: 'pointer',
              boxShadow: 'var(--shadow-sm)'
            }}
            onClick={() => setLightboxItem(item)}
          >
            {item.type === 'video' ? (
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.4s ease' }}
              />
            )}

            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, transparent 60%)',
              display: 'flex',
              alignItems: 'flex-end',
              padding: '16px',
              color: '#FFFFFF'
            }}>
              <div>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>{item.title}</div>
                <div style={{ fontSize: '0.72rem', color: '#D6CEC7', textTransform: 'uppercase', letterSpacing: '0.1em', display: 'inline-flex', alignItems: 'center', gap: '5px', marginTop: '4px' }}>
                  {item.type === 'video' ? (
                    <>
                      <Video size={13} /> Video Reel
                    </>
                  ) : (
                    <>
                      <Camera size={13} /> Studio Photo
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {lightboxItem && (
        <div className="modal-backdrop open" onClick={() => setLightboxItem(null)}>
          <div className="modal-card" style={{ maxWidth: '800px', padding: '16px', background: '#000000', color: '#FFFFFF' }} onClick={(e) => e.stopPropagation()}>
            <button type="button" className="modal-close-btn" style={{ color: '#FFFFFF' }} onClick={() => setLightboxItem(null)} aria-label="Close lightbox">
              <X size={18} />
            </button>
            <div style={{ maxHeight: '75vh', overflow: 'hidden', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              {lightboxItem.type === 'video' ? (
                <video src={lightboxItem.src} controls autoPlay loop style={{ maxHeight: '70vh', maxWidth: '100%' }} />
              ) : (
                <img src={lightboxItem.src} alt={lightboxItem.title} style={{ maxHeight: '70vh', maxWidth: '100%', objectFit: 'contain' }} />
              )}
            </div>
            <div style={{ padding: '14px 10px 4px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <h3 style={{ fontSize: '1.1rem', margin: 0 }}>{lightboxItem.title}</h3>
                <span style={{ fontSize: '0.75rem', color: '#B3B3B3' }}>#XONLuxuryNails Atelier</span>
              </div>
              <Link to="/shop" className="btn-primary" style={{ background: '#FFFFFF', color: '#000000', padding: '8px 16px', fontSize: '0.75rem', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <ShoppingBag size={14} /> Shop Design
              </Link>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}


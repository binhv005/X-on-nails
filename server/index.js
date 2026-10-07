import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// In-memory data store for products
const PRODUCTS = [
  {
    id: 'blush-dream',
    name: 'Blush Dream',
    price: 28.00,
    originalPrice: 36.00,
    badge: null,
    category: 'handmade',
    shape: 'Almond',
    image: '/assets/blush_dream.jpg',
    images: ['/assets/blush_dream.jpg', '/assets/IMG_7098.JPG', '/assets/IMG_7099.JPG'],
    description: 'Delicate blush pink gradient with handcrafted 3D floral petals, micro pearl centerpieces, and subtle gold accents. Perfect for romantic, soft-girl aesthetic and bridal looks.',
    rating: 5,
    reviewsCount: 38,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'midnight-sparkle',
    name: 'Midnight Sparkle',
    price: 32.00,
    originalPrice: 42.00,
    badge: 'sale',
    category: 'handmade',
    shape: 'Stiletto',
    image: '/assets/midnight_sparkle.jpg',
    images: ['/assets/midnight_sparkle.jpg', '/assets/IMG_7101.JPG', '/assets/IMG_7102.JPG'],
    description: 'High-gloss obsidian black base encrusted with genuine brilliant rhinestones, luxury crystal clusters, and fine silver diamond glitter accents.',
    rating: 5,
    reviewsCount: 54,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'white-aura',
    name: 'White Aura',
    price: 26.00,
    originalPrice: null,
    badge: 'new',
    category: 'handmade',
    shape: 'Oval',
    image: '/assets/white_aura.jpg',
    images: ['/assets/white_aura.jpg', '/assets/IMG_7098.JPG', '/assets/IMG_7105.JPG'],
    description: 'Milky iridescent chrome aura finish with fine celestial moon & star line art in real 24k gold foil foil detailing on almond tips.',
    rating: 5,
    reviewsCount: 29,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'rose-gold-luxe',
    name: 'Rose Gold Luxe',
    price: 30.00,
    originalPrice: 38.00,
    badge: null,
    category: 'handmade',
    shape: 'Almond',
    image: '/assets/rose_gold_luxe.jpg',
    images: ['/assets/rose_gold_luxe.jpg', '/assets/IMG_7103.JPG', '/assets/IMG_7107.JPG'],
    description: 'A captivating rose gold chrome shimmer ombre on a translucent jelly nude base with metallic wave line art.',
    rating: 5,
    reviewsCount: 42,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'beverly-hills',
    name: 'Beverly Hills',
    price: 32.00,
    originalPrice: 40.00,
    badge: 'sale',
    category: 'bestseller',
    shape: 'Almond',
    image: '/assets/beverly_hills.jpg',
    images: ['/assets/beverly_hills.jpg', '/assets/IMG_7100.JPG'],
    description: 'The epitome of quiet luxury. Nude blush base with mirror chrome silver french tips and delicate pearl tiara accents.',
    rating: 5,
    reviewsCount: 88,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'pink-obsession',
    name: 'Pink Obsession',
    price: 28.00,
    originalPrice: 36.00,
    badge: 'sale',
    category: 'bestseller',
    shape: 'Almond',
    image: '/assets/pink_obsession.jpg',
    images: ['/assets/pink_obsession.jpg', '/assets/IMG_7104.JPG'],
    description: 'Glazed donut pearl sheen on sheer bubblegum pink with diagonal crystal sash accents.',
    rating: 5,
    reviewsCount: 63,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'nude-perfection',
    name: 'Nude Perfection',
    price: 28.00,
    originalPrice: null,
    badge: null,
    category: 'bestseller',
    shape: 'Almond',
    image: '/assets/nude_perfection.jpg',
    images: ['/assets/nude_perfection.jpg', '/assets/IMG_7110.JPG'],
    description: 'Warm latte nude base adorned with golden Baroque filigree swirl patterns and pearl drops.',
    rating: 5,
    reviewsCount: 71,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  },
  {
    id: 'luxury-set',
    name: 'Luxury Set',
    price: 34.00,
    originalPrice: 44.00,
    badge: 'sale',
    category: 'bestseller',
    shape: 'Coffin',
    image: '/assets/IMG_7101.JPG',
    images: ['/assets/IMG_7101.JPG', '/assets/IMG_7102.JPG'],
    description: 'A glamorous statement set with emerald crystal geometry, high-gloss gel finish, and custom handcrafted artistry.',
    rating: 5,
    reviewsCount: 95,
    sizes: ['XS', 'S', 'M', 'L', 'XL']
  }
];

const subscribers = [];
const orders = [];
const contactMessages = [];

// API Routes
app.get('/api/products', (req, res) => {
  res.json({ success: true, data: PRODUCTS });
});

app.get('/api/products/:id', (req, res) => {
  const product = PRODUCTS.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ success: false, message: 'Product not found' });
  res.json({ success: true, data: product });
});

app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;
  if (!email || !email.includes('@')) {
    return res.status(400).json({ success: false, message: 'Valid email required' });
  }
  subscribers.push({ email, date: new Date() });
  res.json({ success: true, message: 'Subscribed successfully! Check your email for 15% off code.' });
});

app.post('/api/checkout', (req, res) => {
  const { items, total, customer } = req.body;
  const orderId = 'XON-' + Math.floor(100000 + Math.random() * 900000);
  const order = { orderId, items, total, customer, date: new Date(), status: 'Processing' };
  orders.push(order);
  res.json({ success: true, orderId, message: 'Order placed successfully!' });
});

app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;
  contactMessages.push({ name, email, message, date: new Date() });
  res.json({ success: true, message: 'Thank you for reaching out to X-ON Studio!' });
});

app.listen(PORT, () => {
  console.log(`X-ON Node.js API Server running on http://localhost:${PORT}`);
});

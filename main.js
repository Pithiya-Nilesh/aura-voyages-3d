/**
 * AURA VOYAGES — ULTRA-LUXURY 3D PARALLAX & KINETIC WEB ENGINE 2026
 * Features:
 *  - Preloader with Jet Contrail Lift-Off
 *  - Henrietta-Style Multi-Layer Physics Repulsion Engine ([data-parallax="scene"])
 *  - Three.js Interactive 3D Earth Globe with Flight Corridors & Beacons
 *  - GSAP ScrollTrigger Multi-Layer 3D Depth Parallax
 *  - 3D Tilt Cards with Dynamic Glare Hotspots
 *  - 360° Virtual Horizon Panorama Viewer
 *  - Multi-Currency Conversion Engine (USD, EUR, GBP, INR, AED, JPY)
 *  - Bespoke Booking Drawer & Printable Boarding Voucher
 *  - Native Web Audio Synthesizer with Live Equalizer
 */

// ═══════════════════════════════════════════════════════════════════
// 1. DATA: 8 CURATED EXPEDITIONS & DESTINATIONS
// ═══════════════════════════════════════════════════════════════════
const EXPEDITIONS_DATA = [
  {
    id: 'maldives-overwater-haven',
    title: 'Azure Lagoon & Overwater Sanctuary',
    location: 'Baa Atoll, Maldives',
    category: 'sea',
    realmName: 'Turquoise Azure Sea',
    lat: 5.15, lon: 73.05,
    duration: '8 Days · 7 Nights',
    rating: 5.0,
    reviewsCount: 248,
    basePriceUSD: 3450,
    badge: 'Overwater Villa',
    accentColor: '#00f2fe',
    accentGlow: 'rgba(0, 242, 254, 0.4)',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Soneva Overwater Sanctuary & Marine Biosphere',
    flightPartner: 'Qatar Airways (Qsuite) + Scenic Seaplane',
    flightTime: '4h 20m from Dubai',
    weather: '29°C · Sunlit Azure Skies',
    overview: 'Crystalline turquoise lagoons with private waterslides into coral gardens, dedicated Mr./Ms. Friday butler service, and private sommelier cruises.',
    highlights: ['VIP Twin-Otter Seaplane lagoon landing', 'Manta ray & sea turtle biosphere diving', '5-Course underwater restaurant banquet', 'Sunset yacht cruise with Dom Pérignon'],
    departureHub: 'Dubai / London'
  },
  {
    id: 'bora-bora-pearl',
    title: 'Bora Bora Coral Lagoon & Otemanu Villa',
    location: 'French Polynesia, South Pacific',
    category: 'sea',
    realmName: 'Turquoise Azure Sea',
    lat: -16.50, lon: -151.74,
    duration: '9 Days · 8 Nights',
    rating: 4.98,
    reviewsCount: 182,
    basePriceUSD: 4200,
    badge: 'Pacific Haven',
    accentColor: '#38bdf8',
    accentGlow: 'rgba(56, 189, 248, 0.4)',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'The St. Regis Bora Bora Royal Overwater Estate',
    flightPartner: 'Air Tahiti Nui (Poerava Business) + Catamaran',
    flightTime: '8h 15m from Los Angeles',
    weather: '28°C · Tropical Trade Winds',
    overview: 'Unobstructed Mount Otemanu horizons, glass floor viewing portals, Polynesian deep-sea pearl diving, and sunrise canoe breakfast.',
    highlights: ['Outrigger canoe delivered breakfast', 'Lagoon ray & harmless reef shark safari', 'Deep ocean botanical spa pavilion', 'Private motu islet champagne picnic'],
    departureHub: 'San Francisco / Tokyo'
  },
  {
    id: 'sahara-royal-dunes',
    title: 'Sahara Mirage & Royal Celestial Dome',
    location: 'Merzouga & Erg Chebbi, Morocco',
    category: 'sand',
    realmName: 'Sahara Golden Dunes',
    lat: 31.08, lon: -4.01,
    duration: '6 Days · 5 Nights',
    rating: 4.96,
    reviewsCount: 134,
    basePriceUSD: 2680,
    badge: 'Royal Glamping',
    accentColor: '#ffd200',
    accentGlow: 'rgba(255, 210, 0, 0.4)',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Merzouga Royal Celestial Stargazing Domes',
    flightPartner: 'Emirates / Royal Air Maroc + VIP 4×4 Dune Cruiser',
    flightTime: '3h 10m from Paris',
    weather: '26°C · Crystal Clear Night Skies',
    overview: 'Towering golden dunes under zero-light-pollution skies, private camel caravans, astronomer-guided deep space telescopes, and Berber feast banquets.',
    highlights: ['Private celestial glass dome with telescope', 'Sunset camel caravan with vintage champagne', '4×4 High-speed dune ridge safari', 'Fireside oud performance & chef banquet'],
    departureHub: 'Geneva / Paris'
  },
  {
    id: 'arabian-empty-quarter',
    title: 'Liwa Mirage & Rub al Khali Palace',
    location: 'Abu Dhabi Desert Reserve, UAE',
    category: 'sand',
    realmName: 'Sahara Golden Dunes',
    lat: 23.13, lon: 53.78,
    duration: '5 Days · 4 Nights',
    rating: 4.94,
    reviewsCount: 96,
    basePriceUSD: 2350,
    badge: 'Desert Palace',
    accentColor: '#f97316',
    accentGlow: 'rgba(249, 115, 22, 0.4)',
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Qasr Al Sarab Desert Palace & Anantara Spa',
    flightPartner: 'Etihad Airways First Residence + Heli Transfer',
    flightTime: '45m Heli from Abu Dhabi',
    weather: '31°C · Golden Sunlit Serenity',
    overview: 'Secluded luxury palace nestled among colossal 300-meter sand dunes, sunrise hot-air balloon flights, royal falconry, and Arabian hammams.',
    highlights: ['Sunrise desert hot-air balloon flight', 'Traditional royal falconry masterclass', 'Private date-seed and Moroccan hammam', 'Sunset dune sandboarding with private guide'],
    departureHub: 'Dubai / London'
  },
  {
    id: 'alpine-matterhorn',
    title: 'Matterhorn Alpine Chalet & Glacier Sky',
    location: 'Zermatt & Swiss Alps, Switzerland',
    category: 'mountains',
    realmName: 'Alpine Mountain Summits',
    lat: 45.97, lon: 7.74,
    duration: '7 Days · 6 Nights',
    rating: 4.99,
    reviewsCount: 198,
    basePriceUSD: 3100,
    badge: 'Swiss Chalet',
    accentColor: '#a855f7',
    accentGlow: 'rgba(168, 85, 247, 0.45)',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'The Omnia 5★ Alpine Mountain Lodge & Spa',
    flightPartner: 'Swiss International Air (LX First) + Glacier Heli',
    flightTime: '30m Heli from Zurich',
    weather: '-2°C · Crisp Alpine Sun & Powder Snow',
    overview: 'Cantilever heated infinity pool gazing onto the iconic Matterhorn, UIAGM-certified private ski instructors, helicopter glacier drops, and Michelin dining.',
    highlights: ['First-class Glacier Express scenic panorama pass', 'Private charter helicopter glacier landing', 'Michelin-starred Alpine fondue & sommelier', 'Private cedarwood thermal spa & cedar sauna'],
    departureHub: 'Zurich / Geneva / London'
  },
  {
    id: 'patagonia-wild-peaks',
    title: 'Torres del Paine & Glacial Fjords',
    location: 'Patagonia, Chile & Argentina',
    category: 'mountains',
    realmName: 'Alpine Mountain Summits',
    lat: -51.25, lon: -72.88,
    duration: '9 Days · 8 Nights',
    rating: 4.97,
    reviewsCount: 112,
    basePriceUSD: 3490,
    badge: 'Glacier Expedition',
    accentColor: '#6366f1',
    accentGlow: 'rgba(99, 102, 241, 0.4)',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Explora Patagonia Geodesic Eco-Residences',
    flightPartner: 'LATAM Airlines Business + Twin Otter Floatplane',
    flightTime: '3h 30m from Santiago',
    weather: '14°C · Wild Patagonian Splendor',
    overview: 'Granite spires rising above electric-blue icebergs, horseback expeditions with authentic Gauchos, private fjord cruises, and vintage Chilean reserve wines.',
    highlights: ['Grey Glacier electric-blue iceberg zodiac safari', 'Wild puma tracking with lead biologist', 'Andean horseback trail with local gauchos', 'Fireside Chilean reserve wine & lamb roast'],
    departureHub: 'Santiago / Buenos Aires'
  },
  {
    id: 'costa-rica-canopy',
    title: 'Emerald Cloudforest & Volcanic Spring',
    location: 'Monteverde & Arenal, Costa Rica',
    category: 'forest',
    realmName: 'Emerald Ancient Rainforest',
    lat: 10.46, lon: -84.70,
    duration: '7 Days · 6 Nights',
    rating: 4.95,
    reviewsCount: 146,
    basePriceUSD: 2580,
    badge: 'Eco Sanctuary',
    accentColor: '#10b981',
    accentGlow: 'rgba(16, 185, 129, 0.4)',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Nayara Tented Camp & Arenal Rainforest Oasis',
    flightPartner: 'United Polaris / Avianca + Private Eco-SUV',
    flightTime: '2h 15m from Miami',
    weather: '25°C · Warm Tropical Mist & Sunlight',
    overview: 'Luxurious canopy tented villas suspended high above lush rainforest valleys, mineral-rich thermal volcanic springs, private sloth reserves, and canopy bridges.',
    highlights: ['Private suspension bridge canopy walk', 'Natural volcanic thermal spring mineral soaking', 'Bioluminescent night rainforest wildlife tour', 'Highland organic single-origin coffee masterclass'],
    departureHub: 'Miami / New York / San José'
  },
  {
    id: 'kyoto-bamboo-onsen',
    title: 'Kyoto Sacred Bamboo & Zen Ryokan',
    location: 'Arashiyama & Kyoto, Japan',
    category: 'forest',
    realmName: 'Emerald Ancient Rainforest',
    lat: 35.01, lon: 135.76,
    duration: '8 Days · 7 Nights',
    rating: 5.0,
    reviewsCount: 224,
    basePriceUSD: 3890,
    badge: 'Cultural Zen',
    accentColor: '#ff2a85',
    accentGlow: 'rgba(255, 42, 133, 0.45)',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=90',
    hotelName: 'Hoshinoya Kyoto River Pavilion & Suiran Luxury Ryokan',
    flightPartner: 'Japan Airlines (JAL First Class Sky Suite) + Shinkansen',
    flightTime: '11h 20m from London / SF',
    weather: '21°C · Serene Forest Mist',
    overview: 'Ancient whispering bamboo forests, private hinoki cypress onsen baths fed by hot springs, dawn meditation with Zen masters, and 12-course Kaiseki cuisine.',
    highlights: ['VIP dawn Arashiyama Bamboo Grove private entry', 'Zen temple meditation with senior Abbot', 'Private matcha tea ceremony with 15th-gen master', '12-Course Kaiseki dinner paired with rare sakes'],
    departureHub: 'Tokyo / Osaka / New York'
  }
];

// ═══════════════════════════════════════════════════════════════════
// 2. CURRENCY CONVERSION ENGINE
// ═══════════════════════════════════════════════════════════════════
const CURRENCIES = {
  USD: { symbol: '$', rate: 1.00, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.79, name: 'GBP (£)' },
  INR: { symbol: '₹', rate: 83.4, name: 'INR (₹)' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'AED (د.إ)' },
  JPY: { symbol: '¥', rate: 154.5, name: 'JPY (¥)' }
};

let currentCurrency = 'USD';
let activeCategory = 'all';
let packageSearchQuery = '';
let activeExpedition = EXPEDITIONS_DATA[0];

function formatPrice(usd) {
  const c = CURRENCIES[currentCurrency];
  const converted = Math.round((usd || 2890) * c.rate);
  return `${c.symbol}${converted.toLocaleString()}`;
}

// ═══════════════════════════════════════════════════════════════════
// 3. LIFECYCLE INITIALIZATION (FAIL-SAFE)
// ═══════════════════════════════════════════════════════════════════
function initSite() {
  const preloader = document.getElementById('site-preloader');
  if (preloader) {
    preloader.classList.add('loaded');
    preloader.style.display = 'none';
  }
  document.body.style.overflow = '';

  try { initLenisSmoothScroll(); } catch (e) { console.warn('Lenis:', e); }
  try { initCursorSpotlight(); } catch (e) { console.warn('Cursor:', e); }
  try { initAtmosphereParticles(); } catch (e) { console.warn('Particles:', e); }
  try { initHenriettaParallaxScenes(); } catch (e) { console.warn('Physics:', e); }
  try { initMouse3DParallax(); } catch (e) { console.warn('Mouse3D:', e); }
  try { init3DTiltCards(); } catch (e) { console.warn('Tilt:', e); }
  try { initGSAPParallaxScroll(); } catch (e) { console.warn('GSAP:', e); }
  try { initThreeJSGlobe(); } catch (e) { console.warn('Globe:', e); }
  try { initFlightTelemetryHUD(); } catch (e) { console.warn('Telemetry:', e); }
  try { renderExpeditionCatalog(); } catch (e) { console.warn('Catalog:', e); }
  try { initFilterAndSearch(); } catch (e) { console.warn('Filter:', e); }
  try { initCurrencySelector(); } catch (e) { console.warn('Currency:', e); }
  try { initBookingModal(); } catch (e) { console.warn('Booking:', e); }
  try { init360PanoramaViewer(); } catch (e) { console.warn('Pano:', e); }
  try { initSynthesizerAudio(); } catch (e) { console.warn('Audio:', e); }
  try { initMobileDrawer(); } catch (e) { console.warn('Mobile:', e); }
  try { initCounterStats(); } catch (e) { console.warn('Counters:', e); }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSite);
} else {
  initSite();
}

// ═══════════════════════════════════════════════════════════════════
// 5. HENRIETTA-STYLE MULTI-LAYER PHYSICS REPULSION PARALLAX ENGINE
// ═══════════════════════════════════════════════════════════════════
function initHenriettaParallaxScenes() {
  document.querySelectorAll('[data-parallax="scene"]').forEach(initParallaxScene);
}

function initParallaxScene(scene) {
  const cfg = (key, fallback) => {
    const val = scene.dataset[key];
    return val !== undefined ? parseFloat(val) : fallback;
  };

  const images = Array.from(scene.querySelectorAll('.parallax-float-item'));
  if (images.length === 0) return;

  const items = images.map((el) => ({
    el,
    layer: parseFloat(el.dataset.layer ?? 0.5),
    rot: parseFloat(el.dataset.rot ?? 0),
    phX: Math.random() * Math.PI * 2,
    phY: Math.random() * Math.PI * 2,
    phS: Math.random() * Math.PI * 2,
    phR: Math.random() * Math.PI * 2,
    pxK: 0.85 + Math.random() * 0.3,
    pyK: 0.85 + Math.random() * 0.3,
    fqK: 0.75 + Math.random() * 0.55,
    repX: 0,
    repY: 0,
  }));

  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let mouseScreenX = -9999, mouseScreenY = -9999;
  let lastTime = null, elapsed = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth) - 0.5;
    targetY = (e.clientY / window.innerHeight) - 0.5;
    mouseScreenX = e.clientX;
    mouseScreenY = e.clientY;
  });

  document.addEventListener('mouseleave', () => {
    targetX = 0;
    targetY = 0;
    mouseScreenX = -9999;
    mouseScreenY = -9999;
  });

  function animate(now) {
    requestAnimationFrame(animate);

    if (lastTime === null) lastTime = now;
    const dt = Math.min((now - lastTime) / 1000, 0.05);
    lastTime = now;
    elapsed += dt;

    const lerpSpeed = cfg('parallaxLerp', 5.5) / 100;
    currentX += (targetX - currentX) * lerpSpeed;
    currentY += (targetY - currentY) * lerpSpeed;

    const parallax = cfg('parallaxStrength', 65);
    const rotStr = cfg('parallaxRot', 3.8);
    const floatY = cfg('floatY', 12);
    const floatX = cfg('floatX', 9);
    const breath = cfg('breath', 1.5) / 100;
    const fspeed = cfg('floatSpeed', 12) * 0.025;
    const frot = cfg('floatRot', 5);
    const repRadius = cfg('repulseRadius', 280);
    const repStr = cfg('repulseStrength', 40);
    const repLerp = cfg('repulseLerp', 4.5) / 100;

    items.forEach((item) => {
      const { el, layer, rot, phX, phY, phS, phR, pxK, pyK, fqK } = item;
      const d = layer;
      const ft = elapsed * fspeed * fqK;

      // Natural harmonic floating movement
      const fY = Math.sin(ft + phY) * floatY;
      const fX = Math.sin(ft * 0.6 + phX) * floatX;
      const sc = 1 + Math.sin(ft * 0.35 + phS) * breath;
      const fR = Math.sin(ft * 0.5 + phR) * frot;

      // Mouse camera parallax
      const mX = currentX * -parallax * d * pxK;
      const mY = currentY * -parallax * 0.7 * d * pyK;
      const mR = (currentX * rotStr + currentY * rotStr * 0.6) * d;

      // Physical Mouse Repulsion Vector
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width * 0.5;
      const cy = rect.top + rect.height * 0.5;
      const dx = mouseScreenX - cx;
      const dy = mouseScreenY - cy;
      const dist = Math.sqrt(dx * dx + dy * dy);

      let tRepX = 0, tRepY = 0;
      if (dist < repRadius && dist > 0) {
        const force = 1 - dist / repRadius;
        tRepX = (-dx / dist) * force * repStr;
        tRepY = (-dy / dist) * force * repStr;

        const mag = Math.sqrt(tRepX * tRepX + tRepY * tRepY);
        if (mag > repStr) {
          tRepX = (tRepX / mag) * repStr;
          tRepY = (tRepY / mag) * repStr;
        }
      }

      item.repX += (tRepX - item.repX) * repLerp;
      item.repY += (tRepY - item.repY) * repLerp;

      const tx = mX + fX + item.repX;
      const ty = mY + fY + item.repY;

      el.style.transformOrigin = 'center center';
      el.style.willChange = 'transform';
      el.style.transform = `translate(${tx.toFixed(2)}px, ${ty.toFixed(2)}px) rotate(${(rot + fR + mR).toFixed(3)}deg) scale(${sc.toFixed(4)})`;
    });
  }

  requestAnimationFrame(animate);
}

// ═══════════════════════════════════════════════════════════════════
// 6. LENIS SMOOTH SCROLL
// ═══════════════════════════════════════════════════════════════════
let lenisInstance;
function initLenisSmoothScroll() {
  if (typeof Lenis === 'undefined') return;
  lenisInstance = new Lenis({
    duration: 1.25,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    touchMultiplier: 1.5
  });
  window.lenis = lenisInstance;

  if (typeof ScrollTrigger !== 'undefined' && typeof gsap !== 'undefined') {
    lenisInstance.on('scroll', ScrollTrigger.update);
    gsap.ticker.add((time) => lenisInstance.raf(time * 1000));
    gsap.ticker.lagSmoothing(0);
  } else {
    function raf(t) {
      lenisInstance.raf(t);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (href && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          if (lenisInstance) {
            lenisInstance.scrollTo(target, { offset: -60, duration: 1.2 });
          } else {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// 7. CURSOR SPOTLIGHT
// ═══════════════════════════════════════════════════════════════════
function initCursorSpotlight() {
  const glowEl = document.getElementById('cursor-glow');
  if (!glowEl || window.matchMedia('(pointer: coarse)').matches) {
    if (glowEl) glowEl.style.display = 'none';
    return;
  }

  let mouseX = window.innerWidth / 2;
  let mouseY = window.innerHeight / 2;
  let currentX = mouseX;
  let currentY = mouseY;

  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  });

  function loopGlow() {
    currentX += (mouseX - currentX) * 0.12;
    currentY += (mouseY - currentY) * 0.12;
    glowEl.style.left = `${currentX}px`;
    glowEl.style.top = `${currentY}px`;
    requestAnimationFrame(loopGlow);
  }
  requestAnimationFrame(loopGlow);

  const realms = [
    { id: 'hero-stage', color: 'radial-gradient(circle, rgba(255, 42, 133, 0.2) 0%, rgba(0, 242, 254, 0.14) 35%, transparent 70%)' },
    { id: 'biome-sea', color: 'radial-gradient(circle, rgba(0, 242, 254, 0.24) 0%, rgba(79, 172, 254, 0.14) 35%, transparent 70%)' },
    { id: 'biome-sand', color: 'radial-gradient(circle, rgba(255, 210, 0, 0.24) 0%, rgba(247, 151, 30, 0.14) 35%, transparent 70%)' },
    { id: 'biome-mountains', color: 'radial-gradient(circle, rgba(168, 85, 247, 0.24) 0%, rgba(99, 102, 241, 0.14) 35%, transparent 70%)' },
    { id: 'biome-forest', color: 'radial-gradient(circle, rgba(16, 185, 129, 0.24) 0%, rgba(52, 211, 153, 0.14) 35%, transparent 70%)' },
    { id: 'radar-section', color: 'radial-gradient(circle, rgba(168, 85, 247, 0.25) 0%, rgba(0, 242, 254, 0.15) 35%, transparent 70%)' },
    { id: 'packages-section', color: 'radial-gradient(circle, rgba(255, 42, 133, 0.22) 0%, rgba(255, 210, 0, 0.14) 35%, transparent 70%)' }
  ];

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;
    for (let i = realms.length - 1; i >= 0; i--) {
      const section = document.getElementById(realms[i].id);
      if (section && section.offsetTop <= scrollPos) {
        glowEl.style.background = realms[i].color;
        break;
      }
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════════════
// 8. ATMOSPHERIC PARTICLES
// ═══════════════════════════════════════════════════════════════════
function initAtmosphereParticles() {
  const heroStars = document.getElementById('hero-stars-container');
  if (heroStars) {
    for (let i = 0; i < 75; i++) {
      const star = document.createElement('span');
      star.className = 'particle-star';
      const size = Math.random() * 2.8 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 85}%`;
      star.style.backgroundColor = ['#ffffff', '#38bdf8', '#c084fc', '#fde68a', '#ff2a85'][Math.floor(Math.random() * 5)];
      star.style.boxShadow = `0 0 ${size * 3}px ${star.style.backgroundColor}`;
      star.style.animationDuration = `${Math.random() * 3 + 2}s`;
      star.style.animationDelay = `${Math.random() * -5}s`;
      heroStars.appendChild(star);
    }
  }

  const seaParticles = document.getElementById('sea-sparkle-container');
  if (seaParticles) {
    for (let i = 0; i < 35; i++) {
      const bubble = document.createElement('span');
      bubble.className = 'particle-star';
      const size = Math.random() * 4 + 2;
      bubble.style.width = `${size}px`;
      bubble.style.height = `${size}px`;
      bubble.style.left = `${Math.random() * 100}%`;
      bubble.style.top = `${Math.random() * 90}%`;
      bubble.style.backgroundColor = ['rgba(0, 242, 254, 0.85)', 'rgba(56, 189, 248, 0.75)', 'rgba(255, 255, 255, 0.95)'][Math.floor(Math.random() * 3)];
      bubble.style.boxShadow = '0 0 10px #00f2fe';
      bubble.style.animationDuration = `${Math.random() * 4 + 2}s`;
      seaParticles.appendChild(bubble);
    }
  }

  const sandParticles = document.getElementById('sand-motes-container');
  if (sandParticles) {
    for (let i = 0; i < 40; i++) {
      const mote = document.createElement('span');
      mote.className = 'particle-star';
      const size = Math.random() * 3 + 1.5;
      mote.style.width = `${size}px`;
      mote.style.height = `${size}px`;
      mote.style.left = `${Math.random() * 100}%`;
      mote.style.top = `${Math.random() * 95}%`;
      mote.style.backgroundColor = ['#ffd200', '#f97316', '#fbbf24', '#ffffff'][Math.floor(Math.random() * 4)];
      mote.style.boxShadow = '0 0 8px #ffd200';
      mote.style.animationDuration = `${Math.random() * 3 + 1.5}s`;
      sandParticles.appendChild(mote);
    }
  }

  const snowParticles = document.getElementById('mountain-snow-container');
  if (snowParticles) {
    for (let i = 0; i < 50; i++) {
      const flake = document.createElement('span');
      flake.className = 'particle-star';
      const size = Math.random() * 4 + 2;
      flake.style.width = `${size}px`;
      flake.style.height = `${size}px`;
      flake.style.left = `${Math.random() * 100}%`;
      flake.style.top = `${Math.random() * 90}%`;
      flake.style.backgroundColor = ['#ffffff', '#e0e7ff', '#c7d2fe'][Math.floor(Math.random() * 3)];
      flake.style.boxShadow = '0 0 12px rgba(255, 255, 255, 0.9)';
      flake.style.animationDuration = `${Math.random() * 4 + 3}s`;
      snowParticles.appendChild(flake);
    }
  }

  const forestParticles = document.getElementById('forest-spores-container');
  if (forestParticles) {
    for (let i = 0; i < 40; i++) {
      const spore = document.createElement('span');
      spore.className = 'particle-star';
      const size = Math.random() * 5 + 2;
      spore.style.width = `${size}px`;
      spore.style.height = `${size}px`;
      spore.style.left = `${Math.random() * 100}%`;
      spore.style.top = `${Math.random() * 90}%`;
      spore.style.backgroundColor = ['#34d399', '#10b981', '#6ee7b7', '#a7f3d0'][Math.floor(Math.random() * 4)];
      spore.style.boxShadow = '0 0 14px #10b981';
      spore.style.animationDuration = `${Math.random() * 4 + 2}s`;
      forestParticles.appendChild(spore);
    }
  }
}

// ═══════════════════════════════════════════════════════════════════
// 9. MOUSE 3D AIRPLANE BANKING
// ═══════════════════════════════════════════════════════════════════
function initMouse3DParallax() {
  const planeImg = document.getElementById('hero-plane-img');
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;

  window.addEventListener('mousemove', (e) => {
    targetX = (e.clientX / window.innerWidth - 0.5) * 2;
    targetY = (e.clientY / window.innerHeight - 0.5) * 2;
  });

  function tickMouse3D() {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;

    if (planeImg && window.scrollY < window.innerHeight * 1.2) {
      const rotateY = currentX * 18;
      const rotateX = -currentY * 14;
      const rotateZ = currentX * 10;
      const translateX = currentX * 25;
      const translateY = currentY * 18;

      planeImg.style.transform = `perspective(1000px) translate3d(${translateX}px, ${translateY}px, 0) rotateY(${rotateY}deg) rotateX(${rotateX}deg) rotateZ(${rotateZ}deg)`;
    }

    requestAnimationFrame(tickMouse3D);
  }
  requestAnimationFrame(tickMouse3D);
}

// ═══════════════════════════════════════════════════════════════════
// 10. 3D TILT CARDS WITH GLARE
// ═══════════════════════════════════════════════════════════════════
function init3DTiltCards() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tilt-card');
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      if (
        e.clientX < rect.left - 50 ||
        e.clientX > rect.right + 50 ||
        e.clientY < rect.top - 50 ||
        e.clientY > rect.bottom + 50
      ) {
        return;
      }

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -12;
      const rotateY = ((x - centerX) / centerX) * 12;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
      card.style.setProperty('--glare-x', `${(x / rect.width) * 100}%`);
      card.style.setProperty('--glare-y', `${(y / rect.height) * 100}%`);
    });
  });

  document.addEventListener('mouseleave', () => {
    document.querySelectorAll('.tilt-card').forEach((card) => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px)';
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// 11. GSAP SCROLLTRIGGER MULTI-LAYER PARALLAX
// ═══════════════════════════════════════════════════════════════════
function initGSAPParallaxScroll() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
  gsap.registerPlugin(ScrollTrigger);

  // 1. HERO TIMELINE: Plane ascends and flies forward across clouds
  gsap.to('#hero-plane-wrap', {
    scrollTrigger: {
      trigger: '#hero-stage',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: '-25vh',
    x: '20vw',
    scale: 1.35,
    rotation: 6,
    ease: 'power1.out'
  });

  gsap.to('.hero-mtn-ridge', {
    scrollTrigger: {
      trigger: '#hero-stage',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    y: 140,
    ease: 'none'
  });

  gsap.to('.hero-clouds-front', {
    scrollTrigger: {
      trigger: '#hero-stage',
      start: 'top top',
      end: 'bottom top',
      scrub: 1
    },
    x: 220,
    scale: 1.5,
    ease: 'none'
  });

  gsap.to('#hero-main-content', {
    scrollTrigger: {
      trigger: '#hero-stage',
      start: 'top top',
      end: 'center top',
      scrub: 1
    },
    y: -80,
    opacity: 0.15,
    ease: 'none'
  });

  // 2. SEA REALM: Speedboat sails from start (left) all the way across to the right
  gsap.fromTo('#sea-boat',
    { x: '-22vw', y: 35, rotation: -2 },
    {
      x: '75vw',
      y: -20,
      rotation: 2,
      ease: 'none',
      scrollTrigger: {
        trigger: '#biome-sea',
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1
      }
    }
  );

  gsap.fromTo('#sea-paraglider',
    { x: '5vw', y: '-4vh', scale: 0.95, rotation: -3 },
    {
      x: '-25vw',
      y: '16vh',
      scale: 1.15,
      rotation: 4,
      ease: 'none',
      scrollTrigger: {
        trigger: '#biome-sea',
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1
      }
    }
  );

  gsap.to('#sea-bg-layer', {
    y: 80,
    scale: 1.15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#biome-sea',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // 3. SAND REALM: Camel caravan walks across golden dunes
  gsap.fromTo('#sand-camel',
    { x: '-15vw', y: 20 },
    {
      x: '60vw',
      y: -20,
      ease: 'none',
      scrollTrigger: {
        trigger: '#biome-sand',
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1
      }
    }
  );

  gsap.to('#sand-bg-layer', {
    y: 80,
    scale: 1.15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#biome-sand',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // 4. MOUNTAINS REALM: Helicopter cuts through alpine pass
  gsap.fromTo('#mtn-heli',
    { x: '15vw', y: '-5vh', scale: 0.85, rotation: 10 },
    {
      x: '-70vw',
      y: '25vh',
      scale: 1.35,
      rotation: -6,
      ease: 'none',
      scrollTrigger: {
        trigger: '#biome-mountains',
        start: 'top 85%',
        end: 'bottom 15%',
        scrub: 1
      }
    }
  );

  gsap.to('#mtn-bg-layer', {
    y: 80,
    scale: 1.15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#biome-mountains',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // 5. FOREST REALM: Canopy mist and light shift
  gsap.to('#fst-bg-layer', {
    y: 80,
    scale: 1.15,
    ease: 'none',
    scrollTrigger: {
      trigger: '#biome-forest',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1
    }
  });

  // HUD Glass Cards float up with smooth entry
  ['#sea-hud-panel', '#sand-hud-panel', '#mtn-hud-panel', '#fst-hud-panel'].forEach((id) => {
    const el = document.querySelector(id);
    if (el) {
      gsap.fromTo(el,
        { y: 50, opacity: 0.7 },
        {
          y: 0,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: el,
            start: 'top 92%',
            end: 'top 45%',
            scrub: 1
          }
        }
      );
    }
  });

  // Trigger refresh after DOM and images settle
  setTimeout(() => {
    ScrollTrigger.refresh();
  }, 300);
}

// ═══════════════════════════════════════════════════════════════════
// 12. THREE.JS INTERACTIVE 3D EARTH GLOBE
// ═══════════════════════════════════════════════════════════════════
let globeScene, globeCamera, globeRenderer, globeSphere, globeGroup, cloudMesh;
let isDraggingGlobe = false, prevMouseX = 0, prevMouseY = 0;
let targetGlobeRotX = 0.25, targetGlobeRotY = -0.6;
let currentGlobeRotX = 0.25, currentGlobeRotY = -0.6;
let flightSparkMeshes = [];

function initThreeJSGlobe() {
  const container = document.getElementById('globe-canvas-wrap');
  if (!container || typeof THREE === 'undefined') return;

  const width = container.clientWidth;
  const height = container.clientHeight;

  globeScene = new THREE.Scene();
  globeCamera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
  globeCamera.position.z = 240;

  globeRenderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('three-globe-canvas'),
    alpha: true,
    antialias: true
  });
  globeRenderer.setSize(width, height);
  globeRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  globeGroup = new THREE.Group();
  globeScene.add(globeGroup);

  const radius = 75;

  // Real NASA High-Resolution Satellite Earth Texture with CORS & Fallback
  const textureLoader = new THREE.TextureLoader();
  textureLoader.setCrossOrigin('anonymous');

  const onTextureLoaded = (tex) => {
    tex.colorSpace = THREE.SRGBColorSpace;
    if (globeSphere && globeSphere.material) {
      globeSphere.material.map = tex;
      globeSphere.material.needsUpdate = true;
    }
    if (globeRenderer && globeScene && globeCamera) {
      globeRenderer.render(globeScene, globeCamera);
    }
  };

  const earthTexture = textureLoader.load(
    'assets/earth-map.jpg',
    onTextureLoaded,
    undefined,
    () => {
      // High-speed CDN satellite texture fallback
      textureLoader.load(
        'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_atmos_2048.jpg',
        onTextureLoaded
      );
    }
  );

  // Base Earth Sphere with authentic satellite continents, vegetation & oceans
  const sphereGeo = new THREE.SphereGeometry(radius, 64, 64);
  const sphereMat = new THREE.MeshPhongMaterial({
    map: earthTexture,
    specular: new THREE.Color(0x1a334d),
    shininess: 6,
    emissive: new THREE.Color(0x020612),
    emissiveIntensity: 0.08
  });
  globeSphere = new THREE.Mesh(sphereGeo, sphereMat);
  globeGroup.add(globeSphere);

  // Realistic Atmospheric Cloud Layer
  textureLoader.load(
    'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/planets/earth_clouds_1024.png',
    (cloudTex) => {
      const cloudGeo = new THREE.SphereGeometry(radius + 0.6, 64, 64);
      const cloudMat = new THREE.MeshPhongMaterial({
        map: cloudTex,
        transparent: true,
        opacity: 0.35,
        blending: THREE.AdditiveBlending
      });
      cloudMesh = new THREE.Mesh(cloudGeo, cloudMat);
      globeGroup.add(cloudMesh);
    }
  );

  // Soft Atmospheric Outer Glow
  const haloGeo = new THREE.SphereGeometry(radius + 5, 32, 32);
  const haloMat = new THREE.ShaderMaterial({
    vertexShader: `
      varying vec3 vNormal;
      void main() {
        vNormal = normalize(normalMatrix * normal);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      varying vec3 vNormal;
      void main() {
        float intensity = pow(0.68 - dot(vNormal, vec3(0, 0, 1.0)), 2.5);
        gl_FragColor = vec4(0.2, 0.6, 1.0, 1.0) * intensity * 0.45;
      }
    `,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
    transparent: true
  });
  const haloMesh = new THREE.Mesh(haloGeo, haloMat);
  globeGroup.add(haloMesh);

  // Natural Sunlight & Atmospheric Rim Lighting
  globeScene.add(new THREE.AmbientLight(0xffffff, 1.3));
  const sunLight = new THREE.DirectionalLight(0xfff8ee, 1.6);
  sunLight.position.set(160, 100, 160);
  globeScene.add(sunLight);
  const rimLight = new THREE.DirectionalLight(0x0284c7, 0.5);
  rimLight.position.set(-150, 50, -150);
  globeScene.add(rimLight);

  function latLonToVec3(lat, lon, r) {
    const phi = (90 - lat) * (Math.PI / 180);
    const theta = (lon + 180) * (Math.PI / 180);
    return new THREE.Vector3(
      -(r * Math.sin(phi) * Math.cos(theta)),
      r * Math.cos(phi),
      r * Math.sin(phi) * Math.sin(theta)
    );
  }

  // Add Destination Beacons
  EXPEDITIONS_DATA.forEach((pkg) => {
    const pos = latLonToVec3(pkg.lat, pkg.lon, radius + 1.2);
    const pinGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const pinMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(pkg.accentColor) });
    const pinMesh = new THREE.Mesh(pinGeo, pinMat);
    pinMesh.position.copy(pos);
    globeGroup.add(pinMesh);

    const ringGeo = new THREE.RingGeometry(2.4, 3.4, 32);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(pkg.accentColor),
      side: THREE.DoubleSide,
      transparent: true,
      opacity: 0.85
    });
    const ringMesh = new THREE.Mesh(ringGeo, ringMat);
    ringMesh.position.copy(pos);
    ringMesh.lookAt(new THREE.Vector3(0, 0, 0));
    globeGroup.add(ringMesh);
  });

  // Flight Arcs
  const hubs = [
    { name: 'Geneva', lat: 46.20, lon: 6.14 },
    { name: 'Dubai', lat: 25.20, lon: 55.27 },
    { name: 'New York', lat: 40.71, lon: -74.00 },
    { name: 'Tokyo', lat: 35.67, lon: 139.65 }
  ];

  EXPEDITIONS_DATA.forEach((pkg, idx) => {
    const hub = hubs[idx % hubs.length];
    const p1 = latLonToVec3(hub.lat, hub.lon, radius);
    const p2 = latLonToVec3(pkg.lat, pkg.lon, radius);

    const mid = p1.clone().add(p2).multiplyScalar(0.5);
    const distance = p1.distanceTo(p2);
    const altitude = radius + distance * 0.22;
    mid.normalize().multiplyScalar(altitude);

    const curve = new THREE.QuadraticBezierCurve3(p1, mid, p2);
    const points = curve.getPoints(50);
    const curveGeo = new THREE.BufferGeometry().setFromPoints(points);

    const curveMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(pkg.accentColor),
      transparent: true,
      opacity: 0.55
    });
    globeGroup.add(new THREE.Line(curveGeo, curveMat));

    const sparkGeo = new THREE.SphereGeometry(1.2, 8, 8);
    const sparkMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const sparkMesh = new THREE.Mesh(sparkGeo, sparkMat);
    globeGroup.add(sparkMesh);

    flightSparkMeshes.push({
      mesh: sparkMesh,
      curve: curve,
      speed: 0.002 + Math.random() * 0.002,
      progress: Math.random()
    });
  });

  // Mouse drag rotation
  container.addEventListener('mousedown', (e) => {
    isDraggingGlobe = true;
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });
  window.addEventListener('mouseup', () => { isDraggingGlobe = false; });
  container.addEventListener('mousemove', (e) => {
    if (!isDraggingGlobe) return;
    const deltaX = e.clientX - prevMouseX;
    const deltaY = e.clientY - prevMouseY;
    targetGlobeRotY += deltaX * 0.006;
    targetGlobeRotX += deltaY * 0.006;
    targetGlobeRotX = Math.max(-1.1, Math.min(1.1, targetGlobeRotX));
    prevMouseX = e.clientX;
    prevMouseY = e.clientY;
  });

  // Touch controls
  container.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDraggingGlobe = true;
      prevMouseX = e.touches[0].clientX;
      prevMouseY = e.touches[0].clientY;
    }
  });
  window.addEventListener('touchend', () => { isDraggingGlobe = false; });
  container.addEventListener('touchmove', (e) => {
    if (!isDraggingGlobe || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - prevMouseX;
    const deltaY = e.touches[0].clientY - prevMouseY;
    targetGlobeRotY += deltaX * 0.007;
    targetGlobeRotX += deltaY * 0.007;
    targetGlobeRotX = Math.max(-1.1, Math.min(1.1, targetGlobeRotX));
    prevMouseX = e.touches[0].clientX;
    prevMouseY = e.touches[0].clientY;
  });

  window.addEventListener('resize', () => {
    if (!container) return;
    const newW = container.clientWidth;
    const newH = container.clientHeight;
    globeCamera.aspect = newW / newH;
    globeCamera.updateProjectionMatrix();
    globeRenderer.setSize(newW, newH);
  });

  function animateGlobe() {
    requestAnimationFrame(animateGlobe);
    if (!isDraggingGlobe) {
      targetGlobeRotY += 0.0015;
    }
    currentGlobeRotX += (targetGlobeRotX - currentGlobeRotX) * 0.08;
    currentGlobeRotY += (targetGlobeRotY - currentGlobeRotY) * 0.08;
    globeGroup.rotation.x = currentGlobeRotX;
    globeGroup.rotation.y = currentGlobeRotY;
    if (cloudMesh) {
      cloudMesh.rotation.y += 0.0003;
    }

    flightSparkMeshes.forEach((item) => {
      item.progress = (item.progress + item.speed) % 1;
      const pt = item.curve.getPoint(item.progress);
      item.mesh.position.copy(pt);
    });

    globeRenderer.render(globeScene, globeCamera);
  }
  animateGlobe();
}

window.flyGlobeToDestination = function (pkgId) {
  const pkg = EXPEDITIONS_DATA.find((p) => p.id === pkgId);
  if (!pkg) return;

  const targetPhi = (pkg.lat * Math.PI) / 180;
  const targetTheta = -(pkg.lon * Math.PI) / 180 - Math.PI / 2;

  targetGlobeRotX = targetPhi * 0.7;
  targetGlobeRotY = targetTheta;

  const hudTitle = document.getElementById('globe-hud-title');
  const hudLoc = document.getElementById('globe-hud-loc');
  const hudWeather = document.getElementById('globe-hud-weather');
  const hudFlight = document.getElementById('globe-hud-flight');
  const hudPrice = document.getElementById('globe-hud-price');
  const hudBtn = document.getElementById('globe-hud-book');

  if (hudTitle) hudTitle.textContent = pkg.title;
  if (hudLoc) hudLoc.textContent = pkg.location;
  if (hudWeather) hudWeather.textContent = pkg.weather;
  if (hudFlight) hudFlight.textContent = `✈ ${pkg.flightPartner}`;
  if (hudPrice) hudPrice.textContent = `${formatPrice(pkg.basePriceUSD)} / person`;
  if (hudBtn) hudBtn.onclick = () => openBookingModal(pkg.id);

  document.querySelectorAll('.radar-dest-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.id === pkgId);
  });
};

// ═══════════════════════════════════════════════════════════════════
// 13. FLIGHT TELEMETRY HUD
// ═══════════════════════════════════════════════════════════════════
function initFlightTelemetryHUD() {
  const waypoints = [
    { id: 'hero-stage', name: 'Takeoff · Stratosphere (38,000 FT)', icon: '✈️' },
    { id: 'biome-sea', name: 'Waypoint 01 · Turquoise Azure Sea', icon: '🌊' },
    { id: 'biome-sand', name: 'Waypoint 02 · Sahara Golden Dunes', icon: '🏜️' },
    { id: 'biome-mountains', name: 'Waypoint 03 · Alpine Summits & Glacier', icon: '🏔️' },
    { id: 'biome-forest', name: 'Waypoint 04 · Emerald Ancient Rainforest', icon: '🌲' },
    { id: 'radar-section', name: 'Flight Navigation Radar & Orbit', icon: '🌐' },
    { id: 'packages-section', name: 'Touchdown · Luxury Expedition Packages', icon: '📍' }
  ];

  const wpName = document.getElementById('wp-name');
  const wpIcon = document.getElementById('wp-icon');
  const wpBar = document.getElementById('wp-bar');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));

    if (wpBar) wpBar.style.width = `${progress}%`;

    const midScreen = scrollY + window.innerHeight * 0.35;
    for (let i = waypoints.length - 1; i >= 0; i--) {
      const section = document.getElementById(waypoints[i].id);
      if (section && section.offsetTop <= midScreen) {
        if (wpName) wpName.textContent = waypoints[i].name;
        if (wpIcon) wpIcon.textContent = waypoints[i].icon;
        break;
      }
    }
  }, { passive: true });
}

// ═══════════════════════════════════════════════════════════════════
// 14. EXPEDITIONS CATALOG & FILTER ENGINE
// ═══════════════════════════════════════════════════════════════════
function renderExpeditionCatalog() {
  const grid = document.getElementById('packages-grid');
  if (!grid) return;

  const filtered = EXPEDITIONS_DATA.filter((p) => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery = !packageSearchQuery ||
      [p.title, p.location, p.overview, p.hotelName, p.flightPartner]
        .some((str) => str.toLowerCase().includes(packageSearchQuery.toLowerCase()));
    return matchCat && matchQuery;
  });

  if (!filtered.length) {
    grid.innerHTML = `
      <div class="col-span-full py-20 text-center glass-panel p-10 max-w-xl mx-auto">
        <div class="text-5xl mb-4">🔍</div>
        <h3 class="text-2xl font-bold font-serif text-white mb-2">No Expeditions Found</h3>
        <p class="text-slate-400 text-sm mb-6">Try searching for Maldives, Sahara, Zermatt, or Kyoto.</p>
        <button onclick="resetFilters()" class="btn-vibrant-primary text-xs">Reset All Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map((p) => {
    const priceFormatted = formatPrice(p.basePriceUSD);
    const isUltraPopular = p.rating >= 4.98;

    return `
      <article class="pkg-card-vibrant tilt-card" style="--accent-color:${p.accentColor};--accent-glow:${p.accentGlow}">
        <div class="tilt-glare"></div>
        <div class="pkg-img-frame">
          <img src="${p.image}" alt="${p.title}" loading="eager">
          <div class="pkg-img-overlay"></div>
          
          ${isUltraPopular ? `
            <div class="absolute top-4 right-4 z-20 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider text-slate-950 font-sans shadow-lg shadow-amber-500/30" style="background:linear-gradient(135deg,#ffd200,#f97316)">
              ★ Curated Top Pick
            </div>
          ` : ''}

          <div class="absolute top-4 left-4 z-20">
            <span class="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider backdrop-blur-md border" style="background:rgba(4,2,12,0.7);border-color:${p.accentColor};color:${p.accentColor}">
              ${p.badge}
            </span>
          </div>

          <div class="absolute bottom-4 left-4 z-20 flex items-center gap-1.5 text-xs text-white font-semibold px-3 py-1.5 rounded-full backdrop-blur-md" style="background:rgba(4,2,12,0.8);border:1px solid rgba(255,255,255,0.15)">
            <svg class="w-3.5 h-3.5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${p.location}
          </div>

          <div class="absolute bottom-4 right-4 z-20 flex items-center gap-1 text-xs font-bold text-amber-300 px-2.5 py-1 rounded-full backdrop-blur-md" style="background:rgba(4,2,12,0.85);border:1px solid rgba(255,255,255,0.15)">
            ★ ${p.rating} <span class="text-slate-400 font-normal">(${p.reviewsCount})</span>
          </div>
        </div>

        <div class="p-6 flex-1 flex flex-col relative z-10">
          <div class="flex items-center gap-2 mb-2 text-[11px] font-bold text-slate-400 uppercase tracking-widest">
            <svg class="w-3.5 h-3.5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            ${p.duration}
          </div>

          <h3 class="text-xl font-bold font-serif text-white mb-2 leading-snug group-hover:text-cyan-300 transition-colors">
            ${p.title}
          </h3>

          <p class="text-slate-300 text-xs mb-4 leading-relaxed line-clamp-2">
            ${p.overview}
          </p>

          <div class="space-y-2 mb-4 py-3 border-t border-b border-white/8 text-xs text-slate-300">
            ${p.highlights.slice(0, 3).map((h) => `
              <div class="flex items-center gap-2">
                <span class="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0 text-[10px]" style="background:${p.accentColor}33;color:${p.accentColor}">✓</span>
                <span class="truncate">${h}</span>
              </div>
            `).join('')}
          </div>

          <div class="flex items-center gap-2 text-xs p-3 rounded-xl mb-5" style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08)">
            <span class="text-base">✈️</span>
            <span class="text-slate-200 truncate font-mono text-[11px]">${p.flightPartner}</span>
          </div>

          <div class="flex items-center justify-between mt-auto pt-4 border-t border-white/8">
            <div>
              <span class="text-[10px] text-slate-400 uppercase tracking-wider font-bold block">All-Inclusive From</span>
              <div class="flex items-baseline gap-1">
                <span class="text-2xl font-extrabold font-mono" style="color:${p.accentColor}">${priceFormatted}</span>
                <span class="text-xs text-slate-400">/ guest</span>
              </div>
            </div>
            
            <div class="flex items-center gap-2">
              <button onclick="open360Panorama('${p.id}')" title="360° Virtual Horizon Tour" class="p-2.5 rounded-xl border border-white/15 bg-white/5 hover:bg-white/15 text-slate-300 hover:text-white transition">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
              </button>
              <button onclick="openBookingModal('${p.id}')" class="px-5 py-2.5 rounded-xl text-xs font-extrabold flex items-center gap-1.5 transition-all duration-300" style="background:linear-gradient(135deg,${p.accentColor},${p.accentColor}cc);color:#030712;box-shadow:0 8px 25px ${p.accentColor}55" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
                Book
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7"/></svg>
              </button>
            </div>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function initFilterAndSearch() {
  document.querySelectorAll('#pkg-filter-bar .filter-chip').forEach((tab) => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('#pkg-filter-bar .filter-chip').forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      activeCategory = tab.dataset.category || 'all';
      renderExpeditionCatalog();
    });
  });

  const searchInput = document.getElementById('search-packages');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      packageSearchQuery = e.target.value.trim();
      renderExpeditionCatalog();
    });
  }
}

window.resetFilters = function () {
  activeCategory = 'all';
  packageSearchQuery = '';
  const searchInput = document.getElementById('search-packages');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('#pkg-filter-bar .filter-chip').forEach((t) => {
    t.classList.toggle('active', t.dataset.category === 'all');
  });
  renderExpeditionCatalog();
};

window.filterByRealm = function (realmId) {
  activeCategory = realmId || 'all';
  document.querySelectorAll('#pkg-filter-bar .filter-chip').forEach((t) => {
    t.classList.toggle('active', t.dataset.category === activeCategory);
  });
  renderExpeditionCatalog();
  const pkgSection = document.getElementById('packages-section');
  if (pkgSection) {
    if (lenisInstance) {
      lenisInstance.scrollTo(pkgSection, { offset: -50, duration: 1.2 });
    } else {
      pkgSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
};

window.scrollToExpeditions = function () {
  const realmSelect = document.getElementById('hero-realm-select');
  if (realmSelect && realmSelect.value && realmSelect.value !== 'all') {
    window.filterByRealm(realmSelect.value);
  } else {
    window.filterByRealm('all');
  }
};

function initCurrencySelector() {
  document.querySelectorAll('.currency-select').forEach((sel) => {
    sel.addEventListener('change', (e) => {
      if (CURRENCIES[e.target.value]) {
        currentCurrency = e.target.value;
        document.querySelectorAll('.currency-select').forEach((s) => s.value = currentCurrency);
        renderExpeditionCatalog();
        updateModalPricing();
      }
    });
  });
}

// ═══════════════════════════════════════════════════════════════════
// 15. BOOKING ENGINE & DIGITAL BOARDING PASS
// ═══════════════════════════════════════════════════════════════════
function initBookingModal() {
  const pkgDropdown = document.getElementById('b-pkg-dropdown');
  if (pkgDropdown) {
    pkgDropdown.innerHTML = EXPEDITIONS_DATA.map((p) => `
      <option value="${p.id}">${p.title} (${p.location})</option>
    `).join('');

    pkgDropdown.addEventListener('change', (e) => {
      const selected = EXPEDITIONS_DATA.find((p) => p.id === e.target.value);
      if (selected) {
        activeExpedition = selected;
        updateModalPreview();
        updateModalPricing();
      }
    });
  }

  const today = new Date();
  const departDate = new Date(today);
  departDate.setDate(today.getDate() + 21);
  const returnDate = new Date(today);
  returnDate.setDate(today.getDate() + 29);

  const depInput = document.getElementById('b-departure-date');
  const retInput = document.getElementById('b-return-date');
  if (depInput) {
    depInput.value = departDate.toISOString().split('T')[0];
    depInput.min = today.toISOString().split('T')[0];
  }
  if (retInput) {
    retInput.value = returnDate.toISOString().split('T')[0];
  }

  ['b-adults', 'b-children'].forEach((id) => {
    document.getElementById(id)?.addEventListener('change', updateModalPricing);
  });
  document.querySelectorAll('input[name="b-cabin-class"]').forEach((radio) => {
    radio.addEventListener('change', updateModalPricing);
  });
  ['b-addon-chauffeur', 'b-addon-caviar', 'b-addon-spa', 'b-addon-drone'].forEach((id) => {
    document.getElementById(id)?.addEventListener('change', updateModalPricing);
  });

  document.getElementById('booking-main-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    generateDigitalBoardingPass();
  });

  document.getElementById('close-booking-modal-btn')?.addEventListener('click', closeBookingModal);
  document.getElementById('booking-modal-overlay')?.addEventListener('click', closeBookingModal);
}

window.openBookingModal = function (expeditionId) {
  if (expeditionId) {
    const found = EXPEDITIONS_DATA.find((p) => p.id === expeditionId);
    if (found) activeExpedition = found;
  }
  if (!activeExpedition) activeExpedition = EXPEDITIONS_DATA[0];

  const sel = document.getElementById('b-pkg-dropdown');
  if (sel) sel.value = activeExpedition.id;

  updateModalPreview();
  updateModalPricing();

  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeBookingModal = function () {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

function updateModalPreview() {
  if (!activeExpedition) activeExpedition = EXPEDITIONS_DATA[0];
  const img = document.getElementById('modal-pkg-img');
  const title = document.getElementById('modal-pkg-title');
  const loc = document.getElementById('modal-pkg-loc');
  const flight = document.getElementById('modal-pkg-flight');
  const weather = document.getElementById('modal-pkg-weather');

  if (img) img.src = activeExpedition.image;
  if (title) title.textContent = activeExpedition.title;
  if (loc) loc.textContent = activeExpedition.location;
  if (flight) flight.textContent = `✈ ${activeExpedition.flightPartner}`;
  if (weather) weather.textContent = `☀️ ${activeExpedition.weather}`;
}

function updateModalPricing() {
  if (!activeExpedition) activeExpedition = EXPEDITIONS_DATA[0];
  const adults = parseInt(document.getElementById('b-adults')?.value || '2', 10);
  const children = parseInt(document.getElementById('b-children')?.value || '0', 10);

  const cabinClass = document.querySelector('input[name="b-cabin-class"]:checked')?.value || 'standard';
  const cabinUpgrades = { standard: 0, premium: 380, business: 980, first: 1950 };
  const cabinCostPerPerson = cabinUpgrades[cabinClass] || 0;

  const chauffeurCost = document.getElementById('b-addon-chauffeur')?.checked ? 190 : 0;
  const caviarCost = document.getElementById('b-addon-caviar')?.checked ? 140 : 0;
  const spaCost = document.getElementById('b-addon-spa')?.checked ? 280 * adults : 0;
  const droneCost = document.getElementById('b-addon-drone')?.checked ? 420 : 0;
  const totalAddons = chauffeurCost + caviarCost + spaCost + droneCost;

  const basePerAdult = activeExpedition.basePriceUSD;
  const basePerChild = Math.round(basePerAdult * 0.75);

  const totalUSD =
    adults * (basePerAdult + cabinCostPerPerson) +
    children * (basePerChild + cabinCostPerPerson) +
    totalAddons;

  const c = CURRENCIES[currentCurrency];
  const convertedTotal = Math.round(totalUSD * c.rate);
  const totalDisplay = document.getElementById('modal-total-display');
  if (totalDisplay) totalDisplay.textContent = `${c.symbol}${convertedTotal.toLocaleString()}`;

  const breakdownDisplay = document.getElementById('modal-breakdown-display');
  if (breakdownDisplay) {
    breakdownDisplay.innerHTML = `
      <div class="flex justify-between">
        <span>${adults} Adults + ${children} Children Base</span>
        <span>${c.symbol}${Math.round((adults * basePerAdult + children * basePerChild) * c.rate).toLocaleString()}</span>
      </div>
      ${cabinCostPerPerson > 0 ? `
        <div class="flex justify-between text-cyan-300">
          <span>${cabinClass.toUpperCase()} Cabin Upgrade (${adults + children} pax)</span>
          <span>+${c.symbol}${Math.round((adults + children) * cabinCostPerPerson * c.rate).toLocaleString()}</span>
        </div>
      ` : ''}
      ${totalAddons > 0 ? `
        <div class="flex justify-between text-amber-300">
          <span>VIP Concierge Add-ons</span>
          <span>+${c.symbol}${Math.round(totalAddons * c.rate).toLocaleString()}</span>
        </div>
      ` : ''}
      <div class="flex justify-between text-emerald-400 font-bold border-t border-white/10 pt-1 mt-1">
        <span>All Airport Taxes & Resort Levies</span>
        <span>Included (100% Guaranteed)</span>
      </div>
    `;
  }
}

function generateDigitalBoardingPass() {
  const leadName = document.getElementById('b-lead-name')?.value || 'Alexander Wright';
  const email = document.getElementById('b-email')?.value || 'alex@luxury.com';
  const depDate = document.getElementById('b-departure-date')?.value || '2026-11-20';
  const retDate = document.getElementById('b-return-date')?.value || '2026-11-28';
  const adults = document.getElementById('b-adults')?.value || '2';
  const cabin = document.querySelector('input[name="b-cabin-class"]:checked')?.value?.toUpperCase() || 'FIRST SUITE';
  const totalText = document.getElementById('modal-total-display')?.textContent || '$6,800';
  const refCode = 'AUR-' + Math.floor(100000 + Math.random() * 900000);

  const modalBody = document.getElementById('booking-modal-body');
  if (!modalBody) return;

  modalBody.innerHTML = `
    <div class="py-6 px-2">
      <div class="no-print p-6 rounded-3xl mb-8 flex flex-col sm:flex-row items-center justify-between gap-4" style="background:linear-gradient(135deg,rgba(16,185,129,0.2),rgba(0,242,254,0.15));border:1px solid rgba(16,185,129,0.4)">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl font-bold" style="background:linear-gradient(135deg,#10b981,#00f2fe)">
            ✓
          </div>
          <div>
            <h3 class="text-xl font-bold text-white font-serif">Expedition Confirmed & Locked!</h3>
            <p class="text-xs text-slate-300 mt-1">Official travel docket dispatched to <strong class="text-amber-400">${email}</strong></p>
          </div>
        </div>
        <div class="flex items-center gap-3 w-full sm:w-auto">
          <button onclick="window.print()" class="btn-vibrant-primary text-xs py-3 px-6 flex-1 sm:flex-initial">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            Print Boarding Voucher
          </button>
          <button onclick="closeBookingModal();location.reload()" class="btn-glass text-xs py-3 px-5">
            Done
          </button>
        </div>
      </div>

      <div id="printable-boarding-pass" class="boarding-pass-ticket max-w-2xl mx-auto p-8 border-2 border-slate-900">
        <div class="flex items-center justify-between border-b-2 border-slate-900 pb-5 mb-6">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-xl" style="background:#03010f;color:#ffd200">✈</div>
            <div>
              <div class="font-cinzel text-xl font-black tracking-widest text-slate-950">AURA VOYAGES</div>
              <div class="text-[9px] uppercase tracking-[0.25em] text-slate-500 font-bold">Ultra-Luxury Expeditions · IATA #91-2-4820</div>
            </div>
          </div>
          <div class="text-right">
            <span class="px-3 py-1 bg-amber-100 text-amber-950 border border-amber-300 font-mono text-xs font-black rounded-lg">
              PNR: ${refCode}
            </span>
          </div>
        </div>

        <div class="bg-slate-50 rounded-2xl p-5 mb-6 border border-slate-200">
          <div class="text-[10px] uppercase font-bold tracking-widest text-slate-400">Curated Journey</div>
          <h2 class="text-xl font-bold font-serif text-slate-950 mt-1">${activeExpedition.title}</h2>
          <div class="text-sm font-semibold text-slate-700 mt-1">📍 ${activeExpedition.location} · 5★ ${activeExpedition.hotelName}</div>
          <div class="text-xs font-mono font-bold text-cyan-800 mt-2 bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-200 inline-block">
            ✈ ${activeExpedition.flightPartner} · Class: ${cabin}
          </div>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 pb-6 border-b-2 border-slate-900 text-xs">
          <div>
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Lead Passenger</div>
            <div class="font-bold text-slate-950 text-sm mt-0.5">${leadName}</div>
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Travel Party</div>
            <div class="font-bold text-slate-950 text-sm mt-0.5">${adults} Travelers</div>
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Departure Date</div>
            <div class="font-bold text-slate-950 text-sm mt-0.5">${depDate}</div>
          </div>
          <div>
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Return Date</div>
            <div class="font-bold text-slate-950 text-sm mt-0.5">${retDate}</div>
          </div>
        </div>

        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div class="text-[9px] uppercase font-bold tracking-wider text-slate-400">Payment Status</div>
            <div class="text-lg font-black text-emerald-700">● PAID IN FULL — ${totalText}</div>
            <div class="text-[10px] text-slate-500 mt-0.5">Includes Private Aviation, 5★ Sanctuary, Butler & VIP Concierge</div>
          </div>
          <div class="text-right">
            <div class="font-mono text-2xl tracking-widest text-slate-800 select-none">||| | |||| || ||| |||| | |||</div>
            <div class="text-[9px] font-mono text-slate-400 tracking-wider uppercase mt-1">E-TICKET VERIFIED</div>
          </div>
        </div>

        <div class="mt-6 pt-4 border-t border-slate-200 text-center text-[10px] text-slate-400">
          24/7 Dedicated Concierge: <strong class="text-slate-800">+1 (800) 428-AURA</strong> · Geneva · New York · Dubai · Singapore
        </div>
      </div>
    </div>
  `;
}

// ═══════════════════════════════════════════════════════════════════
// 16. 360° VIRTUAL HORIZON PANORAMA VIEWER
// ═══════════════════════════════════════════════════════════════════
let panoScene, panoCamera, panoRenderer, panoMesh;
let isPanningPano = false, panoStartX = 0, panoStartY = 0;
let panoLon = 0, panoLat = 0, panoTargetLon = 0, panoTargetLat = 0;

function init360PanoramaViewer() {
  document.getElementById('close-pano-btn')?.addEventListener('click', close360Panorama);
}

window.open360Panorama = function (expeditionId) {
  const modal = document.getElementById('pano-modal');
  if (!modal) return;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  const pkg = EXPEDITIONS_DATA.find((p) => p.id === expeditionId) || EXPEDITIONS_DATA[0];
  const titleEl = document.getElementById('pano-title');
  if (titleEl) titleEl.textContent = `360° Horizon View: ${pkg.title} (${pkg.location})`;

  const container = document.getElementById('pano-viewport');
  const canvas = document.getElementById('pano-canvas');
  if (!container || !canvas || typeof THREE === 'undefined') return;

  const w = container.clientWidth;
  const h = container.clientHeight;

  if (!panoScene) {
    panoScene = new THREE.Scene();
    panoCamera = new THREE.PerspectiveCamera(75, w / h, 1, 1100);
    panoCamera.target = new THREE.Vector3(0, 0, 0);

    panoRenderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
    panoRenderer.setSize(w, h);
    panoRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const sphereGeo = new THREE.SphereGeometry(500, 60, 40);
    sphereGeo.scale(-1, 1, 1);

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(pkg.image, (texture) => {
      const sphereMat = new THREE.MeshBasicMaterial({ map: texture });
      if (panoMesh) panoScene.remove(panoMesh);
      panoMesh = new THREE.Mesh(sphereGeo, sphereMat);
      panoScene.add(panoMesh);
    });

    container.addEventListener('mousedown', (e) => {
      isPanningPano = true;
      panoStartX = e.clientX;
      panoStartY = e.clientY;
    });
    window.addEventListener('mouseup', () => { isPanningPano = false; });
    container.addEventListener('mousemove', (e) => {
      if (!isPanningPano) return;
      panoTargetLon += (panoStartX - e.clientX) * 0.18;
      panoTargetLat += (e.clientY - panoStartY) * 0.18;
      panoTargetLat = Math.max(-85, Math.min(85, panoTargetLat));
      panoStartX = e.clientX;
      panoStartY = e.clientY;
    });

    function loopPano() {
      requestAnimationFrame(loopPano);
      if (!modal.classList.contains('hidden')) {
        panoLon += (panoTargetLon - panoLon) * 0.1;
        panoLat += (panoTargetLat - panoLat) * 0.1;

        const phi = THREE.MathUtils.degToRad(90 - panoLat);
        const theta = THREE.MathUtils.degToRad(panoLon);

        panoCamera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
        panoCamera.target.y = 500 * Math.cos(phi);
        panoCamera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

        panoCamera.lookAt(panoCamera.target);
        panoRenderer.render(panoScene, panoCamera);
      }
    }
    loopPano();
  } else {
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(pkg.image, (texture) => {
      if (panoMesh) panoMesh.material.map = texture;
      panoMesh.material.needsUpdate = true;
    });
  }
};

window.close360Panorama = function () {
  const modal = document.getElementById('pano-modal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.style.overflow = '';
  }
};

// ═══════════════════════════════════════════════════════════════════
// 17. NATIVE WEB AUDIO SYNTHESIZER
// ═══════════════════════════════════════════════════════════════════
let audioContext = null;
let isAudioActive = false;
let audioGainNode = null;
let noiseBufferSource = null;

function initSynthesizerAudio() {
  const toggleBtn = document.getElementById('soundscape-btn');
  const toggleText = document.getElementById('soundscape-label');
  const eqVisualizer = document.getElementById('eq-visualizer');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    if (!audioContext) {
      audioContext = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioContext.state === 'suspended') {
      audioContext.resume();
    }

    if (!isAudioActive) {
      startAmbientSound();
      isAudioActive = true;
      if (toggleText) toggleText.textContent = 'Atmosphere: On';
      if (eqVisualizer) eqVisualizer.classList.remove('eq-paused');
      toggleBtn.style.borderColor = '#00f2fe';
      toggleBtn.style.color = '#38bdf8';
    } else {
      stopAmbientSound();
      isAudioActive = false;
      if (toggleText) toggleText.textContent = 'Atmosphere';
      if (eqVisualizer) eqVisualizer.classList.add('eq-paused');
      toggleBtn.style.borderColor = '';
      toggleBtn.style.color = '';
    }
  });
}

function startAmbientSound() {
  if (!audioContext) return;
  const sampleRate = audioContext.sampleRate;
  const bufferSize = sampleRate * 2;
  const noiseBuffer = audioContext.createBuffer(1, bufferSize, sampleRate);
  const output = noiseBuffer.getChannelData(0);

  let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
  for (let i = 0; i < bufferSize; i++) {
    const white = Math.random() * 2 - 1;
    b0 = 0.99886 * b0 + white * 0.0555179;
    b1 = 0.99332 * b1 + white * 0.0750759;
    b2 = 0.96900 * b2 + white * 0.1538520;
    b3 = 0.86650 * b3 + white * 0.3104856;
    b4 = 0.55000 * b4 + white * 0.5329522;
    b5 = -0.7616 * b5 - white * 0.0168980;
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.02;
    b6 = white * 0.115926;
  }

  noiseBufferSource = audioContext.createBufferSource();
  noiseBufferSource.buffer = noiseBuffer;
  noiseBufferSource.loop = true;

  const lowpassFilter = audioContext.createBiquadFilter();
  lowpassFilter.type = 'lowpass';
  lowpassFilter.frequency.setValueAtTime(360, audioContext.currentTime);

  audioGainNode = audioContext.createGain();
  audioGainNode.gain.setValueAtTime(0.01, audioContext.currentTime);
  audioGainNode.gain.exponentialRampToValueAtTime(0.2, audioContext.currentTime + 1.5);

  noiseBufferSource.connect(lowpassFilter);
  lowpassFilter.connect(audioGainNode);
  audioGainNode.connect(audioContext.destination);

  noiseBufferSource.start();
}

function stopAmbientSound() {
  if (audioGainNode && audioContext) {
    audioGainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.6);
    setTimeout(() => {
      try { noiseBufferSource.stop(); } catch (e) {}
    }, 650);
  }
}

// ═══════════════════════════════════════════════════════════════════
// 18. MOBILE MENU DRAWER
// ═══════════════════════════════════════════════════════════════════
function initMobileDrawer() {
  const openBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const drawer = document.getElementById('mobile-drawer');
  const overlay = document.getElementById('mobile-overlay');

  const openDrawer = () => {
    drawer?.classList.remove('translate-x-full');
    overlay?.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  };
  const closeDrawer = () => {
    drawer?.classList.add('translate-x-full');
    overlay?.classList.add('hidden');
    document.body.style.overflow = '';
  };

  openBtn?.addEventListener('click', openDrawer);
  closeBtn?.addEventListener('click', closeDrawer);
  overlay?.addEventListener('click', closeDrawer);

  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', closeDrawer);
  });
}

// ═══════════════════════════════════════════════════════════════════
// 19. COUNTER STATS
// ═══════════════════════════════════════════════════════════════════
function initCounterStats() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const target = parseFloat(el.dataset.count);
      const isDecimal = target % 1 !== 0;
      let current = 0;
      const duration = 1600;
      const steps = 30;
      const increment = target / steps;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          el.textContent = (isDecimal ? target.toFixed(1) : Math.round(target)) + (target >= 50 ? '+' : '');
          clearInterval(timer);
        } else {
          el.textContent = (isDecimal ? current.toFixed(1) : Math.floor(current)) + (target >= 50 ? '+' : '');
        }
      }, duration / steps);

      observer.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach((el) => observer.observe(el));
}

// Deep link / query scroll helper
const urlParams = new URLSearchParams(window.location.search);
const scrollTarget = urlParams.get('scroll');
if (scrollTarget) {
  const triggerScroll = () => {
    const el = document.getElementById(scrollTarget);
    if (el) {
      if (window.lenis) {
        window.lenis.scrollTo(el, { immediate: true });
      } else {
        el.scrollIntoView({ behavior: 'auto' });
      }
      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.refresh();
      }
    }
  };
  window.addEventListener('DOMContentLoaded', () => {
    setTimeout(triggerScroll, 200);
    setTimeout(triggerScroll, 600);
  });
}

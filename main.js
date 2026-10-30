/**
 * AURA VOYAGES - ADVANCED 3D PARALLAX LUXURY TRAVEL ENGINE
 * GSAP ScrollTrigger Pinned Animations for Real Entities (Airplane, Boat, Paraglider, Camel, Heli)
 */

// --- 1. DATA: ALL-INCLUSIVE CURATED LUXURY PACKAGES ---
const PACKAGES_DATA = [
  {
    id: 'maldives-overwater-haven',
    title: 'Azure Lagoon & Overwater Sanctuary',
    location: 'Baa Atoll, Maldives',
    category: 'sea',
    duration: '8 Days / 7 Nights',
    rating: 5.0,
    reviewsCount: 216,
    basePriceUSD: 3450,
    badge: 'Overwater Villa',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-400/40',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Soneva Overwater Sanctuary & Marine Biosphere',
    flightPartner: 'Qatar Airways (QR-672) + Twin-Otter Seaplane',
    flightRoute: 'Direct Airport ➔ Scenic Lagoon Seaplane Landing',
    overview: 'Hover above crystalline turquoise lagoons with direct marine ladder access, private plunge pool, and underwater 5-course dining.',
    highlights: ['VIP Seaplane lagoon landing', 'Manta ray & coral reef snorkeling safari', 'Underwater restaurant 5-course dinner', 'Sunset catamaran cruise with sommelier'],
    flightIncluded: 'Qatar Airways + Seaplane Island Transfer'
  },
  {
    id: 'bora-bora-pearl',
    title: 'Bora Bora Coral Lagoon & Otemanu Villa',
    location: 'French Polynesia, South Pacific',
    category: 'sea',
    duration: '9 Days / 8 Nights',
    rating: 4.97,
    reviewsCount: 164,
    badge: 'Pacific Haven',
    tagColor: 'bg-sky-500/20 text-sky-300 border-sky-400/40',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'The St. Regis Bora Bora Overwater Suite',
    flightPartner: 'Air Tahiti Nui + Catamaran Yacht',
    flightRoute: 'Papeete ➔ Bora Bora Private Motu Dock',
    overview: 'Unobstructed Mount Otemanu vistas from your overwater villa, private sun deck, glass floor viewing portals, and outrigger canoe breakfast.',
    highlights: ['Outrigger canoe gourmet breakfast', 'Lagoon ray & sea turtle feeding excursion', 'Polynesian deep tissue massage', 'Private sunset yacht with live music'],
    flightIncluded: 'Air Tahiti Nui + Catamaran Transfer'
  },
  {
    id: 'sahara-royal-dunes',
    title: 'Sahara Mirage & Royal Bedouin Oasis',
    location: 'Merzouga & Dubai Desert Reserve',
    category: 'sand',
    duration: '6 Days / 5 Nights',
    rating: 4.95,
    reviewsCount: 98,
    badge: 'Royal Glamping',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-400/40',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Al Maha Royal Desert Pavilion & Stargazing Dome',
    flightPartner: 'Emirates Airlines (Flight EK-204)',
    flightRoute: 'Direct Airport ➔ Private 4x4 Dune Chauffeur',
    overview: 'Traverse golden dunes in luxury 4x4s, gaze into unpolluted galaxies in private celestial domes, and experience royal Arabian hospitality.',
    highlights: ['Private celestial dome with high-power telescope', 'Sunset royal camel caravan with champagne', 'Desert falconry & Arabian thoroughbred horses', 'Private gourmet banquet in golden dunes'],
    flightIncluded: 'Emirates Direct Flight (Included)'
  },
  {
    id: 'arabian-empty-quarter',
    title: 'Liwa Dunes & Palace Mirage',
    location: 'Abu Dhabi Rub al Khali, UAE',
    category: 'sand',
    duration: '5 Days / 4 Nights',
    rating: 4.93,
    reviewsCount: 76,
    badge: 'Desert Palace',
    tagColor: 'bg-orange-500/20 text-orange-300 border-orange-400/40',
    image: 'https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Qasr Al Sarab Desert Palace by Anantara',
    flightPartner: 'Etihad Airways Luxury Apartment',
    flightRoute: 'Abu Dhabi ➔ Private Dune Helicopter Arrival',
    overview: 'Palatial villas overlooking colossal golden sand ridges with private plunge pool, sunrise hot air ballooning, and date-seed spa treatments.',
    highlights: ['Sunrise hot air balloon over orange dunes', 'Hammam scrub & desert date seed spa rituals', 'Dune sandboarding & private rally course', 'Bedouin fireside storytelling & live oud'],
    flightIncluded: 'Etihad Airways + Helicopter Arrival'
  },
  {
    id: 'alpine-matterhorn',
    title: 'Alpine Majesty & Glacier Chalet',
    location: 'Zermatt, Swiss Alps',
    category: 'mountains',
    duration: '7 Days / 6 Nights',
    rating: 4.98,
    reviewsCount: 142,
    basePriceUSD: 2890,
    badge: 'Swiss Chalet',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-400/40',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'The Omnia 5★ Mountain Lodge & Private Spa',
    flightPartner: 'Swiss International Air (Flight LX-18)',
    flightRoute: 'Direct Airport ➔ Zermatt Glacier Express',
    overview: 'High-altitude luxury ski chalet with panoramic Matterhorn vistas, private heated infinity pool, and Swiss Alpine helicopter tour.',
    highlights: ['First-class Glacier Express scenic train pass', 'Private UIAGM certified mountain ski guide', 'Alpine fondue & Michelin star private chef', 'Helicopter tour over Matterhorn & Monte Rosa'],
    flightIncluded: 'Swiss International Air (First / Business Class)'
  },
  {
    id: 'patagonia-wild-peaks',
    title: 'Torres del Paine & Glacial Fjords',
    location: 'Patagonia, Chile & Argentina',
    category: 'mountains',
    duration: '9 Days / 8 Nights',
    rating: 4.96,
    reviewsCount: 89,
    badge: 'Glacier Expedition',
    tagColor: 'bg-indigo-500/20 text-indigo-300 border-indigo-400/40',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Explora Patagonia Geodesic Luxury Domes',
    flightPartner: 'LATAM Airlines + Scenic Floatplane',
    flightRoute: 'Santiago ➔ Punta Arenas ➔ Grey Glacier',
    overview: 'Granite peaks, electric-blue icebergs, and glacial fjords explored from ultra-luxury geodesic eco-domes with Chilean reserve wine pairings.',
    highlights: ['Grey Glacier navigation & iceberg boat safari', 'Puma tracking with private wildlife biologist', 'Private Andean horseback expedition', 'Sommelier-guided Chilean reserve wine tastings'],
    flightIncluded: 'LATAM Airlines + Scenic Floatplane'
  },
  {
    id: 'costa-rica-canopy',
    title: 'Emerald Cloudforest & Eco-Sanctuary',
    location: 'Monteverde & Arenal, Costa Rica',
    category: 'forest',
    duration: '7 Days / 6 Nights',
    rating: 4.92,
    reviewsCount: 114,
    badge: 'Eco Adventure',
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-400/40',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Nayara Tented Camp & Arenal Hot Springs',
    flightPartner: 'United Airlines / Avianca',
    flightRoute: 'San José ➔ Private Eco-SUV Escort',
    overview: 'Immerse in misty tropical biodiversity with private treehouse canopy suites, geothermal hot spring spas, and secret waterfall treks.',
    highlights: ['Canopy suspension bridges & private zip line', 'Volcanic geothermal private mineral springs', 'Night cloudforest bioluminescence tour', 'Organic coffee & cacao private estate tour'],
    flightIncluded: 'International Flights + Eco SUV Chauffeur'
  },
  {
    id: 'kyoto-bamboo-onsen',
    title: 'Kyoto Sacred Groves & Zen Ryokan',
    location: 'Arashiyama & Kyoto, Japan',
    category: 'forest',
    duration: '8 Days / 7 Nights',
    rating: 4.99,
    reviewsCount: 178,
    badge: 'Cultural Zen',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-400/40',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1600&q=85',
    hotelName: 'Hoshinoya Kyoto & Suiran Luxury Collection',
    flightPartner: 'Japan Airlines (JAL Sky Suite)',
    flightRoute: 'Tokyo/Osaka ➔ Private Shinkansen & Boat',
    overview: 'Whispering bamboo groves, private cedar onsen thermal baths, centuries-old shrines, and private kaiseki banquet dinners with master geishas.',
    highlights: ['Exclusive dawn entry to Bamboo Grove before crowds', 'Private Zen temple meditation with head abbot', 'Traditional private tea ceremony masterclass', 'Kaiseki 10-course Michelin dinner in private garden pavilion'],
    flightIncluded: 'Japan Airlines (JAL) Sky Suite'
  }
];

const CURRENCIES = {
  USD: { symbol: '$', rate: 1.0, name: 'USD ($)' },
  EUR: { symbol: '€', rate: 0.92, name: 'EUR (€)' },
  GBP: { symbol: '£', rate: 0.78, name: 'GBP (£)' },
  INR: { symbol: '₹', rate: 83.2, name: 'INR (₹)' },
  AED: { symbol: 'AED ', rate: 3.67, name: 'AED (د.إ)' }
};

let currentCurrency = 'USD';
let activeCategory = 'all';
let searchQuery = '';
let selectedPackage = PACKAGES_DATA[0];

function formatPrice(usdAmount) {
  const safeUSD = (typeof usdAmount === 'number' && !isNaN(usdAmount)) ? usdAmount : 2890;
  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const converted = Math.round(safeUSD * curr.rate);
  return `${curr.symbol}${converted.toLocaleString()}`;
}

// --- 2. DOM INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
    initGSAPPinnedParallax();
  } else {
    initFallbackParallax();
  }

  initMouseGyro3D();
  initFlightWaypointTracker();
  renderPackages();
  initBookingModal();
  initCurrencySelector();
  initSearchAndFilter();
  initParticleCanvas();
  initAudioSynthesizer();
  initInteractive3DTilt();
  initMobileMenu();
});

// --- 3. GSAP PINNED 3D SCROLL SEQUENCES ---
function initGSAPPinnedParallax() {
  
  // 1. HERO AIRPLANE FLIGHT SEQUENCE
  const planeContainer = document.querySelector('.hero-airplane-container');
  if (planeContainer) {
    gsap.to(planeContainer, {
      scrollTrigger: {
        trigger: '#hero-stage',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 220,
      x: 180,
      scale: 1.25,
      rotation: 6,
      ease: 'none'
    });

    gsap.to('.hero-layer-mountains', {
      scrollTrigger: {
        trigger: '#hero-stage',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      y: 120,
      ease: 'none'
    });

    gsap.to('.hero-clouds-front', {
      scrollTrigger: {
        trigger: '#hero-stage',
        start: 'top top',
        end: 'bottom top',
        scrub: 1
      },
      x: 200,
      scale: 1.4,
      ease: 'none'
    });
  }

  // 2. SEA SECTION: PINNED STAGE WITH BOAT SAILING & PARAGLIDER SOARING
  const seaSection = document.querySelector('#biome-sea');
  const boat = document.querySelector('.parallax-boat-container');
  const paraglider = document.querySelector('.parallax-paraglider-container');
  const seaCard = document.querySelector('#biome-sea .glass-panel-vibrant');

  if (seaSection && boat) {
    const seaTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#biome-sea',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // Boat sails smoothly across the water from left to right
    seaTL.fromTo(boat, 
      { x: '-20vw', y: 0, rotation: 0 },
      { x: '75vw', y: -15, rotation: -2, ease: 'power1.inOut' }, 
      0
    );

    // Paraglider swoops overhead in the sky
    if (paraglider) {
      seaTL.fromTo(paraglider,
        { x: '10vw', y: '-10vh', scale: 0.85, rotation: -6 },
        { x: '-60vw', y: '20vh', scale: 1.2, rotation: 6, ease: 'power1.inOut' },
        0
      );
    }

    // Background water layer subtle zoom
    seaTL.to('#biome-sea .biome-bg-layer', {
      scale: 1.2,
      y: 40,
      ease: 'none'
    }, 0);

    // Floating card depth animation
    if (seaCard) {
      seaTL.fromTo(seaCard,
        { opacity: 0.6, scale: 0.95 },
        { opacity: 1, scale: 1, ease: 'none' },
        0.2
      );
    }
  }

  // 3. DESERT SECTION: PINNED STAGE WITH CAMEL CARAVAN TRAVERSING DUNES
  const desertSection = document.querySelector('#biome-sand');
  const camel = document.querySelector('.parallax-camel-container');
  const desertCard = document.querySelector('#biome-sand .glass-panel-vibrant');

  if (desertSection && camel) {
    const desertTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#biome-sand',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // Camel caravan walks across the dune ridge from left to right
    desertTL.fromTo(camel,
      { x: '-15vw', y: 15 },
      { x: '65vw', y: -20, ease: 'power1.inOut' },
      0
    );

    desertTL.to('#biome-sand .biome-bg-layer', {
      scale: 1.22,
      y: 50,
      ease: 'none'
    }, 0);

    if (desertCard) {
      desertTL.fromTo(desertCard,
        { opacity: 0.6, scale: 0.95 },
        { opacity: 1, scale: 1, ease: 'none' },
        0.2
      );
    }
  }

  // 4. MOUNTAINS SECTION: PINNED STAGE WITH CHARTER HELICOPTER SOARING
  const mountainSection = document.querySelector('#biome-mountains');
  const heli = document.querySelector('.parallax-heli-container');
  const mountainCard = document.querySelector('#biome-mountains .glass-panel-vibrant');

  if (mountainSection && heli) {
    const mountainTL = gsap.timeline({
      scrollTrigger: {
        trigger: '#biome-mountains',
        start: 'top top',
        end: '+=150%',
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });

    // Helicopter cuts through the mountain pass from right to left
    mountainTL.fromTo(heli,
      { x: '20vw', y: '-5vh', scale: 0.85, rotation: 4 },
      { x: '-65vw', y: '25vh', scale: 1.25, rotation: -6, ease: 'power1.inOut' },
      0
    );

    mountainTL.to('#biome-mountains .biome-bg-layer', {
      scale: 1.2,
      y: 60,
      ease: 'none'
    }, 0);

    if (mountainCard) {
      mountainTL.fromTo(mountainCard,
        { opacity: 0.6, scale: 0.95 },
        { opacity: 1, scale: 1, ease: 'none' },
        0.2
      );
    }
  }

  // 5. RAINFOREST SECTION: PARALLAX MIST
  const forestSection = document.querySelector('#biome-forest');
  if (forestSection) {
    gsap.to('#biome-forest .biome-bg-layer', {
      scrollTrigger: {
        trigger: '#biome-forest',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      },
      y: 100,
      scale: 1.2,
      ease: 'none'
    });
  }
}

// Fallback in case GSAP CDN is blocked
function initFallbackParallax() {
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const boat = document.querySelector('.parallax-boat-container');
    const camel = document.querySelector('.parallax-camel-container');
    if (boat) boat.style.transform = `translateX(${scrollY * 0.4}px)`;
    if (camel) camel.style.transform = `translateX(${scrollY * 0.35}px)`;
  });
}

// --- 4. MOUSE 3D GYRO PERSPECTIVE ON AIRPLANE ---
function initMouseGyro3D() {
  const airplaneContainer = document.querySelector('.hero-airplane-container');
  if (!airplaneContainer) return;

  let mouseX = 0, mouseY = 0;
  let targetX = 0, targetY = 0;

  window.addEventListener('mousemove', (e) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    targetX = (e.clientX - halfW) / halfW;
    targetY = (e.clientY - halfH) / halfH;
  });

  function gyroLoop() {
    mouseX += (targetX - mouseX) * 0.08;
    mouseY += (targetY - mouseY) * 0.08;

    if (window.scrollY < window.innerHeight) {
      const plane = document.getElementById('hero-airplane-img');
      if (plane) {
        plane.style.transform = `perspective(1000px) rotateY(${mouseX * 15}deg) rotateX(${-mouseY * 12}deg) rotateZ(${mouseX * 8}deg)`;
      }
    }
    requestAnimationFrame(gyroLoop);
  }
  gyroLoop();
}

// --- 5. FLIGHT ROUTE TRACKER (RADAR WAYPOINTS) ---
function initFlightWaypointTracker() {
  const waypoints = [
    { id: 'hero-stage', name: 'Takeoff: High Stratosphere', icon: '✈️' },
    { id: 'biome-sea', name: 'Waypoint 1: Turquoise Azure Sea', icon: '🌊' },
    { id: 'biome-sand', name: 'Waypoint 2: Sahara Golden Dunes', icon: '🏜️' },
    { id: 'biome-mountains', name: 'Waypoint 3: Alpine Mountain Summits', icon: '🏔️' },
    { id: 'biome-forest', name: 'Waypoint 4: Emerald Canopy', icon: '🌲' },
    { id: 'packages-section', name: 'Final Touchdown: All Packages', icon: '📍' }
  ];

  const waypointIndicator = document.getElementById('current-waypoint-name');
  const waypointIcon = document.getElementById('current-waypoint-icon');
  const waypointProgress = document.getElementById('flight-progress-bar');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.45;
    const totalDocHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercentage = Math.min(100, Math.max(0, (window.scrollY / totalDocHeight) * 100));

    if (waypointProgress) {
      waypointProgress.style.width = `${scrollPercentage}%`;
    }

    for (let i = waypoints.length - 1; i >= 0; i--) {
      const section = document.getElementById(waypoints[i].id);
      if (section && section.offsetTop <= scrollPos) {
        if (waypointIndicator) waypointIndicator.textContent = waypoints[i].name;
        if (waypointIcon) waypointIcon.textContent = waypoints[i].icon;
        break;
      }
    }
  }, { passive: true });
}

// --- 6. RENDER PACKAGES ---
function renderPackages() {
  const container = document.getElementById('packages-grid');
  if (!container) return;

  const filtered = PACKAGES_DATA.filter(pkg => {
    const matchesCategory = activeCategory === 'all' || pkg.category === activeCategory;
    const matchesSearch = pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          pkg.overview.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center text-slate-400 glass-panel-vibrant rounded-3xl p-10">
        <div class="w-16 h-16 mx-auto mb-4 rounded-2xl bg-amber-500/20 text-amber-400 flex items-center justify-center">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </div>
        <h3 class="text-2xl font-bold text-white mb-2 font-serif">No Expeditions Match Your Filter</h3>
        <p class="text-sm max-w-md mx-auto">Try selecting another realm above or clearing your search keywords to view all our journeys.</p>
        <button onclick="resetFilters()" class="btn-luxury-vibrant mt-5 px-6 py-2.5 rounded-xl text-sm font-bold">Show All Available Packages</button>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(pkg => {
    const safePrice = (typeof pkg.basePriceUSD === 'number' && !isNaN(pkg.basePriceUSD)) ? pkg.basePriceUSD : 2890;
    const priceFormatted = formatPrice(safePrice);

    return `
      <div class="glass-card-vibrant rounded-3xl overflow-hidden flex flex-col group tilt-interactive" data-package-id="${pkg.id}">
        <!-- Image Header -->
        <div class="relative h-64 overflow-hidden">
          <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <!-- Badges -->
          <div class="absolute top-4 left-4 flex gap-2 flex-wrap">
            <span class="tag-badge-vibrant ${pkg.tagColor} border">${pkg.badge}</span>
            <span class="tag-badge-vibrant bg-slate-900/80 text-cyan-300 border border-cyan-500/30">
              <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ${pkg.duration}
            </span>
          </div>

          <!-- Location Badge -->
          <div class="absolute bottom-4 left-4 flex items-center text-xs font-semibold text-slate-100 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            <svg class="w-3.5 h-3.5 text-amber-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${pkg.location}
          </div>

          <!-- Rating -->
          <div class="absolute top-4 right-4 bg-slate-950/85 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full flex items-center text-xs font-bold text-amber-400">
            ★ ${pkg.rating} <span class="text-slate-400 font-normal ml-1">(${pkg.reviewsCount})</span>
          </div>
        </div>

        <!-- Package Body -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-serif">
              ${pkg.title}
            </h3>
            <p class="text-slate-300 text-xs sm:text-sm mb-4 line-clamp-2 leading-relaxed font-light">
              ${pkg.overview}
            </p>

            <div class="space-y-2 mb-5 border-t border-b border-white/10 py-3.5">
              ${pkg.highlights.slice(0, 3).map(hl => `
                <div class="flex items-center text-xs text-slate-300">
                  <svg class="w-4 h-4 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="truncate">${hl}</span>
                </div>
              `).join('')}
            </div>

            <div class="flex items-center text-xs text-cyan-300 bg-cyan-950/50 border border-cyan-500/30 rounded-xl px-3 py-2.5 mb-5 font-medium">
              <svg class="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="truncate">${pkg.flightPartner}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div>
              <span class="text-[11px] text-slate-400 block uppercase tracking-wider font-semibold">All-Inclusive From</span>
              <div class="flex items-baseline gap-1">
                <span class="text-2xl font-extrabold text-amber-400 font-display">${priceFormatted}</span>
                <span class="text-xs text-slate-400">/ person</span>
              </div>
            </div>

            <button onclick="openBookingModal('${pkg.id}')" class="btn-luxury-vibrant px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-1.5 shadow-lg group-hover:shadow-amber-500/40">
              <span>Book Package</span>
              <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
            </button>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  const searchInput = document.getElementById('search-packages');
  if (searchInput) searchInput.value = '';
  document.querySelectorAll('.filter-tab').forEach(btn => {
    btn.classList.toggle('bg-amber-500', btn.dataset.category === 'all');
    btn.classList.toggle('text-slate-950', btn.dataset.category === 'all');
    btn.classList.toggle('bg-white/5', btn.dataset.category !== 'all');
    btn.classList.toggle('text-slate-300', btn.dataset.category !== 'all');
  });
  renderPackages();
};

function initSearchAndFilter() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => {
        t.classList.remove('bg-amber-500', 'text-slate-950');
        t.classList.add('bg-white/5', 'text-slate-300');
      });
      tab.classList.remove('bg-white/5', 'text-slate-300');
      tab.classList.add('bg-amber-500', 'text-slate-950');

      activeCategory = tab.dataset.category;
      renderPackages();
    });
  });

  const searchInput = document.getElementById('search-packages');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value;
      renderPackages();
    });
  }
}

function initCurrencySelector() {
  const currencySelects = document.querySelectorAll('.currency-select');
  currencySelects.forEach(select => {
    select.addEventListener('change', (e) => {
      const selected = e.target.value;
      if (CURRENCIES[selected]) {
        currentCurrency = selected;
        currencySelects.forEach(s => s.value = currentCurrency);
        renderPackages();
        recalculateBookingPrice();
      }
    });
  });
}

// --- 7. BOOKING MODAL & ENGINE ---
function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('close-booking-modal');
  const overlay = document.getElementById('modal-backdrop');
  const packageSelect = document.getElementById('modal-package-select');

  if (packageSelect) {
    packageSelect.innerHTML = PACKAGES_DATA.map(p => `
      <option value="${p.id}">${p.title} (${p.location})</option>
    `).join('');

    packageSelect.addEventListener('change', (e) => {
      const found = PACKAGES_DATA.find(p => p.id === e.target.value);
      if (found) {
        selectedPackage = found;
        updateModalPreview();
        recalculateBookingPrice();
      }
    });
  }

  const today = new Date();
  const departDate = new Date(today);
  departDate.setDate(today.getDate() + 14);
  const returnDate = new Date(today);
  returnDate.setDate(today.getDate() + 21);

  const departInput = document.getElementById('book-depart-date');
  const returnInput = document.getElementById('book-return-date');
  if (departInput && returnInput) {
    departInput.value = departDate.toISOString().split('T')[0];
    returnInput.value = returnDate.toISOString().split('T')[0];
    departInput.min = today.toISOString().split('T')[0];
    returnInput.min = departInput.value;
  }

  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (overlay) overlay.addEventListener('click', closeBookingModal);

  ['book-adults', 'book-children'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', recalculateBookingPrice);
  });

  document.querySelectorAll('input[name="flight-class"]').forEach(radio => {
    radio.addEventListener('change', recalculateBookingPrice);
  });

  ['addon-chauffeur', 'addon-champagne', 'addon-spa', 'addon-drone'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('change', recalculateBookingPrice);
  });

  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleBookingSubmission();
    });
  }
}

window.openBookingModal = function(packageId) {
  if (typeof packageId === 'string' && packageId.trim()) {
    const found = PACKAGES_DATA.find(p => p.id === packageId);
    if (found) selectedPackage = found;
  }
  if (!selectedPackage) {
    selectedPackage = PACKAGES_DATA[0];
  }

  const packageSelect = document.getElementById('modal-package-select');
  if (packageSelect) {
    packageSelect.value = selectedPackage.id;
  }

  updateModalPreview();
  recalculateBookingPrice();

  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.remove('modal-hidden');
    document.body.style.overflow = 'hidden';
  }
};

window.closeBookingModal = function() {
  const modal = document.getElementById('booking-modal');
  if (modal) {
    modal.classList.add('modal-hidden');
    document.body.style.overflow = '';
  }
};

function updateModalPreview() {
  if (!selectedPackage) selectedPackage = PACKAGES_DATA[0];

  const previewImg = document.getElementById('modal-pkg-img');
  const previewTitle = document.getElementById('modal-pkg-title');
  const previewLoc = document.getElementById('modal-pkg-location');
  const previewFlight = document.getElementById('modal-pkg-flight');

  if (previewImg) previewImg.src = selectedPackage.image;
  if (previewTitle) previewTitle.textContent = selectedPackage.title;
  if (previewLoc) previewLoc.textContent = selectedPackage.location;
  if (previewFlight) previewFlight.textContent = `Included Flight: ${selectedPackage.flightPartner}`;
}

function recalculateBookingPrice() {
  if (!selectedPackage) selectedPackage = PACKAGES_DATA[0];

  const adults = parseInt(document.getElementById('book-adults')?.value || '2', 10) || 2;
  const children = parseInt(document.getElementById('book-children')?.value || '0', 10) || 0;
  
  const checkedFlightRadio = document.querySelector('input[name="flight-class"]:checked');
  const flightClass = checkedFlightRadio ? checkedFlightRadio.value : 'economy';

  const addChauffeur = document.getElementById('addon-chauffeur')?.checked ? 180 : 0;
  const addChampagne = document.getElementById('addon-champagne')?.checked ? 120 : 0;
  const addSpa = document.getElementById('addon-spa')?.checked ? 250 * adults : 0;
  const addDrone = document.getElementById('addon-drone')?.checked ? 390 : 0;

  const totalTravelers = adults + children;
  let flightUpgradePerPerson = 0;
  if (flightClass === 'premium') flightUpgradePerPerson = 350;
  if (flightClass === 'business') flightUpgradePerPerson = 950;
  if (flightClass === 'first') flightUpgradePerPerson = 1850;

  const basePriceUSD = (typeof selectedPackage.basePriceUSD === 'number' && !isNaN(selectedPackage.basePriceUSD)) ? selectedPackage.basePriceUSD : 2890;
  const childPriceUSD = Math.round(basePriceUSD * 0.75);

  const totalBaseUSD = (adults * basePriceUSD) + (children * childPriceUSD);
  const totalFlightUpgradeUSD = totalTravelers * flightUpgradePerPerson;
  const totalAddonsUSD = addChauffeur + addChampagne + addSpa + addDrone;
  const grandTotalUSD = totalBaseUSD + totalFlightUpgradeUSD + totalAddonsUSD;

  const curr = CURRENCIES[currentCurrency] || CURRENCIES.USD;
  const grandTotalConverted = Math.round(grandTotalUSD * curr.rate);
  const formattedTotal = `${curr.symbol}${grandTotalConverted.toLocaleString()}`;

  const displayTotal = document.getElementById('modal-total-price');
  const displayBreakdown = document.getElementById('modal-price-breakdown');

  if (displayTotal) {
    displayTotal.textContent = formattedTotal;
  }

  if (displayBreakdown) {
    displayBreakdown.innerHTML = `
      <div class="flex justify-between text-xs text-slate-300 py-1">
        <span>Travelers (${adults} Adults${children > 0 ? `, ${children} Children` : ''})</span>
        <span>${curr.symbol}${Math.round(totalBaseUSD * curr.rate).toLocaleString()}</span>
      </div>
      ${totalFlightUpgradeUSD > 0 ? `
      <div class="flex justify-between text-xs text-slate-300 py-1">
        <span>Flight Class Upgrade (${flightClass.toUpperCase()})</span>
        <span>${curr.symbol}${Math.round(totalFlightUpgradeUSD * curr.rate).toLocaleString()}</span>
      </div>` : ''}
      ${totalAddonsUSD > 0 ? `
      <div class="flex justify-between text-xs text-slate-300 py-1">
        <span>Selected VIP Concierge Add-ons</span>
        <span>${curr.symbol}${Math.round(totalAddonsUSD * curr.rate).toLocaleString()}</span>
      </div>` : ''}
      <div class="flex justify-between text-xs text-emerald-400 py-1 border-t border-white/10 mt-1 font-semibold">
        <span>Taxes, Private Transfers & Resort Inclusions</span>
        <span>100% Included</span>
      </div>
    `;
  }
}

// --- 8. OFFICIAL BOARDING PASS & PRINT RECEIPT ---
function handleBookingSubmission() {
  const name = document.getElementById('book-name')?.value || 'Valued Traveler';
  const email = document.getElementById('book-email')?.value || 'traveler@luxury.com';
  const phone = document.getElementById('book-phone')?.value || '+1 (555) 019-2834';
  const depart = document.getElementById('book-depart-date')?.value || '2026-11-15';
  const returnD = document.getElementById('book-return-date')?.value || '2026-11-22';
  const adults = document.getElementById('book-adults')?.value || '2';
  const children = document.getElementById('book-children')?.value || '0';
  
  const checkedFlightRadio = document.querySelector('input[name="flight-class"]:checked');
  const flightClass = checkedFlightRadio ? checkedFlightRadio.value.toUpperCase() : 'STANDARD LUXURY';
  const totalFormatted = document.getElementById('modal-total-price')?.textContent || '$5,780';

  const refCode = 'AUR-' + Math.floor(100000 + Math.random() * 900000);
  const issueDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  const modalBody = document.getElementById('booking-modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="py-4 px-2">
        <div class="no-print flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 p-4 rounded-2xl bg-amber-500/15 border border-amber-500/35">
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xl">
              ✓
            </div>
            <div>
              <h4 class="text-white font-bold text-base">Booking Confirmed & Locked!</h4>
              <p class="text-xs text-slate-300">Confirmation emailed to <span class="text-amber-400 underline">${email}</span></p>
            </div>
          </div>

          <div class="flex items-center gap-3 w-full sm:w-auto">
            <button onclick="window.print()" class="btn-luxury-vibrant px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
              <span>Print Official Voucher</span>
            </button>
            <button onclick="closeBookingModal(); location.reload();" class="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-semibold transition">
              Done
            </button>
          </div>
        </div>

        <div id="printable-voucher" class="boarding-pass-card max-w-2xl mx-auto p-8 border border-slate-200">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-slate-900 pb-5 mb-6">
            <div>
              <div class="flex items-center gap-2 mb-1">
                <span class="text-xl">✈️</span>
                <span class="font-serif text-2xl font-black tracking-wider text-slate-900">AURA VOYAGES</span>
              </div>
              <p class="text-[11px] uppercase tracking-widest text-slate-500 font-bold">Bespoke Expeditions & Luxury Travel Carriage</p>
            </div>
            <div class="mt-3 sm:mt-0 text-left sm:text-right">
              <span class="inline-block px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-mono text-xs font-bold border border-amber-300">
                REF: ${refCode}
              </span>
              <p class="text-[10px] text-slate-500 mt-1">Issued: ${issueDate}</p>
            </div>
          </div>

          <div class="bg-slate-50 border border-slate-200 rounded-2xl p-5 mb-6">
            <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
              <div>
                <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500">Expedition Package</span>
                <h3 class="text-xl font-serif font-black text-slate-900">${selectedPackage.title}</h3>
                <p class="text-xs text-slate-600 mt-0.5">Destination: <span class="font-bold text-slate-900">${selectedPackage.location}</span></p>
              </div>
              <div class="text-left sm:text-right">
                <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500">Flight Routing</span>
                <p class="text-sm font-bold text-amber-700">${selectedPackage.flightPartner}</p>
                <p class="text-xs text-slate-500 font-mono">${selectedPackage.flightRoute}</p>
              </div>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-t border-b border-slate-200 text-xs mb-6">
            <div>
              <span class="text-[10px] uppercase text-slate-400 font-bold block">Lead Guest</span>
              <span class="font-bold text-slate-900 text-sm">${name}</span>
              <span class="text-[10px] text-slate-500 block">${phone}</span>
            </div>

            <div>
              <span class="text-[10px] uppercase text-slate-400 font-bold block">Travel Dates</span>
              <span class="font-bold text-slate-900">${depart}</span>
              <span class="text-[10px] text-slate-500 block">to ${returnD}</span>
            </div>

            <div>
              <span class="text-[10px] uppercase text-slate-400 font-bold block">Travelers</span>
              <span class="font-bold text-slate-900">${adults} Adults</span>
              ${children > 0 ? `<span class="text-[10px] text-slate-500 block">+ ${children} Children</span>` : ''}
            </div>

            <div>
              <span class="text-[10px] uppercase text-slate-400 font-bold block">Cabin Class</span>
              <span class="font-bold text-amber-600">${flightClass}</span>
              <span class="text-[10px] text-slate-500 block">Luggage: 2x 32kg</span>
            </div>
          </div>

          <div class="mb-6">
            <span class="text-[10px] uppercase font-bold tracking-widest text-slate-500 block mb-2">5-Star Accommodation & Inclusions</span>
            <div class="bg-slate-50 rounded-xl p-4 border border-slate-200 text-xs space-y-1.5">
              <p class="font-bold text-slate-900 text-sm">🏨 ${selectedPackage.hotelName}</p>
              <p class="text-slate-600">✓ VIP Airport Fast-Track & Private Arrival Chauffeur</p>
              <p class="text-slate-600">✓ Daily Gourmet Champagne Breakfast & Private Dining Allocation</p>
              <p class="text-slate-600">✓ Dedicated 24/7 Personal Concierge & Guide</p>
            </div>
          </div>

          <div class="border-t-2 border-dashed border-slate-300 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div>
              <span class="text-[10px] uppercase font-bold tracking-widest text-slate-400 block">Payment Status</span>
              <div class="flex items-center gap-2">
                <span class="text-emerald-700 font-black text-sm">● PAID IN FULL</span>
                <span class="text-xs text-slate-500">(${totalFormatted})</span>
              </div>
              <p class="text-[10px] text-slate-400 mt-1">All taxes, resort surcharges & air carriage fees included.</p>
            </div>

            <div class="flex items-center gap-4">
              <div class="text-right hidden sm:block">
                <span class="text-[9px] uppercase tracking-widest text-slate-400 block font-mono">IATA AGENT #91-2-4820</span>
                <span class="text-[10px] text-slate-700 font-serif font-bold">Aura Travel Guild Certified</span>
              </div>
              
              <svg class="w-32 h-10" viewBox="0 0 140 40">
                <rect x="0" y="0" width="3" height="40" fill="#0f172a" />
                <rect x="5" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="8" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="15" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="19" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="23" y="0" width="5" height="40" fill="#0f172a" />
                <rect x="30" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="35" y="0" width="3" height="40" fill="#0f172a" />
                <rect x="42" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="45" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="52" y="0" width="3" height="40" fill="#0f172a" />
                <rect x="58" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="62" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="68" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="73" y="0" width="5" height="40" fill="#0f172a" />
                <rect x="81" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="86" y="0" width="3" height="40" fill="#0f172a" />
                <rect x="92" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="95" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="102" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="106" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="113" y="0" width="1" height="40" fill="#0f172a" />
                <rect x="116" y="0" width="3" height="40" fill="#0f172a" />
                <rect x="122" y="0" width="4" height="40" fill="#0f172a" />
                <rect x="128" y="0" width="2" height="40" fill="#0f172a" />
                <rect x="133" y="0" width="4" height="40" fill="#0f172a" />
              </svg>
            </div>
          </div>

          <div class="mt-6 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center">
            24/7 Global VIP Concierge Hotline: <strong class="text-slate-700">+1 (800) 428-AURA</strong> • Geneva • New York • Dubai • Singapore
          </div>
        </div>
      </div>
    `;
  }
}

// --- 9. CANVAS PARTICLES ---
function initParticleCanvas() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = [];
  const PARTICLE_COUNT = 45;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 2.2 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4 + 0.25,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      opacity: Math.random() * 0.6 + 0.2
    });
  }

  function renderParticles() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.speedX;
      p.y += p.speedY;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`;
      ctx.shadowBlur = 8;
      ctx.shadowColor = 'rgba(245, 158, 11, 0.4)';
      ctx.fill();
    });

    requestAnimationFrame(renderParticles);
  }

  renderParticles();
}

// --- 10. WEB AUDIO API SOUNDSCAPE ---
let audioCtx = null;
let isAudioPlaying = false;
let ambientNodes = [];

function initAudioSynthesizer() {
  const soundToggleBtn = document.getElementById('soundscape-toggle');
  const soundText = document.getElementById('soundscape-text');

  if (!soundToggleBtn) return;

  soundToggleBtn.addEventListener('click', () => {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }

    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }

    if (!isAudioPlaying) {
      startAmbientSoundscape();
      isAudioPlaying = true;
      if (soundText) soundText.textContent = 'Audio: On';
      soundToggleBtn.classList.add('border-amber-400', 'text-amber-400');
    } else {
      stopAmbientSoundscape();
      isAudioPlaying = false;
      if (soundText) soundText.textContent = 'Audio: Off';
      soundToggleBtn.classList.remove('border-amber-400', 'text-amber-400');
    }
  });
}

function startAmbientSoundscape() {
  if (!audioCtx) return;

  const bufferSize = audioCtx.sampleRate * 2;
  const noiseBuffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
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
    output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.035;
    b6 = white * 0.115926;
  }

  const whiteNoise = audioCtx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 400;

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.3, audioCtx.currentTime + 1.5);

  whiteNoise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  whiteNoise.start();
  ambientNodes = [whiteNoise, filter, gainNode];
}

function stopAmbientSoundscape() {
  if (ambientNodes.length > 0) {
    const [source, , gain] = ambientNodes;
    if (gain && audioCtx) {
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.8);
      setTimeout(() => {
        try { source.stop(); } catch(e) {}
      }, 800);
    }
  }
}

// --- 11. 3D CARD TILT ON MOUSE HOVER ---
function initInteractive3DTilt() {
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.tilt-interactive');
    cards.forEach(card => {
      const rect = card.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (!inView) return;

      const isHovered = e.clientX >= rect.left && e.clientX <= rect.right &&
                        e.clientY >= rect.top && e.clientY <= rect.bottom;

      if (isHovered) {
        const xVal = (e.clientX - rect.left) / rect.width;
        const yVal = (e.clientY - rect.top) / rect.height;
        const rotateY = (xVal - 0.5) * 16;
        const rotateX = (0.5 - yVal) * 16;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      } else {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      }
    });
  });
}

// --- 12. MOBILE MENU ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const closeBtn = document.getElementById('mobile-menu-close');
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');

  function openMenu() {
    if (menu) {
      menu.classList.remove('translate-x-full');
      menu.classList.add('translate-x-0');
    }
    if (overlay) overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeMenu() {
    if (menu) {
      menu.classList.remove('translate-x-0');
      menu.classList.add('translate-x-full');
    }
    if (overlay) overlay.classList.add('hidden');
    document.body.style.overflow = '';
  }

  if (toggleBtn) toggleBtn.addEventListener('click', openMenu);
  if (closeBtn) closeBtn.addEventListener('click', closeMenu);
  if (overlay) overlay.addEventListener('click', closeMenu);

  document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
}

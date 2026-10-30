/**
 * AURA VOYAGES - 3D PARALLAX LUXURY TRAVEL ENGINE
 * Multi-layer 3D Depth, Flight Tracking, Booking Modal, Audio Synthesis & Dynamic Currency
 */

// --- 1. DATA: PACKAGES & CURRENCIES ---
const PACKAGES_DATA = [
  {
    id: 'alpine-matterhorn',
    title: 'Alpine Majesty & Glacier Chalet',
    location: 'Zermatt, Swiss Alps',
    category: 'mountains',
    duration: '7 Days / 6 Nights',
    rating: 4.98,
    reviewsCount: 142,
    basePriceUSD: 2890,
    badge: 'Popular Choice',
    tagColor: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80',
    overview: 'High-altitude luxury ski chalet with panoramic Matterhorn vistas, private heated infinity pool, and Swiss Alpine helicopter tour.',
    highlights: ['First-class Glacier Express scenic train', 'Private mountain UIAGM guide', 'Alpine fondue & Michelin star dining', 'Luxury ski-in / ski-out chalet'],
    flightIncluded: 'Swiss International Air (Direct)'
  },
  {
    id: 'sahara-royal-dunes',
    title: 'Sahara Mirage & Royal Bedouin Oasis',
    location: 'Merzouga & Dubai Desert Reserve',
    category: 'sand',
    duration: '6 Days / 5 Nights',
    rating: 4.95,
    reviewsCount: 98,
    basePriceUSD: 2150,
    badge: 'Signature Luxury',
    tagColor: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
    image: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=1200&q=80',
    overview: 'Glide over golden dunes in luxury 4x4s, sleep beneath infinite galaxies in private stargazing domes, and experience royal Arabian hospitality.',
    highlights: ['Private celestial dome with telescope', 'Sunset royal camel caravan', 'Desert falconry & Arabian horses', '4x4 private dune expedition'],
    flightIncluded: 'Emirates Luxury Flight (Direct)'
  },
  {
    id: 'maldives-overwater-haven',
    title: 'Azure Lagoon & Overwater Sanctuary',
    location: 'Baa Atoll, Maldives',
    category: 'sea',
    duration: '8 Days / 7 Nights',
    rating: 5.0,
    reviewsCount: 216,
    badge: 'Ultra Luxury',
    tagColor: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    overview: 'Hover above pristine turquoise crystal waters in a 5-star overwater villa with glass floor viewing, infinity plunge pool, and marine sanctuary.',
    highlights: ['VIP Seaplane scenic island transfer', 'Manta ray & sea turtle snorkeling', 'Underwater restaurant 5-course dinner', 'Private sunset yacht with sommelier'],
    flightIncluded: 'Qatar Airways / Seaplane Transfer'
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
    tagColor: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
    image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=1200&q=80',
    overview: 'Immerse in misty tropical biodiversity with private treehouse canopy suites, geothermal hot spring spas, and secret waterfall treks.',
    highlights: ['Canopy suspension bridges & zipline', 'Volcanic geothermal private hot springs', 'Night cloudforest bioluminescence tour', 'Organic coffee & cacao private estate'],
    flightIncluded: 'International Flights + Eco SUV Chauffeur'
  },
  {
    id: 'patagonia-wild-peaks',
    title: 'Torres del Paine & Glacial Fjords',
    location: 'Patagonia, Chile & Argentina',
    category: 'mountains',
    duration: '9 Days / 8 Nights',
    rating: 4.96,
    reviewsCount: 89,
    badge: 'Iconic Trek',
    tagColor: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
    image: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1200&q=80',
    overview: 'Marvel at granite towers, dramatic icebergs, and glacial fjords from ultra-luxury geodesic eco-domes with Chilean wine pairing.',
    highlights: ['Grey Glacier navigation cruise', 'Puma spotting & guanaco safari', 'Private Andean equestrian trek', 'Sommelier-guided Chilean wine tastings'],
    flightIncluded: 'LATAM Airlines + Scenic Floatplane'
  },
  {
    id: 'kyoto-bamboo-onsen',
    title: 'Kyoto Sacred Groves & Zen Ryokan',
    location: 'Arashiyama & Kyoto, Japan',
    category: 'forest',
    duration: '8 Days / 7 Nights',
    rating: 4.99,
    reviewsCount: 178,
    badge: 'Cultural Immersion',
    tagColor: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1200&q=80',
    overview: 'Whispering bamboo groves, private cedar onsen thermal baths, centuries-old shrines, and private kaiseki banquet dinners with master geishas.',
    highlights: ['Exclusive dawn entry to Bamboo Grove', 'Private Zen master meditation session', 'Traditional private tea ceremony', 'Kaiseki 10-course Michelin dinner'],
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

// --- 2. INITIALIZATION ON DOM READY ---
document.addEventListener('DOMContentLoaded', () => {
  initHeroParallax();
  initFlightWaypointTracker();
  initBiomeParallax();
  renderPackages();
  initBookingModal();
  initCurrencySelector();
  initSearchAndFilter();
  initParticleCanvas();
  initAudioSynthesizer();
  initInteractive3DTilt();
  initMobileMenu();
});

// --- 3. 3D HERO PARALLAX ENGINE ---
function initHeroParallax() {
  const heroStage = document.getElementById('hero-stage');
  const skyLayer = document.querySelector('.hero-bg-sky');
  const mountainLayer = document.querySelector('.hero-layer-mountains');
  const cloudsBack = document.querySelector('.hero-clouds-back');
  const airplaneContainer = document.querySelector('.hero-airplane-container');
  const cloudsFront = document.querySelector('.hero-clouds-front');
  const heroContent = document.querySelector('.hero-content');

  let mouseX = 0;
  let mouseY = 0;
  let targetMouseX = 0;
  let targetMouseY = 0;
  let scrollY = window.scrollY;

  // Track Mouse Movement for 3D Gyro effect
  window.addEventListener('mousemove', (e) => {
    const halfW = window.innerWidth / 2;
    const halfH = window.innerHeight / 2;
    targetMouseX = (e.clientX - halfW) / halfW; // -1 to 1
    targetMouseY = (e.clientY - halfH) / halfH; // -1 to 1
  });

  // Smooth RAF render loop
  function updateParallax() {
    // Interpolate mouse coordinates (smooth damping)
    mouseX += (targetMouseX - mouseX) * 0.08;
    mouseY += (targetMouseY - mouseY) * 0.08;
    scrollY = window.scrollY;

    const heroHeight = heroStage ? heroStage.offsetHeight : 800;

    if (scrollY <= heroHeight + 200) {
      // 1. Sky layer
      if (skyLayer) {
        skyLayer.style.transform = `translate3d(${mouseX * -15}px, ${scrollY * 0.12 + mouseY * -10}px, 0)`;
      }

      // 2. Mountains layer
      if (mountainLayer) {
        mountainLayer.style.transform = `translate3d(${mouseX * -25}px, ${scrollY * 0.38 + mouseY * -15}px, 0) scale(1.05)`;
      }

      // 3. Back Clouds
      if (cloudsBack) {
        cloudsBack.style.transform = `translate3d(${mouseX * -40}px, ${scrollY * 0.25}px, 0)`;
      }

      // 4. Airplane in Sky with 3D banking angle
      if (airplaneContainer) {
        const planeX = mouseX * 60 + (scrollY * 0.4);
        const planeY = (scrollY * 0.5) + mouseY * 40;
        const bankAngle = (mouseX * 12) - (scrollY * 0.03);
        const pitchAngle = mouseY * 8 - (scrollY * 0.02);
        airplaneContainer.style.transform = `translate(-50%, -50%) translate3d(${planeX}px, ${planeY}px, 60px) rotate(${bankAngle}deg) rotateX(${pitchAngle}deg)`;
      }

      // 5. Front Clouds
      if (cloudsFront) {
        cloudsFront.style.transform = `translate3d(${mouseX * 50}px, ${scrollY * 0.65}px, 0) scale(1.3)`;
      }

      // 6. Hero typography floating HUD
      if (heroContent) {
        const textOpacity = Math.max(0, 1 - scrollY / 550);
        heroContent.style.transform = `translate3d(${mouseX * 15}px, ${scrollY * 0.45}px, 0)`;
        heroContent.style.opacity = textOpacity;
      }
    }

    requestAnimationFrame(updateParallax);
  }

  requestAnimationFrame(updateParallax);
}

// --- 4. FLIGHT ROUTE TRACKER (WAYPOINTS AS YOU SCROLL) ---
function initFlightWaypointTracker() {
  const waypoints = [
    { id: 'hero-stage', name: 'Takeoff: Cloud Flight', icon: '✈️' },
    { id: 'biome-mountains', name: 'Alpine Summits', icon: '🏔️' },
    { id: 'biome-sand', name: 'Sahara Golden Dunes', icon: '🏜️' },
    { id: 'biome-sea', name: 'Azure Turquoise Sea', icon: '🌊' },
    { id: 'biome-forest', name: 'Emerald Canopy', icon: '🌲' },
    { id: 'packages-section', name: 'Destination Arrival', icon: '📍' }
  ];

  const waypointIndicator = document.getElementById('current-waypoint-name');
  const waypointIcon = document.getElementById('current-waypoint-icon');
  const waypointProgress = document.getElementById('flight-progress-bar');

  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + window.innerHeight * 0.4;
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

// --- 5. BIOME PARALLAX SCROLLING ---
function initBiomeParallax() {
  const biomeBgs = document.querySelectorAll('.biome-bg');

  window.addEventListener('scroll', () => {
    const windowH = window.innerHeight;
    biomeBgs.forEach(bg => {
      const parent = bg.parentElement;
      const rect = parent.getBoundingClientRect();

      // Only calculate if visible on screen
      if (rect.top <= windowH && rect.bottom >= 0) {
        const relativeScroll = (rect.top / windowH);
        const yOffset = relativeScroll * 120; // 120px parallax delta
        bg.style.transform = `translate3d(0, ${yOffset}px, 0) scale(1.1)`;
      }
    });
  }, { passive: true });
}

// --- 6. PACKAGES RENDERING & FILTERING ---
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
      <div class="col-span-full py-16 text-center text-slate-400 glass-panel rounded-2xl p-8">
        <svg class="w-16 h-16 mx-auto mb-4 text-amber-400 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 class="text-xl font-bold text-white mb-2">No Expedition Packages Found</h3>
        <p class="text-sm">Try choosing another realm filter or clearing your search keywords.</p>
        <button onclick="resetFilters()" class="mt-4 px-6 py-2 rounded-xl bg-amber-500 text-slate-900 font-bold hover:bg-amber-400 transition">Show All Packages</button>
      </div>
    `;
    return;
  }

  const curr = CURRENCIES[currentCurrency];

  container.innerHTML = filtered.map(pkg => {
    const convertedPrice = Math.round(pkg.basePriceUSD * curr.rate);
    const formattedPrice = curr.symbol + convertedPrice.toLocaleString();

    return `
      <div class="glass-card rounded-3xl overflow-hidden flex flex-col group tilt-interactive" data-package-id="${pkg.id}">
        <!-- Image Header with Hover Depth Zoom -->
        <div class="relative h-64 overflow-hidden">
          <img src="${pkg.image}" alt="${pkg.title}" class="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent"></div>
          
          <!-- Badges -->
          <div class="absolute top-4 left-4 flex gap-2 flex-wrap">
            <span class="tag-badge ${pkg.tagColor} border">${pkg.badge}</span>
            <span class="tag-badge bg-slate-900/80 text-cyan-300 border border-cyan-500/20">
              <svg class="w-3.5 h-3.5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              ${pkg.duration}
            </span>
          </div>

          <!-- Location Pin -->
          <div class="absolute bottom-4 left-4 flex items-center text-xs font-medium text-slate-300 bg-slate-900/60 backdrop-blur-md px-3 py-1 rounded-full">
            <svg class="w-3.5 h-3.5 text-amber-400 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
            ${pkg.location}
          </div>

          <!-- Rating -->
          <div class="absolute top-4 right-4 bg-slate-950/80 backdrop-blur-md border border-white/10 px-2.5 py-1 rounded-full flex items-center text-xs font-bold text-amber-400">
            ★ ${pkg.rating} <span class="text-slate-400 font-normal ml-1">(${pkg.reviewsCount})</span>
          </div>
        </div>

        <!-- Package Body Content -->
        <div class="p-6 flex-1 flex flex-col justify-between">
          <div>
            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors font-serif">
              ${pkg.title}
            </h3>
            <p class="text-slate-300 text-sm mb-4 line-clamp-2 leading-relaxed">
              ${pkg.overview}
            </p>

            <!-- Highlights Checklist -->
            <div class="space-y-1.5 mb-5 border-t border-b border-white/5 py-3">
              ${pkg.highlights.slice(0, 3).map(hl => `
                <div class="flex items-center text-xs text-slate-300">
                  <svg class="w-3.5 h-3.5 text-amber-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                  <span class="truncate">${hl}</span>
                </div>
              `).join('')}
            </div>

            <!-- Flight Included Ribbon -->
            <div class="flex items-center text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/20 rounded-xl px-3 py-2 mb-5">
              <svg class="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              <span class="truncate">Flight: ${pkg.flightIncluded}</span>
            </div>
          </div>

          <!-- Price & Booking CTA -->
          <div class="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
            <div>
              <span class="text-xs text-slate-400 block uppercase tracking-wider">All-Inclusive from</span>
              <div class="flex items-baseline gap-1">
                <span class="text-2xl font-extrabold text-amber-400 font-display">${formattedPrice}</span>
                <span class="text-xs text-slate-400">/ person</span>
              </div>
            </div>

            <button onclick="openBookingModal('${pkg.id}')" class="btn-luxury px-5 py-2.5 rounded-xl text-sm flex items-center gap-1.5 shadow-lg group-hover:shadow-amber-500/30">
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

// --- 7. SEARCH AND REALM FILTER LOGIC ---
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

// --- 8. CURRENCY CONVERTER ---
function initCurrencySelector() {
  const currencySelects = document.querySelectorAll('.currency-select');
  currencySelects.forEach(select => {
    select.addEventListener('change', (e) => {
      currentCurrency = e.target.value;
      // Sync all currency selectors
      currencySelects.forEach(s => s.value = currentCurrency);
      renderPackages();
      recalculateBookingPrice();
    });
  });
}

// --- 9. INTERACTIVE BOOKING MODAL & ENGINE ---
let selectedPackage = PACKAGES_DATA[0];

function initBookingModal() {
  const modal = document.getElementById('booking-modal');
  const closeBtn = document.getElementById('close-booking-modal');
  const overlay = document.getElementById('modal-backdrop');
  const packageSelect = document.getElementById('modal-package-select');

  // Populate Package Select dropdown
  if (packageSelect) {
    packageSelect.innerHTML = PACKAGES_DATA.map(p => `
      <option value="${p.id}">${p.title} (${p.location}) - from $${p.basePriceUSD}</option>
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

  // Prepopulate dates: 14 days and 21 days from now
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

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeBookingModal);
  if (overlay) overlay.addEventListener('click', closeBookingModal);

  // Form listeners to trigger real-time calculation
  const recalculateInputs = [
    'book-adults',
    'book-children',
    'book-flight-class',
    'addon-chauffeur',
    'addon-champagne',
    'addon-spa',
    'addon-drone'
  ];

  recalculateInputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) {
      el.addEventListener('change', recalculateBookingPrice);
      el.addEventListener('input', recalculateBookingPrice);
    }
  });

  // Booking Form Submission
  const bookingForm = document.getElementById('booking-form');
  if (bookingForm) {
    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      handleBookingSubmission();
    });
  }
}

window.openBookingModal = function(packageId = null) {
  if (packageId) {
    const found = PACKAGES_DATA.find(p => p.id === packageId);
    if (found) selectedPackage = found;
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
  const previewImg = document.getElementById('modal-pkg-img');
  const previewTitle = document.getElementById('modal-pkg-title');
  const previewLoc = document.getElementById('modal-pkg-location');
  const previewFlight = document.getElementById('modal-pkg-flight');

  if (previewImg) previewImg.src = selectedPackage.image;
  if (previewTitle) previewTitle.textContent = selectedPackage.title;
  if (previewLoc) previewLoc.textContent = selectedPackage.location;
  if (previewFlight) previewFlight.textContent = `Includes: ${selectedPackage.flightIncluded}`;
}

function recalculateBookingPrice() {
  const adults = parseInt(document.getElementById('book-adults')?.value || '2', 10);
  const children = parseInt(document.getElementById('book-children')?.value || '0', 10);
  const flightClass = document.getElementById('book-flight-class')?.value || 'economy';

  // Add-ons
  const addChauffeur = document.getElementById('addon-chauffeur')?.checked ? 180 : 0;
  const addChampagne = document.getElementById('addon-champagne')?.checked ? 120 : 0;
  const addSpa = document.getElementById('addon-spa')?.checked ? 250 * adults : 0;
  const addDrone = document.getElementById('addon-drone')?.checked ? 390 : 0;

  // Flight class upgrade per traveler
  const totalTravelers = adults + children;
  let flightUpgradePerPerson = 0;
  if (flightClass === 'premium') flightUpgradePerPerson = 350;
  if (flightClass === 'business') flightUpgradePerPerson = 950;
  if (flightClass === 'first') flightUpgradePerPerson = 1850;

  const basePricePerAdult = selectedPackage.basePriceUSD;
  const childPrice = Math.round(selectedPackage.basePriceUSD * 0.75); // 25% discount for kids

  const totalBaseUSD = (adults * basePricePerAdult) + (children * childPrice);
  const totalFlightUpgradeUSD = totalTravelers * flightUpgradePerPerson;
  const totalAddonsUSD = addChauffeur + addChampagne + addSpa + addDrone;
  const grandTotalUSD = totalBaseUSD + totalFlightUpgradeUSD + totalAddonsUSD;

  const curr = CURRENCIES[currentCurrency];
  const grandTotalConverted = Math.round(grandTotalUSD * curr.rate);

  // Update UI breakdown
  const displayTotal = document.getElementById('modal-total-price');
  const displayBreakdown = document.getElementById('modal-price-breakdown');

  if (displayTotal) {
    displayTotal.textContent = `${curr.symbol}${grandTotalConverted.toLocaleString()}`;
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
        <span>VIP Selected Add-ons</span>
        <span>${curr.symbol}${Math.round(totalAddonsUSD * curr.rate).toLocaleString()}</span>
      </div>` : ''}
      <div class="flex justify-between text-xs text-emerald-400 py-1 border-t border-white/10 mt-1 font-semibold">
        <span>Taxes, Resort Fees & Concierge Service</span>
        <span>Included (100%)</span>
      </div>
    `;
  }
}

function handleBookingSubmission() {
  const name = document.getElementById('book-name')?.value || 'Valued Traveler';
  const email = document.getElementById('book-email')?.value || 'traveler@example.com';
  const phone = document.getElementById('book-phone')?.value || '+1 555-0192';
  const depart = document.getElementById('book-depart-date')?.value;
  const returnD = document.getElementById('book-return-date')?.value;
  const adults = document.getElementById('book-adults')?.value || '2';
  const flightClass = document.getElementById('book-flight-class')?.value?.toUpperCase() || 'ECONOMY';
  const totalFormatted = document.getElementById('modal-total-price')?.textContent || '$0';

  // Generate Reference ID
  const refCode = 'AUR-' + Math.floor(100000 + Math.random() * 900000);

  const modalBody = document.getElementById('booking-modal-body');
  if (modalBody) {
    modalBody.innerHTML = `
      <div class="text-center py-8 px-4 animate-fadeIn">
        <div class="w-20 h-20 bg-amber-500/20 text-amber-400 rounded-full flex items-center justify-center mx-auto mb-5 border border-amber-500/40 shadow-lg shadow-amber-500/20">
          <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/></svg>
        </div>
        
        <span class="tag-badge bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-2">Expedition Confirmed</span>
        <h2 class="text-3xl font-serif font-bold text-white mb-2">Your Journey is Secured!</h2>
        <p class="text-slate-300 text-sm max-w-md mx-auto mb-6">
          Congratulations, <span class="font-bold text-amber-400">${name}</span>! Your bespoke package reservation is locked in. A detailed boarding itinerary and flight ticket pass have been dispatched to <span class="text-cyan-300 underline">${email}</span>.
        </p>

        <!-- Digital Boarding Pass Ticket -->
        <div class="glass-panel p-6 rounded-2xl max-w-lg mx-auto text-left border border-amber-500/30 mb-6 bg-slate-900/80">
          <div class="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
            <div>
              <span class="text-[10px] uppercase tracking-widest text-slate-400">Boarding Pass & Voucher</span>
              <h4 class="text-lg font-serif font-bold text-amber-400">${selectedPackage.title}</h4>
            </div>
            <div class="text-right">
              <span class="text-[10px] uppercase tracking-widest text-slate-400">Reference ID</span>
              <p class="font-mono text-cyan-400 font-bold tracking-wider">${refCode}</p>
            </div>
          </div>

          <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs mb-4">
            <div>
              <span class="text-slate-400 block">Lead Guest</span>
              <span class="font-bold text-white">${name}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Travel Dates</span>
              <span class="font-bold text-white">${depart} → ${returnD}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Flight Class</span>
              <span class="font-bold text-amber-300">${flightClass}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Travelers</span>
              <span class="font-bold text-white">${adults} Guests</span>
            </div>
            <div>
              <span class="text-slate-400 block">Destinations</span>
              <span class="font-bold text-white">${selectedPackage.location}</span>
            </div>
            <div>
              <span class="text-slate-400 block">Amount Confirmed</span>
              <span class="font-bold text-amber-400 text-sm">${totalFormatted}</span>
            </div>
          </div>

          <div class="flex items-center justify-between pt-3 border-t border-white/10 text-[11px] text-slate-400">
            <span>✨ 24/7 VIP Concierge Hotline: +1 (800) 428-AURA</span>
            <span class="text-emerald-400 font-semibold">● Guaranteed Booking</span>
          </div>
        </div>

        <div class="flex justify-center gap-3">
          <button onclick="window.print()" class="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-sm font-semibold transition flex items-center gap-2">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/></svg>
            Print Voucher
          </button>
          <button onclick="closeBookingModal(); location.reload();" class="btn-luxury px-6 py-2.5 rounded-xl text-sm">
            Complete & Return
          </button>
        </div>
      </div>
    `;
  }
}

// --- 10. LIGHTWEIGHT VOLUMETRIC CANVAS PARTICLES ---
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
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.4 + 0.2,
      speedY: (Math.random() - 0.5) * 0.3 - 0.1,
      opacity: Math.random() * 0.5 + 0.2
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

// --- 11. WEB AUDIO API LUXURY FLIGHT AMBIENCE ---
let audioCtx = null;
let isAudioPlaying = false;
let ambientNodes = [];

function initAudioSynthesizer() {
  const soundToggleBtn = document.getElementById('soundscape-toggle');
  const soundIcon = document.getElementById('soundscape-icon');
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
      if (soundIcon) soundIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />`;
      if (soundText) soundText.textContent = 'Audio: On';
      soundToggleBtn.classList.add('border-amber-400', 'text-amber-400');
    } else {
      stopAmbientSoundscape();
      isAudioPlaying = false;
      if (soundIcon) soundIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />`;
      if (soundText) soundText.textContent = 'Audio: Off';
      soundToggleBtn.classList.remove('border-amber-400', 'text-amber-400');
    }
  });
}

function startAmbientSoundscape() {
  if (!audioCtx) return;

  // Pink noise buffer generator for soothing high-altitude airflow
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

  // Lowpass filter mimicking jet cabin and mountain breeze
  const filter = audioCtx.createBiquadFilter();
  filter.type = 'lowpass';
  filter.frequency.value = 380;

  const gainNode = audioCtx.createGain();
  gainNode.gain.setValueAtTime(0.01, audioCtx.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.35, audioCtx.currentTime + 2);

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
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 1);
      setTimeout(() => {
        try { source.stop(); } catch(e) {}
      }, 1000);
    }
  }
}

// --- 12. 3D CARD TILT ON HOVER ---
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
        const rotateY = (xVal - 0.5) * 14;
        const rotateX = (0.5 - yVal) * 14;
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
      } else {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
      }
    });
  });
}

// --- 13. MOBILE MENU TOGGLE ---
function initMobileMenu() {
  const toggleBtn = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (toggleBtn && menu) {
    toggleBtn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
}

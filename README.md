# Aura Voyages — 3D Parallax Luxury Travel Agency Website

An ultra-modern, high-performance **3D Parallax Scrolling Website** designed for a premier luxury travel agency offering all-inclusive travel packages (flights + 5-star stays + guided expeditions).

---

## ✨ Features & Highlights

1. **Multi-Layer 3D Parallax Hero**:
   - **Sky & Atmospheric Stratosphere**: Deep twilight celestial horizon.
   - **Snow-Capped Alpine Mountain Summits**: Realistic elevation depth.
   - **Volumetric Cloud Layers (Back & Front)**: Dual-layer cloud drift creating realistic depth.
   - **3D Commercial Jet Airliner**: Vector jetliner cruising through clouds with animated contrail vapor trail, 3D mouse gyro banking, and scroll velocity responsiveness.
   - **Floating Dust & Mist Particle Canvas**: Interactive ambient particles.

2. **The 4 Elemental Biome Realims**:
   - 🏔️ **Mountains Realm**: Zermatt & Swiss Alps, Matterhorn ski chalets, helicopter transfers.
   - 🏜️ **Sand & Desert Realm**: Sahara dunes & Dubai reserve, royal stargazing pavilions, 4x4 safari.
   - 🌊 **Azure Sea Realm**: Maldives & Bora Bora overwater villas, seaplane transfers, coral reefs.
   - 🌲 **Emerald Forest Realm**: Costa Rica rainforest canopies, Kyoto bamboo groves & private onsens.

3. **Curated Travel & Stay Packages**:
   - Live filtering by realm category (Mountains, Sand, Sea, Forest).
   - Instant search by destination or feature.
   - Detailed package cards with inclusions, flight details, duration, reviews, and dynamic pricing.

4. **Multi-Currency Live Switcher**:
   - Supports USD ($), EUR (€), GBP (£), INR (₹), and AED (د.إ) with automatic price conversion.

5. **Interactive Booking Engine & Digital Boarding Pass**:
   - Multi-step booking drawer:
     - Package selection & auto-fill
     - Travel calendar date picker (departure & return)
     - Guest counts (adults & children with automated discounts)
     - Flight cabin class upgrade (Standard / Premium Economy / Business / First Class Suite)
     - VIP Concierge add-ons (Airport chauffeur, champagne on arrival, spa pass, drone videographer)
     - Real-time transparent price calculation
   - Instant booking confirmation ticket with unique reference ID (`AUR-XXXXXX`) and one-click printable voucher!

6. **Web Audio API Ambient Flight Soundscape**:
   - Toggle button in navigation bar that generates subtle high-altitude cabin breeze & ocean resonance natively in browser without relying on external audio files.

---

## 🚀 How to Run & Preview

You can run this project instantly with either Vite or Python:

### Option 1: Python HTTP Server (Zero Setup)
```bash
python3 -m http.server 3000
```
Open your browser at: [http://localhost:3000](http://localhost:3000)

### Option 2: Vite Dev Server
```bash
npm run dev
# or
npx vite --port 3000
```

---

## 📁 File Structure

- `index.html` — Complete semantic HTML5 structure with 3D parallax hero, biome sections, packages grid, and interactive booking modal.
- `styles.css` — Custom 3D perspective, parallax layer transitions, glassmorphism, responsive styles, and custom scrollbar.
- `main.js` — Parallax scroll engine, mouse-move 3D perspective, interactive booking engine, currency converter, particle system, and ambient audio generator.
- `package.json` — Scripts for running and previewing the site.

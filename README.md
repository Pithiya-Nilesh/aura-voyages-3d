# AURA VOYAGES — Ultra-Luxury 3D Parallax & Kinetic Web Experience 2026

An award-winning, ultra-vibrant **3D Parallax & WebGL Experience** designed for premier luxury travel agencies, offering all-inclusive expeditions (private aviation & seaplanes + 5-star retreats + private guided safaris).

Inspired by cutting-edge interactive websites such as **Henrietta Said (Awwwards / FWA)**, featuring physics-based floating object repulsion, an interactive Three.js 3D Earth Globe, kinetic marquee typography, and saturated color design.

---

## ✨ Key Features & Interactive Systems

1. **Henrietta-Style Multi-Layer Physics Repulsion Engine (`[data-parallax="scene"]`)**:
   - Floating travel artifacts (golden navigational compass, hot air balloon, luxury boarding pass, alpine ice crystal, monstera fronds, celestial stars) with varying depth layers (`data-layer="0.2"` to `1.0`).
   - Natural harmonic sine-wave floating and breathing.
   - Real-time cursor repulsion physics (`repulseRadius`, `repulseStrength`): objects react dynamically to cursor proximity by pushing away with elastic damping and springing back naturally!

2. **Multi-Layer 3D Parallax Stratosphere Hero**:
   - Cosmic sunset stratosphere mesh with animated radial aurora flow.
   - Perspective coordinate grid with horizon alpine ridge.
   - Dual-layer drifting clouds with realistic depth.
   - 3D Commercial Airliner with glowing jet engines, animated contrails, and dynamic 3D banking/pitching linked to cursor coordinates.
   - Real-time flight telemetry HUD (`Mach 0.85 · Alt 38,000 FT`).

3. **Infinite Kinetic Marquee Ribbons**:
   - Continuously scrolling marquee typography with glowing separators, displaying inclusions, VIP accolades, and certifications.

4. **The 4 Elemental Biome Realms**:
   - 🌊 **Turquoise Azure Sea**: Saturated turquoise lagoon, caustic shimmer, speedboat slicing through the water with wake foam trail, and paraglider drifting in sky.
   - 🏜️ **Sahara Golden Dunes**: Golden sand dunes with setting sun, heat shimmer, camel caravan traversing the dune ridge with drifting sand motes.
   - 🏔️ **Alpine Matterhorn Summits**: Snow-capped peaks bathed in pink-gold alpenglow, charter helicopter with searchlight beam, Northern Lights aurora curtain, and falling crystalline snowflakes.
   - 🌲 **Emerald Ancient Rainforest**: Misty tropical canopy with sunbeam God rays, bioluminescent floating spores, and eco-certified canopy villa.

5. **Interactive Three.js 3D Earth Globe & Orbital Flight Radar**:
   - Real-time 3D Earth Globe with glowing atmospheric halo and digital wireframe grid.
   - 3D curved Bezier flight trajectories with animated light sparks travelling along flight corridors.
   - Clickable destination beacons (Maldives, Bora Bora, Sahara, Abu Dhabi, Swiss Alps, Patagonia, Costa Rica, Kyoto) with instant smooth camera orbital tracking.
   - Full drag-to-rotate support with inertia.
   - Live telemetry card with destination weather, flight partner, and instant booking trigger.

6. **Curated Expeditions Catalog**:
   - 8 fully detailed luxury packages with high-resolution imagery, verified reviews, durations, and hotel/flight partner pairings.
   - Interactive realm category filter tabs (All, Azure Sea, Golden Dunes, Alpine Summits, Rainforest).
   - Real-time search bar.
   - 3D Tilt Cards with dynamic cursor glare hotspots.

7. **360° Virtual Horizon Panorama Viewer**:
   - Interactive equirectangular spherical panorama modal allowing travelers to pan in full 360° to view destination vistas!

8. **Live Multi-Currency Converter**:
   - Supports USD ($), EUR (€), GBP (£), INR (₹), AED (د.إ), and JPY (¥) with real-time recalculation across package cards and booking forms.

9. **Bespoke Booking Engine & Printable Luxury Boarding Pass**:
   - Multi-step booking drawer:
     - Date range pickers (departure & return)
     - Adult & child counters (with automatic 25% child discount)
     - Flight cabin class upgrades (Standard Luxury, Premium Economy, Business Flatbed Suite, First Class Private Suite)
     - VIP Concierge Add-ons (Mercedes Chauffeur, Dom Pérignon & Caviar, Daily Thermal Spa, 4K Drone Videographer)
     - Live itemized cost calculation
   - Instant Digital Boarding Pass voucher with unique PNR reference (`AUR-XXXXXX`), barcode, passenger details, and one-click Printable receipt!

10. **Native Web Audio API Synthesizer**:
    - High-altitude cabin air and ocean resonance synthesized directly in the browser with an interactive equalizer visualizer in the top navigation bar.

---

## 🚀 Running the Project

### Option 1: Python Server
```bash
cd /home/nilesh-pithiya/FRAPPE-BENCHES/website
python3 -m http.server 3000
```
Open [http://localhost:3000](http://localhost:3000)

### Option 2: Vite Dev Server
```bash
cd /home/nilesh-pithiya/FRAPPE-BENCHES/website
npm run dev
# or
npm run build && npm run preview
```

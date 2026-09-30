# DMV Concrete — Homepage

A premium, redesigned homepage for **DMV Concrete**, a VDOT-approved 24-hour ready-mix
concrete delivery company serving Northern Virginia and Washington, DC. Rebuilt from the
existing site at [dmvconcrete.com](https://dmvconcrete.com/), using the company's **real logo,
brand colors, and truck photos** — and **duplicating their concrete calculator**.

Built as a fast, dependency-free static site with a full-bleed **background video hero**.

**Live site:** _(GitHub Pages — see repo Settings → Pages)_

---

## The concrete calculator (duplicated)
The site's **Slab / Column / Footing** concrete calculator was re-implemented from their
original `calculators.js` — **same formulas, same units, same rounding** — but rebuilt as a
clean, dependency-free (no jQuery), live-updating tabbed component (`js/calculator.js`):

- **Slab** — Width (ft) × Length (ft) × Thickness (in) → cubic yards
- **Column** — Height (ft), Diameter (in), # of Columns → cubic yards `(π·r²·h)/27 × qty`
- **Footing** — Width (in) × Length (ft) × Thickness (in) → cubic yards

Results update as you type and round to 2 decimals, exactly like the source. The estimated
cubic-yards field also feeds naturally into the order/contact form.

## Business details
- **Company:** DMV Concrete
- **Phones:** Virginia 703-552-4200 · Washington DC 202-688-1277
- **Address:** 3301 Old Pickett Road, Fairfax, VA 22031
- **Tagline:** "24 Hour Ready Mix Concrete Delivery"
- **Hours:** Mon–Fri 6a–6p · Sat 7a–12p · Sun closed (Sunday & night deliveries on request)
- **Certification:** VDOT approved for A3 & A4 mixes
- **Services:** Concrete delivery (24/7), flowable fill, commercial ready-mix supply
- **Service area:** Washington DC & Northern Virginia (Fairfax, Arlington, Alexandria, Falls Church, Sterling, Centreville, Manassas, Chantilly, Herndon, Burke, Springfield, Great Falls, Loudoun County)
- **Social:** Facebook · Instagram · YouTube (@dmvconcretedelivery)

## Tech
- Static **HTML + CSS + vanilla JS** — no build step, no framework, no dependencies.
- Google Fonts (Archivo + Inter). Everything else is local.
- Accessible: semantic landmarks, single `<h1>`, keyboard nav, visible focus,
  `prefers-reduced-motion`, descriptive alt text, ARIA tabs on the calculator.
- SEO: descriptive title/meta, Open Graph, and `GeneralContractor` JSON-LD with service
  areas, opening hours, and social profiles.
- **Analytics:** Vercel Web Analytics — enable *Analytics* on the Vercel project and the script is served automatically (no key). A custom `order_request` event fires on form submit. Note: Web Analytics only reports when the site is served from Vercel.

## Structure
```
index.html            # full homepage (incl. calculator section)
css/styles.css        # design system + all sections + calculator + responsive
js/main.js            # fixed/transparent header, mobile menu, scroll reveals, form shell
js/calculator.js      # Slab / Column / Footing concrete calculator (live)
assets/img/           # real logo + truck photos + favicon
assets/video/         # hero background video + poster
```

## Design
**Safety orange on black/charcoal** — matching the DMV logo badge and the trucks
(`#EE6119`). Dark, transparent header (goes solid on scroll); the orange-on-black logo badge
reads cleanly over the video. Archivo + Inter typography.

## Notes for the client
- **Logo & photos are real** — pulled from the current site (logo badge is low-resolution;
  a vector/higher-res version can replace `assets/img/logo.png`).
- **Hero video** is a free Pexels clip (concrete pour), muted/looping, reduced-motion aware.
- **Order form** is front-end only — wire it to email or dispatch/CRM to capture orders.
- Only substantiated facts are used (VDOT A3/A4, 24-hour delivery, two phone lines, address,
  hours, service area) — no invented founding year, reviews, or claims.

## Deploy (GitHub Pages)
Settings → Pages → Source: `main` / root. The site publishes at the Pages URL.
Local preview: open `index.html`, or run `python3 -m http.server` in the repo root.

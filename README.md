# Seoul Ready — Korea Travel Essentials

Independent, English-language trip-preparation microsite for first-time visitors to South Korea.

## Contents

- `index.html` — responsive sales landing page and a browser-only two-question starter-trip planner
- `guides/korea-esim-guide.html` — practical eSIM/SIM comparison
- `guides/first-48-hours.html` — arrival, transit and low-stress trip planning
- `disclosure.html` — affiliate and privacy disclosures
- `assets/styles.css` — visual design
- `assets/site.js` — navigation, trip planner and affiliate link switching
- `assets/partners.js` — official URLs and empty placeholders for **approved** affiliate URLs
- `assets/favicon.svg` / `assets/preview.svg` — self-contained original SVG assets

## How it works

The site is entirely static: no framework, no backend, no personal data collection, and no payment processing. Its third-party links currently point to **official, non-affiliate pages**. No affiliate sales can be attributed until verified tracking links from approved programs are inserted.

The English copy **does not** claim to be partnered with any company, to have tried products firsthand, or to guarantee pricing, availability or approvals.

## Preview locally

Open `index.html` in a modern browser, or run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Publish with GitHub Pages

1. Create a **new public repository** named `seoul-ready` under the GitHub account that will host the site. Keep it separate from Decisionary's existing corporate website.
2. Upload all files **at the repository root**, preserving the directories.
3. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, root `/`.
4. When GitHub confirms deployment, the normal project URL format is `https://<username>.github.io/seoul-ready/`. Verify the exact URL provided by GitHub before using it.
5. Open the site on desktop and mobile. Test the guides, planner and outbound links.
6. Only then submit the published URL to affiliate programs if an application asks for a live website.

GitHub's settings UI and deployment options can change. The site is also compatible with basic static hosting and Cloudflare Pages.

## Activate affiliate links safely

In `assets/partners.js`, replace an **empty `affiliate` value** with the provider-generated, approved HTTPS link. For example:

```js
window.SEOUL_READY_PARTNERS.airalo.affiliate = "<paste-your-actual-approved-affiliate-link>";
```

The code is illustrative. Do **not** place invented identifiers in live pages. Viator product links can be generated in its partner dashboard after signup. If the merchant's terms require links to particular tours or custom page/link formats, adjust the destinations accordingly.

After adding links:
- Test redirects and tracking in the merchant dashboard using its approved test procedure.
- Confirm the link destination, geographic targeting, and promotional restrictions.
- Update the public disclosure if your tracking, privacy, or advertising setup changes.
- Keep the published site's content accurate: do not imply a relationship with an unapproved advertiser.

## Measurement

The static site intentionally ships **without Google Analytics, cookies, pixels or forms**. If analytics are later added, first review applicable disclosure and consent obligations, and update `disclosure.html`. Before revenue claims, use the merchants' dashboards for approved clicks, sales, refunds, and *payable* commissions. The trip planner's choices are not sent anywhere.

## Source review

Facts were checked on 2026-10-31 against the official provider and Korea travel pages linked within the guides. Check them again prior to launch and quarterly thereafter. Particularly sensitive to change: prices, network plans, travel requirements, transportation details and affiliate terms.

# Maestro Content Map

Page copy keyed by navigation `id` values from `src/data/navigation/`.

Source document: [`Maestro Website Content - Revised I.pdf`](../../Maestro Website Content - Revised I.pdf) (24 pages)

## Folder structure

```
src/data/content/
├── homepage/           # Homepage sections (/)
├── solutions/          # Hub page: /solutions#section-id
├── industries/         # Hub page: /industries#section-id
├── company/            # One file per /company/* slug (as built)
├── resources/          # One file per /resources/* slug (as built)
└── shared/             # Reusable CTAs, meta descriptions
```

Solutions and industries are **hub pages with hash sections**, not one file per slug.

---

## PDF → site mapping

| PDF section | Pages | Content path | Nav / URL |
|-------------|-------|--------------|-----------|
| Homepage hero & overview | 1–5 | `homepage/` | `/` |
| Platform Capabilities intro | 6 | `solutions/index.ts` (page intro) | `/solutions` |
| Customer Booking | 6 | `solutions/index.ts` → `#customer-booking` | `/solutions#customer-booking` |
| Quotation Management | 6–7 | `solutions/index.ts` → `#quotation-management` | `/solutions#quotation-management` |
| Digital Payments | 7 | `solutions/index.ts` → `#digital-payments` | `/solutions#digital-payments` |
| Customer Portal | 7–8 | Folded into `#customer-booking` | — |
| Fleet Management | 8 | `solutions/index.ts` → `#fleet-management` | `/solutions#fleet-management` |
| Driver Management | 8–9 | `solutions/index.ts` → `#driver-management` | `/solutions#driver-management` |
| Trip Planning & Dispatch | 9 | `solutions/index.ts` → `#dispatch-management` | `/solutions#dispatch-management` |
| Live Tracking | 9–10 | `solutions/index.ts` → `#live-tracking` | `/solutions#live-tracking` |
| Driver Mobile App | 10 | Folded into `#driver-management` / `#proof-of-delivery` | — |
| Proof of Pickup & Delivery | 10–11 | `solutions/index.ts` → `#proof-of-delivery` | `/solutions#proof-of-delivery` |
| Customer Notifications | 11 | Folded into `#customer-booking` | — |
| Billing & Invoicing | 11 | Folded into `#digital-payments` | — |
| Reporting & Analytics | 11–12 | `solutions/index.ts` → `#reporting-analytics` | `/solutions#reporting-analytics` |
| API Integrations | 12–13 | `solutions/index.ts` → `#api-integrations` | `/solutions#api-integrations` |
| Enterprise Security / Built to Scale | 13–14 | `shared/security.ts` or homepage | — |
| Industries overview | 14–15 | `industries/index.ts` (page intro) | `/industries` |
| Logistics & Transport | 14–15 | `industries/index.ts` → `#logistics` | `/industries#logistics` |
| Moving & Relocation | 15 | `industries/index.ts` → `#moving-relocation` | `/industries#moving-relocation` |
| Courier & Delivery | 15 | `industries/index.ts` → `#courier-services` | `/industries#courier-services` |
| Manufacturers & Distributors | 15 | Split → `#manufacturing`, `#distribution` *(adapted)* | `/industries#manufacturing`, `/industries#distribution` |
| Construction, Mining & Industrial | 15–16 | Split → `#construction`, `#mining` *(adapted)* | `/industries#construction`, `/industries#mining` |
| Government & Public Sector | 16 | `industries/index.ts` → `#government` | `/industries#government` |
| Why Organisations Trust Maestro | 17 | `company/about-maestro.ts` | `company.about-maestro` |
| About theSOFTtribe | 17 | `company/about-thesofttribe.ts` | `company.about-thesofttribe` |
| How Maestro Works | 18 | `homepage/how-it-works.ts` or `company/about-maestro.ts` | — |
| Product Roadmap | 19 | `resources/product-roadmap.ts` | `resources.product-roadmap` |
| FAQs | 20–21 | `resources/faqs.ts` | `resources.faqs` |
| Final CTA block | 22 | `shared/cta.ts` / homepage CTA | — |
| Footer reference | 23–24 | *(implemented in navigation)* | — |

Legacy leaf paths (`/solutions/fleet-management`, `/industries/logistics`, etc.) redirect to the matching hub hash.

---

## Adapted / generated copy (review)

These sections are **not** verbatim PDF:

1. **Manufacturing vs Distribution** — shared PDF body with a short differentiating lead sentence (`adapted: true`).
2. **Construction vs Mining** — same pattern (`adapted: true`).
3. Folded PDF modules (Customer Portal, Driver Mobile App, Notifications, Billing) — short lines merged into related solution sections.
4. Industries have Ideal for / Suitable for lists only — no invented feature lists.

---

## Content file shape (hub)

```ts
// src/data/content/solutions/index.ts
export const solutionsPage = {
  id: 'solutions',
  title: 'Solutions',
  eyebrow: '...',
  heading: '...',
  description: '...',
  sections: [
    {
      id: 'fleet-management', // → /solutions#fleet-management
      title: 'Fleet Management',
      description: '...',
      icon: 'truck',
      features: ['...'],
      benefits: ['...'],
    },
  ],
}
```

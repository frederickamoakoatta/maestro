# Maestro Content Map

This folder will hold all page copy keyed by navigation `id` values from `src/data/navigation/`. **No content files are populated yet** — this README documents how the PDF maps to future files.

Source document: [`Maestro Website Content - Revised I.pdf`](../../Maestro Website Content - Revised I.pdf) (24 pages)

## Folder structure (future)

```
src/data/content/
├── homepage/           # Homepage sections (/)
├── solutions/          # One file per /solutions/* slug
├── industries/         # One file per /industries/* slug
├── company/            # One file per /company/* slug
├── resources/          # One file per /resources/* slug
└── shared/             # Reusable CTAs, meta descriptions
```

Each content file should export data keyed by the matching nav `id` (e.g. `solutions.fleet-management`).

---

## PDF → site mapping

| PDF section | Pages | Future content path | Nav id(s) |
|-------------|-------|---------------------|-----------|
| Homepage hero & overview | 1–5 | `homepage/` | — |
| Platform Capabilities intro | 6 | `homepage/platform-capabilities.ts` or solutions index | — |
| Customer Booking | 6 | `solutions/customer-booking.ts` | `solutions.customer-booking` |
| Quotation Management | 6–7 | `solutions/quotation-management.ts` | `solutions.quotation-management` |
| Digital Payments | 7 | `solutions/digital-payments.ts` | `solutions.digital-payments` |
| Customer Portal | 7–8 | *(not in nav — homepage subsection or future page)* | — |
| Fleet Management | 8 | `solutions/fleet-management.ts` | `solutions.fleet-management` |
| Driver Management | 8–9 | `solutions/driver-management.ts` | `solutions.driver-management` |
| Trip Planning & Dispatch | 9 | `solutions/dispatch-management.ts` | `solutions.dispatch-management` |
| Live Tracking | 9–10 | `solutions/live-tracking.ts` | `solutions.live-tracking` |
| Driver Mobile App | 10 | *(not in nav — sub-feature)* | — |
| Proof of Pickup & Delivery | 10–11 | `solutions/proof-of-delivery.ts` | `solutions.proof-of-delivery` |
| Customer Notifications | 11 | *(not in nav — sub-feature)* | — |
| Billing & Invoicing | 11 | *(not in nav — sub-feature)* | — |
| Reporting & Analytics | 11–12 | `solutions/reporting-analytics.ts` | `solutions.reporting-analytics` |
| API Integrations | 12–13 | `solutions/api-integrations.ts` | `solutions.api-integrations` |
| Enterprise Security / Built to Scale | 13–14 | `shared/security.ts` or homepage | — |
| Industries overview | 14 | `industries/index.ts` or homepage | — |
| Logistics & Transport | 14–15 | `industries/logistics.ts` | `industries.logistics` |
| Moving & Relocation | 15 | `industries/moving-relocation.ts` | `industries.moving-relocation` |
| Courier & Delivery | 15 | `industries/courier-services.ts` | `industries.courier-services` |
| Manufacturers & Distributors | 15 | `industries/manufacturing.ts`, `industries/distribution.ts` | `industries.manufacturing`, `industries.distribution` |
| Construction, Mining & Industrial | 15–16 | `industries/construction.ts`, `industries/mining.ts` | `industries.construction`, `industries.mining` |
| Government & Public Sector | 16 | `industries/government.ts` | `industries.government` |
| Why Organisations Trust Maestro | 17 | `company/about-maestro.ts` | `company.about-maestro` |
| About theSOFTtribe | 17 | `company/about-thesofttribe.ts` | `company.about-thesofttribe` |
| How Maestro Works | 18 | `homepage/how-it-works.ts` or `company/about-maestro.ts` | — |
| Product Roadmap | 19 | `resources/product-roadmap.ts` | `resources.product-roadmap` |
| FAQs | 20–21 | `resources/faqs.ts` | `resources.faqs` |
| Final CTA block | 22 | `shared/cta.ts` | — |
| Footer reference | 23–24 | *(implemented in navigation)* | — |

---

## Nav gaps (decide during content phase)

These appear in the PDF but are **not** in the current header/footer nav:

- Customer Portal
- Driver Mobile App
- Billing & Invoicing
- Customer Notifications

Options: homepage feature cards, solution page sub-sections, or future dedicated pages.

---

## Content file shape (recommended)

```ts
// Example: src/data/content/solutions/fleet-management.ts
export const fleetManagementContent = {
  id: 'solutions.fleet-management',
  title: 'Fleet Management',
  metaDescription: '...',
  hero: { eyebrow: '...', title: '...', description: '...' },
  features: [{ title: '...', items: ['...'] }],
  benefits: ['...'],
}
```

Pages import by `id` from the route registry in `src/data/navigation/routes.ts`.

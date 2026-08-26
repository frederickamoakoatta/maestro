import type { CapabilityGroup } from '../../../types'

export const capabilityGroups: CapabilityGroup[] = [
  {
    id: 'shippers',
    title: 'For Shippers & Customers',
    icon: 'calendar-check',
    items: [
      {
        title: 'Customer Booking',
        description: 'Request transport and moving services through a simple digital booking experience.',
        href: '/solutions#customer-booking',
        icon: 'calendar-check',
      },
      {
        title: 'Online Payments',
        description: 'Accept secure payments through multiple channels and reconcile automatically.',
        href: '/solutions#digital-payments',
        icon: 'credit-card',
      },
      {
        title: 'Customer Notifications',
        description: 'Keep customers informed automatically throughout every stage of their booking.',
        href: '/solutions#customer-booking',
        icon: 'bell',
      },
      {
        title: 'Billing & Invoicing',
        description: 'Generate invoices, issue receipts and view complete payment histories.',
        href: '/solutions#digital-payments',
        icon: 'file-text',
      },
      {
        title: 'Live Tracking',
        description: 'Real-time GPS tracking and continuously updated arrival times for every trip.',
        href: '/solutions#live-tracking',
        icon: 'map-pin',
      },
      {
        title: 'Support & Help',
        description: 'Give customers quick answers and a clear path to operational support.',
        href: '/contact',
        icon: 'headset',
      },
    ],
  },
  {
    id: 'fleet',
    title: 'For Fleet Managers & Drivers',
    icon: 'steering-wheel',
    items: [
      {
        title: 'Fleet Management',
        description: 'Complete visibility over vehicles, drivers, documents and utilisation.',
        href: '/solutions#fleet-management',
        icon: 'truck',
      },
      {
        title: 'Quotation Management',
        description: 'Prepare, review and issue professional quotations before confirming bookings.',
        href: '/solutions#quotation-management',
        icon: 'file-text',
      },
      {
        title: 'Driver Management',
        description: 'Onboard drivers, manage licences and monitor performance from one platform.',
        href: '/solutions#driver-management',
        icon: 'user-circle',
      },
      {
        title: 'Trip Planning & Dispatch',
        description: 'Create jobs, assign vehicles and drivers, and manage every journey.',
        href: '/solutions#dispatch-management',
        icon: 'map-trifold',
      },
      {
        title: 'Proof of Pickup & Delivery',
        description: 'Capture photos, signatures and confirmations for a complete audit trail.',
        href: '/solutions#proof-of-delivery',
        icon: 'check',
      },
      {
        title: 'Reporting & Analytics',
        description: 'Measure performance through dashboards and management reports.',
        href: '/solutions#reporting-analytics',
        icon: 'chart-bar',
      },
    ],
  },
]

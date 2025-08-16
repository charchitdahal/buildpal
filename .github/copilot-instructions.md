You are building a SaaS landing page inspired by base44.com.
Stack: React + TailwindCSS.

Requirements:
1. Layout:
   - Hero section with a headline, subheadline, and CTA button.
   - Suggested templates/apps grid (e.g. Reporting Dashboard, Gaming Platform, Onboarding Portal).
   - Product features section (3-4 value props with icons).
   - Testimonials carousel.
   - Pricing section (Free plan + Paid tiers).
   - FAQ accordion.
   - Footer with navigation and social links.

2. Styling:
   - Use Tailwind utility classes.
   - Colors: white background, gray text (#111827 for headings, #6b7280 for body), gradient buttons with indigo (#6366f1) → pink (#ec4899).
   - Typography: large bold headlines (text-5xl font-bold), medium subheads (text-2xl), body (text-base text-gray-600).
   - Buttons: pill-shaped with gradient background, hover opacity change.
   - Cards: rounded-2xl, shadow-md, hover:shadow-lg, with padding.

3. Interactions:
   - Hero CTA button scrolls to Pricing section.
   - Testimonials auto-rotate with fade animation.
   - FAQ uses collapsible accordion.
   - Hover states: buttons fade, cards scale up slightly.

4. Code Style:
   - Use functional React components with clear separation (Hero, Templates, Features, Testimonials, Pricing, FAQ, Footer).
   - Export default App component assembling these sections.
   - Include sample placeholder data for testimonials, FAQs, and pricing.

5. Deliverable:
   - A single React file (e.g., App.jsx) that renders the full homepage.
   - All components defined inline or in same file for simplicity.
   - Fully styled with Tailwind, responsive, and production-ready skeleton.

# Implementation Tasks

## Phase 1: Initial Setup
- [ ] Initialize Next.js project with App Router, Tailwind CSS, and TypeScript.
- [ ] Install dependencies: `framer-motion`, `lucide-react`, `clsx`, `tailwind-merge` (and optionally `radix-ui` primitives for accessibility).
- [ ] Setup global typography (e.g., Inter or SF Pro Display) in `layout.tsx`.
- [ ] Define color variables in `tailwind.config.ts` to support the stark dark/light section alternations.

## Phase 2: Core Components Componentization
- [ ] Create standardized `Button` component (variants: primary white, dark outline, etc.).
- [ ] Create `Section` layout wrapper to easily toggle dark (`bg-black text-white`) and light (`bg-[#F9F9F9] text-black`) themes per section.
- [ ] Create `Card` component for the bento-box grids and features.
- [ ] Create `Accordion` component for the FAQ section using Framer Motion for smooth height transitions.

## Phase 3: Building Sections
- [ ] **Navigation**: Implement responsive top navigation with sticky positioning.
- [ ] **Hero Section**: Build centered layout with an oversized headline and staggered Framer Motion text reveal.
- [ ] **Split Economy Section**: Implement a two-column layout (Text/Chart) and the comparison cards underneath.
- [ ] **Alignment Layer Section**: Build the complex bento-box grid layout using CSS Grid and style the tinted feature badges (Orange, Blue, Green).
- [ ] **Shared Upside Section**: Layout the value proposition on the left and build the dashboard UI mockup (revenue progress bars) on the right.
- [ ] **FAQ Section**: Implement the dark-themed FAQ mapped to an array of questions and answers.
- [ ] **Bottom CTA & Footer**: Build the final call-to-action block and simple footer.

## Phase 4: Animations & Polish
- [ ] Add `framer-motion` scroll triggers (`whileInView`) to smoothly fade and slide sections upward upon scroll.
- [ ] Add stagger effects to the feature cards array and FAQ items.
- [ ] Fine-tune mobile responsiveness (collapsing grids to single columns, adjusting font sizes).
- [ ] Complete final UI polish comparing against the reference image.

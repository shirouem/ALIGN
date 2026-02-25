# UI Principles and Layout

## Overall Theme & Aesthetics
- **Vibe**: Modern, structural, highly professional, and data-driven.
- **Color Palette**: 
  - **Backgrounds**: The landing page uses stark, high-contrast sectioning. It alternates between deep Black (`#000000` or `#050505`) and clean Off-White/Light Gray (`#F9F9F9` or `#FFFFFF`).
  - **Text**: Maximum contrast (White on dark, Dark Gray/Black on light).
  - **Accents**: Subtle, desaturated tinted badges and soft glows (e.g., pale orange for Offers, pale blue for Funnels, pale green for Monetization) to break up the monochrome structure.
- **Typography**: 
  - Sleek, modern sans-serif (e.g., Inter, SF Pro Display, or bold geometric fonts).
  - Employs tight tracking on extremely large headings and contrasting font weights (bold headlines, medium/regular body copy) to create clear visual hierarchy.

## Layout Structure
The landing page flows seamlessly across varied layout patterns:

1. **Navigation (Dark)**
   - Logo aligned left ("ALIGN").
   - Navigation links centered ("Philosophy", "The Core", "The Model").
   - Actionable "Request Access" pill button on the right.

2. **Hero Section (Dark)**
   - Centered alignment over a dark background.
   - Oversized, dramatic heading: "The infrastructure for distribution-first revenue."
   - Subtitle below, anchored by two CTA buttons (Primary: White pill; Secondary: Outline pill).

3. **Split Economy Section (Dark)**
   - Top half: Text on the left ("The modern economy is split"), juxtaposed with a bar chart/data visualization on the right.
   - Bottom half: Two horizontal cards side-by-side comparing current pain points ("Distribution without infrastructure" vs "Product without Distribution").

4. **The Alignment Layer (Light)**
   - A distinct background shift to white/light-gray.
   - Uses a bento-box grid layout focusing on core services.
   - Feature cards have soft padding, subtle borders, and incorporate miniature diagram/icon illustrations with colored pill-shaped tags (Orange, Blue, Green).

5. **Shared Upside Section (Light)**
   - Two-column layout.
   - Left side focuses on the value proposition ("We don't act like an agency") with bulleted icons.
   - Right side features a detailed mock-UI card representing a financial dashboard with revenue metrics and progress bars, serving as social proof / feature preview.

6. **FAQ Section (Dark)**
   - Shifts back to a dark background.
   - Simple, centered question-and-answer accordion list, split by thin horizontal dividers for a clean look.

7. **Final CTA & Footer (Light)**
   - Shifts back to light one final time.
   - Centered CTA block: "NEXT MOONSHOTS" eyebrow text, a bold heading ("Ready to align your revenue?"), and a final "Request Access" button.
   - Minimalist footer handling copyright ("© 2024 Align Infrastructure, Inc.") and minimal social links (Twitter, LinkedIn).

## Animation Principles (Framer Motion)
- **Entrance**: Content should utilize subtle fade-ins and upward glides as it scrolls into the viewport.
- **Micro-interactions**: Hovering over cards should produce a tiny `translate-y` lift or a very soft glow to encourage interactivity. Buttons should have slight scaling on press or hover.
- **Staggered Orchestration**: When grid elements or list items (like the bento cards or FAQ questions) enter the screen, their animation should be staggered to create a feeling of a sequential reveal.

# NxtFi Website Design Style Guide

This style guide outlines the design elements, color scheme, typography, and components used in the NxtFi website.

## Brand Identity

NxtFi is a modern crypto-to-fiat platform that bridges the digital and traditional financial worlds. The brand identity reflects innovation, security, and professionalism with a tech-forward aesthetic.

### Logo

![NxtFi Logo](images/logo.png)

The NxtFi logo features the name "NxtFi" in a modern, futuristic font with a blue-to-purple gradient that represents the bridge between cryptocurrency and traditional finance.

- **Usage:** The logo should always have adequate spacing around it and should never be stretched or distorted.
- **Minimum Size:** The logo should not be displayed smaller than 30px in height to maintain legibility.

## Color Palette

### Primary Colors

- **Primary Blue:** #6c5ce7
  - Hex: #6c5ce7
  - RGB: 108, 92, 231
  - Used for: Primary buttons, important highlights, and key elements

- **Primary Purple:** #a29bfe
  - Hex: #a29bfe
  - RGB: 162, 155, 254
  - Used for: Secondary elements, gradients, and accents

### Secondary Colors

- **Secondary Teal:** #00cec9
  - Hex: #00cec9
  - RGB: 0, 206, 201
  - Used for: Accent elements, success states, and highlights

- **Secondary Light Teal:** #81ecec
  - Hex: #81ecec
  - RGB: 129, 236, 236
  - Used for: Light accents and gradient endpoints

### Background Colors

- **Dark Background:** #1e1e2e
  - Hex: #1e1e2e
  - RGB: 30, 30, 46
  - Used for: Main background color

- **Darker Background:** #13131f
  - Hex: #13131f
  - RGB: 19, 19, 31
  - Used for: Secondary background, cards, and sections

### Text Colors

- **Light Text:** #f5f6fa
  - Hex: #f5f6fa
  - RGB: 245, 246, 250
  - Used for: Primary text on dark backgrounds

- **Gray Text:** #636e72
  - Hex: #636e72
  - RGB: 99, 110, 114
  - Used for: Secondary text and less important information

### Functional Colors

- **Success:** #00b894
  - Hex: #00b894
  - RGB: 0, 184, 148
  - Used for: Success messages and positive states

- **Warning:** #fdcb6e
  - Hex: #fdcb6e
  - RGB: 253, 203, 110
  - Used for: Warning messages and cautionary states

- **Danger:** #d63031
  - Hex: #d63031
  - RGB: 214, 48, 49
  - Used for: Error messages and negative states

### Gradients

- **Primary Gradient:** Linear gradient from #6c5ce7 to #a29bfe (135 degrees)
  - CSS: `linear-gradient(135deg, #6c5ce7 0%, #a29bfe 100%)`
  - Used for: Buttons, section backgrounds, and important UI elements

- **Secondary Gradient:** Linear gradient from #00cec9 to #81ecec (135 degrees)
  - CSS: `linear-gradient(135deg, #00cec9 0%, #81ecec 100%)`
  - Used for: Secondary elements and alternative highlights

- **Dark Gradient:** Linear gradient from #1e1e2e to #13131f (135 degrees)
  - CSS: `linear-gradient(135deg, #1e1e2e 0%, #13131f 100%)`
  - Used for: Background elements and sections

## Typography

### Primary Font

**Poppins** is used as the primary font family throughout the website.

- Font Family: 'Poppins', sans-serif
- Weights Used: 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- Source: Google Fonts

### Font Sizes

- **Headings:**
  - H1: 3.5rem (56px) - Used for main page headings
  - H2: 2.5rem (40px) - Used for section headings
  - H3: 1.5rem (24px) - Used for subsection headings
  - H4: 1.25rem (20px) - Used for card headings
  - H5: 1rem (16px) - Used for small headings
  - H6: 0.875rem (14px) - Used for the smallest headings

- **Body Text:**
  - Regular: 1rem (16px) - Used for main body text
  - Small: 0.875rem (14px) - Used for secondary information
  - Lead: 1.25rem (20px) - Used for introductory paragraphs

### Line Heights

- Headings: 1.2
- Body Text: 1.6

## Spacing

- **Extra Small (xs):** 0.5rem (8px)
- **Small (sm):** 1rem (16px)
- **Medium (md):** 2rem (32px)
- **Large (lg):** 3rem (48px)
- **Extra Large (xl):** 5rem (80px)

## Border Radius

- **Small:** 0.25rem (4px) - Used for small elements like badges
- **Medium:** 0.5rem (8px) - Used for buttons and input fields
- **Large:** 1rem (16px) - Used for cards and containers
- **Extra Large:** 2rem (32px) - Used for featured elements and modals

## Shadows

- **Small Shadow:** 0 2px 4px rgba(0, 0, 0, 0.1)
  - Used for subtle elevation of elements

- **Medium Shadow:** 0 4px 8px rgba(0, 0, 0, 0.1)
  - Used for cards and containers

- **Large Shadow:** 0 8px 16px rgba(0, 0, 0, 0.1)
  - Used for modals and dropdowns

- **Extra Large Shadow:** 0 16px 32px rgba(0, 0, 0, 0.1)
  - Used for elevated featured elements

## UI Components

### Buttons

#### Primary Button
- Background: Primary Gradient
- Text Color: Light Text (#f5f6fa)
- Border: None
- Border Radius: Medium (0.5rem)
- Padding: 0.75rem 1.5rem
- Shadow: 0 4px 15px rgba(108, 92, 231, 0.4)
- Hover Effect: Transform translateY(-2px) and increased shadow

#### Secondary Button (Outline)
- Background: Transparent
- Text Color: Light Text (#f5f6fa)
- Border: 2px solid Light Text (#f5f6fa)
- Border Radius: Medium (0.5rem)
- Padding: 0.75rem 1.5rem
- Hover Effect: Background opacity 0.1 and transform translateY(-2px)

#### Large Button
- Same styles as regular buttons but with increased padding (1rem 2rem) and font size (1.1rem)

### Cards

#### Feature Card
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.05)
- Border Radius: Large (1rem)
- Padding: Medium (2rem)
- Shadow: Medium Shadow
- Hover Effect: Transform translateY(-10px) and increased border opacity

#### Product Card
- Similar to Feature Card but with product-specific styling
- Product title in Primary Purple color

#### Step Card
- Similar to Feature Card but with step-specific styling
- Includes step number or icon

### Forms

#### Input Fields
- Background: rgba(255, 255, 255, 0.05)
- Border: 1px solid rgba(255, 255, 255, 0.1)
- Border Radius: Medium (0.5rem)
- Text Color: Light Text (#f5f6fa)
- Padding: 0.75rem 1rem
- Focus State: Border color changes to Primary Purple

#### Form Labels
- Text Color: Light Text (#f5f6fa)
- Font Weight: Medium (500)
- Margin Bottom: Extra Small (0.5rem)

### Icons

- **Feature Icons:** Used in feature cards, sized at 2.5rem
- **Step Icons:** Used in how it works section, sized at 2.5rem
- **Social Icons:** Used in footer, sized at 1.5rem
- **UI Icons:** Used throughout the interface, sized appropriately for context

## Responsive Breakpoints

- **Extra Small:** < 576px (Mobile phones)
- **Small:** 576px - 767px (Large phones and small tablets)
- **Medium:** 768px - 991px (Tablets and small laptops)
- **Large:** 992px - 1199px (Laptops and desktops)
- **Extra Large:** ≥ 1200px (Large desktops)

## Animation

- **Scroll Animations:** AOS (Animate On Scroll) library with 800ms duration
- **Hover Animations:** Smooth transitions with 300ms duration
- **Button Animations:** Subtle scale and shadow changes on hover
- **Page Transitions:** Smooth fades between pages

## Images and Graphics

- **Hero Image:** Large, impactful image or illustration at the top of the page
- **Feature Images:** Illustrations or icons representing features
- **Problem Images:** Visual representations of the problems NxtFi solves
- **Product Screenshots:** Clean, professional screenshots of the platform
- **Background Elements:** Subtle patterns or graphics to add depth

## Accessibility

- **Color Contrast:** All text meets WCAG AA standards for readability
- **Focus States:** Clearly visible focus indicators for keyboard navigation
- **Text Alternatives:** All images have appropriate alt text
- **Semantic HTML:** Proper heading structure and ARIA attributes where needed

## Implementation Notes

- Use CSS variables for consistent application of the design system
- Maintain responsive design principles throughout
- Ensure cross-browser compatibility
- Optimize assets for performance


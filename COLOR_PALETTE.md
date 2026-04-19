# WebSprint Color Palette

## Primary Colors

### Dark Teal (Primary Brand Color)
- **Hex:** `#0d5f6d`
- **RGB:** `13, 95, 109`
- **Usage:** Main buttons, headings, active states, primary CTAs

### Teal Accent (Secondary Brand Color)
- **Hex:** `#4dd4ac`
- **RGB:** `77, 212, 172`
- **Usage:** Highlights, accents, hover effects, borders

### Dark Background
- **Hex:** `#1a3d4a`
- **RGB:** `26, 61, 74`
- **Usage:** Dark sections, footer, dark mode backgrounds

### Darkest Background
- **Hex:** `#0d2832`
- **RGB:** `13, 40, 50`
- **Usage:** Gradients, deep backgrounds

---

## Secondary Colors

### Light Background
- **Hex:** `#f8f9fa`
- **RGB:** `248, 249, 250`
- **Usage:** Light sections, form backgrounds

### Light Gray
- **Hex:** `#e9ecef`
- **RGB:** `233, 236, 239`
- **Usage:** Borders, dividers, subtle backgrounds

### Medium Gray
- **Hex:** `#5a6c75`
- **RGB:** `90, 108, 117`
- **Usage:** Secondary text, descriptions

### Dark Gray
- **Hex:** `#1a3d4a`
- **RGB:** `26, 61, 74`
- **Usage:** Primary text, headings

---

## Gradient Combinations

### Primary Gradient
```css
background: linear-gradient(135deg, #0d5f6d 0%, #4dd4ac 100%);
```

### Dark Gradient
```css
background: linear-gradient(135deg, #0d5f6d 0%, #1a3d4a 100%);
```

### Light Gradient
```css
background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
```

---

## Usage Guide

### Buttons
- **Primary Button:** `#0d5f6d` background, white text
- **Secondary Button:** Transparent with `#0d5f6d` border
- **Hover State:** `#0a4a56` (darker teal)

### Text
- **Headings:** `#1a3d4a` (dark gray)
- **Body Text:** `#5a6c75` (medium gray)
- **Light Text (on dark):** `#ffffff` (white)

### Backgrounds
- **Light Sections:** `#f8f9fa`
- **Dark Sections:** `#0d5f6d` or `#1a3d4a`
- **Accents:** `#4dd4ac`

### Borders & Dividers
- **Default:** `#e9ecef`
- **Active:** `#0d5f6d`
- **Accent:** `#4dd4ac`

---

## CSS Variables (Optional)

You can add these to your CSS for easier maintenance:

```css
:root {
  --primary-dark: #0d5f6d;
  --primary-accent: #4dd4ac;
  --dark-bg: #1a3d4a;
  --darkest-bg: #0d2832;
  --light-bg: #f8f9fa;
  --light-gray: #e9ecef;
  --medium-gray: #5a6c75;
  --dark-gray: #1a3d4a;
  --white: #ffffff;
}
```

Then use in CSS:
```css
button {
  background: var(--primary-dark);
  color: var(--white);
}
```

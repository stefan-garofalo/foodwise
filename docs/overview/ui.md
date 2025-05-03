# UI System

## Overview

The UI system provides a comprehensive set of components, utilities, and styling
conventions based on shadcn/ui with custom implementations using Tailwind CSS.

## Architecture

### Module Structure

```
modules/ui/
├── primitives/         # Base UI components
├── icons/             # Icon components
├── utils/             # Utilities (tailwind, types)
├── hooks/             # UI-related hooks
└── framer/            # Motion/animation components
```

### Design System

#### Color Palette

```css
/* Primary colors */
--color-apple-green: oklch(0.55 0.12 123.82);
--color-terracotta: oklch(0.69 0.14 48.86);

/* Neutral colors */
--color-deep-teal-*: oklch(...); /* Teal variations */
--color-off-white-*: oklch(...); /* White variations */
--color-subtle-cream: oklch(0.98 0.02 90);

/* Semantic colors */
--color-background: light-dark(off-white, deep-teal);
--color-foreground: light-dark(deep-teal, subtle-cream);
--color-primary: light-dark(terracotta, apple-green);
--color-border: light-dark(off-white-darkest, deep-teal-lighter);
--color-danger: light-dark(error, error-darker);
```

#### Typography

```css
/* Font families */
--font-geist: var(--font-geist); /* Body text */
--font-instrument: var(--font-instrument); /* Headings */

/* Type scale */
--text-title: 3rem; /* 48px */
--text-title-sm: 1.75rem; /* 28px */
--text-title-xs: 1.5rem; /* 24px */
```

## Core Components

### Button

Versatile button component with variants and sizes.

```typescript
<Button variant="default" size="full">
  Sign in with Google
</Button>

// Variants: default, danger, outline, link
// Sizes: default, lg, icon, full
```

### Typography

Heading components with semantic HTML.

```typescript
<Title variant="title" heading="h1">
  Page Title
</Title>

// Variants: title, subtitle
// Optional heading prop for SEO
```

### Other Primitives

- Accordion
- Slider
- Image/Picture
- MediaQuery
- Select
- HTML (rich text renderer)

## Icons System

Custom icon components and `react-lucide` integration.

### Google Icon Example

```typescript
<GoogleIcon className="size-4" color="currentColor" />
```

### Icon Props Interface

```typescript
type IconProps = {
	className?: ClassValue
	color: string
}
```

## Utilities

### Tailwind Merge

Safe class merging with Tailwind CSS.

```typescript
import { merge } from '@/modules/ui/utils/tailwind'

<div className={merge('base-class', conditionalClass, className)} />
```

### Type Utilities

```typescript
type ClassProps = { className?: ClassValue }
type BaseComponentProps = PropsWithChildren & ClassProps
```

## Theming

### Color Scheme

The system supports light/dark modes using CSS `light-dark()` function:

```css
color: light-dark(
	var(--color-off-white),
	/* Light mode */ var(--color-deep-teal-darkest) /* Dark mode */
);
```

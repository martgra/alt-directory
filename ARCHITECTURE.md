# Architecture Documentation

## Overview

This project follows a **feature-based architecture** with clear separation of concerns, using shadcn/ui for UI components and organized into distinct layers.

## Directory Structure

```
src/
├── components/          # Shared components
│   ├── layout/         # Layout components (Header, Footer, etc.)
│   └── ui/             # shadcn/ui components (Button, Badge, Card, etc.)
├── config/             # Configuration and constants
├── data/               # Static data and data sources
├── features/           # Feature modules
│   └── alternatives/   # Alternatives feature
│       └── components/ # Feature-specific components
├── lib/                # Shared utilities
├── types/              # TypeScript type definitions
├── App.tsx             # Root application component
├── main.tsx            # Application entry point
└── index.css           # Global styles
```

## Architectural Layers

### 1. Configuration Layer (`/config`)

Centralized configuration and constants.

**Files:**

- `site.ts` - Site-wide configuration (name, links, navigation)
- `constants.ts` - Application constants (tags, enums)

**Purpose:**

- Single source of truth for configuration
- Type-safe constants
- Easy to modify site-wide settings

### 2. Type Layer (`/types`)

TypeScript type definitions and interfaces.

**Files:**

- `Alternative.ts` - Core domain types (Platform, AlternativePlatform, Alternative)

**Purpose:**

- Type safety across the application
- Clear data contracts
- Reusable type definitions

### 3. Data Layer (`/data`)

Static data and data sources.

**Files:**

- `alternatives.ts` - Social media alternatives data

**Purpose:**

- Separation of data from presentation
- Easy to replace with API calls in the future
- Centralized data management

**Future enhancements:**

- API integration
- Data fetching hooks
- Caching layer

### 4. Feature Layer (`/features`)

Feature modules with isolated components and logic.

**Structure:**

```
features/
└── alternatives/
    ├── components/      # Feature-specific components
    ├── hooks/           # (Future) Feature-specific hooks
    └── utils/           # (Future) Feature-specific utilities
```

**Components in `alternatives/components`:**

- `platform-icon.tsx` - Displays platform icon with styling
- `platform-badge.tsx` - Platform name + icon combination
- `alternative-link.tsx` - Alternative platform with tag and link
- `alternative-row.tsx` - Single row in the alternatives list
- `alternatives-list.tsx` - Main list component
- `index.ts` - Public API (exports only AlternativesList and AlternativeRow)

**Purpose:**

- Feature isolation and encapsulation
- Single responsibility principle
- Easy to add new features
- Clear feature boundaries

### 5. Shared Components Layer (`/components`)

#### Layout Components (`/components/layout`)

Application-wide layout components.

**Files:**

- `Header.tsx` - Site header with navigation
- `Footer.tsx` - Site footer with links
- `site-logo.tsx` - Site logo and branding
- `section-header.tsx` - Reusable section header

**Purpose:**

- Consistent layout across pages
- Reusable layout patterns

#### UI Components (`/components/ui`)

shadcn/ui components - reusable, accessible UI primitives.

**Files:**

- `button.tsx` - Button component with variants
- `badge.tsx` - Badge component for tags
- `card.tsx` - Card component with subcomponents
- `separator.tsx` - Divider/separator component

**Purpose:**

- Consistent design system
- Accessible components
- Composable UI primitives
- CVA (class-variance-authority) for variant management

### 6. Utility Layer (`/lib`)

Shared utilities and helper functions.

**Files:**

- `utils.ts` - cn() function for className merging (clsx + tailwind-merge)

**Purpose:**

- Reusable utility functions
- Consistent utility patterns

## Design Patterns

### 1. Component Composition

Components are composed from smaller, single-purpose components:

```tsx
<AlternativesList>
  <AlternativeRow>
    <PlatformBadge>
      <PlatformIcon />
    </PlatformBadge>
    <AlternativeLink>
      <PlatformIcon />
    </AlternativeLink>
  </AlternativeRow>
</AlternativesList>
```

### 2. Props Drilling vs Composition

- **Feature components** receive full domain objects (Alternative, Platform)
- **UI components** receive primitive props (string, boolean, etc.)
- This keeps UI components reusable and feature components focused

### 3. Barrel Exports

Each feature exports its public API through an `index.ts`:

```ts
// features/alternatives/components/index.ts
export { AlternativesList } from "./alternatives-list";
export { AlternativeRow } from "./alternative-row";
// Internal components (platform-icon, etc.) are NOT exported
```

**Benefits:**

- Clear public vs private API
- Easy refactoring of internals
- Clean imports for consumers

### 4. Configuration-Driven UI

UI text and links come from configuration:

```ts
// Instead of hardcoding
<a href="#">Privacy</a>

// Use configuration
{footerLinks.map(link => (
  <a href={link.href}>{link.title}</a>
))}
```

## Styling Strategy

### Tailwind CSS v4

- Uses new `@import 'tailwindcss'` syntax
- Custom theme in `@theme` block in CSS
- No more `@tailwind` directives

### Class Merging

All components use `cn()` utility for className merging:

```tsx
<div className={cn("base-classes", conditional && "extra", className)} />
```

**Benefits:**

- Resolves Tailwind class conflicts
- Allows prop-based className overrides
- Clean conditional classes

### Component Variants (CVA)

UI components use `class-variance-authority` for variants:

```tsx
const buttonVariants = cva("base-classes", {
  variants: {
    variant: { default: "...", outline: "..." },
    size: { default: "...", sm: "...", lg: "..." },
  },
});
```

## Type Safety

### Strict Types

- All data structures are typed
- No `any` types allowed
- Const assertions for configuration (`as const`)

### Type Inference

```ts
export const ALTERNATIVE_TAGS = {
  FEDERATED: "Federated",
  DECENTRALIZED: "Decentralized",
  OPEN_SOURCE: "Open Source",
} as const;

export type AlternativeTag = (typeof ALTERNATIVE_TAGS)[keyof typeof ALTERNATIVE_TAGS];
// Type is: "Federated" | "Decentralized" | "Open Source"
```

## Path Aliases

All imports use `@/` alias for clean imports:

```ts
import { cn } from "@/lib/utils";
import { Alternative } from "@/types/Alternative";
import { siteConfig } from "@/config/site";
```

**Configuration:**

- `tsconfig.json` - `"@/*": ["src/*"]`
- `vite.config.ts` - `alias: { '@': path.resolve(__dirname, './src') }`

## Future Enhancements

### Data Layer

- [ ] API integration hooks
- [ ] Data fetching with React Query / SWR
- [ ] Optimistic updates
- [ ] Loading and error states

### Features

- [ ] Search/filter functionality
- [ ] Categories feature
- [ ] User submissions feature
- [ ] Favorites/bookmarks feature

### Testing

- [ ] Unit tests with Vitest
- [ ] Component tests with Testing Library
- [ ] E2E tests with Playwright

### Performance

- [ ] Route-based code splitting
- [ ] Image optimization
- [ ] Virtual scrolling for large lists

## Adding a New Feature

1. Create feature directory: `src/features/my-feature/`
2. Add components: `src/features/my-feature/components/`
3. Create barrel export: `src/features/my-feature/components/index.ts`
4. Add types if needed: `src/types/MyFeature.ts`
5. Add data if needed: `src/data/my-feature.ts`
6. Import in `App.tsx` using public API

## Best Practices

1. **Keep components small** - Single responsibility
2. **Use configuration** - Don't hardcode strings
3. **Export judiciously** - Only export what's needed publicly
4. **Type everything** - Leverage TypeScript
5. **Compose components** - Build complex UIs from simple pieces
6. **Use shadcn/ui** - Don't build custom UI primitives
7. **Follow naming conventions** - PascalCase for components, kebab-case for files
8. **Co-locate styles** - Use Tailwind classes in components

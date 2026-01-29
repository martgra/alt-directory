# Configuration Guide

This directory contains all centralized configuration for the AltDirectory application. All text content, design tokens, and constants are managed here for easy updates and maintenance.

## Configuration Files

### `copy.ts` - User-Facing Text

All user-visible text, labels, messages, and copy. Update this file to change any text in the application.

**Includes:**

- Site metadata (name, description, tagline)
- Navigation labels
- Page titles and descriptions
- Form labels, placeholders, and help text
- Button text
- Validation messages
- Error messages

**Usage:**

```typescript
import { copy } from "@/config";

// Use in components
<h1>{copy.pages.home.title}</h1>
<Button>{copy.suggestForm.buttonText}</Button>
```

### `theme.ts` - Design Tokens

Visual design system including colors, spacing, typography, and other design tokens.

**Includes:**

- Colors (primary, background, border, text, status)
- Spacing scales
- Border radius values
- Typography scales
- Shadows
- Transitions
- Icon sizes

**Usage:**

```typescript
import { theme } from "@/config";

// Use in components
<div className={theme.radius.card}>
  <h1 className={theme.typography.heading.h1}>Title</h1>
</div>
```

### `constants.ts` - Application Constants

Constant values used throughout the application.

**Includes:**

- Alternative tags/categories
- Type definitions

**Usage:**

```typescript
import { ALTERNATIVE_TAGS } from "@/config";

// Use in forms or filters
{Object.entries(ALTERNATIVE_TAGS).map(([key, value]) => (
  <option key={key} value={value}>{value}</option>
))}
```

### `site.ts` - Site Configuration

Site-level configuration including URLs, links, and API endpoints.

**Includes:**

- Site metadata
- External links
- Navigation structure
- Social media links
- API endpoints

**Usage:**

```typescript
import { siteConfig } from "@/config";

// Use for API calls
fetch(siteConfig.api.submitSuggestion, {
  method: "POST",
  body: JSON.stringify(data),
});
```

### `index.ts` - Unified Export

Single entry point for all configuration. Import everything from here.

**Usage:**

```typescript
// Import everything you need in one line
import { copy, theme, siteConfig, ALTERNATIVE_TAGS } from "@/config";
```

## Best Practices

### 1. Always use centralized config

❌ **Don't do this:**

```typescript
<button>Submit Suggestion</button>
<div className="text-3xl font-bold">Title</div>
```

✅ **Do this:**

```typescript
<button>{copy.suggestForm.buttons.submit}</button>
<div className={theme.typography.heading.h1}>Title</div>
```

### 2. Add new text to copy.ts

When adding new features, add all text to `copy.ts` first:

```typescript
export const copy = {
  // ...existing config

  // Add new feature text
  newFeature: {
    title: "New Feature",
    description: "Description here",
    buttons: {
      action: "Do Something",
    },
  },
} as const;
```

### 3. Keep related config together

Group related configuration in the same section:

```typescript
suggestForm: {
  buttonText: "Suggest Alternative",
  title: "Suggest an Alternative",
  fields: { /* all fields */ },
  buttons: { /* all buttons */ },
  validation: { /* all validation */ },
}
```

### 4. Use TypeScript const assertions

Always use `as const` to get type safety and autocomplete:

```typescript
export const copy = {
  // ...config
} as const;
```

## Updating Content

### To change text:

1. Find the text in `copy.ts`
2. Update the value
3. The change applies everywhere automatically

### To change colors:

1. Update values in `theme.ts`
2. Colors update across the entire app

### To add new categories:

1. Add to `ALTERNATIVE_TAGS` in `constants.ts`
2. New category available in forms automatically

## Type Safety

All configuration is fully typed. You'll get autocomplete and type errors if you reference non-existent config:

```typescript
// ✅ TypeScript knows this exists
copy.suggestForm.buttonText;

// ❌ TypeScript error - doesn't exist
copy.suggestForm.invalidKey;
```

## Localization Ready

This structure makes it easy to add localization/translations in the future:

```typescript
// Future: copy.en.ts, copy.es.ts, etc.
import { copy } from `@/config/copy.${locale}`;
```

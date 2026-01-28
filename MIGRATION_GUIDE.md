# Migration Guide: Grouped Alternatives

## Overview

The data structure has been refactored to support multiple alternatives per original platform, eliminating duplication.

## Changes

### Before (Old Structure)

```ts
// Each alternative was a separate entry with repeated original data
{
  id: 'bluesky',
  original: { name: 'Twitter / X', ... },
  alternative: { name: 'Bluesky', ... }
},
{
  id: 'mastodon',
  original: { name: 'Twitter / X', ... }, // DUPLICATED
  alternative: { name: 'Mastodon', ... }
}
```

### After (New Structure)

```ts
// Alternatives grouped by original platform
{
  id: 'twitter',
  original: { name: 'Twitter / X', ... },
  alternatives: [
    { name: 'Bluesky', ... },
    { name: 'Mastodon', ... },
    { name: 'Threads', ... }
  ]
}
```

## UI Behavior

### Accordion with Top Pick

Each row now shows:

1. **Original platform** (left side)
2. **Top pick alternative** (right side) - the first item in the `alternatives` array
3. **Expand button** (if multiple alternatives exist) - shows "+2" badge for additional options
4. **Accordion expansion** - click to reveal all other alternatives below
5. **Animated transitions** with staggered appearance

The first alternative in each group is the "top pick" shown by default. Click the expand button to see all other options in an accordion panel.

## Files Updated

### Data Structure

- `src/types/Alternative.ts` - Added `AlternativeGroup` type
- `src/data/alternatives-grouped.ts` - New grouped data structure
- `src/config/constants.ts` - Added new tags (PRIVACY, CREATOR, STREAMING, etc.)

### Components

- `src/features/alternatives/components/alternative-group-row.tsx` - New component with accordion
- `src/features/alternatives/components/alternatives-list.tsx` - Updated to use groups
- `src/features/alternatives/components/index.ts` - Export new component

## Migration Steps

1. Review `src/data/alternatives-grouped.ts` for the new structure
2. Order alternatives within each group by preference (first = top pick)
3. The old `alternatives.ts` file can be removed once migration is complete
4. Alternative details lookup will try `{groupId}-{alternativeName}` then fall back to `{groupId}`

## Benefits

- **No duplication** - Original platform defined once per group
- **Better UX** - Clear top recommendation with option to explore others
- **Easier maintenance** - Add/remove alternatives without touching original data
- **Scalable** - Can easily add 10+ alternatives for popular platforms

## Visual Example

**Collapsed (default):**

```
Twitter/X  →  Bluesky  [+3 ▼]
```

**Expanded (after clicking +3):**

```
Twitter/X  →  Bluesky  [+3 ▲]
              ┌────────────────┐
              │ Mastodon       │
              │ Threads        │
              │ Substack Notes │
              └────────────────┘
```

The accordion smoothly animates open/closed, with alternatives appearing in a staggered animation.

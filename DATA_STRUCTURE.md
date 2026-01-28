# Alternative Data Structure

This document describes the comprehensive data structure for storing detailed information about alternative platforms.

## Overview

Each alternative can now store rich, structured data to help users make informed decisions about switching platforms. This includes privacy practices, business models, technical details, ethics scores, and more.

## Data Structure

### Full Type Definition

See `src/types/AlternativeDetails.ts` for the complete TypeScript interface.

### Key Data Categories

#### 1. **Privacy & Data** (`PrivacyDetails`)

Understanding how the platform handles user data:

- **Data Collection:** `minimal` | `moderate` | `extensive`
- **Data Ownership:** `user` | `platform` | `shared`
- **Encryption:** `end-to-end` | `in-transit` | `at-rest` | `none`
- **Third-party Sharing:** boolean
- **Data Retention:** How long data is kept
- **GDPR Compliant:** boolean

**Why important:** Privacy is often the #1 reason users switch platforms.

#### 2. **Business Model** (`BusinessModel`)

Transparency about how the platform sustains itself:

- **Type:** `non-profit` | `for-profit` | `cooperative` | `volunteer`
- **Revenue:** `donations` | `subscriptions` | `ads` | `grants` | `free`
- **Transparent:** boolean (is funding/business model public?)
- **Funding:** List of major funders/investors

**Why important:** Business model affects long-term sustainability and user alignment.

#### 3. **Technical Details** (`TechnicalDetails`)

For technically-minded users:

- **Open Source:** boolean
- **License:** e.g., "AGPL-3.0", "MIT"
- **Repository URL:** Link to source code
- **Self-hostable:** boolean (can users run their own instance?)
- **Federation:** `full` | `partial` | `none`
- **Protocol:** e.g., "ActivityPub", "AT Protocol"
- **Interoperability:** List of compatible platforms

**Why important:** Technical freedom and longevity.

#### 4. **Governance** (`Governance`)

How the platform is run and moderated:

- **Content Moderation:** `centralized` | `distributed` | `community` | `minimal`
- **User Governance:** Do users have a say in decisions?
- **Transparent Rules:** Are rules publicly documented?
- **Appeal Process:** Can users appeal moderation decisions?

**Why important:** Trust and fairness in platform management.

#### 5. **Maturity & Status** (`Maturity`)

How stable and established the platform is:

- **Status:** `stable` | `beta` | `alpha` | `development`
- **Year Founded:** When the project started
- **Active Users:** User count (e.g., "1M+", "50K")
- **Mobile Apps:** iOS and Android availability

**Why important:** Risk assessment for switching.

#### 6. **Migration Support** (`Migration`)

How easy is it to switch?

- **Import from Original:** Can you import your data?
- **Export Data:** Can you export and take your data elsewhere?
- **Migration Guide URL:** Link to help
- **Auto Migration Tool:** Is there an automated tool?

**Why important:** Reduces friction in switching.

#### 7. **Features** (`Features`)

What does the platform offer?

- **Core Features:** Main functionality
- **Unique Features:** What makes it special
- **Missing Features:** What's missing vs the original platform

**Why important:** Feature parity assessment.

#### 8. **Ethics Score** (`EthicsScore`)

Quantified ratings (1-5 scale):

- **Privacy:** How well does it protect user privacy?
- **Openness:** Open source, transparent, accessible?
- **Sustainability:** Long-term viability?
- **User Rights:** User control and ownership?
- **Overall:** Average score

**Why important:** Quick at-a-glance comparison.

#### 9. **Pros & Cons**

Honest assessment:

- **Pros:** List of advantages
- **Cons:** List of disadvantages

**Why important:** Balanced, honest evaluation.

#### 10. **Best For / Not Recommended For**

User personas:

- **Best For:** Who should use this? (e.g., "Privacy advocates", "Photographers")
- **Not Recommended For:** Who shouldn't? (e.g., "Influencers needing maximum reach")

**Why important:** Helps users self-select appropriately.

#### 11. **Community & Support**

Where to get help:

- **Documentation:** Link to docs
- **Support:** Support channels
- **Forum:** Community forum
- **Chat:** Discord/Matrix/IRC

**Why important:** Support availability reduces switching anxiety.

---

## How It Works

### 1. Data Storage

Detailed data is stored in `src/data/alternative-details.ts`:

```typescript
export const alternativeDetails: Record<string, AlternativeDetails> = {
  bluesky: {
    id: "bluesky",
    name: "Bluesky",
    // ... all the structured data
  },
  pixelfed: {
    // ...
  },
};
```

### 2. Linking to Alternatives

The `alternatives.ts` file uses matching IDs:

```typescript
{
  id: 'bluesky',  // Links to alternativeDetails['bluesky']
  original: { name: 'Twitter / X', ... },
  alternative: { name: 'Bluesky', ... }
}
```

### 3. UI Integration

When a user **clicks on a row**, a modal opens displaying all the detailed information:

- Row component checks if detailed data exists
- Shows an info icon (ℹ️) on hover if data is available
- Opens modal on row click (except when clicking the external link)
- Modal displays all structured data in an organized, scannable format

### 4. Progressive Enhancement

Not all alternatives need detailed data immediately:

- Rows without detailed data still work (no modal)
- You can add detailed data incrementally
- The UI adapts based on data availability

---

## Adding New Alternative Details

### Step 1: Create the Data

Add a new entry to `src/data/alternative-details.ts`:

```typescript
export const alternativeDetails: Record<string, AlternativeDetails> = {
  // existing entries...

  friendica: {
    id: "friendica",
    name: "Friendica",
    url: "https://friendi.ca",
    description: "...",
    tagline: "...",

    privacy: {
      dataCollection: "minimal",
      // ... fill in all fields
    },

    // ... complete all sections
  },
};
```

### Step 2: Match the ID

Make sure the alternative's ID matches:

```typescript
// In alternatives.ts
{
  id: 'friendica',  // Must match the key in alternativeDetails
  original: { name: 'Facebook', ... },
  alternative: { name: 'Friendica', ... }
}
```

### Step 3: Test

1. Click the row - modal should open
2. Verify all data displays correctly
3. Check links work

---

## Research Sources

To fill in accurate data, consult:

1. **Official Documentation** - Platform's official docs
2. **Source Code** - For technical details (GitHub)
3. **Privacy Policy** - For data handling practices
4. **About/Team Pages** - For business model and governance
5. **Community Forums** - For pros/cons, user feedback
6. **Terms of Service** - For user rights and ownership
7. **Blog Posts/Announcements** - For history and roadmap

---

## Design Decisions

### Why This Structure?

1. **Decision-focused:** Data is organized around key decision factors
2. **Scannable:** Users can quickly find what matters to them
3. **Honest:** Includes both pros AND cons
4. **Actionable:** Links to migration guides, documentation
5. **Comparable:** Consistent structure enables comparison
6. **Ethical:** Surfaces privacy, openness, user rights

### What's NOT Included?

- Real-time metrics (user counts update manually)
- Benchmarks/performance data (too variable)
- Subjective opinions (except in pros/cons)
- Marketing copy (objective descriptions only)

---

## Example: Bluesky Data

See `src/data/alternative-details.ts` for a complete example of Bluesky's detailed data.

**Key highlights:**

- Privacy: Minimal data collection, user data ownership
- Business: For-profit but subscription-based (no ads currently)
- Technical: Open source (MIT), fully federated (AT Protocol)
- Ethics Score: 4.25/5 overall (strong privacy & openness)
- Pros: User owns identity, custom algorithms, no ads
- Cons: Still in beta, smaller community, some features missing

---

## UI Features

### Row Interaction

- **Hover:** Shows info icon (ℹ️) if detailed data exists
- **Click Row:** Opens modal with all details
- **Click Link:** Goes to platform (doesn't open modal)
- **Cursor:** Changes to pointer when data available

### Modal Features

- **Animated:** Spring-based entrance/exit (Framer Motion)
- **Scrollable:** Handles long content
- **Organized:** Clear sections with visual hierarchy
- **Actionable:** External links open in new tabs
- **Accessible:** Keyboard navigation (ESC closes)
- **Mobile-friendly:** Responsive layout

### Visual Indicators

- **✓ Green:** Positive features (privacy, open source)
- **⚠ Amber:** Cautions or cons
- **✗ Red:** Negative aspects (third-party sharing)
- **Score colors:** Green (4-5), Amber (3-4), Red (1-3)

---

## Future Enhancements

Possible additions to the data structure:

1. **Comparison View:** Side-by-side alternative comparison
2. **Filtering:** Filter alternatives by criteria (e.g., "only open source")
3. **User Reviews:** Community ratings and reviews
4. **Migration Status:** Track "I'm interested" or "I switched"
5. **Update Alerts:** Notify when alternative data changes
6. **Language Support:** Internationalization
7. **Accessibility Score:** WCAG compliance rating
8. **API Integration:** Fetch real-time user counts, status

---

## Maintenance

### Keeping Data Current

- Review quarterly (at minimum)
- Update when platforms make major changes
- Track `lastReviewed` date for each entry
- Monitor platform announcements and blog posts

### Data Quality

- Be honest in pros/cons
- Cite sources where possible
- Update ethics scores when practices change
- Remove outdated information promptly

---

## Summary

This structured data approach transforms AltDirectory from a simple list to a **decision-making tool**. Users can:

1. **Compare alternatives** based on what matters to them
2. **Assess risks** (maturity, missing features)
3. **Understand trade-offs** (pros vs cons)
4. **Make informed choices** (ethics scores, business models)
5. **Take action** (migration guides, community links)

The data structure is **comprehensive but optional** - alternatives work without it, but are much more valuable with it.

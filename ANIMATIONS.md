# Animation Guide

This document describes the fun, encouraging animations powered by **Framer Motion** added to the AltDirectory app to make switching to alternatives feel rewarding and delightful.

## 🎯 Animation Philosophy

All animations are designed to:

- **Encourage action** - Make users want to explore alternatives
- **Celebrate choices** - Reward users for choosing privacy-focused platforms
- **Guide attention** - Highlight the better alternative
- **Feel playful** - Add personality without being overwhelming
- **Feel smooth** - Spring physics for natural, fluid motion

---

## ⚡ Technology

**Framer Motion** - Production-ready motion library for React

- Smooth spring animations
- Declarative API
- Optimized performance
- Hardware-accelerated transforms

---

## 🎨 Implemented Animations

### 1. Arrow Spring Motion on Row Hover

**Location:** `alternative-row.tsx`
**Trigger:** Hovering over any row
**Technology:** Framer Motion spring animation

```tsx
<motion.div
  animate={{
    x: isHovered ? 4 : 0,
    scale: isHovered ? 1.1 : 1,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 20,
  }}
>
  <ArrowRight />
</motion.div>
```

**Effect:**

- Arrow moves 4px to the right with spring physics
- Scales up 110% smoothly
- Spring bounce creates natural, playful feel
- Creates a clear visual "go this way" cue

**Why it works:** Reinforces the direction of change (mainstream → alternative) with satisfying physics

**Spring config:**

- `stiffness: 300` - Responsive but not snappy
- `damping: 20` - Slight bounce for personality

---

### 2. Alternative Platform Scale with Spring

**Location:** `alternative-row.tsx`
**Trigger:** Hovering over any row
**Technology:** Framer Motion spring animation

```tsx
<motion.div
  animate={{
    scale: isHovered ? 1.05 : 1,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 25,
  }}
>
  <AlternativeLink />
</motion.div>
```

**Effect:**

- Alternative side scales up 105% with spring physics
- Smooth, natural scaling animation
- Creates a spotlight effect on the better choice

**Why it works:** Draws eye to the alternative with satisfying, organic motion

**Spring config:**

- `stiffness: 300` - Quick response
- `damping: 25` - Controlled bounce

---

### 3. Badge Pulse Animation

**Location:** `alternative-link.tsx`
**Trigger:** Hovering over any row
**Technology:** Framer Motion keyframe animation

```tsx
<motion.div
  animate={{
    scale: isHovered ? [1, 1.05, 1] : 1,
  }}
  transition={{
    duration: 2,
    repeat: isHovered ? Infinity : 0,
    ease: "easeInOut",
  }}
>
  <Badge>{platform.tag}</Badge>
</motion.div>
```

**Effect:**

- Badge subtly pulses (1.0 → 1.05 → 1.0) continuously during hover
- 2-second smooth loop
- Makes badges feel alive and important
- Emphasizes "Federated" and "Decentralized" labels

**Why it works:** Draws attention to the ethical/technical advantages without being distracting

---

### 4. Alternative Icon Bounce Loop

**Location:** `alternative-link.tsx`
**Trigger:** Hovering over any row
**Technology:** Framer Motion keyframe animation

```tsx
<motion.div
  animate={{
    y: isHovered ? [0, -4, 0] : 0,
  }}
  transition={{
    duration: 0.6,
    repeat: isHovered ? Infinity : 0,
    ease: "easeInOut",
  }}
>
  <PlatformIcon />
</motion.div>
```

**Effect:**

- Alternative platform icon bounces up 4px and back down
- Continuous 0.6-second loop during hover
- Gives personality, like the platform is "waving hello"
- Smooth, natural easing

**Why it works:** Adds warmth and personality, makes alternatives feel welcoming and alive

---

### 5. Glow Pulse Effect

**Location:** `alternative-link.tsx`
**Trigger:** Hovering over any row
**Technology:** Framer Motion box-shadow animation

```tsx
<motion.div
  animate={{
    boxShadow: isHovered
      ? [
          '0 0 0 0 rgba(37, 99, 235, 0)',
          '0 0 20px 4px rgba(37, 99, 235, 0.3)',
          '0 0 0 0 rgba(37, 99, 235, 0)',
        ]
      : '0 0 0 0 rgba(37, 99, 235, 0)',
  }}
  transition={{
    duration: 2,
    repeat: isHovered ? Infinity : 0,
    ease: 'easeInOut',
  }}
  className="rounded-xl"
>
```

**Effect:**

- Blue glow pulses around alternative icon (0 → 20px → 0)
- 2-second smooth loop
- Creates spotlight/aura effect
- Brand-blue color (#2563eb)

**Why it works:** Makes the alternative feel special and highlighted, like it's the "star" choice

---

### 6. Confetti Celebration on Click 🎉

**Location:** `alternative-link.tsx`
**Trigger:** Clicking on an alternative platform link
**Technology:** canvas-confetti library

```tsx
const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = (rect.left + rect.width / 2) / window.innerWidth;
  const y = (rect.top + rect.height / 2) / window.innerHeight;

  confetti({
    particleCount: 50,
    spread: 70,
    origin: { x, y },
    colors: ["#2563eb", "#3b82f6", "#60a5fa", "#93c5fd"],
    ticks: 120,
    gravity: 1.2,
    scalar: 1,
    startVelocity: 30,
  });
};
```

**Effect:**

- 50 confetti particles burst from the click location
- Brand-blue color palette (#2563eb theme)
- Particles spread 70 degrees
- Natural gravity physics
- Celebrates the user's choice to switch!

**Why it works:** Provides immediate positive reinforcement, makes switching feel like a victory

**Updated config:**

- `particleCount: 50` - More particles (was 40)
- `spread: 70` - Wider spread (was 60)
- `scalar: 1` - Standard size (was 0.8)
- `startVelocity: 30` - More energetic burst

---

## 🎭 Animation Coordination

All animations work together in a choreographed sequence using **hover state management**:

```tsx
const [isHovered, setIsHovered] = useState(false);

<div
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
```

**On Hover:**

1. Arrow springs right and scales up (spring animation)
2. Alternative container scales up (spring animation)
3. Badge starts pulsing (infinite loop)
4. Icon starts bouncing (infinite loop)
5. Glow starts pulsing (infinite loop)

**On Unhover:**

- All animations smoothly return to rest state
- Loops stop immediately

**On Click:**

- Confetti explodes
- Link opens in new tab
- User feels celebrated!

---

## 🎛️ Performance Considerations

**Optimizations:**

- Framer Motion uses `transform` and `opacity` (GPU-accelerated)
- Hardware acceleration for smooth 60fps
- Animations stop when not hovered (no idle CPU usage)
- Spring animations are optimized by Framer Motion
- Confetti library is lightweight (11KB gzipped)
- State management prevents unnecessary re-renders

**Why Framer Motion:**

- ✅ Built for React - Declarative, composable
- ✅ Optimized performance - Hardware-accelerated
- ✅ Spring physics - Natural, satisfying motion
- ✅ Easy to maintain - Clean, readable code
- ✅ Production-ready - Used by thousands of apps

**Accessibility:**

- Animations respect `prefers-reduced-motion` (can be added if needed)
- All interactions still work without animations
- Color contrast maintained during animations
- No flashing or strobing effects

---

## 📦 Dependencies

```json
{
  "framer-motion": "^11.15.0",
  "canvas-confetti": "^1.9.4",
  "@types/canvas-confetti": "^1.9.0"
}
```

**Total size impact:**

- Framer Motion: ~30KB gzipped (tree-shakeable)
- canvas-confetti: ~11KB gzipped
- **Total: ~41KB gzipped**

---

## 🔧 Customization

### Adjusting Spring Physics

Edit spring config in `alternative-row.tsx`:

```tsx
transition={{
  type: 'spring',
  stiffness: 400,  // Higher = faster, snappier (default: 300)
  damping: 15,     // Lower = more bounce (default: 20/25)
}}
```

**Spring presets:**

- **Snappy:** `stiffness: 400, damping: 30`
- **Bouncy:** `stiffness: 200, damping: 10`
- **Gentle:** `stiffness: 150, damping: 20`

### Changing Animation Speed

Edit duration in `alternative-link.tsx`:

```tsx
// Faster badge pulse
transition={{ duration: 1, repeat: Infinity }}

// Slower icon bounce
transition={{ duration: 1.2, repeat: Infinity }}
```

### Changing Confetti Colors

```tsx
colors: ['#2563eb', '#3b82f6', '#60a5fa', '#93c5fd'], // Current blues
// or
colors: ['#10b981', '#34d399', '#6ee7b7', '#a7f3d0'], // Green theme
// or
colors: ['#f59e0b', '#fbbf24', '#fcd34d', '#fde68a'], // Gold theme
```

### Adjusting Confetti Intensity

```tsx
confetti({
  particleCount: 100, // More particles (default: 50)
  spread: 90, // Wider spread (default: 70)
  scalar: 1.5, // Larger particles (default: 1)
  startVelocity: 45, // More explosive (default: 30)
});
```

---

## 🚀 Future Animation Ideas

**Not yet implemented, but could be fun:**

1. **Staggered entrance** - List items animate in with `stagger` when page loads

   ```tsx
   <motion.div variants={containerVariants} initial="hidden" animate="visible">
   ```

2. **Exit animation** - Items animate out when filtered/hidden

3. **Original platform fade** - Mainstream platform fades/desaturates on hover

4. **Particle trail** - Use Framer Motion's `drag` and `dragElastic` for interactive effects

5. **Badge rotation** - Add `rotate` to badge pulse animation

6. **Success checkmark** - Animate a checkmark after confetti

7. **Hover line trace** - Animated line from original → arrow → alternative using `pathLength`

---

## 💡 Tips for Adding More Framer Motion Animations

1. **Use spring for interactive** - Button clicks, hovers, drags
2. **Use keyframes for loops** - Pulses, bounces, glows
3. **Combine animations** - Multiple properties for richer effects
4. **Respect hover state** - Tie animations to `isHovered` boolean
5. **Test performance** - Use Chrome DevTools Performance tab
6. **Add meaning** - Animations should communicate something

**Common Framer Motion patterns:**

```tsx
// Hover scale
<motion.div whileHover={{ scale: 1.05 }}>

// Tap feedback
<motion.button whileTap={{ scale: 0.95 }}>

// Entrance animation
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
/>

// Exit animation
<AnimatePresence>
  {show && <motion.div exit={{ opacity: 0 }} />}
</AnimatePresence>
```

---

## 🎉 Result

The combination of these 6 animations powered by **Framer Motion** creates a delightful, encouraging experience with natural, physics-based motion. Users get immediate visual feedback that switching is a positive, celebrated choice with smooth, professional animations!

**Try it out:**

1. **Hover** over any row to see all animations choreographed together
2. **Click** an alternative to celebrate with confetti! 🎊

The spring physics make every interaction feel responsive and satisfying, while the continuous loops add personality and draw attention to the better choice.

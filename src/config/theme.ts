/**
 * Centralized theme configuration
 * Design tokens for colors, spacing, typography, etc.
 */

export const theme = {
  // Colors
  colors: {
    primary: "#2563eb",
    primaryHover: "#1d4ed8",

    background: {
      light: "#f8fafc",
      white: "#ffffff",
      gray: "#f1f5f9",
      dark: "#0f172a",
    },

    border: {
      subtle: "#f1f5f9",
      default: "#e2e8f0",
      muted: "#cbd5e1",
    },

    text: {
      primary: "#0f172a",
      secondary: "#64748b",
      muted: "#94a3b8",
      inverse: "#ffffff",
    },

    status: {
      error: "#ef4444",
      success: "#10b981",
      warning: "#f59e0b",
      info: "#3b82f6",
    },
  },

  // Spacing scale (in px or rem units as Tailwind classes)
  spacing: {
    card: {
      padding: "p-5 md:p-6",
      gap: "gap-4",
    },
    section: {
      marginBottom: "mb-8 md:mb-12",
    },
  },

  // Border radius
  radius: {
    card: "rounded-2xl",
    button: "rounded-lg",
    buttonPill: "rounded-full",
    icon: "rounded-xl",
    badge: "rounded",
  },

  // Typography
  typography: {
    fontFamily: "Inter, sans-serif",

    heading: {
      h1: "text-3xl md:text-4xl font-bold tracking-tight",
      h2: "text-2xl font-semibold tracking-tight",
      h3: "text-xl font-semibold",
    },

    body: {
      base: "text-base",
      large: "text-lg",
      small: "text-sm",
      tiny: "text-xs",
    },
  },

  // Shadows
  shadows: {
    card: "shadow-sm",
    button: "shadow-lg shadow-slate-200",
  },

  // Transitions
  transitions: {
    default: "transition-colors",
    all: "transition-all",
    duration: "duration-200",
  },

  // Icon sizes
  iconSizes: {
    small: "size-4",
    medium: "size-6",
    large: "size-12",
    alternative: "size-10",
  },
} as const;

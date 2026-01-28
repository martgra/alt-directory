# AltDirectory

A modern, minimalist directory of privacy-focused social media alternatives. Built with React 19, Vite, and Tailwind CSS.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2%2B-blue)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-blue)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-purple)](https://vite.dev/)

## ✨ Features

- ⚛️ **React 19** - Latest React with modern features
- ⚡ **Vite** - Lightning-fast dev server and build tool
- 🎨 **Tailwind CSS** - Utility-first styling matching the design system
- 🚀 **TypeScript** - Type-safe development with strict mode
- 📦 **Bun** - Fast package management
- 🎯 **ESLint & Prettier** - Code quality and formatting
- 🔍 **Knip** - Detect unused code and dependencies
- 🪝 **Husky** - Git hooks for quality enforcement
- 🔐 **Secret Detection** - Prevent committing secrets
- 🐳 **Dev Container** - Consistent development environment
- 📝 **User Submissions** - Community-driven alternative suggestions
- 🗄️ **Supabase Backend** - PostgreSQL database (free tier)
- ⚡ **Netlify Functions** - Serverless API endpoints

## Quick Start

```bash
# Install dependencies
bun install

# Start development server (opens at http://localhost:3000)
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Type check
bun run typecheck
```

## 🗄️ Backend Setup (Optional)

The app includes a user submission system for suggesting alternatives. To enable it:

**Quick Setup (15 minutes):**
See [QUICK_START.md](./QUICK_START.md) for a condensed guide.

**Detailed Setup:**
See [SETUP.md](./SETUP.md) for complete instructions on:

- Setting up Supabase (free PostgreSQL database)
- Configuring Netlify Functions
- Deploying to production
- Setting up admin dashboard

**Free Tier Stack:**

- **Supabase**: 500MB database, 5GB bandwidth/month
- **Netlify**: 100GB bandwidth, 125K function calls/month

Both are more than enough for most use cases!

## 🛠️ Development Tools

### Linting & Formatting

```bash
# Run ESLint
bun run lint
bun run lint:fix

# Run Prettier
bun run format
bun run format:check

# Find unused code/dependencies
bun run knip
```

### Git Hooks

Pre-commit hooks automatically:

- Run ESLint and auto-fix issues
- Format code with Prettier
- Scan for secrets with secretlint

**Note:** Changes are **not auto-staged**. Review, stage, and commit again if hooks make changes.

## 📁 Project Structure

The project follows a **feature-based architecture** with clear separation of concerns:

```
src/
├── components/          # Shared components
│   ├── layout/         # Layout components (Header, Footer, Logo)
│   └── ui/             # shadcn/ui components (Button, Badge, Card)
├── config/             # Configuration & constants
│   ├── site.ts        # Site configuration
│   └── constants.ts   # Application constants
├── data/               # Static data layer
│   └── alternatives.ts
├── features/           # Feature modules
│   └── alternatives/
│       └── components/ # Feature-specific components
├── lib/                # Shared utilities (cn, etc.)
├── types/              # TypeScript definitions
│   └── Alternative.ts
├── App.tsx
├── main.tsx
└── index.css
```

See [ARCHITECTURE.md](./ARCHITECTURE.md) for detailed documentation.

## ⚙️ Configuration Files

- **`vite.config.ts`** - Vite build tool configuration
- **`tailwind.config.js`** - Tailwind CSS theme & customization
- **`tsconfig.json`** - TypeScript compiler options (strict mode, React JSX)
- **`.prettierrc`** - Code formatting rules
- **`eslint.config.js`** - Linting rules with TypeScript support
- **`.editorconfig`** - Editor configuration for consistency
- **`knip.json`** - Unused code and dependency detection
- **`.secretlintrc.json`** - Secret detection rules

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

MIT - See [LICENSE](./LICENSE) file for details.

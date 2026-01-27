# alt-directory

> 🎯 Generated from [martgra/typescript_template](https://github.com/martgra/typescript_template)
>
> ```bash
> # Generate your own project with Copier
> uvx copier copy gh:martgra/typescript_template my-project
> ```

SPA for some alternatives

[![Copier](https://img.shields.io/endpoint?url=https://raw.githubusercontent.com/copier-org/copier/master/img/badge/badge-grayscale-inverted-border-orange.json)](https://github.com/copier-org/copier)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.2%2B-blue)](https://www.typescriptlang.org/)
[![Bun](https://img.shields.io/badge/bun-latest-black)](https://bun.sh)

## ✨ Features

- 🚀 **TypeScript** - Type-safe development with strict mode
- 📦 **Bun** - Fast package management and runtime
- 🎨 **ESLint & Prettier** - Code quality and formatting
- 🔍 **Knip** - Detect unused code and dependencies
- 🪝 **Husky** - Git hooks for quality enforcement
- 🔐 **Secret Detection** - Prevent committing secrets
- ⚙️ **GitHub Actions** - Automated CI/CD
- 🐳 **Dev Container** - Consistent development environment

## Quick Start

```bash
# Install dependencies
bun install

# Set up git hooks
bun run prepare

# Start development with watch mode
bun run dev

# Build for production
bun run build

# Run production build
bun start
```

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

```
.
├── .devcontainer/       # Dev container configuration
├── .github/
│   └── workflows/       # GitHub Actions CI/CD
├── .husky/              # Git hooks
├── .vscode/             # VSCode settings
├── src/
│   └── index.ts         # Entry point
├── dist/                # Build output
├── CONTRIBUTING.md      # Contribution guidelines
├── CHANGELOG.md         # Version history
├── LICENSE              # MIT License file
└── package.json
```

## ⚙️ Configuration Files

- **`.prettierrc`** - Code formatting rules
- **`.eslintrc.json`** - Linting rules with TypeScript support
- **`.editorconfig`** - Editor configuration for consistency
- **`knip.json`** - Unused code and dependency detection
- **`.secretlintrc.json`** - Secret detection rules
- **`tsconfig.json`** - TypeScript compiler options (strict mode)

## 🤝 Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📝 License

MIT - See [LICENSE](./LICENSE) file for details.

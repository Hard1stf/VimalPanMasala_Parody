# React + Vite Project (BimalGutka)

Comprehensive, beginner-friendly README for this React + Vite codebase. This document explains setup, tools & versions, a complete folder structure, running and building the app, and detailed WSL (Windows Subsystem for Linux) configuration used for development.

Table of contents

- Project summary
- Tools & recommended versions
- Prerequisites
- Installation (local & WSL)
- Running the app (dev / build / preview)
- Complete codebase folder structure (explained)
- Environment variables
- ESLint, formatting & editor setup
- WSL (what we use) — detailed configuration steps
- Troubleshooting & common fixes
- Contributing
- License

Project summary
This is a starter React application created with Vite. It provides a fast dev server, hot module replacement (HMR), a minimal ESLint setup, and a lightweight folder layout to help beginners focus on React development.

Tools & recommended versions
These are the versions tested / recommended for this project:

- Node.js: 18.x (LTS) or 20.x (current) — recommended: 18.18.x or 20.x
- npm: 9.x (bundled with Node 18+)
- yarn (optional): 1.22.x or Yarn 3+
- Vite: 5.x
- React: 18.2.0
- ESLint: 8.x
- nvm (Node Version Manager): v0.39.x or later
- Git: 2.35+
- WSL: WSL 2 with Ubuntu 22.04 LTS (recommended)

Check your local versions:

```bash
node --version
npm --version
git --version
npx vite --version
```

Prerequisites

- Git (to clone the repository)
- Node.js (use nvm to install/manage versions inside WSL)
- VS Code (recommended) with the Remote - WSL extension if you use WSL
- WSL 2 + Ubuntu (Windows developers) — instructions below

Installation (local / WSL)

1. Clone the repository:

```bash
git clone <repository-url>
cd <repo-folder>
```

2. Using nvm (recommended) to install Node (inside WSL or your macOS/Linux shell):

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
# restart the shell, then:
nvm install --lts
nvm use --lts
```

3. Install dependencies:

```bash
npm install
# or
yarn install
```

Running the app (development)

- Start the development server:

```bash
npm run dev
```

- Typical output shows a local address (default: http://localhost:5173). Open that in your browser.
- If running inside WSL and you need Windows to access the server, start Vite with host exposed:

```bash
npm run dev -- --host
```

Available scripts

- npm run dev — start Vite dev server with HMR
- npm run build — create a production build into dist/
- npm run preview — locally preview the production build
- npm run lint — run ESLint checks (if configured)

Build for production

```bash
npm run build
npm run preview
```

The build command produces the dist/ folder (production output). Preview serves that folder locally for a final check.

Complete codebase folder structure (detailed)
This section shows a complete and common layout for a React + Vite app and explains each item. Your project follows this layout or a close variant.

Top-level

- .git/ — Git history (not committed manually)
- node_modules/ — installed dependencies (generated)
- public/ — static files copied to the root of the build (no bundling)
  - favicon.svg | favicon.ico — app icon
  - robots.txt — optional
- src/ — application source code (detailed below)
- .gitignore — files/folders ignored by Git
- package.json — dependency list, scripts, project metadata
- package-lock.json or yarn.lock — exact dependency versions
- vite.config.js or vite.config.ts — Vite configuration
- .eslintrc.json / .eslintrc.cjs — ESLint configuration (optional)
- .prettierrc — Prettier configuration (optional)
- README.md — this file

src/ (recommended structure)

- src/main.jsx or src/main.tsx — application entry (mounts React to DOM)
- src/App.jsx or src/App.tsx — root application component
- src/index.css or src/styles.css — global styles (imported in main.jsx)
- src/assets/ — static assets imported by components (images, svgs)
- src/components/ — reusable UI components (Button, Header, Footer)
- src/pages/ — top-level page components for routes (Home, About)
- src/routes/ or src/router.js — routing setup (if any)
- src/hooks/ — custom React hooks
- src/utils/ — helper functions, API clients
- src/services/ — API / network logic
- src/setupTests.js — test setup (Jest / testing-library)
- src/types/ — shared TypeScript types (if using TS)

Example minimal files explained

- src/main.jsx:
  - Imports React, ReactDOM, global css, and mounts <App />
- src/App.jsx:
  - Returns the top-level JSX and routes / layout
- public/index.html:
  - The HTML template that Vite uses and injects the bundled JS

Environment variables

- Use .env files at project root. Variables prefixed with VITE\_ are exposed to client code.
  - .env # local defaults
  - .env.local # local machine overrides (ignored by git)
  - .env.development, .env.production
- Example:

```env
VITE_API_URL=https://api.example.com
```

Access in code:

```js
const apiUrl = import.meta.env.VITE_API_URL;
```

ESLint, formatting & editor setup

- ESLint helps catch errors and improve code quality. If provided, run:
  ```bash
  npm run lint
  ```
- Recommended VS Code extensions:
  - ESLint
  - Prettier - Code formatter
  - ESLint Nightly / Vite (optional)
  - GitLens
  - Remote - WSL (if using WSL)
- Example VS Code settings (in .vscode/settings.json):

```json
{
  "editor.formatOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact"
  ]
}
```

WSL (what we use) — detailed configuration
This project recommends using WSL 2 with Ubuntu 22.04 LTS for Windows development. The following steps set up a reliable development environment that matches Linux CI / production behavior.

1. Enable WSL & install Ubuntu (Windows):

- Open PowerShell as Administrator and run:

```powershell
wsl --install
# If WSL is already installed ensure version 2:
wsl --set-default-version 2
```

- Install Ubuntu 22.04 from Microsoft Store or:

```powershell
#wsl --install -d ubuntu-22.04
```

2. Start Ubuntu (WSL) and update packages:

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y build-essential curl git ca-certificates
```

3. Install nvm and Node inside WSL:

```bash
curl -fsSL https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.4/install.sh | bash
# Restart your shell or source your profile, then:
nvm install --lts
nvm use --lts
node -v
```

4. Recommended Git settings inside WSL:

```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
# Prevent CRLF issues:
git config --global core.autocrlf input
```

5. Development workflow recommendations:

- Work inside the WSL filesystem (~/projects or /home/<user>/projects). Do NOT develop on the Windows-mounted drives (like /mnt/c/...) for best performance.
- Use VS Code Remote - WSL to open the project folder directly in WSL.
- If you need to access the Vite dev server from Windows, start with `npm run dev -- --host` or set server.host in vite.config.js to 0.0.0.0. Then open http://localhost:5173 in Windows.

6. VS Code + WSL:

- Install the Remote - WSL extension.
- Open folder using "Remote-WSL: Open Folder".
- Install the recommended extensions inside the WSL window (VS Code will prompt).

Troubleshooting & common fixes

- Dev server not reachable from Windows:
  - Start dev with --host or set host in vite.config.js; ensure WSL is version 2.
- Port already in use:
  - Stop processes using the port or change Vite port: `npm run dev -- --port 5174`
- Node version mismatch:
  - Use nvm install/use to pick the correct Node version.
- Build fails due to environment variables:
  - Ensure required VITE\_ variables exist or provide defaults in .env
- ESLint errors:
  - Run `npm run lint` and fix or temporarily disable lint rules in config.

Contributing

- Fork the repo and create a new branch for your feature or fix:
  ```bash
  git checkout -b feat/my-feature
  ```
- Make changes, run tests/lint, commit, push, and open a PR.
- Keep commits small and descriptive.

Further resources

- React: https://react.dev
- Vite: https://vitejs.dev
- ESLint: https://eslint.org
- WSL docs: https://learn.microsoft.com/windows/wsl/

License
This repository uses the default open-source license you choose. Add a LICENSE file to specify terms.

Notes

- Tweak versions and config to match your local environment or CI. This README focuses on a beginner-friendly, reproducible setup with WSL 2 and Node LTS.

# Dental ABCs - Interactive Children's Book

An interactive, single-page web application featuring a dental-themed alphabet book with parallax scrolling effects.

## Prerequisites

- Node.js (v18.x or later)
- npm (v9.x or later)
- [Task](https://taskfile.dev/) - Task runner (optional but recommended)

## Quick Start

### Using Task (Recommended)

1. Install Task if you haven't already:
   ```bash
   # On macOS using Homebrew
   brew install go-task

   # On Windows using Scoop
   scoop install task
   ```

2. Run the setup task:
   ```bash
   task setup
   ```

3. Start the development server:
   ```bash
   task dev
   ```

### Using npm directly

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

## Available Tasks

- `task setup` - Initial project setup
- `task dev` - Start development server
- `task build` - Build for production
- `task start` - Start production server
- `task lint` - Run ESLint
- `task lint:fix` - Fix linting issues
- `task type-check` - Run TypeScript type checking
- `task clean` - Clean build artifacts
- `task deploy` - Deploy to Vercel

## Development

The application is built with:
- Next.js
- TypeScript
- Tailwind CSS
- Framer Motion

### Project Structure

```
src/
├── app/              # Next.js app directory
├── components/       # React components
│   ├── BookPage.tsx    # Base page component
│   ├── TitlePage.tsx   # Title page
│   ├── IntroPage.tsx   # Introduction page
│   └── AlphabetPage.tsx # Template for alphabet pages
└── styles/          # Global styles
```

## Deployment

The project is automatically deployed to Vercel. Each push to the main branch triggers a new deployment.

Production URL: https://dental-abcs-bu8742p4a-lorenzo-swanks-projects.vercel.app

## License

This project is private and not licensed for public use.

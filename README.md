# ByggExpert - Professional Construction Services Website

## About
Professional construction services website for the Swedish market. Built with React, TypeScript, and Tailwind CSS.

## Features
- ✅ Multi-language support (Swedish, Polish, English)
- ✅ Responsive design
- ✅ Modern UI with Tailwind CSS and shadcn/ui components
- ✅ Contact forms and service showcases
- ✅ SEO optimized
- ✅ GitHub Pages deployment ready

## Technologies
- React 18
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Vite
- Bun package manager

## Development
### Install dependencies
```bash
npm install
```

### Start development server
```bash
npm run dev
```

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## Deployment
This project is configured for GitHub Pages deployment. Simply push to the main branch and GitHub Actions will automatically build and deploy the site.

## Structure
- `src/components/` - React components
- `src/hooks/` - Custom React hooks including language management
- `src/pages/` - Page components
- `src/lib/` - Utility functions
- `public/` - Static assets

## Language Support
The website supports three languages:
- Swedish (default)
- Polish
- English

Language switching is handled via `useLanguage` hook with localStorage persistence.

## Author
© 2025 Kamil Maślanka. All rights reserved.

## License
This project is proprietary and confidential.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)

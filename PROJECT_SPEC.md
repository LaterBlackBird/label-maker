# Project Specification: Label Maker

## Objective
The objective of this project is to create a web application that allows users to design and print custom product labels. The application will provide various templates and customization options for users to create labels specifically for products. There will be two standard label sizes available, but users will also have the option to create custom-sized labels.
## Overview
This project is a Next.js application bootstrapped with [`create-next-app`](src/app/page.js ). It uses Tailwind CSS for styling and includes custom fonts. The application is designed to be deployed on Vercel.

## Project Structure
- **Configuration Files:**
  - [`.eslintrc.json`](.eslintrc.json ): ESLint configuration.
  - [`.gitignore`](.gitignore ): Git ignore rules.
  - [`jsconfig.json`](jsconfig.json ): JavaScript configuration for module resolution.
  - [`next.config.mjs`](next.config.mjs ): Next.js configuration.
  - [`package.json`](package.json ): Project dependencies and scripts.
  - [`postcss.config.mjs`](postcss.config.mjs ): PostCSS configuration.
  - [`tailwind.config.js`](tailwind.config.js ): Tailwind CSS configuration.

- **Directories:**
  - [`public`](public ): Static assets.
  - [`src`](src ): Source code.
    - [`app/`](src/app/page.js ): Application components and pages.
      - `fonts/`: Custom fonts.
        - `Metropolis-Regular.woff`
        - `Metropolis-Regular.woff2`
      - [`src/app/globals.css`](src/app/globals.css ): Global CSS styles.
      - [`src/app/layout.js`](src/app/layout.js ): Root layout component.
      - [`src/app/page.js`](src/app/page.js ): Home page component.

## Dependencies
- **React**: `19.0.0-rc-66855b96-20241106`
- **React DOM**: `19.0.0-rc-66855b96-20241106`
- **Next.js**: `15.0.3`
- **PostCSS**: `^8`
- **Tailwind CSS**: `^3.4.1`
- **ESLint**: `^8`
- **ESLint Config Next**: `15.0.3`
- **MySQL**: Database for storing user data and label designs.
- **PDFKit**: Library for creating PDF documents.

## Development
### Getting Started
1. Run the development server:
    ```bash
    npm run dev
    # or
    yarn dev
    # or
    pnpm dev
    # or
    bun dev
    ```
2. Open [http://localhost:3000](http://localhost:3000) to see the result.
3. Start editing the page by modifying [`src/app/page.js`](src/app/page.js ). The page auto-updates as you edit the file.

### Scripts
- `dev`: Start the development server.
- `build`: Build the application for production.
- `start`: Start the production server.
- `lint`: Run ESLint.

## Deployment
The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## Styling
- **Tailwind CSS**: Used for utility-first CSS styling.

## Key Components
- **Root Layout**: [`RootLayout`](src/app/layout.js )
- **Home Page**: [`Home`](src/app/page.js )

## Additional Resources
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)
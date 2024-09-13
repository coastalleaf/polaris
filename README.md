# Polaris - Marketing Website Template

Polaris is a project template designed for building marketing websites using Astro and Tailwind CSS, intended for deployment on Cloudflare Pages. This repository provides a foundational setup to streamline the creation of new marketing websites with pre-configured tools and integrations.

## Features

### Website Configurations

**Favicons**: Multiple favicon files are included for various device sizes and an Apple touch icon for iOS devices. This ensures your brand identity is consistent across all platforms. See [Favicon Generator](https://favicon.io).

**SEO Meta Tags**: Standard SEO meta tags are pre-configured in the HTML head of `BaseLayout.astro`, enabling search engines to better index and rank your site. This includes author tags, description tags, and Open Graph data for rich content sharing on social media. See [Google SEO Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide).

### Astro Configurations

**Astro Project Setup**: This project was built with Cloudflare Pages and Astro to provide a solid foundation for scalable and deployable web projects. It also includes Astro's Tailwind integration for styling.

**Base Layout**: The `/src/layouts` directory includes a `BaseLayout.astro` file that comes with standard HTML configurations. This allows you to maintain a consistent structure across all pages with minimal effort.

**Website Pages**: The `/src/pages` directory includes 3 pages: `index.astro`, `about.astro`, and `404.astro` to serve as the fallback for 404 errors.

**Web Assets**: Astro leverages a `/public` directory for web files and assets that do not need to be processed during Astro’s build process. This directory is ideal for common assets like images and fonts, or special files such as `robots.txt` and `manifest.webmanifest`. For additional images storage, use [Cloudflare R2](https://developers.cloudflare.com/r2/).

**Sitemap Integration**: Consider integrating [Astro’s sitemap integration](https://docs.astro.build/en/guides/integrations-guide/sitemap/) for automated sitemap generation, which is essential for improving your website’s SEO. This tool is not included in this template but is recommended for live deployments.

### Tailwind Configurations

All [Tailwind configurations](https://tailwindcss.com/docs/configuration) can be found in `tailwind.config.mjs` or `/src/styles/custom.css`.

**Heading Defaults**: In `/src/styles/custom.css`, default heading size and weight values are set for each HTML heading tag across different screen sizes.

**Custom Font Family Declarations**: Easily set font styles for sans-serif, serif, and display fonts using the font-sans, font-serif, and font-display utility classes. This allows for consistent typography across your website. The `/src/styles/custom.css` file contains custom font family declarations.

**Color Palette**: This project provides a sample for declaring a custom color pallette, ensuring your brand colors are easily accessible throughout the project.

**Container Spacing**: Tailwind’s container utility is pre-configured for consistent layouts and padding across all screen sizes, helping you maintain a uniform design.

### CI/CD Pipeline

This project is configured with a GitHub Actions workflow at `/.github/worflows/deploy-pages.yml` that automates the deployment process to three different environments on Cloudflare Pages: development, staging, and production.

#### Workflow Overview

- **Development Environment**: When a pull request is opened against the `main` branch, the project is automatically deployed to the development environment.

- **Staging Environment**: When code is merged into the `main` branch, it triggers a deployment to the staging environment. This environment serves as the final review stage before production.

- **Production Environment**: When a tag is created (following semantic versioning, e.g., `v1.0.0`), the project is deployed to the production environment. This is the live version of the site accessible to all users.

#### Variables

The following environment variabels must be set:

- `PAGES_DEPLOY_URL`: Set this value within the workflow file directly for each deployment environemnt. This can be a default `example.pages.dev` domain or a custom domain.
- `CLOUDFLARE_API_TOKEN`: Set this value within the Github dashboard for your repository as an Actions Secret. This API Key can be generated from your Cloudflare dashboard.
- `CLOUDFLARE_ACCOUNT_ID`:  Set this value within the Github dashboard for your repository as an Actions Secret. Your Account ID can be found on your Cloudflare dashboard.

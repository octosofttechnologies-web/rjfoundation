# R-Jolad Foundation Website

This is the official website for the R-Jolad Foundation, a non-profit organization dedicated to fostering lasting change in communities through targeted initiatives in health, education, and economic empowerment. The website is built as a modern, fast, and statically exported web application using Next.js.

## Features

- **Fully Responsive Design**: Optimized for a seamless experience on all devices, from mobile phones to desktops.
- **Static Site Generation (SSG)**: Built with `output: 'export'`, the site is entirely static, ensuring maximum performance, security, and scalability without needing a Node.js server for hosting.
- **Headless Blog**: The blog and events section fetches posts directly from a WordPress CMS (`rjolad.com`) using its REST API, specifically from the "R-J Foundation" category.
- **Dynamic Content Pages**: Individual blog posts are rendered as static pages at build time for fast loading.
- **Interactive UI Components**: Utilizes modern, accessible UI components from **ShadCN UI** for a consistent and professional look and feel.
- **Interactive Forms**: The "Contact Us" and "Partner With Us" pages feature forms that open the user's default email client with pre-filled information.
- **AI-Powered Content**: Leverages Genkit to generate descriptions for the foundation's core values.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [ShadCN UI](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **AI Integration**: [Genkit](https://firebase.google.com/docs/genkit)
- **CMS**: Headless [WordPress](https://wordpress.org/)

## Project Structure

The project follows a standard Next.js App Router structure:

```
.
├── src
│   ├── app                 # Main application pages and layouts
│   │   ├── about-us/
│   │   ├── blog/
│   │   ├── contact-us/
│   │   ├── our-team/
│   │   ├── partner-with-us/
│   │   ├── strategy/
│   │   ├── globals.css     # Global styles and Tailwind directives
│   │   └── layout.tsx      # Root layout
│   ├── components          # Reusable components
│   │   ├── ui/             # ShadCN UI components
│   │   ├── CoreValues.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── PageHeader.tsx
│   ├── lib                 # Utility functions and libraries
│   │   ├── blog.ts         # Logic for fetching data from WordPress API
│   │   └── utils.ts        # General utility functions (e.g., cn)
│   ├── ai                  # Genkit flows and AI-related code
│   │   ├── flows/
│   │   └── genkit.ts
│   └── hooks               # Custom React hooks
├── public                  # Static assets (images, fonts, etc.)
├── next.config.ts          # Next.js configuration
├── package.json            # Project dependencies and scripts
└── tsconfig.json           # TypeScript configuration
```

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v20.x or later recommended)
- `npm` or your favorite package manager

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running the Development Server

To start the development server with hot-reloading:

```bash
npm run dev
```

Open [http://localhost:9002](http://localhost:9002) (or the port specified in your `package.json`) in your browser to see the result.

### Building for Production

This project is configured for a static export. To build the application for production:

```bash
npm run build
```

This command will generate a static version of your website in the `out/` directory. These files can be deployed to any static hosting service (like Firebase Hosting, Vercel, Netlify, or GitHub Pages).

### Key Functionality Details

- **Blog Integration**: The blog fetching logic resides in `src/lib/blog.ts`. It uses the WordPress REST API to fetch posts from a specific category. The `getBlogPosts` function retrieves all posts for the listing page, and `getBlogPostBySlug` retrieves a single post for the detail page.

- **Static Export (`output: 'export'`)**: The `next.config.ts` file is configured with `output: 'export'`. This requires that all dynamic routes, like `/blog/[slug]`, implement the `generateStaticParams` function to inform Next.js of all possible paths to generate at build time.

- **Image Handling**: Due to the static export, Next.js's default image optimization is disabled (`images: { unoptimized: true }` in `next.config.ts`). The `<Image>` component is still used to prevent layout shift and handle image loading.

<h1 align="center"><img src='https://i.imgur.com/xyTgKVy.png' height='125'><br>@galaxies/web</br></h1>
<p align="center">Galaxies Discord app's front-facing interface.<br>informative and modern with <i>style</i></b>

<div align="center">

[![Powered by Vercel](https://img.shields.io/badge/Powered%20by-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com?utm_source=galaxies&utm_campaign=oss)

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://reactjs.org/)
[![shadcn/ui](https://img.shields.io/badge/shadcn/ui-000000?style=for-the-badge&logo=shadcnui&logoColor=white)](https://ui.shadcn.com/)

</div>

---
## Preview
<details>
<summary>Click to see preview</summary>
<img src="https://i.imgur.com/nGpuZGW.png" alt="Galaxies Web Preview" width="100%">
</details>

---
## Information about this project

My attempt at making a functioning (at least) modern website for Galaxies. The old website posed significant issues to reliably host and maintain and is filled with old information, so a new one is required to provide accurate data.

This project is built using the following technologies:
- **Next.js**: A React framework for server-side rendering and static site generation
- **React**: A JavaScript library for building user interfaces
- **TypeScript**: A strongly typed programming language that builds on JavaScript
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development
- **shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS
- **Vercel**: A platform for deploying and hosting Next.js applications
- **pnpm**: A fast, disk space efficient package manager for JavaScript

The project follows the basic Next.js application structuring.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**
  ```bash
  git clone https://github.com/EpochStudios/web.git
  cd web
  ```

2. **Install dependencies**
  ```bash
  pnpm install
  ```

3. **Start the development server**
  ```bash
  pnpm dev
  ```

4. **Open your browser.**
  Navigate to `http://localhost:3000` to see the application running.

## Project Structure

```
galaxies-web/
├── app/               # Next.js app with routes and layouts
├── components/        # Reusable UI components
├── lib/               # Utility functions and shared code
├── styles/            # Global styles
├── hooks/             # Custom React hooks
├── components.json    # shadcn/ui components configuration
├── next.config.js     # Next.js configuration
├── package.json       # Project dependencies and scripts
├── postcss.config.js  # PostCSS configuration for Tailwind
├── tailwind.config.js # Tailwind CSS configuration
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## Deployment

This project is deployed on Vercel. You can view the hosted version of this website on https://galaxies-rho.vercel.app.

## Code License & Contribution
[MIT](/LICENSE). 

If you have any questions or suggestions regarding this project, please feel free to:

- Open an issue on GitHub
- Submit a pull request with your improvements
- Contact the maintainers through Discord

Your contributions are always welcome and appreciated. Please make sure to follow the code style and guidelines when contributing.
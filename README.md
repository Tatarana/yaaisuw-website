# YAAISUW Website

Official website for YAAISUW - Building intelligent solutions powered by real people and real AIs.

## 🚀 Features

- 🎨 Modern, responsive design with Tailwind CSS
- 📱 Mobile-first approach with smooth animations
- 🔍 SEO optimized with semantic HTML and meta tags
- ♿️ Accessible and keyboard-navigable interface
- 🌓 Dark mode ready (system preference based)
- ⚡ Optimized for performance and Core Web Vitals

## 🛠️ Prerequisites

- Node.js (v14 or later)
- npm (v7 or later) or Yarn
- Git (for version control)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Tatarana/yaaisuw-website.git
cd yaaisuw-website
```

### 2. Install dependencies

```bash
npm install
```

### 3. Build the CSS

```bash
npm run build
```

### 4. Start the development server

```bash
npm start
```

This will open the website in your default browser at `http://localhost:8080`.

## 📂 Project Structure

```
yaaisuw-website/
├── assets/               # Static assets
│   └── images/           # Image files
├── dist/                 # Compiled CSS (generated)
├── src/                  # Source files
│   └── input.css         # Main CSS file with Tailwind directives
├── .gitignore            # Git ignore file
├── index.html            # Main HTML file
├── package.json          # Project configuration
└── tailwind.config.js    # Tailwind CSS configuration
```

## 🛠️ Development

- Run the development server with auto-reload:
  ```bash
  npm run watch
  ```
  This will watch for changes to your HTML and CSS files and automatically rebuild the CSS.

## 🚀 Deployment

The website is a static site and can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3 + CloudFront

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Tailwind CSS](https://tailwindcss.com/)
- [Google Fonts](https://fonts.google.com/)
- [Heroicons](https://heroicons.com/)

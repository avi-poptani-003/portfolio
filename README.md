# Portfolio - Avi Poptani

A modern, responsive portfolio website built with React, Vite, and Tailwind CSS featuring smooth animations and interactive elements.

## 🚀 Features

- **Modern Tech Stack**: React 19, Vite 7, Tailwind CSS v4
- **Performance Optimized**: Lazy loading, code splitting, and optimized animations
- **Responsive Design**: Mobile-first approach with smooth transitions
- **Interactive Elements**: Custom cursor, Three.js background, timeline animations
- **Clean Architecture**: Component-based structure with optimized CSS

## 🛠️ Tech Stack

- **Frontend**: React 19, JSX
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS v4
- **Background**: Three.js (lazy loaded)
- **Linting**: ESLint with React hooks support

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🏗️ Project Structure

```
portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── AboutSection.jsx
│   │   ├── ContactSection.jsx
│   │   ├── ExperienceSection.jsx
│   │   ├── GlobalEffects.jsx
│   │   ├── HeroSection.jsx
│   │   ├── ProjectsSection.jsx
│   │   └── ThreeBackground.jsx
│   ├── App.jsx             # Main app component
│   ├── main.jsx           # App entry point
│   └── index.css          # Global styles & animations
├── index.html             # HTML template
├── package.json           # Dependencies & scripts
├── vite.config.js         # Vite configuration
└── eslint.config.js       # ESLint configuration
```

## 🎨 Customization

### Colors
The portfolio uses a custom color scheme defined in CSS variables:
- `--navy`: #0a192f (Background)
- `--gold`: #ffd700 (Accent)
- `--gold-hover`: #ffd900 (Hover states)

### Content
Update the content in each component file:
- **Hero**: `src/components/HeroSection.jsx`
- **About**: `src/components/AboutSection.jsx`
- **Experience**: `src/components/ExperienceSection.jsx`
- **Projects**: `src/components/ProjectsSection.jsx`
- **Contact**: `src/components/ContactSection.jsx`

## 🚀 Performance Features

- **Lazy Loading**: Components are loaded on demand
- **Code Splitting**: Automatic chunk splitting for optimal loading
- **Optimized Animations**: Hardware-accelerated CSS animations
- **Responsive Images**: Optimized for different screen sizes
- **Minimal Bundle**: Tree-shaking and dead code elimination

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

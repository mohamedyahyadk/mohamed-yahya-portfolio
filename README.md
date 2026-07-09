# Mohamed Yahya - Full-Stack Software Engineer Portfolio

A modern, professional portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Showcasing my experience, skills, and projects as a full-stack software engineer.

## 🌐 Live Demo
[View Portfolio](https://mohamedyahya-portfolio.netlify.app)

## 🛠️ Tech Stack

**Frontend:**
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion (animations)
- Vite (build tool)
- React Scroll (smooth navigation)
- React Icons

**Deployment:**
- Netlify / Vercel

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation with mobile menu
│   ├── Hero.jsx            # Hero section with CTAs
│   ├── About.jsx           # About section with highlights
│   ├── Experience.jsx      # Work experience cards
│   ├── Skills.jsx          # Categorized skills
│   ├── Projects.jsx        # Featured projects
│   └── Contact.jsx         # Contact information & CTA
│
├── data/
│   └── portfolio.js        # All portfolio content
│
├── App.jsx                 # Main app component
├── main.jsx                # React entry point
├── index.css               # Global styles with Tailwind
│
└── assets/                 # Images and static files

```

## 🎨 Features

✨ **Modern Design**
- Dark theme with cyan and pink accents
- Smooth animations and transitions
- Responsive on all devices
- Interactive hover effects

🎯 **Sections**
1. **Hero** - Eye-catching introduction with CTAs
2. **About** - Professional summary with highlights
3. **Experience** - Detailed work experience timeline
4. **Skills** - Organized by categories (Frontend, Backend, Database, DevOps)
5. **Projects** - Featured projects with descriptions and tech stack
6. **Contact** - Multiple ways to connect

🚀 **Performance**
- Optimized with Vite
- Lazy component loading
- Smooth scrolling
- Mobile-optimized

## 🚀 Quick Start

### Prerequisites
- Node.js (v18+)
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/mohamedyahyadk/mohamed-yahya-portfolio.git
cd mohamed-yahya-portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Start development server**
```bash
npm run dev
```
The site will open at `http://localhost:3000`

### Build for production
```bash
npm run build
```

### Preview production build
```bash
npm run preview
```

## 📝 Customization

### Update Your Information

Edit `src/data/portfolio.js` to customize:
- Name and title
- About section
- Work experience
- Skills and technologies
- Projects
- Contact information
- Social links

### Modify Colors

Update theme colors in `tailwind.config.js`:
```javascript
colors: {
  primary: "#00d4ff",      // Cyan
  secondary: "#0a0e27",    // Dark blue
  accent: "#ff006e",       // Pink
}
```

### Add Your Projects

Add new projects to the `projects` array in `src/data/portfolio.js`:
```javascript
{
  id: 5,
  title: "Your Project",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  features: ["Feature 1", "Feature 2"],
  github: "https://github.com/...",
}
```

## 📤 Deployment

### Deploy to Netlify (Recommended)

1. Push your code to GitHub
2. Connect your repository on [Netlify](https://netlify.com)
3. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy!

### Deploy to Vercel

1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Vercel auto-detects Vite configuration
4. Deploy!

## 📱 Mobile Responsive

The portfolio is fully responsive with:
- Mobile-first design
- Adaptive navigation (hamburger menu on mobile)
- Touch-friendly interactive elements
- Optimized images and typography

## 🎯 SEO Optimization

- Meta tags for title and description
- Open Graph tags
- Proper heading hierarchy
- Schema markup ready

## 📊 Performance Metrics

- ⚡ Fast load times with Vite
- 🎨 Smooth 60fps animations
- 📱 Mobile optimized
- ♿ Accessible components

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

## 📄 License

This project is open source and available under the MIT License.

## 👨‍💻 About Me

**Mohamed Yahya** - Full-Stack Software Engineer

- **Email:** mohamedyahyadk@gmail.com
- **GitHub:** [@mohamedyahyadk](https://github.com/mohamedyahyadk)
- **LinkedIn:** [Mohamed Yahya](https://linkedin.com/in/mohamedyahyadk)

**Experience:**
- SISTA Design Office (Mauritania)
- Camphire (Berlin, Germany)
- Freelance Projects

**Skills:** Spring Boot, Node.js, Django, React, Angular, PostgreSQL, Docker, and more

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for utility-first styling
- Vite for fast build tooling
- React community for amazing libraries

---

**Last Updated:** July 2024


# Shreyash Kale - Portfolio Website

A stunning, modern portfolio website built with React.js, TypeScript, and Framer Motion. Features a dynamic theme switcher with 6 beautiful color palettes, custom HTML tag logo, and premium hover animations throughout. This portfolio showcases professional skills, projects, and experience with a beautiful, interactive UI.

## ✨ Features

- **Dynamic Theme System**: 6 professionally curated color themes (Violet, Emerald, Rose, Amber, Indigo, Teal) with real-time switching
- **Custom Logo Design**: Unique HTML tag logo (`</>`) with Mac-inspired glassmorphism effects
- **Premium Hover Effects**: Glowing animations, shimmer effects, and smooth transitions on all interactive elements
- **Modern Design**: Clean, professional design with glassmorphism and modern UI patterns
- **Responsive Layout**: Fully responsive design that works perfectly on all devices
- **Component-Based Architecture**: Modular components with clean, maintainable code
- **Smooth Animations**: Framer Motion animations for engaging user experience
- **TypeScript**: Full TypeScript support for better development experience
- **Easy Navigation**: Intuitive navigation with smooth scrolling and active state indicators
- **Contact Form**: Functional contact form with validation and beautiful styling
- **Project Showcase**: Filterable project gallery with featured projects on home page
- **Social Integration**: Direct links to GitHub, LinkedIn, Twitter, and email
- **CV Download**: Professional resume available for download

## 🚀 Technologies Used

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe JavaScript
- **Framer Motion** - Smooth animations and transitions
- **React Router** - Client-side routing
- **Lucide React** - Beautiful, customizable icons
- **CSS3** - Modern CSS with custom properties and animations

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Layout/         # Layout components (Header, Footer)
│   ├── Hero/           # Hero section with social links and stats
│   ├── Skills/         # Skills and expertise components
│   ├── Experience/     # Work experience components
│   ├── Education/      # Educational background components
│   ├── Projects/       # Project showcase components
│   ├── Contact/        # Contact form and info components
│   ├── About/          # About page components
│   ├── HomeProjects/   # Featured projects for home page
│   ├── PersonalLogo/   # Custom HTML tag logo component
│   └── ThemeSwitcher/  # Dynamic theme switching component
├── contexts/           # React Context providers
│   └── ThemeContext.tsx # Theme management and persistence
├── pages/              # Page components
│   ├── Home.tsx        # Home page with all sections
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects page with filters
│   └── Contact.tsx     # Contact page
├── App.tsx             # Main app component with theme provider
└── App.css             # Global styles and CSS variables
```

## 🎨 Design Features

- **Dynamic Theme System**: 6 beautiful color palettes with CSS custom properties and localStorage persistence
- **Custom Logo**: Unique HTML tag logo (`</>`) with glassmorphism effects and Mac-inspired design
- **Premium Animations**: Shimmer effects, glowing hover states, scale animations, and smooth transitions
- **Typography**: Inter font family for excellent readability and modern feel
- **Glassmorphism**: Modern UI patterns with backdrop blur and transparency effects
- **Gradients**: Beautiful gradient backgrounds, text effects, and button fills
- **Shadows**: Subtle shadows and depth for modern feel
- **Icons**: Consistent iconography using Lucide React with hover animations

## 📱 Responsive Design

- **Mobile First**: Designed for mobile devices first
- **Breakpoints**: Responsive breakpoints for tablets and desktops
- **Touch Friendly**: Optimized for touch interactions
- **Flexible Layouts**: CSS Grid and Flexbox for adaptive layouts

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ideal-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## 🎯 Customization

### Personal Information

Update the following files with your information:
- `src/components/Hero/Hero.tsx` - Hero section content, social links, and stats
- `src/components/AboutHero/AboutHero.tsx` - About page content and contact info
- `src/components/Experience/Experience.tsx` - Work experience details
- `src/components/Education/Education.tsx` - Educational background and achievements
- `src/components/ProjectGrid/ProjectGrid.tsx` - Project showcase with GitHub links
- `src/components/Skills/Skills.tsx` - Technical skills and expertise
- `src/components/Interests/Interests.tsx` - Certifications and achievements

### Styling

- **Theme Colors**: Update color palettes in `src/contexts/ThemeContext.tsx`
- **Global Styles**: Modify CSS custom properties in `src/App.css`
- **Fonts**: Modify font imports in `public/index.html`
- **Layouts**: Adjust component CSS files for custom layouts

### Content

- **Projects**: Add your projects to the projects array with featured flags
- **Skills**: Update skills and technologies in organized categories
- **Contact**: Update contact information, social links, and availability
- **Logo**: Customize the PersonalLogo component for your brand
- **CV**: Replace `public/Shreyash_Kale_s_CV.pdf` with your resume

## 📋 Component Guidelines

Each component follows these principles:
- **Max 75 lines**: No component exceeds 75 lines of code
- **Single Responsibility**: Each component has one clear purpose
- **Reusable**: Components are designed for reusability
- **Accessible**: Proper ARIA labels and semantic HTML
- **Documented**: JSDoc comments for all components

## 🌟 Key Components

### Header & Navigation
- Fixed navigation with smooth scrolling
- Mobile-responsive hamburger menu
- Active page highlighting with dots
- Custom HTML tag logo with glassmorphism effects
- Theme switcher with 6 color palette options

### Hero Section
- Animated introduction text with gradient effects
- Call-to-action buttons with shimmer animations
- Professional statistics display (CGPA, Rank, Certifications)
- Social media links with glowing hover effects

### Theme System
- Dynamic theme switching with 6 color palettes
- Theme persistence using localStorage
- CSS custom properties for consistent theming
- Smooth transitions between themes

### Skills Section
- Grid layout for skills display
- Icon-based skill categories
- Premium hover animations and effects

### Projects
- Filterable project gallery with category filters
- Featured projects displayed on home page
- Project cards with technology tags and GitHub links
- Live demo and source code links

### Contact Form
- Form validation with beautiful styling
- Responsive design with premium animations
- Success/error handling
- Social media integration

### Education & Experience
- Professional timeline layout
- Achievement highlights
- Responsive grid design

## 🔧 Development

### Code Style
- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Prettier**: Code formatting
- **JSDoc**: Comprehensive documentation

### Performance
- **Lazy Loading**: Components load as needed
- **Optimized Images**: Responsive image handling
- **Minimal Dependencies**: Only essential packages included

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎨 Theme System

The portfolio features a sophisticated theme system with 6 professionally curated color palettes:

- **Violet**: Primary theme with purple accents
- **Emerald**: Green-based professional theme
- **Rose**: Warm pink and red theme
- **Amber**: Golden and orange theme
- **Indigo**: Deep blue professional theme
- **Teal**: Modern teal and cyan theme

Each theme automatically updates all colors, gradients, and hover effects throughout the website while maintaining visual consistency.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Framer Motion** for smooth animations and transitions
- **Lucide React** for beautiful, consistent iconography
- **Inter Font** for excellent typography and readability
- **React Community** for amazing tools and libraries
- **CSS Custom Properties** for dynamic theming system
- **Glassmorphism Design** for modern UI patterns

## 📞 Support

If you have any questions or need help customizing this portfolio, feel free to reach out!

---

**Built with ❤️ using React, TypeScript, and modern web technologies**

## 🚀 Live Demo

Visit the live portfolio to experience the dynamic theme switching and premium animations: [Portfolio Link]

## 📧 Contact

- **Email**: shreyashkale9@gmail.com
- **GitHub**: [@shreyashkale9](https://github.com/shreyashkale9)
- **LinkedIn**: [Shreyash Kale](https://linkedin.com/in/shreyash-kale-aa404a1b3/)
- **Twitter**: [@shreyashkale9](https://x.com/shreyashkale9)

---

*This portfolio demonstrates modern web development practices, clean code architecture, and attention to detail in both functionality and design.*

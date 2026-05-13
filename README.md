# Shreyash Kale - Portfolio Website

A modern, responsive portfolio website showcasing professional skills, projects, and experience. Built with React, TypeScript, and modern web technologies featuring a dynamic theme system and premium user experience.

## 🌐 Live

Visit the live portfolio: [Portfolio Website](https://shreyashkale.netlify.app)

## ✨ Features

- **Virtual Shreyash AI Assistant**: A custom-trained AI chatbot powered by Google's `gemini-2.5-flash` model that answers recruiter questions contextually based on my resume.
- **Integrated Payment Gateway**: A "Buy me a coffee" donation feature powered by Razorpay for seamless live UPI and card transactions.
- **Full-Stack Architecture**: Secure Express/Node.js backend handling API keys, AI prompt generation, and secure payment order creation.
- **Dynamic Theme System**: 6 professionally curated color themes with real-time switching.
- **Custom Logo Design**: Unique HTML tag logo with glassmorphism effects.
- **Premium Animations**: Smooth transitions, hover effects, and micro-interactions.
- **Responsive Design**: Fully responsive layout optimized for all devices.
- **Modern UI/UX**: Glassmorphism design patterns and contemporary aesthetics.
- **Interactive Elements**: Glowing hover states, shimmer effects, and smooth animations.
- **Social Integration**: Direct links to professional profiles and contact methods.
- **CV Download**: Professional resume available for download.

## 🚀 Technologies

### Frontend
- **Framework**: React 18, TypeScript, CSS3
- **Styling**: Modern CSS with custom properties and glassmorphism
- **Animations**: Framer Motion for smooth interactions
- **Icons**: Lucide React for consistent iconography
- **Routing**: React Router v7 for seamless navigation
- **State Management**: React Context for theme management

### Backend & Services
- **Server**: Node.js, Express.js
- **Artificial Intelligence**: Google Generative AI SDK (Gemini 2.5 Flash)
- **Payments**: Razorpay Node SDK
- **Email Service**: EmailJS for contact form functionality

## 🚀 Deployment

The portfolio uses a decoupled deployment strategy:

### Frontend (Netlify)
- **Build Command**: `npm run build`
- **Publish Directory**: `build`
- **Node Version**: 18
- **Secrets Scanning**: Disabled for EmailJS public keys (these are frontend public keys, not secrets)

### Backend (Render / Railway)
- **Build Command**: `npm install`
- **Start Command**: `node index.js`

### Environment Variables

The following environment variables need to be configured in your deployment platform:

**Frontend (`.env`):**
```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
```

**Backend (`.env`):**
```env
PORT=5001
GEMINI_API_KEY=your_google_ai_studio_key
RAZORPAY_KEY_ID=your_razorpay_live_key_id
RAZORPAY_KEY_SECRET=your_razorpay_live_secret
```

**Note**: EmailJS public keys are designed to be exposed in frontend code and are not considered secrets.

**CRITICAL**: Backend environment variables must never be pushed to version control. Ensure .env is listed in your backend/.gitignore.

## 🎨 Theme System

The portfolio features six professionally curated color palettes:

- **Violet**: Primary theme with purple accents
- **Emerald**: Green-based professional theme  
- **Rose**: Warm pink and red theme
- **Amber**: Golden and orange theme
- **Indigo**: Deep blue professional theme
- **Teal**: Modern teal and cyan theme

Each theme automatically updates all colors, gradients, and hover effects while maintaining visual consistency.

## 📱 Sections

### Hero Section
- Professional introduction with animated text
- Call-to-action buttons with shimmer effects
- Key statistics and achievements display
- Social media integration with glowing hover effects

### About
- Personal introduction and background
- Contact information and location details
- Professional summary and expertise areas

### Skills
- Technical skills organized by category
- Programming languages, frameworks, and tools
- Visual skill representation with icons

### Experience
- Professional work history timeline
- Company details and role descriptions
- Achievement highlights and responsibilities

### Education
- Academic background and qualifications
- University achievements and rankings
- Educational timeline and specializations

### Projects
- Portfolio of completed projects
- Technology stack and project descriptions
- Live demo and source code links
- Featured projects on home page

### Contact
- Professional contact form
- Contact information and availability
- Social media links and direct contact methods

## 🎯 Key Components

- **Header Navigation**: Fixed navigation with theme switcher and custom logo
- **Theme Switcher**: Dropdown with color palette options and previews
- **Project Grid**: Filterable project showcase with category filters
- **Contact Form**: Validated contact form with premium styling
- **Responsive Layout**: Mobile-first design with adaptive components

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [https://github.com/shreyashkale9/Portfolio-new.git](https://github.com/shreyashkale9/Portfolio-new.git)
cd Portfolio-new

# 1. Setup and Start Backend
cd backend
npm install
node index.js
# Backend server runs on http://localhost:5001

# 2. Setup and Start Frontend (Open a new terminal tab)
cd ..
npm install
npm start
# React app runs on http://localhost:3000

# Build for production
npm run build
```

## 🎨 Customization

### Personal Information
Update component files with your details:
- Personal information and contact details
- Work experience and educational background
- Skills and technical expertise
- Project portfolio and achievements

### Styling
- Modify theme colors in `src/contexts/ThemeContext.tsx`
- Update global styles in `src/App.css`
- Customize component-specific CSS files

### Content
- Add your projects to the projects array
- Update skills and technology categories
- Replace CV file with your resume
- Customize logo and branding elements

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Development

- **TypeScript**: Strict type checking enabled
- **ESLint**: Code quality and consistency
- **Component Architecture**: Modular, reusable components
- **Performance**: Optimized animations and lazy loading
- **Accessibility**: ARIA labels and semantic HTML

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

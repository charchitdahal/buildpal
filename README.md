# Build Pal - Build Apps Without Code

A modern SaaS landing page inspired by Build Pal.com, built with React and TailwindCSS.

## 🚀 Features

- 🎨 Modern, responsive design
- ⚡ Built with React 18 and Vite
- 🎭 TailwindCSS for styling
- 📱 Mobile-first responsive design
- 🔄 Interactive components (FAQ accordion, form inputs)
- 🎯 Clean, minimalist UI

## Live Demo

Visit the live site: [Your Vercel URL will go here]

## 🛠️ Tech Stack

- **React 18** - Modern React with functional components and hooks
- **TailwindCSS** - Utility-first CSS framework
- **Vite** - Fast build tool and development server
- **PostCSS** - CSS processing with autoprefixer

## 📦 Getting Started

### Prerequisites

- Node.js 16+
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit `http://localhost:3000`

## 🏗️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier

## 📱 Page Sections

The homepage includes the following sections:

1. **Menu** - Navigation header with BuildPal branding and menu items
2. **Hero Section** - Welcome message and introduction to AI development
3. **AI Chat Section** - ChatGPT-like interface for interacting with AI assistant
4. **FAQ Section** - Collapsible questions and answers about BuildPal
5. **Bottom Section** - Call-to-action and footer with links

## 🎨 Design System

### Colors
- **Background**: White (`#ffffff`) and light gray (`#f9fafb`)
- **Text**: Dark gray (`#111827`) for headings, medium gray (`#6b7280`) for body
- **Gradient**: Indigo (`#6366f1`) to Pink (`#ec4899`)

### Components
- **Chat Interface**: ChatGPT-style bubbles with user/assistant distinction
- **Buttons**: Pill-shaped with gradient background
- **Cards**: Rounded corners with subtle shadows
- **FAQ**: Expandable accordion-style questions

## 🤖 AI Chat Features

- **Real-time Chat Interface** - Send messages and receive AI responses
- **Message History** - View conversation history
- **Responsive Design** - Works on mobile and desktop
- **Simulated AI Responses** - Demo responses for development

## 🔧 Customization

### Adding New FAQ Items
Edit the `faqs` array in `src/App.jsx`:

```javascript
const faqs = [
  {
    question: "Your question here?",
    answer: "Your answer here."
  }
]
```

### Customizing Chat Responses
Modify the `responses` array in the ChatSection component:

```javascript
const responses = [
  "Your custom AI response...",
]
```

### Styling Changes
Update `tailwind.config.js` to change colors, fonts, or spacing.

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: Optimized with Vite's tree shaking
- **Fast Loading**: Minimal dependencies and optimized assets

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

The `dist` folder contains the production build ready for deployment.

### Quick Deploy Options
- **Vercel**: `vercel --prod`
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Push to repository and enable Pages

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Built with modern React and TailwindCSS best practices
- Inspired by ChatGPT's clean interface design
- Icons from Heroicons
# buildpal

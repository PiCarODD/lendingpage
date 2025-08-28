# NextecAsia Landing Page

Enterprise-grade penetration testing vulnerability management platform landing page built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern React + TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom components
- **Framer Motion** - Smooth animations and interactions
- **Vite** - Fast development and optimized builds
- **Mobile Responsive** - Works perfectly on all devices
- **SEO Optimized** - Meta tags, structured data, and performance
- **Production Ready** - Configured for deployment

## 📦 Tech Stack

- **Framework**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + PostCSS
- **Animations**: Framer Motion
- **Linting**: ESLint + TypeScript ESLint
- **Package Manager**: npm

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm 8+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check
```

## 🏗️ Project Structure

```
├── public/                 # Static assets
│   ├── favicon.svg        # Favicon
│   └── site.webmanifest   # PWA manifest
├── src/                   # Source code
│   ├── components/        # React components
│   │   └── NextecAsiaLanding.tsx  # Main landing page
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles
├── index.html            # HTML template
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.ts        # Vite configuration
└── tsconfig.json         # TypeScript configuration
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized production files.

### Deploy Options

#### 1. **Vercel** (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### 2. **Netlify**
- Connect your GitHub repository
- Build command: `npm run build`
- Publish directory: `dist`

#### 3. **Railway**
```bash
# Install Railway CLI
npm install -g @railway/cli

# Deploy
railway up
```

#### 4. **Static File Hosting**
Upload the `dist/` folder contents to any static hosting service:
- AWS S3 + CloudFront
- Google Cloud Storage
- Azure Static Web Apps
- GitHub Pages

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Optional: Analytics tracking ID
VITE_GA_TRACKING_ID=your-ga-id

# Optional: API endpoints
VITE_API_URL=https://api.nextecasia.com

# Optional: Vercel Speed Insights configuration
VITE_SPEED_INSIGHTS_ENABLED=true
VITE_SPEED_INSIGHTS_DEBUG=false

# Optional: Vercel Analytics configuration
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_DEBUG=false
```

### Custom Domain

Update the following files when deploying to a custom domain:

1. **index.html** - Update meta tags with your domain
2. **public/site.webmanifest** - Update start_url and scope
3. **src/components/NextecAsiaLanding.tsx** - Update contact information

## 📊 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size**: ~150KB gzipped
- **First Contentful Paint**: <1.5s
- **Time to Interactive**: <3s

### Vercel Speed Insights & Analytics

This project includes both Vercel Speed Insights and Analytics for comprehensive monitoring:

#### Speed Insights
- **Automatic Core Web Vitals tracking** (LCP, FID, CLS)
- **Real-time performance metrics** in your Vercel dashboard
- **User experience insights** across different devices and networks
- **Performance regression detection** with alerts

#### Analytics
- **Automatic page view tracking** across your application
- **User interaction metrics** and engagement data
- **Custom event tracking** capabilities
- **Real-time visitor analytics** in your Vercel dashboard
- **Privacy-focused** with GDPR compliance

Both components are automatically included in the app and require no additional configuration when deployed to Vercel.

## 🎨 Customization

### Colors

Update the purple theme in `tailwind.config.js`:

```js
colors: {
  purple: {
    // Your custom purple shades
  }
}
```

### Content

All content is in `src/components/NextecAsiaLanding.tsx`:
- Hero section
- Features
- Pricing plans
- Contact information

### Animations

Framer Motion animations are configured in the component. Adjust timing and effects as needed.

## 📝 SEO Features

- Meta tags for search engines
- Open Graph tags for social sharing
- Twitter Card tags
- Structured data markup
- Sitemap friendly URLs
- Performance optimized

## 🔐 Security

- Content Security Policy headers
- XSS protection
- HTTPS enforced
- No sensitive data in client-side code

## 📞 Support

For technical support or customization requests:
- Email: hello@nextecasia.com
- Documentation: [Link to docs]
- GitHub Issues: [Link to repository]

## 📄 License

This project is proprietary software. All rights reserved by NextecAsia.

---

**Built with ❤️ for NextecAsia**

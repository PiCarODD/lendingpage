# Vercel Analytics & Speed Insights Implementation

This document outlines the implementation of Vercel Speed Insights and Analytics in the NextecAsia Landing Page application.

## 🚀 Overview

The application now includes both Vercel Speed Insights and Analytics for comprehensive performance monitoring and user behavior tracking:

- **Speed Insights**: Automatic Core Web Vitals tracking and performance monitoring
- **Analytics**: Page views, user interactions, and custom event tracking

## 📦 Dependencies

```json
{
  "@vercel/speed-insights": "^1.2.0",
  "@vercel/analytics": "^1.5.0"
}
```

## 🔧 Implementation

### 1. App.tsx Integration

Both components are integrated in the main App component:

```tsx
import { SpeedInsights } from "@vercel/speed-insights/react"
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <div className="App">
      <NextecAsiaLanding />
      {/* Vercel Speed Insights - Automatically tracks Core Web Vitals */}
      <SpeedInsights />
      {/* Vercel Analytics - Tracks page views, user interactions, and custom events */}
      <Analytics />
    </div>
  )
}
```

### 2. Analytics Utility Functions

Located in `src/utils/analytics.ts`, providing reusable tracking functions:

#### Form Tracking
```tsx
export const trackFormSubmission = (formName: string, formData?: Record<string, any>) => {
  track('form_submission', {
    form_name: formName,
    ...formData
  });
};
```

#### Plan Selection Tracking
```tsx
export const trackPlanSelection = (planName: string, planPrice: string) => {
  track('plan_selection', {
    plan_name: planName,
    plan_price: planPrice
  });
};
```

#### Contact Method Tracking
```tsx
export const trackContactMethod = (method: 'email' | 'phone' | 'location') => {
  track('contact_method_click', {
    method
  });
};
```

#### Section View Tracking
```tsx
export const trackSectionView = (sectionName: string) => {
  track('section_view', {
    section: sectionName
  });
};
```

#### Button Click Tracking
```tsx
export const trackButtonClick = (buttonName: string, buttonLocation: string) => {
  track('button_click', {
    button_name: buttonName,
    location: buttonLocation
  });
};
```

### 3. Enhanced Contact Component

The Contact component now includes comprehensive analytics tracking:

- **Form submissions** with plan selection and form data
- **Contact method clicks** (email, phone, location)
- **Plan selection changes** in the dropdown
- **Interactive contact methods** with hover effects

## 📊 Tracked Events

### Automatic Events (Speed Insights)
- Core Web Vitals (LCP, FID, CLS)
- Page load performance
- User experience metrics

### Automatic Events (Analytics)
- Page views
- Navigation patterns
- Session duration

### Custom Events
- `form_submission`: Contact form submissions
- `plan_selection`: Pricing plan selections
- `contact_method_click`: Contact method interactions
- `section_view`: Page section visibility
- `button_click`: Button interactions
- `pricing_interaction`: Pricing plan interactions

## 🎯 Usage Examples

### Tracking Form Submissions
```tsx
import { trackFormSubmission } from '../utils/analytics';

const handleSubmit = (formData) => {
  trackFormSubmission('contact_form', {
    plan_selected: formData.plan,
    has_company: !!formData.company,
    message_length: formData.message.length
  });
};
```

### Tracking User Interactions
```tsx
import { trackContactMethod } from '../utils/analytics';

const handleEmailClick = () => {
  trackContactMethod('email');
};
```

### Tracking Section Views
```tsx
import { trackSectionView } from '../utils/analytics';

// Use with Intersection Observer or scroll events
useEffect(() => {
  trackSectionView('hero_section');
}, []);
```

## 🔍 Dashboard Access

### Speed Insights Dashboard
- Access via Vercel project dashboard
- Real-time performance metrics
- Core Web Vitals tracking
- Performance regression alerts

### Analytics Dashboard
- Access via Vercel project dashboard
- Page view analytics
- User interaction data
- Custom event tracking
- Geographic and device insights

## ⚙️ Configuration

### Environment Variables (Optional)
```env
# Speed Insights
VITE_SPEED_INSIGHTS_ENABLED=true
VITE_SPEED_INSIGHTS_DEBUG=false

# Analytics
VITE_ANALYTICS_ENABLED=true
VITE_ANALYTICS_DEBUG=false
```

### Vercel Configuration
The `vercel.json` file includes security headers and build configuration:
```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        }
      ]
    }
  ]
}
```

## 🚀 Deployment

### Automatic Setup
When deployed to Vercel:
1. Speed Insights automatically starts tracking
2. Analytics automatically starts collecting data
3. No additional configuration required

### Manual Setup (Other Platforms)
For non-Vercel deployments, ensure:
1. Environment variables are set correctly
2. Build process includes analytics components
3. Proper domain configuration

## 📈 Benefits

### Performance Monitoring
- Real-time Core Web Vitals tracking
- Performance regression detection
- User experience insights
- Device and network performance data

### User Behavior Analytics
- Page view patterns
- User interaction tracking
- Form completion rates
- Plan selection preferences
- Contact method preferences

### Business Intelligence
- Lead generation insights
- User engagement metrics
- Conversion funnel analysis
- Geographic user distribution

## 🔒 Privacy & Compliance

- GDPR compliant tracking
- No personally identifiable information collected
- Respects user privacy preferences
- Configurable tracking levels

## 🛠️ Development

### Local Development
- Analytics work in development mode
- Debug mode available via environment variables
- Console logging for development debugging

### Testing
- Build process validates analytics integration
- TypeScript ensures proper function usage
- Linting maintains code quality

## 📚 Resources

- [Vercel Speed Insights Documentation](https://vercel.com/docs/speed-insights)
- [Vercel Analytics Documentation](https://vercel.com/docs/analytics)
- [Core Web Vitals](https://web.dev/vitals/)
- [Web Performance Best Practices](https://web.dev/performance/)

---

**Note**: This implementation provides comprehensive analytics while maintaining user privacy and following best practices for web performance monitoring.

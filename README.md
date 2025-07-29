# Chambers of L&V - Law Firm Website

A professional, animated law firm website for "Chambers of L&V" built with Next.js, TailwindCSS, and Framer Motion.

## 🏛️ About

Chambers of L&V is a premier Corporate, Commercial & Litigation law firm based in Gurugram, India. This website provides comprehensive information about their legal services while adhering to Bar Council of India regulations.

## ✨ Features

- **Professional Design**: Clean, modern, and corporate design suitable for a law firm
- **Responsive Layout**: Mobile-first design that works on all devices
- **Smooth Animations**: Framer Motion animations for enhanced user experience
- **Bar Council Compliance**: Mandatory disclaimer popup on first visit
- **Contact Integration**: Call and WhatsApp buttons for easy communication
- **SEO Optimized**: Proper meta tags and structured content
- **Accessibility**: WCAG compliant design and navigation

## 🚀 Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: TailwindCSS with custom theme
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel-ready

## 📋 Pages

- **Home**: Hero section, services overview, testimonials
- **About Us**: Company information, mission, values, team overview
- **Services**: Detailed legal services with descriptions
- **Team**: Team member profiles and expertise
- **Testimonials**: Client feedback and reviews
- **Blog**: Legal articles and news (placeholder content)
- **FAQs**: Common questions and answers
- **Contact**: Contact form with office information
- **Legal Pages**: Disclaimer, Privacy Policy, Terms & Conditions

## 🎨 Design Features

- **Color Scheme**: Professional blue and dark theme
- **Typography**: Inter for body text, Playfair Display for headings
- **Animations**: Smooth page transitions and section fade-ins
- **Components**: Reusable card components and interactive elements
- **Navigation**: Sticky navbar with smooth scrolling

## 📱 Responsive Features

- Mobile-first design approach
- Responsive navigation with hamburger menu
- Optimized layouts for tablets and desktops
- Touch-friendly interface elements

## ⚖️ Legal Compliance

- **Bar Council Disclaimer**: Mandatory popup on first visit
- **Non-Soliciting Content**: All content avoids advertising language
- **Professional Tone**: Corporate and ethical presentation
- **Legal Disclaimers**: Comprehensive terms and privacy policies

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd chambers-of-lv
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📦 Build and Deploy

1. **Build for production**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

3. **Deploy to Vercel**
   ```bash
   npx vercel
   ```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file for any environment-specific configurations:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_PHONE=+918112236676
NEXT_PUBLIC_CONTACT_EMAIL=info@chambersoflv.com
```

### Customization

1. **Logo**: Replace `/public/logo.png` with your law firm's logo
2. **Colors**: Modify the primary color scheme in `tailwind.config.js`
3. **Content**: Update text content in the respective page components
4. **Contact Info**: Update contact details in components and pages
5. **Services**: Modify the services array in the Services page

## 📁 Project Structure

```
chambers-of-lv/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── [pages]/           # Other pages
├── components/             # Reusable components
│   ├── DisclaimerProvider.tsx
│   ├── Navbar.tsx
│   └── Footer.tsx
├── public/                # Static assets
├── tailwind.config.js     # TailwindCSS configuration
├── package.json           # Dependencies
└── README.md             # This file
```

## 🎯 Key Components

### DisclaimerProvider
- Manages the mandatory Bar Council disclaimer popup
- Stores user acceptance in localStorage
- Ensures compliance with legal requirements

### Navbar
- Responsive navigation with mobile menu
- Smooth scroll animations
- Contact buttons integration

### Footer
- Comprehensive contact information
- Legal links and social media
- Professional branding

## 🔒 Legal Features

### Bar Council Compliance
- Mandatory disclaimer on first visit
- Non-soliciting language throughout
- Professional presentation without advertising

### Contact Integration
- Direct phone call buttons
- WhatsApp integration
- Contact form with disclaimer

## 🚀 Performance

- Optimized images and assets
- Efficient component structure
- Lazy loading for better performance
- SEO-friendly meta tags

## 📞 Support

For questions or support:
- **Email**: info@chambersoflv.com
- **Phone**: +91 98765 43210
- **Address**: District Court Complex, Gurugram, Haryana 122001, India

## 📄 License

This project is created for Chambers of L&V. All rights reserved.

## 🔄 Updates

- **v1.0.0**: Initial release with all core features
- Responsive design implementation
- Bar Council compliance features
- Complete legal pages and disclaimers

---

**Note**: This website is designed to comply with Bar Council of India regulations. The Bar Council of India prohibits advocates from advertising or soliciting work in any form. This website is for informational purposes only and does not constitute legal advice or advertising.
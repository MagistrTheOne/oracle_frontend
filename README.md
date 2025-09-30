# Oracle850B-MoE: Sovereign AI Presentation Website

[![Next.js](https://img.shields.io/badge/Next.js-15.5.4-black)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC)](https://tailwindcss.com)
[![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-Latest-purple)](https://ui.shadcn.com)

A professional, investor-focused presentation website for **Oracle850B-MoE**, a revolutionary Russian language AI model featuring a custom Mixture of Experts (MoE) architecture with 850 billion parameters and 180-220 billion active parameters per inference.

## 🌟 Key Features

### Advanced AI Architecture
- **850B Parameters** with custom MoE architecture
- **180-220B Active Parameters** per query for optimal efficiency
- **Russian Language Optimized** with native Cyrillic processing
- **95% Computational Efficiency** through expert selection

### Technical Excellence
- **Interactive MoE Visualization** with animated SVG graphics
- **Real-time Performance Metrics** and benchmarking
- **Live Demo Interface** with query simulation
- **Comprehensive Technical Specifications**

### Market Leadership
- **Strategic Market Analysis** for Russian AI sector
- **Competitive Positioning Matrix** vs. industry leaders
- **Target Segment Breakdown** (Government, Enterprise, Education, Research)
- **Growth Projections** through 2030

### Investment Ready
- **Detailed Financial Projections** with multiple scenarios
- **Comprehensive ROI Analysis** (8.5x - 28.7x returns)
- **Strategic Exit Strategies** (Acquisition, IPO, PE Buyout)
- **Professional Investment Deck** and due diligence materials

## 🚀 Quick Start

### Prerequisites
- **Node.js 18+**
- **npm/yarn/pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/MagistrTheOne/oraclefrontend.git
cd oraclefrontend

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Build for Production

```bash
# Create optimized production build
npm run build

# Start production server
npm start
```

## 🏗️ Project Structure

```
oraclefrontend/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with providers
│   │   ├── page.tsx           # Main landing page
│   │   └── globals.css        # Global styles and glassmorphism
│   ├── components/
│   │   ├── sections/          # Main content sections
│   │   │   ├── hero-section.tsx
│   │   │   ├── technical-showcase.tsx
│   │   │   ├── market-analysis.tsx
│   │   │   ├── development-roadmap.tsx
│   │   │   ├── team-section.tsx
│   │   │   ├── live-demo-section.tsx
│   │   │   └── investment-section.tsx
│   │   ├── technical/         # Technical visualizations
│   │   │   ├── moe-visualization.tsx
│   │   │   ├── performance-chart.tsx
│   │   │   └── live-demo-widget.tsx
│   │   ├── market/            # Market analysis components
│   │   │   ├── market-chart.tsx
│   │   │   ├── competitive-matrix.tsx
│   │   │   └── target-segments.tsx
│   │   ├── roadmap/           # Development timeline
│   │   │   ├── roadmap-timeline.tsx
│   │   │   ├── progress-bars.tsx
│   │   │   └── risk-assessment.tsx
│   │   ├── team/              # Team information
│   │   │   ├── founder-profile.tsx
│   │   │   ├── technical-achievements.tsx
│   │   │   └── community-metrics.tsx
│   │   ├── investment/        # Investment materials
│   │   │   ├── funding-breakdown.tsx
│   │   │   ├── use-of-proceeds.tsx
│   │   │   ├── roi-projections.tsx
│   │   │   └── contact-form.tsx
│   │   ├── ui/                # shadcn/ui components
│   │   ├── theme-provider.tsx # Dark theme management
│   │   ├── language-provider.tsx # RU/EN localization
│   │   └── navigation.tsx     # Header navigation
│   └── lib/
│       ├── utils.ts           # Utility functions
│       └── translations.ts    # Complete RU/EN translations
├── public/                    # Static assets
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🎨 Design & Technology Stack

### Frontend Framework
- **Next.js 15.5.4** with App Router and Turbopack
- **TypeScript 5.0** for type safety
- **React 19.1.0** with modern hooks

### Styling & UI
- **Tailwind CSS 4.0** with custom glassmorphism design
- **shadcn/ui** component library (60+ components)
- **Lucide React** icons (removed for clean design)
- **Custom animations** and micro-interactions

### Data Visualization
- **Recharts** for interactive charts and graphs
- **Custom SVG animations** for MoE architecture
- **Responsive design** for all screen sizes

### Internationalization
- **Complete RU/EN localization** with 300+ translation keys
- **Context-based language switching** in navigation
- **Russian Cyrillic support** throughout

## 📊 Content Sections

### 1. Hero Section
- Compelling tagline and value proposition
- Key statistics and performance metrics
- Call-to-action buttons for engagement

### 2. Technical Showcase
- Interactive MoE architecture visualization
- Performance comparison charts
- Technical specifications and benchmarks
- Live demo interface with query simulation

### 3. Market Analysis
- Russian AI market growth projections
- Target segment analysis and use cases
- Competitive positioning matrix
- Strategic market insights

### 4. Development Roadmap
- Interactive timeline with milestones
- Progress tracking and status updates
- Risk assessment and mitigation strategies
- Current status: Q4 2025 implementation phase

### 5. Team & Credibility
- Founder profile: **MagistrTheOne | 2025 | Krasnodar**
- Technical achievements and publications
- Community involvement and recognition
- Academic and industry partnerships

### 6. Live Demo Section
- Interactive query interface
- Before/after reasoning comparisons
- Real-time performance metrics
- Multiple demo scenarios

### 7. Investment Section
- Comprehensive funding requirements
- Use of proceeds visualization
- ROI projections (8.5x - 28.7x returns)
- Professional contact forms

## 🌐 Localization

Complete Russian and English language support:

```typescript
// Language switching in navigation
<Button onClick={() => setLanguage("ru")}>RU</Button>
<Button onClick={() => setLanguage("en")}>EN</Button>

// All content automatically translated
const { t } = useLanguage();
<h1>{t("hero.tagline")}</h1>
```

**300+ translation keys** covering all interface elements, technical terms, and marketing content.

## 📈 Performance & SEO

### Optimization Features
- **Mobile-first responsive design**
- **Lazy loading** for heavy content
- **Glassmorphism styling** with backdrop blur effects
- **Optimized animations** and transitions
- **SEO-optimized metadata** and Open Graph tags

### Technical Performance
- **Turbopack** for fast development builds
- **TypeScript strict mode** for code quality
- **ESLint** and **Prettier** for code consistency
- **Production-ready build** optimization

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Deploy to Vercel
vercel --prod

# Or connect GitHub repository for automatic deployments
```

### Other Platforms
- **Netlify**: Drag & drop build folder
- **Railway**: Connect GitHub repository
- **Docker**: Use included Dockerfile

### Production Checklist
- [ ] Environment variables configured
- [ ] Domain name set up
- [ ] SSL certificate installed
- [ ] Analytics tracking added
- [ ] Performance monitoring enabled

## 🤝 Contributing

### Development Setup
```bash
# Fork and clone repository
git clone https://github.com/your-username/oraclefrontend.git
cd oraclefrontend

# Install dependencies
npm install

# Start development server
npm run dev
```

### Code Standards
- **TypeScript strict mode** enabled
- **ESLint** and **Prettier** configuration
- **Component-based architecture**
- **shadcn/ui** design system compliance

## 📄 License

This project is proprietary software developed by **MagistrTheOne**.

**© 2025 Oracle850B-MoE. All rights reserved.**

For licensing inquiries or partnership opportunities, please contact the development team.

## 📞 Contact

**Founder & Chief AI Architect:** MagistrTheOne
**Location:** Krasnodar, Russia
**Year:** 2025

For investment inquiries, technical partnerships, or general questions:

- **Email:** contact@oracle850b-moe.com
- **LinkedIn:** [MagistrTheOne](https://linkedin.com/in/magistrtheone)
- **GitHub:** [MagistrTheOne](https://github.com/MagistrTheOne)

---

**Built with ❤️ for the future of sovereign AI development in Russia**

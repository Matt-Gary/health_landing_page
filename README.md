# 🏥 Fortaleza Oncology Concierge

**🌐 Live Project:** [health-landing-page-gilt.vercel.app](https://health-landing-page-gilt.vercel.app/)

Welcome to the **Fortaleza Oncology Concierge** landing page repository. This project is a modern, responsive, and performance-optimized single-page web application designed to offer premium, personalized oncology care services in Fortaleza.

As a high-fidelity frontend application built with the latest React ecosystem technologies, it showcases a clean architecture, sophisticated animated UI elements, and a seamless client booking experience.

## ✨ Key Features & Functionalities

- **Smooth Animated Navigation**: A fully responsive navigation bar with modern UI concepts and smooth scrolling anchors.
- **Engaging Hero Section**: Dynamic entry point with impactful copy and structured layout powered by Framer Motion animations.
- **Service & Technology Showcases**: Reusable and scalable grid components displaying specific oncology treatments and cutting-edge operational technology.
- **Patient Testimonials**: Clean review sections prioritizing social proof and user trust.
- **Transparent Pricing Components**: Clear, tiered service plans formatted for easy readability.
- **Integrated Appointment Booking**: Seamless implementation of `react-calendly` allowing direct consultation scheduling without leaving the platform.
- **Optimized User Experience**: Smooth scroll behavior, responsive cross-device layout mapping, and optimized component rendering.

## 🛠️ Technology Stack

This project was built with a keen focus on modern development standards:

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Integrations:** Calendly API (via `react-calendly`)

## 🏗️ Project Architecture

The architecture relies on a highly modular component-driven design:

```text
src/
├── app/                  # Next.js app router configuration
│   ├── layout.tsx        # Global layout and metadata
│   ├── page.tsx          # Main single-page orchestration
│   └── globals.css       # Global Tailwind integrations
├── components/           # Reusable, self-contained UI modules
│   ├── Navigation.tsx
│   ├── HeroSection.tsx
│   ├── PricingTable.tsx
│   ├── TestimonialSection.tsx
│   ├── TechnologySection.tsx
│   ├── ServicesGrid.tsx
│   └── BookingSection.tsx
```

## 🚀 Getting Started

If you'd like to run this application locally to review the code in action:

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone <repository-url>
   cd fortaleza-oncology-concierge
   ```

2. **Install the dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🎯 Note for Technical Recruiters

This repository demonstrates my capability to convert business requirements into a scalable frontend web application. Specifically, it highlights:

- **Proficiency with Context and Hydration in Next.js 16+**, utilizing `'use client'` correctly for client-side interactivity (such as Framer Motion animations and smooth scrolling).
- **Component-Driven Architecture**, ensuring readability, maintainability, and reusability over time by breaking down complex pages into distinct blocks.
- **Modern CSS Practices**, utilizing Tailwind CSS v4 to rapidly prototype and apply polished responsive designs without compromising performance.
- **Ecosystem Tooling Mastery**, seamlessly integrating TypeScript for type-safe components.

---
*Thank you for reviewing my code! If you have any questions about my technical choices, feel free to reach out.*

'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/videos/testimonial-placeholder.mp4" type="video/mp4" />
          {/* Fallback gradient background */}
        </video>
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          {/* Main Headline */}
          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl">
            Return to Your Life with{' '}
            <span className="text-healing">Confidence</span>
          </h1>

          {/* Sub-headline */}
          <p className="mb-8 text-xl text-gray-200 md:text-2xl lg:text-3xl">
            Expert oncological monitoring in Brazil's premier JCI-accredited
            hospitals at{' '}
            <span className="font-semibold text-coral-cta">
              70%–85% less
            </span>{' '}
            than U.S. out-of-pocket costs
          </p>

          {/* Primary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="rounded-full bg-coral-cta px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-shadow hover:shadow-coral-cta/50 md:text-xl"
          >
            Request a Personalized Care Itinerary
          </motion.button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-12 left-1/2 w-full max-w-4xl -translate-x-1/2"
        >
          <div className="rounded-2xl bg-white/95 px-8 py-6 shadow-2xl backdrop-blur-sm">
            <p className="mb-4 text-sm font-medium uppercase tracking-wider text-gray-600">
              Non-Negotiable Trust Signals
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {/* JCI Accreditation Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-gray-100 text-xs font-semibold text-gray-500">
                  JCI Logo
                </div>
                <span className="mt-2 text-xs text-gray-600">
                  JCI Accreditation
                </span>
              </div>

              {/* Planetree Designation Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-gray-100 text-xs font-semibold text-gray-500">
                  Planetree Logo
                </div>
                <span className="mt-2 text-xs text-gray-600">
                  Planetree Designation
                </span>
              </div>

              {/* Newsweek Logo Placeholder */}
              <div className="flex flex-col items-center">
                <div className="flex h-20 w-32 items-center justify-center rounded-lg bg-gray-100 text-xs font-semibold text-gray-500">
                  Newsweek Logo
                </div>
                <span className="mt-2 text-xs text-gray-600">
                  World's Best Hospitals
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

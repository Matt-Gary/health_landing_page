'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full overflow-hidden pt-16 md:pt-20">

      {/* Video Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[100%] w-[600%] -translate-x-1/2 -translate-y-1/2 md:h-[150%] md:w-[150%] lg:w-[100%] lg:h-[300%] xl:min-w-[100%] xl:min-h-[100%]">
          <iframe
            className="h-full w-full object-cover"
            src="https://www.youtube.com/embed/itpxZudlkJo?autoplay=1&mute=1&loop=1&playlist=itpxZudlkJo&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1"
            title="Patient Testimonial"
            allow="autoplay; encrypted-media"
            style={{
              pointerEvents: 'none',
            }}
          />
        </div>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 pb-32 text-center sm:pb-24 sm:px-6 md:pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl"
        >
          {/* Main Headline */}
          <h1 className="mb-4 text-3xl font-bold leading-tight text-white sm:mb-6 sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Return to Your Life with{' '}
            <span className="text-healing">Confidence</span>
          </h1>

          {/* Sub-headline */}
          <p className="mb-6 text-base text-gray-200 sm:mb-8 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
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
            onClick={() => {
              const element = document.getElementById('booking');
              if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth',
                });
              }
            }}
            className="rounded-full bg-coral-cta px-6 py-3 text-sm font-semibold text-white shadow-2xl transition-shadow hover:shadow-coral-cta/50 sm:px-8 sm:py-3.5 sm:text-base md:px-10 md:py-4 md:text-lg lg:text-xl"
          >
            <span className="hidden sm:inline">Request a Personalized Care Itinerary</span>
            <span className="sm:hidden">Request Care Itinerary</span>
          </motion.button>
        </motion.div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="absolute bottom-6 left-1/2 w-full max-w-4xl -translate-x-1/2 px-4 sm:bottom-8 md:bottom-12"
        >
          <div className="rounded-xl bg-white/95 px-4 py-4 shadow-2xl backdrop-blur-sm sm:rounded-2xl sm:px-6 sm:py-5 md:px-8 md:py-6">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {/* JCI Accreditation Logo */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-20 items-center justify-center sm:h-16 sm:w-24 md:h-20 md:w-32">
                  <img
                    src="/logos/jci-logo.png"
                    alt="JCI Accreditation"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-1 text-[10px] text-gray-600 sm:mt-2 sm:text-xs">
                  JCI Accreditation
                </span>
              </div>

              {/* Planetree Designation Logo */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-20 items-center justify-center sm:h-16 sm:w-24 md:h-20 md:w-32">
                  <img
                    src="/logos/planetree-logo.png"
                    alt="Planetree Designation"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-1 text-[10px] text-gray-600 sm:mt-2 sm:text-xs">
                  Planetree Designation
                </span>
              </div>

              {/* Newsweek Logo */}
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-20 items-center justify-center sm:h-16 sm:w-24 md:h-20 md:w-32">
                  <img
                    src="/logos/newsweek-logo.png"
                    alt="World's Best Hospitals"
                    className="h-full w-full object-contain"
                  />
                </div>
                <span className="mt-1 text-[10px] text-gray-600 sm:mt-2 sm:text-xs">
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

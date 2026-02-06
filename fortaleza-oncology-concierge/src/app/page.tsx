'use client';

import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PricingTable from '@/components/PricingTable';
import TestimonialSection from '@/components/TestimonialSection';
import ServicesGrid from '@/components/ServicesGrid';
import BookingSection from '@/components/BookingSection';

export default function Home() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <div id="home">
          <HeroSection />
        </div>
        <div id="pricing">
          <PricingTable />
        </div>
        <div id="testimonial">
          <TestimonialSection />
        </div>
        <div id="services">
          <ServicesGrid />
        </div>
        <div id="booking">
          <BookingSection />
        </div>
        {/* Contact section placeholder */}
        <div id="contact" className="bg-primary px-4 py-16 sm:py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-3 text-2xl font-bold text-white sm:mb-4 sm:text-3xl md:text-4xl">
              Ready to Begin Your Journey?
            </h2>
            <p className="mb-6 text-base text-white/90 sm:mb-8 sm:text-lg md:text-xl">
              Contact us today to schedule your personalized care consultation
            </p>
            <button
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
              className="rounded-full bg-coral-cta px-6 py-3 text-base font-semibold text-white shadow-2xl transition-all hover:scale-105 sm:px-8 sm:py-3.5 md:px-10 md:py-4 md:text-lg"
            >
              Request Consultation
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

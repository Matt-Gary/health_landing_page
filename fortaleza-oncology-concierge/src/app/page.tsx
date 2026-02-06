import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import PricingTable from '@/components/PricingTable';
import ServicesGrid from '@/components/ServicesGrid';

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
        <div id="services">
          <ServicesGrid />
        </div>
        {/* Contact section placeholder */}
        <div id="contact" className="bg-primary px-4 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-4xl font-bold text-white">
              Ready to Begin Your Journey?
            </h2>
            <p className="mb-8 text-xl text-white/90">
              Contact us today to schedule your personalized care consultation
            </p>
            <button className="rounded-full bg-coral-cta px-10 py-4 text-lg font-semibold text-white shadow-2xl transition-all hover:scale-105">
              Request Consultation
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

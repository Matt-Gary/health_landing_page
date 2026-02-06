import HeroSection from '@/components/HeroSection';
import PricingTable from '@/components/PricingTable';
import ServicesGrid from '@/components/ServicesGrid';

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <PricingTable />
      <ServicesGrid />
    </main>
  );
}

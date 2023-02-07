import HeroSection from '@/components/heroSection/HeroSection';
import StatsSection from '@/components/statsSection/StatsSection';
import WelcomeSection from '@/components/welcomeSection/WelcomeSection';

export default async function Page() {
  
  return (
    <>
      <WelcomeSection />
      <HeroSection />
      <StatsSection />
    </>
  );
}



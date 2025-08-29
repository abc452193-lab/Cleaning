import React from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './sections/HeroSection';
import { ServicesSection } from './sections/ServicesSection';
import { WhyChooseSection } from './sections/WhyChooseSection';
import { TestimonialsSection } from './sections/TestimonialsSection';
import { ProcessSection } from './sections/ProcessSection';
import { BeforeAfterSection } from './sections/BeforeAfterSection';
import { FinalCTASection } from './sections/FinalCTASection';
import { FooterSection } from './sections/FooterSection';

function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      <main>
        <HeroSection />
        <ServicesSection />
        <WhyChooseSection />
        <TestimonialsSection />
        <ProcessSection />
        <BeforeAfterSection />
        <FinalCTASection />
      </main>
      
      <FooterSection />
    </div>
  );
}

export default App;
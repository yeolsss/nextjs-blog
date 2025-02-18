import React from 'react';
import IntroductionSection from '@/components/home/IntroductionSection';
import Skills from '@/components/home/Skills';
import Career from '@/components/home/Career';
import Education from '@/components/home/Education';
import Training from '@/components/home/Training';

const Introduction: React.FC = () => {
  return (
    <div className="h-auto">
      <IntroductionSection />
      <Skills />
      <Career />
      <Education />
      <Training />
    </div>
  );
};

export default Introduction;

import React from 'react';
import IntroductionSection from '@/feature/home/component/IntroductionSection';
import Skills from '@/feature/home/component/Skills';
import Career from '@/feature/home/component/Career';
import Education from '@/feature/home/component/Education';
import Training from '@/feature/home/component/Training';

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

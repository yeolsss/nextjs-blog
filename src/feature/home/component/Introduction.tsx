import React from 'react';
import IntroductionSection from '@/feature/home/component/IntroductionSection';
import Skills from '@/feature/home/component/Skills';
import Career from '@/feature/home/component/Career';

const Introduction: React.FC = () => {
  return (
    <div>
      <IntroductionSection />
      <Skills />
      <Career />
    </div>
  );
};

export default Introduction;

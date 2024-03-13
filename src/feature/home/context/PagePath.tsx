import React, { PropsWithChildren, useRef } from 'react';

interface PagePathValue {
  landingRef: React.RefObject<HTMLElement>;
  introductionRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  careerRef: React.RefObject<HTMLElement>;
  scrollToSection: (sectionRef?: React.RefObject<HTMLElement>) => void;
}

const initialPagePathValue: PagePathValue = {
  landingRef: { current: null },
  introductionRef: { current: null },
  skillsRef: { current: null },
  careerRef: { current: null },
  scrollToSection: () => {},
};

export const PagePathContext =
  React.createContext<PagePathValue>(initialPagePathValue);

interface Props extends PropsWithChildren {}
const PagePath: React.FC<Props> = ({ children }) => {
  const landingRef = useRef<HTMLElement | null>(null);
  const introductionRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const careerRef = useRef<HTMLElement | null>(null);

  const scrollToSection = (sectionRef?: React.RefObject<HTMLElement>) => {
    if (!sectionRef) window.scroll({ top: 0, behavior: 'smooth' });
    if (sectionRef && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const value = {
    landingRef,
    introductionRef,
    skillsRef,
    careerRef,
    scrollToSection,
  };
  return (
    <PagePathContext.Provider value={value}>
      {children}
    </PagePathContext.Provider>
  );
};

export default PagePath;

'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useRef,
} from 'react';

interface PagePathValue {
  landingRef: React.RefObject<HTMLElement>;
  introductionRef: React.RefObject<HTMLElement>;
  skillsRef: React.RefObject<HTMLElement>;
  careerRef: React.RefObject<HTMLElement>;
  educationRef: React.RefObject<HTMLElement>;
  trainingRef: React.RefObject<HTMLElement>;
  scrollToSection: (sectionRef?: React.RefObject<HTMLElement>) => void;
}

const initialPagePathValue: PagePathValue = {
  landingRef: { current: null },
  introductionRef: { current: null },
  skillsRef: { current: null },
  careerRef: { current: null },
  educationRef: { current: null },
  trainingRef: { current: null },
  scrollToSection: () => {},
};

export const PagePathContext =
  React.createContext<PagePathValue>(initialPagePathValue);

export const usePagePath = () => useContext(PagePathContext);

const PagePath: React.FC<PropsWithChildren> = ({ children }) => {
  const landingRef = useRef<HTMLElement | null>(null);
  const introductionRef = useRef<HTMLElement | null>(null);
  const skillsRef = useRef<HTMLElement | null>(null);
  const careerRef = useRef<HTMLElement | null>(null);
  const educationRef = useRef<HTMLElement | null>(null);
  const trainingRef = useRef<HTMLElement | null>(null);

  const scrollToSection = useCallback(
    (sectionRef?: React.RefObject<HTMLElement>) => {
      if (!sectionRef) window.scroll({ top: 0, behavior: 'smooth' });
      if (sectionRef && sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    },
    [],
  );

  const value = useMemo(
    () => ({
      landingRef,
      introductionRef,
      skillsRef,
      careerRef,
      educationRef,
      trainingRef,
      scrollToSection,
    }),
    [
      landingRef,
      introductionRef,
      skillsRef,
      careerRef,
      educationRef,
      trainingRef,
      scrollToSection,
    ],
  );

  return (
    <PagePathContext.Provider value={value}>
      {children}
    </PagePathContext.Provider>
  );
};

export default PagePath;

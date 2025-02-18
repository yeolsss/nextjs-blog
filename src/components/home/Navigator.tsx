'use client';

import React, { useEffect, useState } from 'react';
import { useScroll } from '@/context/ScrollObserver';
import { usePagePath } from '@/context/PagePath';

interface SectionRef {
  ref: React.RefObject<HTMLElement>;
  id: string;
}

const Navigator = () => {
  const [activeSection, setActiveSection] = useState<string>('');
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const {
    landingRef,
    introductionRef,
    careerRef,
    skillsRef,
    educationRef,
    trainingRef,
    scrollToSection,
  } = usePagePath();
  const { scrollY } = useScroll();

  useEffect(() => {
    const checkVisible = () => {
      if (!introductionRef.current) return;

      const triggerPoint =
        introductionRef.current.getBoundingClientRect().top + scrollY - 150;
      setIsVisible(scrollY > triggerPoint);
    };

    window.addEventListener('scroll', checkVisible);

    checkVisible();

    return () => window.removeEventListener('scroll', checkVisible);
  }, [introductionRef, scrollY]);

  useEffect(() => {
    const sections: SectionRef[] = [
      { ref: landingRef, id: 'landing' },
      { ref: introductionRef, id: 'introduction' },
      { ref: careerRef, id: 'career' },
      { ref: skillsRef, id: 'skills' },
      { ref: educationRef, id: 'education' },
      { ref: trainingRef, id: 'training' },
    ];

    const handleScroll = () => {
      const viewportCenter = window.innerHeight / 2 + window.scrollY;

      const currentSectionId = sections.reduce(
        (acc, section) => {
          if (section.ref.current) {
            const sectionTop = section.ref.current.offsetTop;
            const sectionHeight = section.ref.current.offsetHeight;
            const sectionCenter = sectionTop + sectionHeight / 2;

            if (
              !acc ||
              Math.abs(viewportCenter - sectionCenter) <
                Math.abs(viewportCenter - (acc.center || 0))
            ) {
              return { id: section.id, center: sectionCenter };
            }
          }
          return acc;
        },
        { id: '', center: 0 },
      ).id;

      setActiveSection(currentSectionId);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [
    scrollY,
    landingRef,
    introductionRef,
    careerRef,
    skillsRef,
    educationRef,
    trainingRef,
  ]);

  return (
    isVisible && (
      <nav className="fixed left-[10rem] top-[15rem] z-20 flex w-[10rem] flex-col max-sm:hidden">
        <ul className="flex flex-col gap-10">
          <li className="cursor-pointer" onClick={() => scrollToSection()}>
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'landing' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Main
            </span>
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(introductionRef)}
          >
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'introduction' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Introduction
            </span>
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(skillsRef)}
          >
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'skills' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Skills
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(careerRef)}
          >
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'career' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Career
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(educationRef)}
          >
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'education' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Education
            </span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(trainingRef)}
          >
            <span
              className={`text-[2.4rem] hover:border-b-2 hover:border-solid hover:border-b-accentColor  ${activeSection === 'training' ? 'border-b-2 border-solid border-b-accentColor' : ''}`}
            >
              Training
            </span>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Navigator;

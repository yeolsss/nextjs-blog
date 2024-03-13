import { useContext, useEffect, useState } from 'react';
import { ScrollContext } from '@/feature/home/context/ScrollObserver';
import { PagePathContext } from '@/feature/home/context/PagePath';

const Navigator = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const { landingRef, introductionRef, careerRef, skillsRef, scrollToSection } =
    useContext(PagePathContext);
  const { scrollY } = useContext(ScrollContext);

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

  return (
    isVisible && (
      <nav className="fixed left-[10rem] top-[15rem] z-20 flex w-[10rem] flex-col max-sm:hidden">
        <ul className="flex flex-col gap-10">
          <li className="cursor-pointer" onClick={() => scrollToSection()}>
            <span className="text-[2.4rem]">Main</span>
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(introductionRef)}
          >
            <span className="text-[2.4rem]">Introduction</span>
          </li>

          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(skillsRef)}
          >
            <span className="text-[2.4rem]">Skills</span>
          </li>
          <li
            className="cursor-pointer"
            onClick={() => scrollToSection(careerRef)}
          >
            <span className="text-[2.4rem]">Career</span>
          </li>
        </ul>
      </nav>
    )
  );
};

export default Navigator;

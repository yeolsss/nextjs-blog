'use client';
import useTyping from '@/feature/share/hooks/useTyping';
import DownArrow from '@/feature/share/components/DownArrow';
import React, { useContext } from 'react';
import { PagePathContext } from '@/feature/home/context/PagePath';

const Landing: React.FC = () => {
  const typing = useTyping('Yeol Portfolio');
  const { landingRef, introductionRef, scrollToSection } =
    useContext(PagePathContext);

  return (
    <>
      <section
        ref={landingRef}
        className={`relative flex h-[calc(100vh-25rem)] w-full flex-col justify-between`}
      >
        <div>
          <div>
            <h1 className={`text-[3.6rem] font-bold`}>Front-End Developer</h1>
          </div>
          <div
            className={`mt-4 h-2 w-full animate-growWidth rounded-2xl bg-accentColor`}
          ></div>
        </div>
        <h1 className={`block whitespace-pre-wrap text-[6rem] font-bold`}>
          {typing.replace(/ /g, '\n')}
        </h1>
        <div
          onClick={() => scrollToSection(introductionRef)}
          className={`absolute bottom-0 left-1/2 h-[5rem] w-[5rem] -translate-x-1/2 transform cursor-pointer`}
        >
          <DownArrow />
        </div>
      </section>
    </>
  );
};

export default Landing;

import React, { useContext } from 'react';
import { PagePathContext } from '@/feature/home/context/PagePath';

const Career = () => {
  const { careerRef } = useContext(PagePathContext);
  return (
    <section ref={careerRef} className="flex h-lvh flex-col gap-60 pt-[15rem] ">
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Career
        </h1>
      </div>
    </section>
  );
};

export default Career;

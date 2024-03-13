import React, { useContext } from 'react';
import { PagePathContext } from '@/feature/home/context/PagePath';

const Education = () => {
  const { educationRef } = useContext(PagePathContext);
  return (
    <section
      ref={educationRef}
      className="flex h-auto flex-col gap-60 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Education
        </h1>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <div>
            <h2 className="text-[4rem] font-bold leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
              안동과학대학교
            </h2>
          </div>
        </div>

        <div className="flex flex-col gap-10">
          <ul className="flex flex-col gap-10">
            <li>
              <span className="text-[3rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                컴퓨터정보학과
              </span>
            </li>
            <li>
              <span className="block text-right text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                2007.03 ~ 2015.02
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Education;

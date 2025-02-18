'use client';
import React from 'react';
import { usePagePath } from '@/context/PagePath';
import { CreateSkillStack } from '@/feature/share/util/badgeImageUtils';
import ImageBadge from '@/components/home/ImageBadge';

const Skills = () => {
  const { skillsRef } = usePagePath();

  const skillStack = CreateSkillStack();

  return (
    <section
      ref={skillsRef}
      className="flex h-auto flex-col gap-40 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Skills
        </h1>
      </div>
      <div className="flex flex-col gap-28">
        {Object.keys(skillStack).map((key) => (
          <div key={key} className="flex flex-col  gap-5">
            <h1 className="text-6xl font-bold md:text-5xl lg:text-6xl max-sm:text-4xl">
              {key}
            </h1>
            <ul className="flex flex-wrap gap-5">
              {skillStack[key].map((skill) => (
                <li
                  key={skill.name}
                  className="max-sm:text-2.4rem text-4xl font-normal md:text-3xl lg:text-4xl"
                >
                  <ImageBadge
                    name={skill.name}
                    color={skill.color}
                    logoColor={skill.logoColor}
                  />
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;

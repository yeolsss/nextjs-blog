'use client';

import { opacityForBlock } from '@/feature/share/util/scrollUtils';
import ProfileImage from '@/feature/share/components/profile/profileImage/ProfileImage';
import React from 'react';
import useScrollProgress from '@/feature/home/hooks/useScrollProgress';
import { usePagePath } from '@/context/PagePath';

const IntroductionSection = () => {
  const { refContainer, progress } = useScrollProgress(5);
  const { introductionRef } = usePagePath();

  return (
    <section
      ref={introductionRef}
      className="flex h-lvh min-h-[1240px] flex-col gap-60 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Introduction
        </h1>
      </div>
      <div ref={refContainer} className={`flex h-auto flex-col gap-5`}>
        <div
          className={`mb-6 flex items-center gap-10 transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          <ProfileImage width={150} height={150} marginTop={35} />
          <h1
            className={`text-[4rem] font-normal leading-[5rem] md:text-[3.2rem] lg:text-[4rem]  max-sm:text-[2.4rem]`}
          >
            안녕하세요, 빠르게 성장할 수 있는 신입 개발자 <br />
            <strong className={`font-bold`}>권경열</strong> 입니다.
          </h1>
        </div>

        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 1) }}
        >
          <p
            className={`text-[3.8rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            제 강점은 짧은 기간의 프로젝트의 완성을 위해 처음 접하는
            라이브러리도 빠르게 습득하여 프로젝트에 적용했다는 점입니다.
          </p>
        </div>
        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 2) }}
        >
          <p
            className={`text-[3.8rem] leading-[5rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            최근 수료한 부트캠프 최종 프로젝트 진행중 메타버스 기능 구현을
            담당하게 됐고, 메타버스 기능을 구현하기위해 처음 접해보는 Phaser3
            게임 엔진과 socket.io를 빠른시간에 학습하여 프로젝트를 최종 우승까지
            할 수 있는 발판을 만들었습니다.
          </p>
        </div>
        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 3) }}
        >
          <p
            className={`text-[3.8rem] leading-[5rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            저의 이 강점은 빠르게 바뀌어가는 프론트엔드 개발자에가 아주 큰
            장점이라고 생각합니다.
          </p>
        </div>
        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 4) }}
        >
          <p
            className={`text-[3.8rem] leading-[5rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            또한 Java개발 경력을 가지고있어 개발팀의 팀원으로서 팀에 실질적인
            기여를 할 수 있다고 생각합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

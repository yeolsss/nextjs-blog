import { opacityForBlock } from '@/feature/share/util/scrollOpacityUtils';
import ProfileImage from '@/feature/share/components/profile/profileImage/ProfileImage';
import React, { useContext } from 'react';
import useScrollProgress from '@/feature/home/hooks/useScrollProgress';
import { PagePathContext } from '@/feature/home/context/PagePath';

const IntroductionSection = () => {
  const { refContainer, progress } = useScrollProgress(3);
  const { introductionRef } = useContext(PagePathContext);

  return (
    <section
      ref={introductionRef}
      className="flex h-lvh flex-col gap-60 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Introduction
        </h1>
      </div>
      <div ref={refContainer} className={` flex h-auto flex-col gap-36`}>
        <div
          className={`mb-6 flex items-center gap-10 transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 0) }}
        >
          <ProfileImage width={150} height={150} marginTop={35} />
          <h1
            className={`text-[4rem] font-normal md:text-[3.2rem] lg:text-[4rem] max-sm:text-[2.4rem]`}
          >
            안녕하세요. 프론트엔드 개발자{' '}
            <strong className={`font-bold`}>권경열</strong> 입니다.
          </h1>
        </div>

        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 1) }}
        >
          <span
            className={`inline-block text-[4rem] font-bold md:text-[3.2rem] lg:text-[4rem] max-sm:text-[2.4rem]`}
          >
            약 4년간의 jsp(java)개발 경력
          </span>
          <p
            className={`text-[3.8rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            약 4년간의 jsp(java)개발 경력을 통해 프로젝트의 전체적인 데이터
            흐름을 이해하고, 이를 기반으로 프론트엔드의 필요한 기능을 효율적으로
            구현할 수 있는 개발자입니다.
          </p>
        </div>
        <div
          className={`flex flex-col gap-5  transition duration-150 ease-in`}
          style={{ opacity: opacityForBlock(progress, 2) }}
        >
          <span
            className={`inline-block text-[4rem] font-bold md:text-[3.2rem] lg:text-[4rem] max-sm:text-[2.4rem]`}
          >
            함께 성장하고 싶은 개발자
          </span>
          <p
            className={`text-[3.8rem] leading-[5rem] md:text-[2.4rem] md:leading-[3rem] lg:text-[3.2rem] lg:leading-[5rem] max-sm:text-[2rem] max-sm:leading-[2.5rem]`}
          >
            부트캠프 초기에, 저는 JavaScript 과제를 진행하며 비전공자들에게
            과제의 전체적인 흐름을 이해시키는 데 도움을 주기 위해 라이브 코딩
            세션을 진행했습니다. 이 과정에서 과제를 처음부터 끝까지 함께
            코딩하며, 참여자들이 각 단계를 명확히 이해할 수 있도록 했습니다. 이
            경험을 통해 다양한 문제를 공유하고 함께 해결하며 많은 성장을
            이루어냈습니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;

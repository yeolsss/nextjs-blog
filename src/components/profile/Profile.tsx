import styles from './profile.module.css';
import ProfileImage from '@/components/profile/profileImage/ProfileImage';
import ThemeButton from '@/components/profile/themeButton/ThemeButton';
import ProfileInfo from '@/components/profile/profileInfo/ProfileInfo';
import { useState } from 'react';

const Profile = () => {
  return (
    <section
      className={`z-2 relative  mx-auto mb-[1.6rem] mt-[3.6rem] h-auto w-full max-w-[52rem] rounded-[1.6rem] px-[3.2rem] py-[2.8rem] text-textColor md:max-w-[52rem] lg:max-w-[100rem] max-sm:max-w-[31rem]`}
    >
      {/* 가상 div */}
      <div className={styles.visibleProfileWrapper}></div>

      <div className={'flex'}>
        <ProfileImage />
        <div
          className={
            'flex w-full flex-col justify-between gap-y-[0.8rem] px-[2.1rem] py-[1rem] ease-in'
          }
        >
          <ProfileInfo />
        </div>
        <ThemeButton />
      </div>

      <div>
        <div className={styles.profileDescriptionWrapper}>
          <p
            className={`text-[1.6rem] font-normal leading-[2.38rem] text-textColor ${styles.profileDescriptionText}`}
          >
            안녕하세요. 프론트엔드 개발자 권경열입니다.
            <br />
            <br />
            <span className={'text-[1.6rem] font-bold'}>
              약 4년간의 jsp(java)개발 경력
            </span>
            <br />
            <p className={'text-[1.4rem] '}>
              약 4년간의 jsp(java)개발 경력을 통해 프로젝트의 전체적인 데이터
              흐름을 이해하고, 이를 기반으로 프론트엔드의 필요한 기능을
              효율적으로 구현할 수 있는 개발자입니다.
            </p>
            <br />
            <span className={'text-[1.6rem] font-bold'}>
              함께 성장하고 싶은 개발자
            </span>
            <br />
            <p className={'text-[1.4rem]'}>
              부트캠프 초기에, 저는 JavaScript 과제를 진행하며 비전공자들에게
              과제의 전체적인 흐름을 이해시키는 데 도움을 주기 위해 라이브 코딩
              세션을 진행했습니다. 이 과정에서 과제를 처음부터 끝까지 함께
              코딩하며, 참여자들이 각 단계를 명확히 이해할 수 있도록 했습니다.
              이 경험을 통해 다양한 문제를 공유하고 함께 해결하며 많은 성장을
              이루어냈습니다.
            </p>
          </p>
        </div>

        <div className={'mt-[1.5rem]'}>
          <span
            className={`mt-[1rem] text-[1.4rem] font-bold text-textColor  ${styles.profileDescriptionText}`}
          >
            HTML/CSS, Javascript, Typescript, React, Next.js, Gatsby, Zustand,
            Redux:toolkit, TailwindCSS, Styled-components, Java, Jsp
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;

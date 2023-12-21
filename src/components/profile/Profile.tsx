'use client';
import styles from './profile.module.css';
import ProfileImage from '@/components/profile/profileImage/ProfileImage';
import ThemeButton from '@/components/profile/themeButton/ThemeButton';
import ProfileInfo from '@/components/profile/profileInfo/ProfileInfo';

const Profile = () => {
  return (
    <section
      className={
        'text-textColor z-2 relative mx-auto mb-[1.6rem] mt-[3.6rem] h-auto w-full max-w-[52rem] rounded-[1.6rem] px-[1.6rem] py-[0.8rem] max-sm:max-w-[31rem] md:max-w-[52rem] lg:max-w-[69rem]'
      }
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
            className={`text-textColor text-[1.6rem] font-normal leading-[2.38rem] ${styles.profileDescriptionText}`}
          >
            안녕하세요. 웹 개발 2년차로 활동중인 개발자 입니다. 단순히 책이나
            영상으로 접하는 코딩이 아닌, 실무에서 맞닥드렸던 문제를 해결하며
            겪었던 경험 위주에 내용을 작성 예정이며 블로그를 읽는 모든 분에게
            도움이 되었으면 좋겠습니다.
          </p>
        </div>

        <div className={'mt-[1.5rem]'}>
          <span
            className={`text-textColor mt-[1rem] text-[1.4rem] font-bold ${styles.profileDescriptionText}`}
          >
            HTML/CSS, Javascript, Typescript, Gatsby, Zustand, Redux:toolkit
          </span>
        </div>
      </div>
    </section>
  );
};

export default Profile;

import styles from './profile.module.css';
import { FaGithub } from 'react-icons/fa';
import { BsMailboxFlag } from 'react-icons/bs';
import { GrDocumentUser } from 'react-icons/gr';
import ProfileImage from '@/components/profile/profileImage/ProfileImage';
import { IconType } from 'react-icons';
import ThemeButton from '@/components/profile/themeButton/ThemeButton';

interface ILinks {
  url: string;
  icon: IconType;
}

const Profile = () => {
  const links: ILinks[] = [
    { url: 'https://github.com/yeolsss', icon: FaGithub },
    { url: 'mailto: yeol8810@gmail.com', icon: BsMailboxFlag },
    { url: '#', icon: GrDocumentUser },
  ];

  return (
    <section
      className={
        'text-textColor z-2 relative mx-auto mb-[1.6rem] mt-[3.6rem] h-auto w-full max-w-[100rem] rounded-[1.6rem]'
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
          <h2
            className={
              'text-textColor text-[1.4rem] font-normal opacity-[0.75]'
            }
          >
            저에 대해 소개 합니다.
          </h2>
          <div className={'flex items-center gap-x-[0.8rem]'}>
            <h1 className={'font-sans text-[2.4rem] font-bold'}>권 경열</h1>
            {links.map((item, index) => (
              <a key={index} href={`${item}`} target="_blank">
                <item.icon className="text-textColor h-[2.4rem] w-[2.4rem]" />
              </a>
            ))}
          </div>
        </div>
        <ThemeButton />
      </div>

      <div>
        <div className={styles.profileDescriptionWrapper}>
          {/*
          font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 23.8px; 
            letter-spacing: 0.07px;
            color: var(--textColor);
            transition: color var(--transition-second);
            opacity: 0.75;
          
          */}

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

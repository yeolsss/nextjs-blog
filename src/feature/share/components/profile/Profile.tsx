import styles from './profile.module.css';
import ProfileImage from '@/feature/share/components/profile/profileImage/ProfileImage';
import ProfileInfo from '@/feature/share/components/profile/profileInfo/ProfileInfo';

const Profile = () => {
  return (
    <section
      className={`z-2 relative mx-auto mt-[15rem] h-auto w-full max-w-[52rem] rounded-[1.6rem] px-[3.2rem] py-[2.8rem] text-textColor md:max-w-[52rem] lg:max-w-[100rem] max-sm:max-w-[31rem]`}
    >
      {/* 가상 div */}
      <div className={styles.visibleProfileWrapper}></div>

      <div className={'flex'}>
        <ProfileImage width={80} height={80} marginTop={20} />
        <div
          className={
            'flex w-full flex-col justify-between gap-y-[0.8rem] px-[2.1rem] py-[1rem] ease-in'
          }
        >
          <ProfileInfo />
        </div>
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
              빠르게 성장할 수 있는 개발자
            </span>
            <br />
            <p className={'text-[1.6rem] '}>
              제 강점은 짧은 기간 내에 프로젝트를 완성하기 위해 처음 접하는
              라이브러리도 빠르게 습득하여 프로젝트에 적용하는 능력입니다.
              최근에 수료한 부트캠프에서의 최종 프로젝트에서 메타버스 기능
              구현을 담당하게 되었습니다. 이를 위해 처음으로 Phaser3 게임 엔진과
              socket.io를 학습했으며, 이 빠른 학습과 적용을 통해 프로젝트를
              성공적으로 완성하였습니다. 덕분에 우리 팀은 부트캠프 전체에서 최종
              우승하는 쾌거를 이루었습니다. 이러한 강점은 끊임없이 변화하는
              프론트엔드 개발 분야에서 큰 장점이라고 생각합니다.
            </p>
            <br />
            <span className={'text-[1.6rem] font-bold'}>
              커뮤니케이션이 원활한 개발자
            </span>
            <br />
            <p className={'text-[1.6rem]'}>
              Java개발 경력을 통해 백엔드 개발에 대한 지식을 보유하고 있으며
              백엔드 지식을 바탕으로 백엔드 개발자와 원활한 커뮤니케이션이
              가능합니다.
            </p>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;

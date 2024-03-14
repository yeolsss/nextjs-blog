import Contact from '@/feature/share/components/Contact';

const ProfileInfo = () => {
  return (
    <>
      <h2 className={'text-[1.4rem] font-normal text-textColor opacity-[0.75]'}>
        저에 대해 소개 합니다.
      </h2>
      <div className={'flex items-center gap-x-[1.5rem]'}>
        <h1 className={'font-sans text-[2.4rem] font-bold'}>권 경열</h1>
        <Contact height={3} width={3} />
      </div>
    </>
  );
};

export default ProfileInfo;

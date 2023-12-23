import Link from 'next/link';

const HomeHeader = () => {
  const ST_MIN_HEIGHT = '3.6';
  return (
    <section
      className={`flex h-full min-h-[${ST_MIN_HEIGHT}rem] items-center justify-between`}
    >
      <h2 className={'text-[1.8rem] font-bold text-accentColor'}>
        Lasted Posts
      </h2>
      <span
        className={`min-h-[${ST_MIN_HEIGHT}rem] flex items-end text-[1.4rem] text-textColor`}
      >
        <Link href={'/posts'}>전체 포스트 보기</Link>
      </span>
    </section>
  );
};

export default HomeHeader;

import HomeSectionHeader from '@/components/home/HomeHeader/HomeSectionHeader';
import LabelTag from '@/components/labelTag/LabelTag';
import MainSection from '@/components/mainSection/MainSection';

async function Home() {
  const skillStack = {
    Languages: ['HTML', 'CSS', 'JavaScript', 'Typescript', 'JAVA'],
    ['Library / Framework']: ['React', 'Next.js', 'Gatsby', 'JSP'],
    ['Etc Tools']: [
      'Redux',
      'Redux-toolkit',
      'Zustand',
      'React-Query',
      'Styled-components',
      'TailwindCSS',
    ],
  };
  return (
    <main className={'flex flex-col gap-[2rem]'}>
      <MainSection>
        <HomeSectionHeader>Skill Stack</HomeSectionHeader>
        {Object.entries(skillStack).map(([key, value]) => (
          <section key={key} className={'my-[0.8rem]'}>
            <LabelTag data={value}>{key}</LabelTag>
          </section>
        ))}
      </MainSection>
      <MainSection>
        <HomeSectionHeader>Career</HomeSectionHeader>
        <div className={'mt-[1rem] flex flex-col gap-[1rem]'}>
          <div className={'flex justify-between '}>
            <div className={'w-auto'}>
              <h1 className={'text-[2rem]'}>
                <span className={'font-bold'}>달아실소프트</span>
                <span>(개발팀/대리)</span>
              </h1>
            </div>
            <div>
              <h2 className={'text-[1.6rem]'}>2017.05~2021.10</h2>
            </div>
          </div>
          <div className={'flex flex-col gap-[1rem]'}>
            <div>
              <h3 className="text-[1.8rem] font-bold">성과 및 역할</h3>
            </div>
            <ul className={'flex flex-col gap-[1rem]'}>
              <li className={'ml-[1rem]'}>
                <span className={'text-[1.6rem] font-bold'}>옥산가 쇼핑몰</span>
              </li>
              <li className={'ml-[1.5rem]'}>
                <span className={' text-[1.6rem]'}>
                  - 옥산가 쇼핑몰 서비스로 매출 20프로 상승
                </span>
              </li>
              <li className={'ml-[1.5rem] '}>
                <span className={'text-[1.6rem]'}>- 사용 기술:</span>
                <span className={'text-[1.6rem]'}>
                  JSP, Oracle, HTML, CSS, Javascript
                </span>
              </li>
            </ul>
            <div className={'h-[1.5rem]'}></div>
            <ul className={'flex flex-col gap-[1rem]'}>
              <li className={'ml-[1rem]'}>
                <span className={'text-[1.6rem] font-bold'}>
                  달아실소프트 그룹웨어
                </span>
              </li>
              <li className={'ml-[1.5rem]'}>
                <span className={' text-[1.6rem]'}>
                  - 옥산가 내에서 더존 그룹웨어 대체
                </span>
              </li>
              <li className={'ml-[1.5rem]'}>
                <span className={'text-[1.6rem]'}>- 사용 기술:</span>
                <span className={'text-[1.6rem]'}>
                  JSP, Oracle, HTML, CSS, Javascript
                </span>
              </li>
            </ul>
          </div>
        </div>
      </MainSection>
    </main>
  );
}

export default Home;

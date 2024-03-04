import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
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
        <>
          <HomeHeader>Skill Stack</HomeHeader>
          {Object.entries(skillStack).map(([key, value]) => (
            <section key={key} className={'my-[0.8rem]'}>
              <LabelTag data={value}>{key}</LabelTag>
            </section>
          ))}
        </>
      </MainSection>
      <MainSection>hi</MainSection>
    </main>
  );
}

export default Home;

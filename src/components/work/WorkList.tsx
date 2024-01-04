import { containerStyles } from '@/style/styles';
import { WorkCard } from '@/components/work/WorkCard';
import { fetchBlogWorks } from '@/api/contentfulLib';

const WorkList = async () => {
  const works = await fetchBlogWorks();
  return (
    <main className={`mt-[5rem] grid grid-cols-2 ${containerStyles}`}>
      {works.length === 0 ? (
        <div>검색된 Work가 없습니다.</div>
      ) : (
        works.map((work) => <WorkCard key={work.slug} work={work} />)
      )}
    </main>
  );
};

export default WorkList;

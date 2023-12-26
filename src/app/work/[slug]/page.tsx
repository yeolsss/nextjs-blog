import { fetchBlogWork } from '@/api/contentfulLib';
import BackButton from '@/components/backButton/BackButton';
import { containerStyles } from '@/style/styles';
import ReactMarkdown from 'react-markdown';
import styles from '@/style/markdown.module.scss';
import transDate from '@/util/transDate';

interface Props {
  params: {
    slug: string;
  };
}

const Work = async ({ params }: Props) => {
  const { slug } = params;
  const work = await fetchBlogWork(slug);
  if (!work) {
    return (
      <div>
        <p>검색된 데이터가 없습니다.</p>
      </div>
    );
  }

  const {
    title,
    deploymentUrl,
    stack,
    startDate,
    endDate,
    focus,
    github,
    projectImg,
    description,
  } = work;

  return (
    <main
      className={`mt-[5rem] flex flex-col gap-y-[2rem] rounded-[0.8rem] bg-backgroundColor3 px-[4rem] py-[3rem] ${containerStyles}`}
    >
      <BackButton title={title} />

      <h1 className="font-sans text-[2.4rem] font-bold tracking-[0.6px]">
        {title}
      </h1>
      <div>
        <a href={deploymentUrl} target="_black">
          <span className="text-[1.6rem] text-primaryColor hover:font-bold hover:text-accentColor">
            Deployment
          </span>
        </a>
      </div>
      <div>
        <a href={github} target="_black">
          <span className="text-[1.6rem] text-primaryColor hover:font-bold hover:text-accentColor">
            Github Repository
          </span>
        </a>
      </div>
      <div className="text-[1.6rem]">
        <span className=" text-primaryColor hover:text-accentColor">
          Period
        </span>{' '}
        :{' '}
        <span>
          {transDate(startDate)} ~ {transDate(endDate)}
        </span>
      </div>

      <div className="flex items-center gap-x-[1rem] text-[1.6rem]">
        <span className=" text-primaryColor hover:text-accentColor">Focus</span>{' '}
        :
        <div className="flex gap-x-[1rem]">
          {focus?.map((item) => (
            <div
              className="flex min-h-[3rem] items-center justify-center rounded-[1.5rem] bg-accentColor px-[1rem] py-[0.5rem] text-[1.6rem] font-bold text-backgroundColor1"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center gap-x-[1rem] text-[1.6rem]">
        <span className=" text-primaryColor hover:text-accentColor">Skill</span>{' '}
        :
        <div className="flex flex-wrap gap-[1rem]">
          {stack?.map((item) => (
            <div
              className="flex min-h-[3rem] items-center justify-center rounded-[1.5rem] bg-accentColor px-[1rem] py-[0.5rem] text-[1.6rem] font-bold text-backgroundColor1"
              key={item}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <ReactMarkdown className={styles['markdown']}>
        {description}
      </ReactMarkdown>
    </main>
  );
};

export default Work;

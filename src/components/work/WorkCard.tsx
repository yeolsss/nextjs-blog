import Link from 'next/link';
import transDate from '@/util/transDate';
import { BlogWork } from '@/api/contentfulLib';
import ProjectImage from './projectImage/ProjectImage';

export function WorkCard(props: { work: BlogWork }) {
  return (
    <Link href={`/work/${props.work.slug}`} className="mt-[3rem]">
      <div className="group">
        <div className="overflow-hidden rounded-[0.8rem] shadow-textColor group-hover:shadow-2xl">
          <ProjectImage
            projectImg={props.work.projectImg[0]!}
            title={props.work.title}
          />
        </div>
        <div className="mt-[2rem]">
          <h1 className="text-[2.4rem] font-bold">{props.work.title}</h1>
        </div>
        <div className="mt-[2rem]">
          <span className="text-[1.6rem]">
            {transDate(props.work.startDate)} ~ {transDate(props.work.endDate)}
          </span>
        </div>
        <div className="mt-[2rem] flex flex-wrap gap-x-[1rem] gap-y-[0.5rem]">
          {props.work.focus?.map((item) => (
            <div
              className="flex min-h-[3rem] items-center justify-center rounded-[1.5rem] bg-accentColor px-[1rem] py-[0.5rem] text-[1.6rem] font-bold text-backgroundColor1"
              key={item}
            >
              <span className="mt-[0.4rem]">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}

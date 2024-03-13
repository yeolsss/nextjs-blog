import Link from 'next/link';
import transDate from '@/feature/share/util/transDate';
import { BlogWork } from '@/api/contentfulLib';
import ProjectImage from './projectImage/ProjectImage';
import Badge from '@/components/badges/Badge';

export function WorkCard(props: { work: BlogWork }) {
  return (
    <Link href={`/work/${props.work.slug}`} className="mt-[3rem]">
      <div className="group">
        <div
          className="overflow-hidden
         rounded-[0.8rem] shadow-textColor group-hover:shadow-2xl md:max-h-[14.2rem] md:max-w-[28rem] lg:max-h-[28rem] lg:max-w-[50rem] max-sm:max-h-[8.4rem] max-sm:max-w-[15rem]"
        >
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
          {props.work.focus?.map((item) => <Badge key={item}>{item}</Badge>)}
        </div>
      </div>
    </Link>
  );
}

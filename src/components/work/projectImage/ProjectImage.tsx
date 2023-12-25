import Image from 'next/image';
import { IContentfulImage } from '@/api/contentFulImage';

interface Props {
  projectImg: IContentfulImage;
  title: string;
}
const ProjectImage = ({ projectImg, title }: Props) => {
  return (
    <Image
      src={`https:${projectImg?.src!}`}
      alt={title}
      width={projectImg?.width}
      height={projectImg?.height}
      className=" transition-all duration-200 ease-in group-hover:scale-110"
    />
  );
};

export default ProjectImage;

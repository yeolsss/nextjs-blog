import { BlogPost } from '@/api/contentfulLib';
import Image from 'next/image';

type Props = Pick<BlogPost, 'thumbnail'>;

const Thumbnail = (props: Props) => {
  const { thumbnail } = props;
  return (
    <>
      <Image
        src={thumbnail?.src!}
        alt={thumbnail?.alt!}
        fill
        objectFit={'cover'}
        className={'left-0 top-0 h-auto !w-[100%] '}
      />
    </>
  );
};
export default Thumbnail;

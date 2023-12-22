import { BlogPost } from '@/api/contentfulLib';
import transDate from '@/util/transDate';
import Content from '@/components/post/content/Content';
import Thumbnail from '@/components/post/thumbnail/Thumbnail';
import { IContentfulImage } from '@/api/contentFulImage';
import Link from 'next/link';

interface IProps {
  post: BlogPost;
}
const PostCard = ({ post }: IProps) => {
  const { slug, createdAt, thumbnail, content, tags, title, category } = post;
  const contentfulImage: IContentfulImage = {
    src: thumbnail?.src ? 'https:' + thumbnail.src : '/images/image 1.png',
    width: thumbnail?.width || 512,
    height: thumbnail?.height || 512,
    alt: thumbnail?.alt || title,
  };

  return (
    <article className={'mt-[4rem] px-[1.6rem] py-[0.8rem]'}>
      <Link href={`/post/${slug}`}>
        <div className={'flex justify-between'}>
          <h2
            className={
              'font-sans text-[1.6rem] font-bold text-textColor opacity-75'
            }
          >
            {category}
          </h2>
          <h3 className={'font-sans text-[1.4rem] opacity-75'}>
            {transDate(createdAt)}
          </h3>
        </div>
        <div>
          <h1
            className={
              'my-[1.8rem] font-sans text-[2.4rem] font-bold text-textColor'
            }
          >
            {title}
          </h1>
          <Content content={content} />
          <div
            className={
              'relative mt-[2rem] h-full min-h-[14.5rem] w-full overflow-hidden rounded-2xl'
            }
          >
            <Thumbnail thumbnail={contentfulImage} />
          </div>
        </div>
      </Link>
    </article>
  );
};
export default PostCard;

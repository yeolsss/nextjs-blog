import { BlogPost } from '@/api/contentfulLib';
import transDate from '@/feature/share/util/transDate';
import { parseMarkdown } from '@/feature/share/util/parseMarkdown';
import styles from './postCard.module.css';
import Link from 'next/link';

interface Props {
  post: BlogPost;
}

const PostCard = ({ post }: Props) => {
  const { slug, createdAt, content, title, category } = post;

  return (
    <Link className="group" href={`/posts/${slug}`}>
      <div className="flex px-[1.6rem] py-[2rem]">
        <div className="mr-[1.6rem] h-auto w-0 rounded-[0.8rem]  bg-accentColor transition-[width] duration-200 ease-in group-hover:w-[0.8rem]"></div>
        <article className="w-full">
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
          <h1 className="mb-[1.2rem] mt-[1.6rem] text-[2.4rem] font-bold">
            {title}
          </h1>
          <div className={styles.content}>{parseMarkdown(content!)}</div>
        </article>
      </div>
    </Link>
  );
};

export default PostCard;

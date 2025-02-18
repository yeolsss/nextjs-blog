import { fetchBlogPostBySlug } from '@/api/contentfulLib';
import ReactMarkdown from 'react-markdown';
import { containerStyles } from '@/style/styles';
import styles from '@/style/markdown.module.scss';
import Categories from '@/components/category/Categories';
import BackButton from '@/components/backButton/BackButton';

interface Props {
  params: {
    slug: string;
  };
}
const Post = async ({ params }: Props) => {
  const { slug } = params;
  const post = await fetchBlogPostBySlug(slug);
  const searchParams = {
    category: post?.category,
  };
  return (
    <>
      <Categories searchParams={searchParams} type={'post'} />
      <div
        className={`rounded-[1.5rem] bg-backgroundColor3 px-[4rem] py-[3rem] ${containerStyles}`}
      >
        <nav>
          <BackButton title={post?.category!} />
        </nav>
        <ReactMarkdown className={styles['markdown']}>
          {post?.content}
        </ReactMarkdown>
      </div>
    </>
  );
};

export default Post;

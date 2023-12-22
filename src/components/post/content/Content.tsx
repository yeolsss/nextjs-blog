import { BlogPost } from '@/api/contentfulLib';
import parseMarkdown from '@/util/parseMarkdown';
import styles from './content.module.css';

type BlogContent = Pick<BlogPost, 'content'>;
const Content = (props: BlogContent) => {
  const { content } = props;
  return <div className={styles.content}>{parseMarkdown(content!)}</div>;
};
export default Content;

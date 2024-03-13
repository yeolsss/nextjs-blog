import { BlogPost } from '@/api/contentfulLib';
import styles from './content.module.css';
import { parseMarkdown } from '@/feature/share/util/parseMarkdown';

type BlogContent = Pick<BlogPost, 'content'>;
const Content = (props: BlogContent) => {
  const { content } = props;
  return <div className={styles.content}>{parseMarkdown(content!)}</div>;
};
export default Content;

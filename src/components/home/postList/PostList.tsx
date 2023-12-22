import { fetchHomeBlogPosts } from '@/api/contentfulLib';
import PostCard from '@/components/post/PostCard';

const PostList = async () => {
  const posts = await fetchHomeBlogPosts();
  return (
    <>
      {posts.map((post) => {
        return <PostCard key={post.slug} post={post} />;
      })}
    </>
  );
};

export default PostList;

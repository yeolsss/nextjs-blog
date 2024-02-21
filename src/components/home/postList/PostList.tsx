'use server';
import { fetchHomeBlogPosts } from '@/api/contentfulLib';
import PostCard from '@/components/homePost/PostCard';

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

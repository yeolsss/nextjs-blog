import Categories from '@/components/category/Categories';
import * as React from 'react';
import { fetchBlogPosts } from '@/api/contentfulLib';
import PostCard from '@/components/post/PostCard';
import { containerStyles } from '@/style/styles';

interface Props {
  searchParams?: {
    category?: string;
    search?: string;
  };
}

const Posts = async ({ searchParams }: Props) => {
  const posts = await fetchBlogPosts(searchParams);

  return (
    <>
      <Categories />
      <div
        className={`mx-auto mt-[5rem] h-auto rounded-[1.6rem]  bg-postCardBgColor px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
      >
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </>
  );
};
export default Posts;

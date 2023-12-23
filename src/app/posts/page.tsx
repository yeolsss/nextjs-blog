import Categories from '@/components/category/Categories';
import * as React from 'react';
import { fetchBlogPosts } from '@/api/contentfulLib';
import { containerStyles } from '@/style/styles';
import PostCard from '@/components/postCard/PostCard';
import SearchForm from '@/components/searchForm/SearchForm';

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
      <Categories searchParams={searchParams} type={'posts'} />
      <SearchForm />
      <div
        className={`mx-auto mt-[5rem] h-auto rounded-[1.6rem]  bg-postCardBgColor px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
      >
        {posts.length === 0 ? (
          <h1 className="text-center font-sans text-[2.4rem] font-bold">
            검색된 데이터가 없습니다.
          </h1>
        ) : (
          posts.map((post) => <PostCard key={post.slug} post={post} />)
        )}
      </div>
    </>
  );
};
export default Posts;

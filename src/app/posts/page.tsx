import Categories from '@/components/category/Categories';
import * as React from 'react';
import { Suspense } from 'react';
import SearchForm from '@/components/searchForm/SearchForm';
import PostList from '@/components/post/PostList';
import PostListSkeleton from '@/components/skeletons/PostListSkeleton';

export interface SearchProps {
  searchParams?: {
    category?: string;
    search?: string;
  };
}

const Posts = async ({ searchParams }: SearchProps) => {
  return (
    <>
      <Categories searchParams={searchParams} type={'posts'} />
      <SearchForm />
      <Suspense fallback={<PostListSkeleton />}>
        <PostList searchParams={searchParams} />
      </Suspense>
    </>
  );
};
export default Posts;

import * as React from 'react';
import ComingSoon from '@/components/comingSoon/ComingSoon';

export interface SearchProps {
  searchParams?: {
    category?: string;
    search?: string;
  };
}

const Posts = async ({ searchParams }: SearchProps) => {
  return (
    <>
      {/*<Categories searchParams={searchParams} type={'posts'} />
      <SearchForm />
      <Suspense fallback={<PostListSkeleton />}>
        <PostList searchParams={searchParams} />
      </Suspense>*/}
      <ComingSoon />
    </>
  );
};
export default Posts;

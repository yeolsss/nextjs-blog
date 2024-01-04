import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import { containerStyles } from '@/style/styles';
import PostList from '@/components/home/postList/PostList';
import { Suspense } from 'react';
import HomePostListSkeleton from '@/components/skeletons/HomePostListSkeleton';

async function Home() {
  return (
    <main
      className={`mx-auto mt-[5rem] h-auto rounded-[1.6rem]  bg-postCardBgColor px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
    >
      <HomeHeader />
      <Suspense fallback={<HomePostListSkeleton />}>
        <PostList />
      </Suspense>
    </main>
  );
}

export default Home;

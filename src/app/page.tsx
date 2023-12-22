import { fetchHomeBlogPosts } from '@/api/contentfulLib';
import HomeHeader from '@/components/home/HomeHeader/HomeHeader';
import { containerStyles } from '@/style/styles';
import PostList from '@/components/home/postList/PostList';

async function Home() {
  const blogPosts = await fetchHomeBlogPosts();
  return (
    <main
      className={`bg-postCardBgColor mx-auto h-auto  rounded-[1.6rem] px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
    >
      <HomeHeader />
      <PostList />
    </main>
  );
}

export default Home;

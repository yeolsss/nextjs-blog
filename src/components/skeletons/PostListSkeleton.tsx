import { containerStyles } from '@/style/styles';

const postListSkeleton = () => {
  const skeletons = Array.from({ length: 5 });
  return (
    <div
      className={`mx-auto mt-[5rem] h-auto rounded-[1.6rem]  bg-postCardBgColor px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
    >
      {skeletons.map((_, index) => (
        <>
          <div className="mt-[1.5rem] flex justify-between">
            <div className="mb-2.5 mt-[1rem] h-2 w-[10rem]  rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 mt-[1rem] h-2 w-[10rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <div role="status" className="mt-[1rem] w-full animate-pulse">
            <div className="mb-4 h-[2rem] w-48 rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 mt-[1rem] h-[1rem]  rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 mt-[1rem] h-[1rem] rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 mt-[1rem] h-[1rem]  rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mb-2.5 mt-[1rem] h-[1rem]  rounded-full bg-gray-200 dark:bg-gray-700"></div>
            <div className="mt-[1rem] h-[1rem]  rounded-full bg-gray-200 dark:bg-gray-700"></div>
          </div>
        </>
      ))}
    </div>
  );
};
export default postListSkeleton;

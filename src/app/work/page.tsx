import WorkList from '@/components/work/WorkList';
import { Suspense } from 'react';
import WorkListSkeleton from '@/components/skeletons/WorkListSkeleton';

const Work = async () => {
  return (
    <>
      <Suspense fallback={<WorkListSkeleton />}>
        <WorkList />
      </Suspense>
    </>
  );
};
export default Work;

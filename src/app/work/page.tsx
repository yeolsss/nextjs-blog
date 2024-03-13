import WorkList from '@/components/work/WorkList';
import { Suspense } from 'react';
import WorkListSkeleton from '@/components/skeletons/WorkListSkeleton';
import Layout from '@/feature/share/components/Layout';

const Work = async () => {
  return (
    <Layout>
      <Suspense fallback={<WorkListSkeleton />}>
        <WorkList />
      </Suspense>
    </Layout>
  );
};
export default Work;

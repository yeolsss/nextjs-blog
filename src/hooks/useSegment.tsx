import { usePathname } from 'next/navigation';

const useSegment = () => {
  const pathName = usePathname();
  const segments = pathName.split('/').filter(Boolean);
  return ('/' + (segments[0] || '')) as string;
};
export default useSegment;

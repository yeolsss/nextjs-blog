import { PropsWithChildren } from 'react';
import Profile from '@/feature/share/components/profile/Profile';

function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Profile />
      {children}
    </>
  );
}

export default Layout;

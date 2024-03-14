import React, { PropsWithChildren } from 'react';
import Profile from '@/feature/share/components/profile/Profile';

interface Props extends PropsWithChildren {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Profile />
      {children}
    </div>
  );
};

export default Layout;

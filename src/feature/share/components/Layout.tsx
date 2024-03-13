import React, { PropsWithChildren } from 'react';
import Profile from '@/feature/share/components/profile/Profile';
import Footer from '@/components/footer/Footer';

interface Props extends PropsWithChildren {}
const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Profile />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

import React from 'react';
import Header from '@/components/header/Header';
import Profile from '@/feature/share/components/profile/Profile';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Profile />
      {children}
    </>
  );
};

export default Layout;

import React from 'react';
import Header from '@/components/header/Header';
import Profile from '@/feature/share/components/profile/Profile';
import Footer from '@/components/footer/Footer';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <Profile />
      {children}
      <Footer />
    </>
  );
};

export default Layout;

import * as React from 'react';
import { PropsWithChildren } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';

function RootLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default RootLayout;

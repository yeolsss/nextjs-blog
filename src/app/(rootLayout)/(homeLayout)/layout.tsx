import HomeProviderWrapper from '@/context/HomeProviderWrapper';
import React, { PropsWithChildren } from 'react';

function HomeLayout({ children }: PropsWithChildren) {
  return <HomeProviderWrapper>{children}</HomeProviderWrapper>;
}

export default HomeLayout;

import React, { PropsWithChildren } from 'react';
import ScrollObserver from '@/context/ScrollObserver';
import PagePath from '@/context/PagePath';

interface Props extends PropsWithChildren {}
const HomeProviderWrapper: React.FC<Props> = ({ children }) => {
  return (
    <PagePath>
      <ScrollObserver>{children}</ScrollObserver>
    </PagePath>
  );
};

export default HomeProviderWrapper;

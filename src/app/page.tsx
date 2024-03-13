'use client';
import Landing from '@/feature/home/component/Landing';
import Introduction from '@/feature/home/component/Introduction';
import HomeProviderWrapper from '@/feature/home/context/HomeProviderWrapper';
import React, { PropsWithChildren } from 'react';
import Navigator from '@/feature/home/component/Navigator';
import { containerStyles } from '@/style/styles';

const InnerComponent: React.FC<PropsWithChildren> = ({ children }) => {
  return <HomeProviderWrapper>{children}</HomeProviderWrapper>;
};

const Home = () => {
  return (
    <InnerComponent>
      <main
        className={`relative mx-auto flex h-auto flex-col justify-between py-60 `}
      >
        <Navigator />
        <div className={`${containerStyles}`}>
          <Landing />
          <Introduction />
        </div>
      </main>
    </InnerComponent>
  );
};

export default Home;

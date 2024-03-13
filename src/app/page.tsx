'use client';
import Landing from '@/feature/home/component/Landing';
import Introduction from '@/feature/home/component/Introduction';
import HomeProviderWrapper from '@/feature/home/context/HomeProviderWrapper';
import React from 'react';
import Navigator from '@/feature/home/component/Navigator';
import { containerStyles } from '@/style/styles';

const Home = () => {
  return (
    <HomeProviderWrapper>
      <main
        className={`relative mx-auto flex h-auto flex-col justify-between py-60 `}
      >
        <Navigator />
        <div className={`${containerStyles}`}>
          <Landing />
          <Introduction />
        </div>
      </main>
    </HomeProviderWrapper>
  );
};

export default Home;

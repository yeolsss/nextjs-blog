import Navigator from '@/components/home/Navigator';
import { containerStyles } from '@/style/styles';
import Landing from '@/components/home/Landing';
import Introduction from '@/components/home/Introduction';
import React from 'react';

function Home() {
  return (
    <main
      className={`relative mx-auto flex h-auto flex-col justify-between py-60 `}
    >
      <Navigator />
      <div className={`${containerStyles}`}>
        <Landing />
        <Introduction />
      </div>
    </main>
  );
}

export default Home;

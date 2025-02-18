import Navigator from '@/feature/home/component/Navigator';
import { containerStyles } from '@/style/styles';
import Landing from '@/feature/home/component/Landing';
import Introduction from '@/feature/home/component/Introduction';
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

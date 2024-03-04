import React, { PropsWithChildren } from 'react';

const HomeHeader: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const ST_MIN_HEIGHT = '3.6';
  return (
    <section
      className={`flex h-full min-h-[${ST_MIN_HEIGHT}rem] items-center justify-between`}
    >
      <h2 className={'text-[1.8rem] font-bold text-accentColor'}>{children}</h2>
    </section>
  );
};

export default HomeHeader;

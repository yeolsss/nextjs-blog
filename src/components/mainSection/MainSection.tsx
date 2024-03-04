import React, { PropsWithChildren } from 'react';
import { containerStyles } from '@/style/styles';

const MainSection: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div
      className={`mx-auto  h-auto rounded-[1.6rem]  bg-postCardBgColor px-[1.6rem]  py-[2.4rem] ${containerStyles}`}
    >
      {children}
    </div>
  );
};

export default MainSection;

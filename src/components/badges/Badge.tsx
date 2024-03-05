import React, { PropsWithChildren } from 'react';

const Badge: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <div className="flex min-h-[3rem] items-center justify-center rounded-[1.5rem] bg-accentColor px-[1rem] py-[0.5rem] text-[1.6rem] font-bold text-backgroundColor1">
      <span className="mt-[0.4rem]">{children}</span>
    </div>
  );
};

export default Badge;

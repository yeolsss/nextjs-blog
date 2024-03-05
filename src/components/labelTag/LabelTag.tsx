import React, { PropsWithChildren } from 'react';
import Badge from '@/components/badges/Badge';

interface Props {
  data: string[] | undefined;
}
const LabelTag: React.FC<PropsWithChildren<Props>> = ({ children, data }) => {
  return (
    <div className="flex items-center gap-x-[1rem] text-[1.6rem]">
      <span className=" text-primaryColor hover:text-accentColor">
        {children}
      </span>{' '}
      :
      <div className="flex flex-wrap gap-[1rem]">
        {data?.map((item) => <Badge key={item}>{item}</Badge>)}
      </div>
    </div>
  );
};

export default LabelTag;

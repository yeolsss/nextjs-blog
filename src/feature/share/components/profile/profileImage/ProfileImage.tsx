'use client';
import Image from 'next/image';
import React from 'react';

interface Props {
  width: number;
  height: number;
  marginTop: number;
}

const ProfileImage: React.FC<Props> = ({ width, height, marginTop }) => {
  return (
    <div>
      <div
        style={{ width: width, height: height }}
        className={`flex items-center justify-center overflow-hidden rounded-full `}
      >
        <Image
          src="/images/yeols.jpg"
          alt="profile photo"
          style={{ marginTop: marginTop }}
          width={150}
          height={150}
        />
      </div>
    </div>
  );
};
export default ProfileImage;

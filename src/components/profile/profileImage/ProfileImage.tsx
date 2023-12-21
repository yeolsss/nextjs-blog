'use client';
import Image from 'next/image';

const ProfileImage = () => {
  return (
    <div>
      {/*
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
      */}
      <div
        className={
          'flex h-[8rem] w-[8rem] cursor-pointer items-center justify-center overflow-hidden rounded-full'
        }
      >
        <Image
          src="/images/yeols.jpg"
          alt="profile photo"
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};
export default ProfileImage;

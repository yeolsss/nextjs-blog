'use client';
import { MdArrowLeft } from 'react-icons/md';
import { useRouter } from 'next/navigation';

const BackButton = ({ category }: { category: string }) => {
  const router = useRouter();

  const handleOnClickBakButton = () => {
    router.back();
  };
  return (
    <div
      onClick={handleOnClickBakButton}
      className={
        'flex max-w-[10rem] cursor-pointer items-center text-[1.6rem] text-textColor hover:text-accentColor'
      }
    >
      <MdArrowLeft className={'h-[2.6rem] w-[2.6rem]'} />
      <div className={'my-auto flex pt-[0.5rem]'}>{category}</div>
    </div>
  );
};

export default BackButton;

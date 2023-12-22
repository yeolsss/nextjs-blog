import { containerStyles } from '@/style/styles';
import Link from 'next/link';

interface ICategory {
  name: string;
  counter: number;
}
const Category = () => {
  const category: ICategory[] = [
    { name: 'Javascript', counter: 1 },
    { name: 'React', counter: 1000 },
    { name: 'Typescript', counter: 3000 },
    { name: 'Gatsby', counter: 1 },
    { name: 'Next.js', counter: 0 },
  ];
  return (
    <section
      className={`mb-[1.6rem] mt-[3rem] flex items-center gap-x-[0.8rem] ${containerStyles}`}
    >
      <Link href={'#'}>
        <p className={'text-[1.4rem] opacity-75'}>Javascript(1)</p>
      </Link>
      <div className={'h-[0.4rem] w-[0.4rem] rounded-full bg-textColor'}></div>
    </section>
  );
};

export default Category;

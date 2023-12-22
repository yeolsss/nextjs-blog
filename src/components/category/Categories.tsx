import { containerStyles } from '@/style/styles';
import Link from 'next/link';
import { fetchBlogCategories } from '@/api/contentfulLib';

const Categories = async () => {
  const fetchCategories = await fetchBlogCategories();
  const categories = Object.entries(fetchCategories);

  return (
    <section
      className={`my-[4rem] flex items-center gap-x-[0.8rem] ${containerStyles}`}
    >
      {categories.map((category, index) => (
        <>
          <Link key={category + String(index)} href={'#'}>
            <p className={'text-[1.4rem] opacity-75 hover:font-bold'}>
              {category[0]}({category[1]})
            </p>
          </Link>
          {index < categories.length - 1 && (
            <div
              className={'h-[0.4rem] w-[0.4rem] rounded-full bg-textColor'}
            ></div>
          )}
        </>
      ))}
    </section>
  );
};

export default Categories;

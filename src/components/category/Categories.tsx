import { containerStyles } from '@/style/styles';
import Link from 'next/link';
import { fetchBlogCategories } from '@/api/contentfulLib';
import { Category } from '@/components/category/category/Category';
import { SearchProps } from '@/app/posts/page';

interface Props extends SearchProps {
  type: string;
}

const Categories = async ({ searchParams, type }: Props) => {
  const fetchCategories = await fetchBlogCategories();
  const categories = Object.entries(fetchCategories);

  const { category: categoryUrl = '', search } = searchParams ?? {};

  const queryUrl = (category: string) => {
    let baseUrl = `/posts`;
    if (search) {
      baseUrl += `/?search=${search}`;
      if (categoryUrl === category) return baseUrl;
      else return (baseUrl += `&category=${category}`);
    }
    if (categoryUrl === category) return baseUrl;
    return `/posts/?category=${category}`;
  };

  return (
    <section
      className={`my-[4rem] flex items-center gap-x-[0.8rem] ${containerStyles}`}
    >
      {categories.map((category, index) => (
        <>
          {type === 'posts' ? (
            <Link key={category + String(index)} href={queryUrl(category[0])}>
              <Category
                category={category}
                categoryUrl={categoryUrl}
                type={type}
              />
            </Link>
          ) : (
            <Category
              category={category}
              categoryUrl={categoryUrl}
              type={type}
            />
          )}

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

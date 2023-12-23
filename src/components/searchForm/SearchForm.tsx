'use client';
import { containerStyles } from '@/style/styles';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

const SearchForm = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const searchParams = useSearchParams();
  const router = useRouter();

  const categoryParams = searchParams.get('category');
  const searchKeywordParams = searchParams.get('search');
  const handleOnSubmitSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (categoryParams) {
      router.push(`/posts/?category=${categoryParams}&search=${searchKeyword}`);
      return;
    }
    router.push(`/posts/?search=${searchKeyword}`);
    setSearchKeyword('');
  };

  return (
    <form
      onSubmit={handleOnSubmitSearch}
      className={`flex items-center px-[1.6rem] ${containerStyles}`}
    >
      <input
        type="text"
        placeholder="Search"
        className="front-sans peer mr-[1.6rem] min-h-[2.4rem] w-[90%] border-b-[0.2rem] border-primaryColor px-1 pb-1 text-[1.6rem] transition-[border-color] duration-200 ease-in focus:border-accentColor"
        onChange={(e) => setSearchKeyword(e.target.value)}
      />
      <button
        type={'submit'}
        className="h-[3rem] w-[3rem]  text-primaryColor transition-[color] duration-200 ease-in peer-focus:text-accentColor"
      >
        <IoSearch className="h-full w-full" />
      </button>
    </form>
  );
};

export default SearchForm;

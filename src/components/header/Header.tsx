'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import useSegment from '@/hooks/useSegment';
import ThemeButton from '@/feature/share/components/profile/themeButton/ThemeButton';

interface IHeaderLink {
  src: string;
  name: string;
}

const Header = () => {
  const segment = useSegment();
  const headerLink: IHeaderLink[] = [
    { src: '/', name: 'Home' },
    { src: '/work', name: 'Work' },
    { src: 'https://velog.io/@yeol10/posts', name: 'Post' },
  ];

  return (
    <header
      className={`align-center fixed left-1/2 z-10 mx-auto my-0 flex w-[100vw] max-w-[144rem] -translate-x-1/2 transform justify-between bg-inherit px-[12rem]  py-[2.4rem] opacity-90 md:px-[12rem] max-sm:px-[15rem]`}
    >
      <div className={'flex h-[100%] justify-center'}>
        <Link href={'/'}>
          <h1
            className={
              'h-[100%] text-[6.3rem] font-bold tracking-[-0.95px] max-sm:text-[3.4rem]'
            }
          >
            Yeols.dev
          </h1>
        </Link>
      </div>
      <nav className={'flex flex-row'}>
        <ul className={'g-[2.1rem] flex h-[100%] items-end gap-x-[1.6rem]'}>
          {headerLink.map((link, index) => (
            <li
              key={link.name + index}
              className={` ${styles.headerLi} ${
                segment === link.src ? styles.showBefore : ''
              }`}
            >
              <Link
                href={link.src}
                className={`text-[2.4rem] font-[400] leading-[4.76rem] tracking-[0.119px] max-sm:text-[1.6rem]`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li>
            <ThemeButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

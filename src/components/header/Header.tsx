'use client';
import Link from 'next/link';
import React from 'react';
import styles from './header.module.css';
import useSegment from '@/hooks/useSegment';

interface IHeaderLink {
  src: string;
  name: string;
}

const Header = () => {
  const segment = useSegment();
  const headerLink: IHeaderLink[] = [
    { src: '/', name: 'Home' },
    // { src: '/work', name: 'Work' },
    { src: '/posts', name: 'Post' },
  ];

  return (
    <header
      className={
        'mx-auto my-0 mt-[2.4rem] flex max-w-[100rem] justify-between px-[1.6rem]'
      }
    >
      <div className={'flex h-[100%] justify-center'}>
        <Link href={'/'}>
          <h1 className={'h-[100%] text-[6.3rem] font-bold tracking-[-0.95px]'}>
            Yeols.dev
          </h1>
        </Link>
      </div>
      <nav className={'flex flex-row'}>
        <ul className={'g-[2.1rem] flex h-[100%] items-end gap-x-[1.6rem]'}>
          {headerLink.map((link, index) => (
            <li
              key={link.name + index}
              className={`${styles.headerLi} ${
                segment === link.src ? styles.showBefore : ''
              }`}
            >
              <Link href={link.src} className={styles.headerLi__link}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;

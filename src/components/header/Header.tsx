"use client";
import Link from "next/link";
import React from "react";
import styles from "./header.module.css";
import {usePathname} from "next/navigation";

const Header = () => {
  const pathName = usePathname();

  return (
    <header className={"flex mx-auto my-0 max-w-[100rem]"}>
      <div className={"h-[100%] flex justify-center"}>
        <h1
          className={
            "mt-[1rem] text-[6.3rem] font-bold h-[100%] leading-[9.5rem] tracking-[-0.95px]"
          }
        >
          Yeols.dev
        </h1>
      </div>
      <ul className={"flex h-[100%] items-end g-[2.1rem]"}>
        <li
          className={`${styles.headerLi} ${
            pathName === "/" ? styles.showBefore : ""
          }`}
        >
          <Link href={"/"} className={styles.headerLi__link}>
            Home
          </Link>
        </li>
        <li
          className={`${styles.headerLi} ${
            pathName === "/about" ? styles.showBefore : ""
          }`}
        >
          <Link href={"/about"} className={styles.headerLi__link}>
            About
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;

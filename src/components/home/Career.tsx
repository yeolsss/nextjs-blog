'use client';

import React from 'react';
import { usePagePath } from '@/context/PagePath';

const Career = () => {
  const { careerRef } = usePagePath();
  return (
    <section
      ref={careerRef}
      className="flex h-auto flex-col gap-60 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Career
        </h1>
      </div>
      <div className="flex gap-20">
        <div className="flex flex-col gap-10">
          <div className="min-w-[12rem]">
            <h2 className="text-right text-[2.4rem] font-bold leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
              달아실소프트
            </h2>
          </div>
          <div className="flex flex-col gap-5">
            <span className="block text-right text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
              2017.05 ~ 2021.10
            </span>
            <span className="text-right text-[1.6rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
              (4년 5개월)
            </span>
          </div>
          <div></div>
        </div>

        <div className="flex flex-col gap-10">
          <h2 className="text-[2.4rem] font-bold leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
            주요 성과
          </h2>
          <ul className="flex flex-col gap-20">
            <li>
              <ul className="flex flex-col gap-10">
                <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                  달아실소프트 그룹웨어
                </span>
                <li>
                  <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                    · 옥산가 내에서 더존 그룹웨어 대체로 더존 그룹웨어 유지보수
                    비용 절감
                  </span>
                </li>
                <li>
                  <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                    · 사용 기술:JSP, Oracle, HTML, CSS, Javascript
                  </span>
                </li>
              </ul>
            </li>
            <li>
              <ul className="flex flex-col gap-10">
                <span className="text-[3rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                  옥산가 쇼핑몰
                </span>
                <li>
                  <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                    · 옥산가 쇼핑몰 서비스로 매출 20프로 상승
                  </span>
                </li>
                <li>
                  <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]">
                    · 사용 기술:JSP, Oracle, HTML, CSS, Javascript
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Career;

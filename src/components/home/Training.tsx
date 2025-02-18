'use client';

import React from 'react';
import { usePagePath } from '@/context/PagePath';

const Training = () => {
  const { trainingRef } = usePagePath();

  return (
    <section
      ref={trainingRef}
      className="flex h-auto flex-col gap-60 pt-[15rem] "
    >
      <div>
        <h1 className="text-9xl font-bold md:text-7xl lg:text-9xl max-sm:text-5xl">
          Training
        </h1>
      </div>
      <div className="flex flex-col gap-20">
        <div className="flex gap-20">
          <div className="flex flex-col gap-10">
            <div className="min-w-[20rem] max-sm:min-w-[15rem]">
              <h2 className="text-[2.4rem] font-bold md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem]">
                내일배움캠프
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10">
              <li>
                <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                  실무형 프론트엔드 엔지니어 양성과정
                </span>
              </li>
              <li>
                <span className="block text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                  2023.10 ~ 2024.02
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-10">
            <div className="min-w-[20rem] max-sm:min-w-[15rem]">
              <h2 className="block whitespace-pre-wrap text-[2.4rem] font-bold  leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                {'2024 내일배움캠프\n타임어택 해커톤'}
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10">
              <li>
                <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]  ">
                  Next.js, typescript를 이용하여 8시간 동안 API활용 로그인 기능
                  구현
                </span>
              </li>
              <li>
                <span className="block text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                  2024.01
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex gap-20">
          <div className="flex flex-col gap-10">
            <div className="min-w-[20rem] max-sm:min-w-[15rem]">
              <h2 className="block whitespace-pre-wrap text-[2.4rem] font-bold  leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                쌍용교육센터
              </h2>
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <ul className="flex flex-col gap-10">
              <li>
                <span className="text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem]  ">
                  스마트 문화 앱 콘텐츠 제작 전문가 양성과정
                </span>
              </li>
              <li>
                <span className="block text-[2.4rem] leading-[3rem] md:text-[2rem] lg:text-[2.4rem] max-sm:text-[1.6rem] max-sm:leading-[2rem] ">
                  2015.03 ~ 2015.09
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Training;

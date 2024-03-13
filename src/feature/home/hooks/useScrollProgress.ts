import React, { useContext, useRef } from 'react';
import { ScrollContext } from '@/feature/home/context/ScrollObserver';

interface ReturnTypes {
  refContainer: React.RefObject<HTMLDivElement>;
  progress: number;
}

const useScrollProgress = (numOfPages: number): ReturnTypes => {
  const { scrollY } = useContext(ScrollContext);
  const refContainer = useRef<HTMLDivElement>(null);

  let progress = 0;
  const { current: elContainer } = refContainer;

  if (elContainer) {
    const { clientHeight, offsetTop } = elContainer;
    const screenH = window.innerHeight;
    const halfH = screenH / 2;
    const percentY =
      Math.min(
        clientHeight + halfH,
        Math.max(-screenH, scrollY - offsetTop) + halfH,
      ) / clientHeight;
    progress = Math.min(numOfPages, Math.max(0.5, percentY * numOfPages));
  }

  return { refContainer, progress };
};

export default useScrollProgress;

'use client';

import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';

interface ScrollValue {
  scrollY: number;
}

export const ScrollContext = React.createContext<ScrollValue>({
  scrollY: 0,
});

export const useScroll = () => useContext(ScrollContext);

const ScrollObserver: React.FC<PropsWithChildren> = ({ children }) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const handleScroll = useCallback(() => {
    setScrollY(window.scrollY);
  }, []);

  useEffect(() => {
    document.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  const value = useMemo(() => ({ scrollY }), [scrollY]);

  return (
    <ScrollContext.Provider value={value}>{children}</ScrollContext.Provider>
  );
};

export default ScrollObserver;

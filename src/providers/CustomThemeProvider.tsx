'use client';
import { TProps } from '@/types/global';
import { ThemeProvider } from 'next-themes';

const CustomThemeProvider = ({ children }: TProps) => {
  return <ThemeProvider attribute={'class'}>{children}</ThemeProvider>;
};

export default CustomThemeProvider;

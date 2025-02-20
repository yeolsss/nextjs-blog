import type { Metadata } from 'next';
import './globals.css';
import * as React from 'react';
import CustomThemeProvider from '@/providers/CustomThemeProvider';

export const metadata: Metadata = {
  title: '권경열 | Portfolio',
  description: '권경열 포트폴리오',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <CustomThemeProvider>
        <body className={`relative flex flex-col`}>{children}</body>
      </CustomThemeProvider>
    </html>
  );
}

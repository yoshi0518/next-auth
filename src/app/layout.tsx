import type { Metadata } from 'next';
import type { FC } from 'react';
import { Noto_Sans_JP } from 'next/font/google';

import '@/styles/globals.css';

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  preload: false,
  display: 'swap',
  fallback: ['Hiragino Sans', 'Hiragino Kaku Gothic ProN', 'sans-serif'],
});

type RootLayoutProps = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Next Auth App',
  description: 'app with next auth',
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      lang="ja"
      className={notoSansJP.className}
    >
      <body className="">{children}</body>
    </html>
  );
};

export default RootLayout;

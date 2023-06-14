"use client"
import React, { ReactNode, StrictMode }from 'react';
import { Open_Sans } from "next/font/google";
import AppHeader from '@/src/@page-sections/layouts/AppHeader';
import RootStyleEmotionRegistry from '@/src/providers/EmotionRootStyle';

const inter = Open_Sans({
  subsets: ["latin"],
  display:'swap',
  weight: ['400', '600','700','800'],
});

type WrapperProps = {children: ReactNode};

const RootLayout = async ({children}: WrapperProps) => {

  return (
      <html lang="es" className={inter.className} key="root">
        <head />
        <body>
        <RootStyleEmotionRegistry key="theme-provider">
          <AppHeader/>
          {children}
        </RootStyleEmotionRegistry>
        </body>
      </html>
  )
}

export default RootLayout




import React, { FC, ReactNode } from 'react';
// import AppHeader from "./header/AppHeader";
import AppFooter from './AppFooter';
import { AppMeta, AppHeader } from './header/';
import { Hero } from '../ui';

interface MainLayoutProps {
  children?: ReactNode;
  heroTitle?: string;
}

export const MainLayout: FC<MainLayoutProps> = ({ children, heroTitle }) => {
  return (
    <div className="md:flex md:flex-col min-h-screen overflow-hidden bg-white-l-ddev dark:bg-bg-ddev ">
      <AppMeta></AppMeta>
      <AppHeader />
      {heroTitle && <Hero title={heroTitle} />}
      <main className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32 grow shrink">
        <>{children}</>
      </main>
      <AppFooter />
    </div>
  );
};

export default MainLayout;

import React from 'react';
import { useThemeContext } from '../context/ThemeContext/context';
import Header from '../Header';
import Seo from '../Seo/Seo';

interface Props {
  component: React.ReactNode;
}

const Layout: React.FC<Props> = ({ component }) => {
  const { mode } = useThemeContext();
  return (
    <>
      <Seo title="" description="" />
      <div
        className={`flex min-h-full flex-col items-stretch w-full ${mode.theme}`}
      >
        <Header />
        <main className="flex w-full bg-gray-100 dark:bg-secondary flex-shrink-0 flex-grow">
          {component}
        </main>
      </div>
    </>
  );
};

export default Layout;

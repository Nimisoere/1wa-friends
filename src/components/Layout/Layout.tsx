import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import Seo from '../Seo/Seo';

interface Props {
  component: React.ReactNode;
}

const Layout: React.FC<Props> = ({ component }) => (
  <>
    <Seo title="" description="" />
    <div className="flex font-serif min-h-full flex-col items-stretch w-full">
      <Header />
      <main className="flex w-full bg-gray-100 flex-shrink-0 flex-grow">
        {component}
      </main>
      <Footer />
    </div>
  </>
);

export default Layout;

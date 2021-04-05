import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description: string;
}

const defaultDescription =
  'As the leading logistics service provider in Africa, GIGL offers convenient, affordable, express delivery services with its GIGGo App';

const Seo: React.FC<Props> = ({ title, description }) => (
  <div className="application">
    <Helmet
      titleTemplate="%s | GIG Logistics"
      defaultTitle="GIGL | Africa's Leading Logistics Company | Express Delivery "
    >
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description || defaultDescription} />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </div>
);

export default Seo;

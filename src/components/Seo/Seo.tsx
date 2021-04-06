import React from 'react';
import { Helmet } from 'react-helmet-async';

interface Props {
  title: string;
  description?: string;
}

const defaultDescription = '1WA Code test';

const Seo: React.FC<Props> = ({ title, description = defaultDescription }) => (
  <div className="application">
    <Helmet titleTemplate="%s | 1WA Friends" defaultTitle="1WA Friends">
      <meta charSet="utf-8" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
  </div>
);

export default Seo;

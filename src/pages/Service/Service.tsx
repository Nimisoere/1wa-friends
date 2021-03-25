import React from 'react';
import { useParams } from 'react-router-dom';
import PageHeader from '../../components/common/PageHeader';
import TwoColumnContent from '../../components/ContentBlades/TwoColumnContent/TwoColumnContent';
import ServiceCardGroup from '../../components/ServiceCardGroup';
import { ServicePageData } from '../../interfaces';
import ErrorPage from '../Error/Error';
import { pages } from './service-page-data';

interface Props {}

const Service: React.FC<Props> = (props) => {
  const [pageData, setPageData] = React.useState<ServicePageData | null>();
  const { service } = useParams<any>();
  React.useEffect(() => {
    const data = pages.find((page) => page.slug === service);
    setPageData(data || null);
  }, [service]);

  if (!pageData)
    return (
      <ErrorPage
        error={pageData === null ? '404' : 'Loading...'}
        description={pageData === null ? 'Service unavailable' : ''}
      />
    );

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <PageHeader
          hasBackButton
          title={pageData.title}
          description={pageData.description}
        />
        <TwoColumnContent bannerUrl={pageData.contentImg}>
          {pageData.contentNode}
        </TwoColumnContent>
        {pageData.card_list && (
          <ServiceCardGroup cardList={pageData.card_list} />
        )}
        {pageData.bodyNode && pageData.bodyNode}
        {pageData.embedded_stream && (
          <div className="w-full bg-secondary h-96 mb-20 h-">
            <video className="h-full w-full" preload="auto" controls>
              <track kind="captions" />
              <source src={pageData.embedded_stream} type="video/mp4" />
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;

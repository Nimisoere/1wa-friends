import React from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/common/PageHeader";
import TwoColumnContent from "../../components/ContentBlades/TwoColumnContent/TwoColumnContent";
import ErrorPage from "../Error/Error";
import { pages } from "./page-data";

interface Props {}

const Service: React.FC<Props> = (props) => {
  const [pageData, setPageData] = React.useState<any>(null);
  const { service } = useParams<any>();
  React.useEffect(() => {
    const data = pages.find((page) => page.slug === service);
    setPageData(data);
  }, [service]);

  if (!pageData)
    return <ErrorPage error="404" description="Service unavailable" />;

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <PageHeader title={pageData.title} description={pageData.description} />
        <TwoColumnContent bannerUrl={pageData.contentImg}>
          {pageData.contentNode}
        </TwoColumnContent>
      </div>
    </div>
  );
};

export default Service;

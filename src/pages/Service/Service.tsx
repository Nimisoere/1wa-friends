import React from "react";
import { useParams } from "react-router";
import PageHeader from "../../components/common/PageHeader";
import TwoColumnContent from "../../components/ContentBlades/TwoColumnContent/TwoColumnContent";
import { ServiceCard, ServicePageData } from "../../interfaces";
import ErrorPage from "../Error/Error";
import { pages } from "./service-page-data";

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
        error={pageData === null ? "404" : "Loading..."}
        description={pageData === null ? "Service unavailable" : ""}
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
          <div className="w-full py-24">
            <h4 className="font-bold text-center mb-10 text-3xl">
              {pageData.card_list.title}
            </h4>
            <div className="w-full flex flex-wrap justify-center">
              {pageData.card_list.cards?.map(
                (card: ServiceCard, index: number) => (
                  <div
                    key={card.id}
                    className={`flex mb-20 justify-${
                      index % 3 === 0
                        ? "end"
                        : index % 3 === 2
                        ? "start"
                        : "center"
                    } flex-wrap`}
                    style={{ flexBasis: "33.333333%" }}
                  >
                    <div className="rounded-xl w-9/12 h-full py-6 px-4 text-center shadow-lg bg-white">
                      <h4 className="mb-5 text-lg font-semibold ">
                        {card.title}
                      </h4>
                      <p className="text-xs">{card.description}</p>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        )}
        {pageData.bodyNode && pageData.bodyNode}
        {pageData.embedded_stream && (
          <div className="w-full bg-secondary h-96 mb-20 h-">
            <video className="h-full w-full" preload="auto" controls>
              <source src={pageData.embedded_stream} type="video/mp4"></source>
            </video>
          </div>
        )}
      </div>
    </div>
  );
};

export default Service;

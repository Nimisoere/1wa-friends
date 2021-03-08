import React from "react";
import PageHeader from "../../components/common/PageHeader";
import banner from "../../assets/images/about-us.svg";
import TwoColumnContent from "../../components/ContentBlades/TwoColumnContent";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {}

const AboutUs: React.FC<Props> = () => {
  return (
    <div className="w-full">
      <div className="container mx-auto">
        <PageHeader
          title="Who are we"
          description="A reputation for speed and reliability"
        />
        <TwoColumnContent bannerUrl={banner}>
          <>
            <p className="mb-5">
              At GIGL we pride ourselves as being Africa’s Leading Logistics
              Company. Founded in 2012, we belong to a distinguished class of
              logistics companies with a clear defined market path across
              Africa.
            </p>
            <p className="mb-5">
              We are expanding rapidly with scores of local branches in Nigeria,
              Ghana and United States of America with a wide robust global
              network providing domestic and international, intra and
              inter-state express delivery services
            </p>
            <p className="mb-5">
              Our footprints are also clearly visible in the areas of freight
              forwarding, haulage services, mail room services, warehousing and
              distribution services and e-commerce logistics. Our rapid growth
              has largely been propelled by an excellent team of professionals.
            </p>
            <p className="mb-5">
              GIGL prides itself as an operator with the most knowledge of the
              local environment. Backed by a seamless infrastructure, we are now
              positioned more than ever to compete with other globally-rated
              logistics company.
            </p>
            <p className="mb-5">
              Our tagline is a better way to deliver, is an affirmation of our
              excellent processes, technological innovation and customer care
              deliverables backed up with a World class team. This mantra is
              brought alive in our speedy response to pick-up operations, prompt
              and secure delivery of shipments and comparative friendly charges
            </p>
          </>
        </TwoColumnContent>

        <div className="w-full mx-auto text-center py-24 max-w-4xl">
          <div className="mb-10">
            <h3 className="font-bold mb-5 text-4xl">Our Vision</h3>
            <p className="text-2xl">
              GIG Logistics will be Africa’s leading e-commerce logistics
              platform.
            </p>
          </div>
          <div className="mb-10">
            <h3 className="font-bold mb-5 text-4xl">Our Mission</h3>
            <p className="text-2xl">
              We are committed to relentlessly exceed customer’s expectation
              through innovative technology solutions for logistics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

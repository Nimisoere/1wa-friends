import React from "react";
import AppBanner from "../../components/ContentBlades/AppBanner";
import Features from "../../components/ContentBlades/Features";
import OurFocus from "../../components/ContentBlades/OurFocus";
import TrustedBy from "../../components/ContentBlades/TrustedBy";
import TrackingWidget from "../../components/TrackingWidget";

interface Props {}

const Home: React.FC<Props> = (props) => {
  return (
    <div>
      <div>
        <TrackingWidget />
      </div>
      <div>
        <Features />
      </div>
      <div>
        <AppBanner />
      </div>
      <div>
        <OurFocus />
      </div>
      <div>
        <TrustedBy />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import AppBanner from "../../components/ContentBlades/AppBanner";
import Features from "../../components/ContentBlades/Features";
import OurFocus from "../../components/ContentBlades/OurFocus";
import TrustedBy from "../../components/ContentBlades/TrustedBy";
import TrackingWidget from "../../components/TrackingWidget";
import { PropsFromRedux } from ".";
import { ReactComponent as Logo } from "../../assets/images/dark-logo.svg";
import styles from "./Home.module.scss";

interface Props extends PropsFromRedux {}

const Home: React.FC<Props> = (props) => {
  return (
    <div className="w-full">
      <div className="container mx-auto pt-24">
        <div className="w-full flex mb-10 justify-center">
          <Logo />
        </div>
        <div className="max-w-lg my-5 mx-auto">
          <TrackingWidget />
        </div>
      </div>
      <div className="container mx-auto py-5">
        <Features />
      </div>
      <div className="container mx-auto py-8">
        <AppBanner />
      </div>
      <div className={styles.ourFocusWrapper}>
        <div className="container mx-auto py-16">
          <OurFocus />
        </div>
      </div>
      <div className="container mx-auto py-16">
        <TrustedBy />
      </div>
    </div>
  );
};

export default Home;

import React from "react";
import { FeatureCard } from "./FeatureCard";
import { featureList } from "./features.constant";

interface Props {}

const Features: React.FC<Props> = (props) => {
  return (
    <div className="w-full">
      <h4 className="text-center font-sans mb-8 font-black text-3xl">
        Seamless deliveries begin here....
      </h4>
      <div className="w-full flex flex-wrap lg:flex-nowrap lg:gap-8 justify-around">
        {featureList.map((feature) => (
          <FeatureCard feature={feature} key={feature.title} />
        ))}
      </div>
    </div>
  );
};

export default Features;

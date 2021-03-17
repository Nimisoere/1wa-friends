import React from "react";
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
          <div
            key={feature.title}
            style={{ backgroundColor: "#1F1F1F" }}
            className="relative overflow-hidden text-center mb-5 rounded-xl w-full sm:w-1/2 lg:w-1/4 py-14 px-8 text-white"
          >
            <h5 className="font-bold mb-4 text-xl">{feature.title}</h5>
            <p className="text-lg">{feature.description}</p>
            {feature.tag && (
              <span className="absolute rotate-45 -right-10 w-36 flex justify-center items-center top-6 bg-red-600 font-bold p-2 transform text-white text-xs">
                {feature.tag}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;

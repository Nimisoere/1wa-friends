import React from "react";
import { Link } from "react-router-dom";
import { Feature } from "./features.constant";

interface Props {
  feature: Feature;
}

export const FeatureCard: React.FC<Props> = ({ feature }) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <Link
      to={feature.url}
      style={{ backgroundColor: "#1F1F1F" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="text-center relative overflow-hidden mb-5 rounded-xl w-full sm:w-1/2 lg:w-1/4 py-12 px-8 text-white"
    >
      <span className="flex mb-9 justify-center">
        {hovered ? feature.icon_hovered : feature.icon}
      </span>
      <h5 className="font-bold mb-4 text-xl">{feature.title}</h5>
      <p className="text-lg">{feature.description}</p>
      {feature.tag && (
        <span className="absolute rotate-45 -right-10 w-36 flex justify-center items-center top-6 bg-red-600 font-bold p-2 transform text-white text-xs">
          {feature.tag}
        </span>
      )}
    </Link>
  );
};

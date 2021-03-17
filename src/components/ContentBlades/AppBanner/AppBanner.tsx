import React from "react";
import { ReactComponent as PlayStore } from "../../../assets/icons/ios-store.svg";
import { ReactComponent as AppleSore } from "../../../assets/icons/google-play.svg";
import { ReactComponent as AppBackground } from "../../../assets/images/app-background.svg";
import { FiChevronDown } from "react-icons/fi";
interface Props {}

const AppBanner: React.FC<Props> = (props) => {
  return (
    <div className="w-full relative flex flex-wrap lg:flex-nowrap justify-between items-center">
      <div>
        <h4 className="font-sans text-3xl font-black max-w-lg mb-5">
          Request a pick-up from the comfort of your location
        </h4>
        <div className="flex gap-3">
          <a href="/">
            <PlayStore />
          </a>
          <a href="/">
            <AppleSore />
          </a>
        </div>
      </div>
      <div className="mb-8 w-full">
        <AppBackground className="w-full" />
      </div>
      <div className="absolute w-20 h-20 bg-gray-50 rounded-full left-1/2 flex justify-center items-end -bottom-16">
        <FiChevronDown className="text-3xl text-primary" />
      </div>
    </div>
  );
};

export default AppBanner;

import React from "react";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {
  bannerUrl: string;
  children: React.ReactElement;
}

const TwoColumnContent: React.FC<Props> = ({ bannerUrl, children }) => {
  return (
    <div className="w-full justify-between flex">
      <div className="w-6/12">
        <img src={bannerUrl} alt="About us" />
      </div>
      <div className="w-5/12 flex items-center">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default TwoColumnContent;

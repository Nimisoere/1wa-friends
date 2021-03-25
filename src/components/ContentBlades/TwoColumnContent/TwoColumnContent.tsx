import React from "react";
import { PropsFromRedux } from ".";

interface Props extends PropsFromRedux {
  bannerUrl: string;
  children: React.ReactElement;
}

const TwoColumnContent: React.FC<Props> = ({ bannerUrl, children }) => (
    <div className="w-full flex-wrap justify-between flex">
      <div className="w-full sm:w-6/12">
        <img src={bannerUrl} className="mb-8" alt="About us" />
      </div>
      <div className="w-full sm:w-5/12 flex items-center">
        <div>{children}</div>
      </div>
    </div>
  );

export default TwoColumnContent;

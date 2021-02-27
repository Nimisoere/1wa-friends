import React from "react";
import Seo from "../Seo/Seo";

interface Props {
  title: string;
  description: string;
}

const PageHeader: React.FC<Props> = ({ title, description }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <div className="py-16 w-full text-center">
        <h2 className="font-bold mb-5 text-4xl">{title}</h2>
        <p className="text-base font-normal">{description}</p>
      </div>
    </>
  );
};

export default PageHeader;

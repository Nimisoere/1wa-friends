import React from "react";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import { useHistory } from "react-router";
import Seo from "../Seo/Seo";

interface Props {
  title: string;
  description: string;
  hasBackButton?: boolean;
}

const PageHeader: React.FC<Props> = ({ title, description, hasBackButton }) => {
  const history = useHistory();
  return (
    <>
      <Seo title={title} description={description} />
      <div className="py-16 w-full flex text-center">
        {hasBackButton && (
          <button onClick={() => history.goBack()}>
            <HiOutlineArrowNarrowLeft className="inline-flex text-2xl" />
            Back
          </button>
        )}
        <div className="flex-grow">
          <h2 className="font-bold mb-5 text-4xl">{title}</h2>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PageHeader;

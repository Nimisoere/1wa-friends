import React from 'react';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { useHistory } from 'react-router-dom';
import Seo from '../Seo/Seo';

interface Props {
  title: string;
  description: string;
  hasBackButton?: boolean;
  disablePadding?: boolean;
}

const PageHeader: React.FC<Props> = ({
  title,
  description,
  disablePadding,
  hasBackButton,
}) => {
  const history = useHistory();
  return (
    <>
      <Seo title={title} description={description} />
      <div
        className={`${
          !disablePadding ? 'py-8 lg:py-16' : ''
        } w-full flex flex-wrap text-center`}
      >
        {hasBackButton && (
          <button
            type="button"
            className="mb-10 lg:mb-0"
            onClick={() => history.go(-1)}
          >
            <HiOutlineArrowNarrowLeft className="inline-flex text-2xl" />
            Back
          </button>
        )}
        <div className="flex-grow">
          <h2 className="font-bold font-heading mb-5 text-3xl">{title}</h2>
          <p className="text-base font-normal">{description}</p>
        </div>
      </div>
    </>
  );
};

export default PageHeader;

import React from 'react';
import { useHistory } from 'react-router-dom';
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import Seo from '../../components/Seo/Seo';

interface ErrorPageProps {
  error: string;
  description: string;
  showLink?: boolean;
}

const ErrorPage: React.FC<ErrorPageProps> = ({
  error,
  description,
  showLink = true,
}) => {
  const history = useHistory();
  return (
    <div className="container mx-auto py-10">
      <Seo title={error} description={description} />
      <div className="flex w-full flex-col flex-wrap justify-center items-center">
        <h2
          title={error}
          className="font-semibold font-heading text-center my-8 text-gray-300 text-6xl lg:text-9xl"
        >
          {error}
        </h2>
        <p color="textSecondary">{description}</p>
        {showLink && (
          <button
            type="button"
            onClick={() => history.go(-1)}
            className="mt-10 text-primary p-2 rounded"
          >
            <HiOutlineArrowNarrowLeft className="inline-flex" /> Go Back
          </button>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;

import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";
import { FaArrowLeft } from "react-icons/fa";

interface ErrorPageProps {
  error: string;
  description: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, description }) => {
  return (
    <div className="container mx-auto py-10">
      <Seo title={error} description={description} />
      <div className="flex w-full flex-col justify-center items-center">
        <h2 title={error} className="font-semibold my-8 text-gray-300 text-9xl">
          {error}
        </h2>
        <p color="textSecondary">{description}</p>
        <Link to="/" className="mt-10 text-primary p-2 rounded">
          <FaArrowLeft className="inline-flex" /> Back to Overview
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

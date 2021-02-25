import React from "react";
import { Link } from "react-router-dom";
import Seo from "../../components/Seo/Seo";

interface ErrorPageProps {
  error: string;
  description: string;
}

const ErrorPage: React.FC<ErrorPageProps> = ({ error, description }) => {
  return (
    <div className="container mx-auto h-screen">
      <Seo title={error} description={description} />
      <div className="flex w-full flex-col h-screen justify-center items-center">
        <h2 title={error} className="font-semibold text-8xl">
          {error}
        </h2>
        <p color="textSecondary">{description}</p>
        <Link to="/" className="mt-10 bg-primary text-white p-2 rounded">
          Back to Overview
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;

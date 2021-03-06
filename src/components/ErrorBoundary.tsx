import React from "react";
import ErrorPage from "../pages/Error/Error";

interface ErrorBoundaryProps {
  hasError: boolean;
}
export default class ErrorBoundary extends React.Component<
  {},
  ErrorBoundaryProps
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error: any, info: any) {
    // Ideally log to error log service
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorPage
          error="Oops!"
          description="Something went wrong. We are on it"
        />
      );
    }
    return this.props.children;
  }
}

import React, { ErrorInfo } from "react";
import { Link, navigate } from "@reach/router";

class ErrorBoundary extends React.Component {
  public state = {
    errorFound: false
  };

  public static getDerivedStateFromError() {
    return { errorFound: true };
  }

  public componentDidCatch(error: Error, info: ErrorInfo) {
    // eslint-disable-next-line
    console.log(`Found error! Error: ${error}, Info: ${info}`);
  }

  public componentDidUpdate() {
    if (this.state.errorFound) {
      setTimeout(() => navigate("/"), 5000);
    }
  }

  public render() {
    if (this.state.errorFound) {
      return (
        <h1>
          There was an error. <Link to="/">Click here</Link> to come back. Or
          wait 5 seconds to be redirected.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

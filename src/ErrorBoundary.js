import React from "react";
import { Link } from "@reach/router";

class ErrorBoundary extends React.Component {
  state = {
    errorFound: false
  };

  static getDerivedStateFromError() {
    return { errorFound: true };
  }

  componentDidCatch(error, info) {
    //eslint-disable-next-line
    console.log(`Found error! Error: ${error}, Info: ${info}`);
  }

  render() {
    if (this.state.errorFound) {
      return (
        <h1>
          There was an error. <Link to="/">Click here</Link> to come back.
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

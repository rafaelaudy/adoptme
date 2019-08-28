import React, { FunctionComponent } from "react";
import { Link } from "@reach/router";
import { css, keyframes } from "@emotion/core";
import colors from "./colors";

const spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;

const NavBar: FunctionComponent = () => {
  return (
    <header
      css={css`
        padding: 15px;
        color: ${colors.primary};

        &:hover {
          text-decoration: underline;
        }
      `}
    >
      <Link to="">Adopt Me!</Link>
      <span
        css={css`
          font-size: 60px;
          animation: 1s ${spin} linear infinite;

          &:hover {
            animation: 0.5s ${spin} linear infinite;
          }
        `}
        role="img"
        aria-label="logo"
      >
        🐈
      </span>
    </header>
  );
};

export default NavBar;

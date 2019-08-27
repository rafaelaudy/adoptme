import React from "react";
import { Link } from "@reach/router";
import { css } from "@emotion/core";

const paddingComingFromAConstantSomewhere = 15;

const NavBar = () => {
  return (
    <header
      css={css`
        padding: ${paddingComingFromAConstantSomewhere}px;
      `}
    >
      <Link to="">Adopt Me!</Link>
      <span role="img" aria-label="logo">
        🐈
      </span>
    </header>
  );
};

export default NavBar;

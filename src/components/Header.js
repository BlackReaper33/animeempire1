import React from "react";

// Import FontAwesomeIcon component
import { faz } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Importing Component
import Signout from "./Signout";

function Header() {
  return (
    <header>
      <a href="https://animeempire.netlify.app/">
        <h1>Anime Empire</h1>
      </a>
      <a
        href="https://projz.com/s/c/AnimeEmpireaat"
        className="git-icn"
        target="_blank"
        rel="noreferrer"
      >
        <FontAwesomeIcon size="3x" icon={faz} />
      </a>
      <Signout />
    </header>
  );
}

export default Header;

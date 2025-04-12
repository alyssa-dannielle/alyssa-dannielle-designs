import React from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-regular-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="border-b flex justify-between">
      <div className="p-5">
        <Link href="/">AlyssaDannielle.Design</Link>
      </div>
      <span className="p-5">
        <button>
          <FontAwesomeIcon
            icon={faMoon}
            className="w-3.5 h-3.5 sm:w-5 sm:h-5"
          />
        </button>
      </span>
    </div>
  );
};

export default Header;

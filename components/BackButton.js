import React from "react";
//import { navigate, Link } from "gatsby";
import BackArrow from "../images/backArrow.svg";
import Link from "next/link";

export default function BackButton({
  text,
  path,
  id,
  transitionPhoto = false,
  originPathname,
  replace = false,
}) {
  return (
    <React.Fragment>
      <div className="back-button-root">
        <Link className="back-button" href={path} passHref>
          {text}
        </Link>
      </div>
    </React.Fragment>
  );
}

//<img src={BackArrow} alt="back arrow CHH"></img>

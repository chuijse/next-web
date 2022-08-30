import "../styles/index.scss";
import Nav from "../components/Nav";
import React, { useState, useLayoutEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { useMediaQuery } from "react-responsive";

// Example of diferent animation for each page
//https://codesandbox.io/s/framer-motion-animatepresence-react-router-dom-9dhyn?from-embed
//https://codesandbox.io/s/animated-page-transitions-in-nextjs-yb71o5

//como quiero mi index
//https:codesandbox.io/s/framer-motion-parallax-i9gwuc?from-embed=&file=/src/App.tsx:459-469

function MyApp({ Component, pageProps, router }) {
  //console.log(router);
  //const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 });

  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hideOnMobile, setHideOnMobile] = useState(false);

  useLayoutEffect(() => {
    setHideOnMobile(isMobile);
  }, [isMobile]);

  return (
    <React.Fragment>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} isMobile={hideOnMobile} />
      </AnimatePresence>
    </React.Fragment>
  );
}

export default MyApp;

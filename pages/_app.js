import "../styles/index.scss";
import Nav from "../components/Nav";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Example of diferent animation for each page
//https://codesandbox.io/s/framer-motion-animatepresence-react-router-dom-9dhyn?from-embed
//https://codesandbox.io/s/animated-page-transitions-in-nextjs-yb71o5

//como quiero mi index
//https:codesandbox.io/s/framer-motion-parallax-i9gwuc?from-embed=&file=/src/App.tsx:459-469

function MyApp({ Component, pageProps, router }) {
  //console.log(router);
  return (
    <React.Fragment>
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </React.Fragment>
  );
}

export default MyApp;

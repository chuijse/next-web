import React, { useState } from "react";
import flechaHorizontal from "../images/flechaHorizontal.svg";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const Button = (props) => {
  const [active, setactive] = useState(false);
  return (
    <>
      <a href={props.link} target="_blank" rel="noopener noreferrer">
        <motion.div
          onHoverStart={() => setactive(true)}
          onHoverEnd={() => setactive(false)}
        >
          <div className="marginButton">
            <div className="button">
              <motion.div
                className="block"
                initial={false}
                animate={{ width: active ? "300%" : "100%" }}
              />

              <motion.span
                initial={false}
                animate={{ x: active ? 10 : 0 }}
                className="name"
              >
                {props.name}
              </motion.span>
              <div className="arrow">
                <AnimatePresence exitBeforeEnter>
                  {active ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Image
                        src={flechaHorizontal}
                        alt="link arrow"
                        width="45"
                      />
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </motion.div>
      </a>
    </>
  );
};

export default Button;

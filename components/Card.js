import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import flechaHorizontal from "../images/flechaHorizontal.svg";
import Image from "next/image";

export default function Card({
  slug,
  title,
  img,
  year,
  semester,
  contents,
  i,
}) {
  const [isActive, setIsActive] = useState(false);
  const [onExit, setOnExit] = useState(false);
  const [contentText, setContentText] = useState("");
  const router = useRouter();

  useEffect(() => {
    setContentText(contents.map(({ name }) => `${name}`).join(", "));
  }, []);

  const item = {
    hidden: { clipPath: "inset(100% 0% 0% 0%)", y: "-100%" },
    show: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: "0",
      transition: { duration: 1 },
    },
    exit: onExit
      ? null
      : {
          clipPath: "inset( 0% 0% 100% 0%)",
          y: "100%",
          transition: { duration: 0.5 },
        },
  };

  function navigate(slug) {
    setOnExit(true);

    router.push(
      {
        pathname: `teaching/${slug}`,
        //query: { linkProps: slug }, //use for sending data
      },
      undefined,
      { scroll: false }
    );
  }

  return (
    <motion.div
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      variants={item}
      className="card-root"
      onClick={() => navigate(slug)}
    >
      <motion.div className="image-content">
        <motion.div
          className="image-content-animation"
          animate={{ height: isActive ? "110%" : "100%" }}
          transition={{ duration: 0.5 }}
        >
          <img src={img} alt={title} className="card-image" />
        </motion.div>
      </motion.div>
      <motion.div
        className="info-content"
        animate={{
          height: isActive ? "200px" : "90px",
          padding: isActive ? "30px" : "15px",
          /*marginBottom: isActive ? "-15px" : "0px",*/
          marginLeft: isActive ? "-15px" : "0px",
          marginRight: isActive ? "-15px" : "0px",
        }}
        transition={{ duration: "0.5" }}
      >
        <div className="card-title">
          <span className="subtitle">
            {year} | {semester}° semestre
          </span>
          <motion.h3
            animate={{ color: isActive ? "#ff7f2a" : "#ffffff" }}
            transition={{ duration: "0.5" }}
          >
            {title}
          </motion.h3>
          {isActive ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: "1" }}
              className="info-open"
            >
              <p>{contentText}</p>
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: "0.5" }}
              >
                <Image
                  src={flechaHorizontal}
                  alt="flecha-teaching-chh.work"
                  width="45"
                />
              </motion.div>
              <motion.div />
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

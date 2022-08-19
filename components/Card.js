import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import flechaHorizontal from "../images/flechaHorizontal.svg";

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
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: onExit ? { y: -30, transition: { duration: 0.2 } } : null,
  };

  function navigate(slug) {
    setOnExit(true);
    router.push(`teaching/${slug}`);
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
              <motion.img
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: "0.5" }}
                src={flechaHorizontal}
                alt="flecha-teaching-chh.work"
                width="45"
              />
            </motion.div>
          ) : null}
        </div>
      </motion.div>
    </motion.div>
  );
}

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function TemplateHeaderInfo({
  isTablet,
  title,
  abstract,
  universities,
  year,
  semester,
  contents,
  role,
  client = "client",
}) {
  const [contetText, setContetText] = useState("");

  useEffect(() => {
    setContetText(contents?.map(({ name }) => `${name}`).join(", "));
  }, []);

  const container = {
    initial: { opacity: 0 },
    exit: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: {
        delayChildren: isTablet ? 1.3 : 0.3,
        staggerChildren: 0.75,
      },
    },
  };

  const item = {
    initial: {
      clipPath: "inset(100% 0% 0% 0%)",
      y: "-100%",
    },
    animate: {
      clipPath: "inset(0% 0% 0% 0%)",
      y: "0",
      transition: { duration: 1 },
    },
  };

  console.log(`cliente: ${client}`);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      variants={container}
      className="course-header-info"
    >
      <motion.h1
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{
          duration: 0.5,
          delay: isTablet ? 1 : 0,
        }}
        className="course-header-title"
      >
        {title}
      </motion.h1>
      <motion.span variants={item} className="course-header-animation-stat">
        <HeaderStat statClass={"Contenidos"} statName={contetText} />
        <HeaderStat statClass={"Rol"} statName={role.name} />
        <HeaderStat statClass={`${client}`} statName={universities?.name} />
        <HeaderStat
          statClass={"Año"}
          statName={`${year} | ${semester}° semestre`}
        />
      </motion.span>
    </motion.div>
  );
}

function HeaderStat({ statClass, statName }) {
  return (
    <div className="header-stat">
      <p className="header-stat-class">{statClass}</p>
      <p className="header-stat-info">{statName}</p>
    </div>
  );
}

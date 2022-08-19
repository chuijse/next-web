import React from "react";
import Seo from "../components/Seo";
import { Courses } from "../components/Courses";
import { motion } from "framer-motion";
import Card from "../components/Card";
import CardsHeader from "../components/CardsHeader";

export default function Teaching() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.article
      //initial={{ y: -50, opacity: 0, scale: 0.9 }}
      //animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="main-teaching"
    >
      <Seo pageTitle="Teaching" />
      <CardsHeader title="docencia" subTitle="Filtra por universidad" />
      <motion.ul
        style={{ display: "flex", gap: "50px", marginTop: "30px" }}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {Courses.map((course, i) => (
          <Card
            title={course.title}
            slug={course.slug}
            img={course.img}
            key={`course-card-${i}`}
          />
        ))}
      </motion.ul>
    </motion.article>
  );
}

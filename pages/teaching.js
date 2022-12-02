import React, { useState, useLayoutEffect } from "react";
import Seo from "../components/Seo";
import { Courses } from "../components/Courses";
import { motion } from "framer-motion";
import Card from "../components/Card";
import CardsHeader from "../components/CardsHeader";

export default function Teaching({ isMobile }) {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        //staggerChildren: 0.25,
      },
    },
  };

  return (
    <motion.article
      //initial={{ y: -50, opacity: 0, scale: 0.9 }}
      //animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="main-teaching"
    >
      <Seo pageTitle="Docencia" />
      <CardsHeader title="docencia" description="Lista de cursos" />
      <motion.section
        className="teachingGrid"
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
        key={`teachingGrid-${"filter"}`}
      >
        {Courses.map((course, i) => (
          <Card
            title={course.title}
            slug={course.slug}
            img={course.mainImage.url}
            semester={course.semester}
            year={course.year}
            contents={course.courseContent}
            key={`course-card-${i}`}
          />
        ))}
      </motion.section>
    </motion.article>
  );
}

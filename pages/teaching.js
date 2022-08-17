import React, { useState } from "react";
import Seo from "../components/Seo";
import Link from "next/link";
import { Courses } from "../components/Courses";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Teaching() {
  const router = useRouter();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    //exit: { y: -20, opacity: 0, scale: 1.02, transition: { duration: 1 } },
  };

  return (
    <motion.article
      //initial={{ y: -50, opacity: 0, scale: 0.9 }}
      //animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="main-teaching"
    >
      <Seo pageTitle="Teaching" />
      <section className="intro">
        <motion.h1
          initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
          transition={{ duration: 0.5 }}
        >
          Docencia
        </motion.h1>
        <motion.div
          className="teaching-line"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        />
        <motion.div
          className="subHeader"
          initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
          transition={{ duration: 0.5 }}
        >
          <h2>Filtra por Universidad</h2>
        </motion.div>
      </section>

      <motion.ul
        style={{ display: "flex", gap: "50px", marginTop: "30px" }}
        variants={container}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {Courses.map((course, i) => (
          <motion.li
            variants={item}
            //exit={{ scale: 0.8 }}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "5px",
              border: "2px solid black",
              cursor: "pointer",
            }}
            onClick={() => router.push(`teaching/${course.slug}`)}
            key={`course-card-${i}`}
          >
            <img src={course.img} alt={course.title} width={300} />
            <Link href={`teaching/${course.slug}`}>
              <a>
                <h3>{course.title}</h3>
              </a>
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.article>
  );
}

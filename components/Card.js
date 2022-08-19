import React, { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Card({ slug, title, img, i }) {
  const [isSelected, setIsSelected] = useState(false);
  const router = useRouter();

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
    exit: isSelected ? { y: -20, transition: { duration: 0.2 } } : null,
  };

  function navigate(slug) {
    setIsSelected(true);
    router.push(`teaching/${slug}`);
  }

  return (
    <motion.li
      variants={item}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "5px",
        border: "2px solid black",
        cursor: "pointer",
      }}
      onClick={() => navigate(slug)}
    >
      <img src={img} alt={title} width={300} />
      <Link href={`teaching/${slug}`}>
        <a>
          <h3>{title}</h3>
        </a>
      </Link>
    </motion.li>
  );
}

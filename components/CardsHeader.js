import { motion } from "framer-motion";

export default function CardsHeader({ title, subTitle }) {
  return (
    <section className="cards-header">
      <motion.h1
        initial={{ clipPath: "inset(0% 0% 100% 0%)", y: "100%" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h1>
      <motion.div
        className="line"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      />
      <motion.div
        className="sub-header"
        initial={{ clipPath: "inset(100% 0% 0% 0%)", y: "-100%" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)", y: "0" }}
        transition={{ duration: 0.5 }}
      >
        <h2>{subTitle}</h2>
      </motion.div>
    </section>
  );
}

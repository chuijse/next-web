import Seo from "../components/Seo";
import CardsHeader from "../components/CardsHeader";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <motion.article exit={{ opacity: 0 }} transition={{ duration: 1 }}>
      <Seo pageTitle="Proyectos" />
      <CardsHeader title="Proyectos" description="Lista de trabajos" />
    </motion.article>
  );
}

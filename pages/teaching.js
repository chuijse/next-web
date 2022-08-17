import Seo from "../components/Seo";
import Link from "next/link";
import { Courses } from "../components/Courses";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function Teaching() {
  const router = useRouter();
  return (
    <motion.section
      initial={{ y: -50, opacity: 0, scale: 0.9 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="section"
    >
      <Seo pageTitle="Teaching" />
      <h1>Teaching</h1>
      <p>this is de Teaching page</p>
      <div style={{ display: "flex", gap: "50px", marginTop: "30px" }}>
        {Courses.map((course, i) => (
          <div
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
          </div>
        ))}
      </div>
    </motion.section>
  );
}

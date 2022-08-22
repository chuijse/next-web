import Seo from "../../components/Seo";
import { Courses } from "../../components/Courses";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import DocumentTemplate from "../../components/DocumentationTemplate";

export default function Course({ course }) {
  //console.log(Courses.filter((c) => c.slug.includes("02")));
  console.log(course);
  //const router = useRouter();
  //console.log(router.query.linkProps) //read data from query

  return (
    <motion.article
      //initial={{ x: -50, opacity: 0 }}
      //animate={{ x: 0, opacity: 1 }}
      //exit={{ x: -50, opacity: 0 }}
      //transition={{ duration: 0.5 }}
      className="section"
      //key={`coures-page-${course.slug}`}
    >
      <Seo
        pageTitle={course.title}
        description="Este es el articulo 01 y habla de esto y esto otro una y otra vez 01"
        article={true}
        image={course.mainImage.url}
      />
      <DocumentTemplate {...course} />
    </motion.article>
  );
}

export async function getStaticPaths() {
  const paths = Courses.map((course) => ({ params: { slug: course.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const data = Courses.find((c) => c.slug.includes(context.params.slug));
  return {
    props: {
      course: data,
    },
  };
}

import Seo from "../../components/Seo";
import { Courses } from "../../components/Courses";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import DocumentTemplate from "../../components/DocumentationTemplate";
import React from "react";

export default function Course({ course }) {
  //console.log(Courses.filter((c) => c.slug.includes("02")));
  console.log(course);
  //const router = useRouter();
  //console.log(router.query.linkProps) //read data from query

  return (
    <React.Fragment>
      <Seo
        pageTitle={course.title}
        description="Este es el articulo 01 y habla de esto y esto otro una y otra vez 01"
        article={true}
        image={course.mainImage.url}
      />
      <DocumentTemplate {...course} documentType="course" />
    </React.Fragment>
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

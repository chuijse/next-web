import Seo from "../../components/Seo";
import { Courses } from "../../components/Courses";

export default function Course({ course }) {
  <article className="section" key={`coures-page-${course.slug}`}>
    <Seo
      pageTitle={course.title}
      description="Este es el articulo 01 y habla de esto y esto otro una y otra vez 01"
      article={true}
    />
    <h1>{course.title}</h1>
    <img src={course.img} alt="test" width={"40%"} />
    <p style={{ width: "40%" }}>{course.abstract}</p>
  </article>;
}

export async function getStaticPaths() {
  const paths = Courses.map((course) => ({ params: { slug: course.slug } }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      course: {},
    },
  };
}

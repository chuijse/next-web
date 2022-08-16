import Seo from "../components/Seo";
import Link from "next/link";
import { Courses } from "../components/Courses";
import { useRouter } from "next/router";

export default function Teaching() {
  const router = useRouter();
  return (
    <section className="section">
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
    </section>
  );
}

import Seo from "../../components/Seo";

export default function test01() {
  return (
    <article className="section">
      <Seo
        pageTitle="test1"
        description="Este es el articulo 01 y habla de esto y esto otro una y otra vez 01"
        article={true}
      />
      <h1>test01</h1>
      <p>Esto es una prueba, página 01</p>
    </article>
  );
}

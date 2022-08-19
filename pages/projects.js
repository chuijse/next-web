import Seo from "../components/Seo";
import CardsHeader from "../components/CardsHeader";

export default function Projects() {
  return (
    <section className="section">
      <Seo pageTitle="Projects" />
      <CardsHeader title="Proyectos" subTitle="Filtra por tipo de contenido" />
    </section>
  );
}

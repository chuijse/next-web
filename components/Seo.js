import Head from "next/head";
import { useRouter } from "next/router";

const keywords =
  "Interacción digital,diseño,ux,ui,electrónica,front-end,arduino,diseño Industrial";
const domain = "next-web-rose.vercel.app";
const year = "2022";
const author = "Cristian Huijse Heise";
const linkedin = "https://cl.linkedin.com/in/cristianhuijse";
const github = "https://github.com/chuijse";

export default function Seo({
  pageTitle = "Portafolio",
  description = "Este es el portafolio de Cristian Huijse Heise, Diseñador industrial especialista en el ambito de la interacción digital",
  icon = "/favicon.ico",
  image = "/meta-data.jpg",
  article = false,
}) {
  const router = useRouter();

  return (
    <Head>
      <title>{`${pageTitle} | CHH`}</title>
      <meta name="title" content={`${pageTitle} | CHH`}></meta>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="year" content={year} />
      <meta name="author" content={author} />
      <meta name="linkedin" content={linkedin} />
      <meta name="github" content={github} />
      <meta name="keywords" content={keywords} />
      <meta name="Revisit-after" content="1 days" />
      <meta name="robots" content="index, follow" />
      {/* Facebook Meta Tags */}
      <meta property="og:title" content={`CHH | ${pageTitle}`} key="title" />
      <meta property="og:type" content={article ? "article" : "webpage"} />
      <meta
        property="og:url"
        content={router.route === "/" ? domain : `${domain}${router.pathname}`}
      />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content="Cristian Huijse Portfolio" />
      <meta property="og:author" content={author} />
      {/* Twitter Meta Tags */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`CHH | ${pageTitle}`} />
      <meta
        property="twitter:url"
        content={router.route === "/" ? domain : `${domain}${router.pathname}`}
      />
      <meta property="twitter:domain" content={domain} />{" "}
      {/* cambiar por chh.work en el futuro */}
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:image" content={image} />
      <link rel="icon" href={icon} />
      {/* email */}
      <meta name="reply-to" content="cristian.huijse@gmail.com" />
      <link rev="made" href="mailto:cristian.huijse@gmail.com" />
    </Head>
  );
}

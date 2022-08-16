import Head from "next/head";

export default function Seo({
  pageTitle = "Portfalio",
  description = "Este es el portafolio de Cristian Huijse Heise, Diseñador industrial especialista en el ambito de la interacción digital",
  icon = "/favicon.ico",
  image = "/meta-data.jpg",
  year = "2022",
  author = "Cristian Huijse Heise",
  linkedin = "https://cl.linkedin.com/in/cristianhuijse",
  github = "https://github.com/chuijse",
  article = false,
}) {
  return (
    <Head>
      <title>{`CHH | ${pageTitle}`}</title>
      <meta name="title" content={`CHH | ${pageTitle}`}></meta>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="year" content={year} />
      <meta name="author" content={author} />
      <meta name="linkedin" content={linkedin} />
      <meta name="github" content={github} />
      <meta
        name="keywords"
        content="Interacción digital,diseño,ux,ui,electrónica,front-end,arduino,diseño Industrial"
      />
      <meta name="Revisit-after" content="1 days" />
      <meta name="robots" content="index, follow" />

      <meta property="og:title" content={`CHH | ${pageTitle}`} key="title" />
      <meta property="og:type" content={article ? "article" : "webpage"} />
      <meta property="og:url" content=" http://chh.work/" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content="Cristian Huijse Portfolio" />
      <meta property="og:author" content={author} />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:title" content={`CHH | ${pageTitle}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:image" content={image} />

      <link rel="icon" href={icon} />

      <meta name="reply-to" content="cristian.huijse@gmail.com" />
      <link rev="made" href="mailto:cristian.huijse@gmail.com" />
    </Head>
  );
}

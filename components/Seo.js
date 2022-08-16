import Head from "next/head";

export default function Seo({
  pageTitle = "Portfalio",
  description = "This is portfolio of Cristian Huijse Industrial Designer.",
  icon = "/favicon.ico",
  image = "/meta-data.jpeg",
  year = "2022",
  author = "Cristian Huijse Heise",
  linkedin = "https://cl.linkedin.com/in/cristianhuijse",
  github = "https://github.com/chuijse",
  article = false,
}) {
  return (
    <Head>
      <title>{`CHH | ${pageTitle}`}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />
      <meta name="year" content={year} />
      <meta name="author" content={author} />
      <meta name="linkedin" content={linkedin} />
      <meta name="github" content={github} />

      <meta property="og:title" content={`CHH | ${pageTitle}`} key="title" />
      <meta property="og:type" content={article ? "article" : "webpage"} />
      <meta property="og:url" content=" http://chh.work/" />
      <meta property="og:image" content={image} />
      <meta property="og:description" content={description} key="description" />
      <meta property="og:site_name" content="Cristian Huijse Portfolio" />
      <meta property="og:author" content={author} />

      <meta property="twitter:title" content={`CHH | ${pageTitle}`} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:author" content={author} />
      <meta property="twitter:image:src" content={image} />

      <link rel="icon" href={icon} />
    </Head>
  );
}

import Head from "next/head";

export default function Seo({
  pageTitle = "Portfalio",
  description = "This is portfolio of Cristian Huijse Industrial Designer.",
  image = "/favicon.ico",
  year = "2022",
  author = "Cristian Huijse Heise",
  linkedin = "https://cl.linkedin.com/in/cristianhuijse",
  github = "https://github.com/chuijse",
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
      <meta property="og:description" content={description} key="description" />
      <meta name="og:author" content={author} />
      <meta name="og:image" content={image} />

      <meta property="twitter:title" content={`CHH | ${pageTitle}`} />
      <meta property="twitter:description" content={description} />
      <meta name="twitter:author" content={author} />
      <link rel="icon" href={image} />
    </Head>
  );
}

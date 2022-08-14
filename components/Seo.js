import Head from 'next/head'

export default function Seo({
    pageTitle="Portfalio", 
    description="This is portfolio of Cristian Huijse Industrial Designer.", 
    image = "/favicon.ico"}
    ) {
  return (
    <Head>
          <title>{`CHH | ${pageTitle}`}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={`CHH | ${pageTitle}`} key="title" />
          <meta property="og:description" content={description} key="description" />
          <link rel="icon" href={image} />    
    </Head>
  )
}


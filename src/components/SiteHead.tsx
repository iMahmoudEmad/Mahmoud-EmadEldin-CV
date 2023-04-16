import Head from "next/head";

export const SiteHead = () => {
  const author = "Mahmoud Emad";
  const position = "Frontend Engineer";
  const username = "@imahmoudemad";

  return (
    <Head>
      <meta name="title" content={author} />
      <meta name="colorScheme" content="light" />
      <meta name="creator" content={author} />
      <meta name="publisher" content="Vercel" />
      <meta name="keywords" content={position} />
      <meta name="theme-color" content="#fff" />
      <meta name="generator" content="Nextjs 13.2.4" />

      <meta name="twitter:site" content={username} />
      <meta name="twitter:creator" content={username} />
      <meta name="twitter:card" content="summary_large_image" />

      <meta property="og:url" content="https://mahmoudemad.vercel.com" />
      <meta property="og:title" content={author} />
      <meta property="og:description" content={position + " player"} />
      <meta property="og:image" content="https://mahmoudemad.vercel.com/og" />
      <meta property="og:type" content="website" />

      <meta name="apple-mobile-web-app-title" content={author} />
      <link rel="apple-touch-icon" href="/assets/images/mahmoud.jpg" />
      <meta name="description" content={position + " player"} />

      <title>Mahmoud Emad</title>
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="manifest" href="/manifest.json" />
    </Head>
  );
};

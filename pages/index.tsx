import type { NextPage } from 'next';
import Head from 'next/head';
import dynamic from 'next/dynamic';

import { siteData } from 'consts';

const HeroSection = dynamic(() =>
  import('modules/HeroSection').then((mod) => mod.HeroSection),
);

const Home: NextPage = () => {
  const pageTitle = siteData.title;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={siteData.description} />

        <meta property="og:image" content="assets/images/og.png" />

        <meta property="og:title" content={pageTitle} />

        <meta property="og:description" content={siteData.description} />
      </Head>

      <HeroSection />
    </>
  );
};

Home.displayName = 'pages/index';

export default Home;

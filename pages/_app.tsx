import type { AppProps } from 'next/app';
import Head from 'next/head';

import { siteData } from 'consts/index';
import { AppLayout } from 'modules/layout';
import 'styles/globals.scss';

type MyAppProps = AppProps & {
  fullHeightFooter?: boolean;
  pageProps: {
    fullHeightFooter?: boolean;
  };
};

const MyApp: React.FC<MyAppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <meta charSet="utf-8" />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />

      <link rel="manifest" href="/manifest.json" />

      <link rel="icon" href="/favicon.ico" />

      <meta name="theme-color" content={siteData.themeColor} />

      <meta property="og:type" content="website" />
    </Head>

    <AppLayout fullHeightFooter={pageProps.fullHeightFooter}>
      <Component {...pageProps} />
    </AppLayout>
  </>
);

export default MyApp;

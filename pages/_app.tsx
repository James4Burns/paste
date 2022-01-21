import type { NextPage } from "next";
import type { AppProps } from "next/app";
import Head from "next/head";

import Layout from "components/layout";
import { defaultSettings } from "library/settings";
import "styles/globals.css";
import type { TPageComponent } from "types/component";

const MyApp: NextPage<AppProps<TPageComponent>> = ({ Component }) => {
  const settings = defaultSettings;

  return (
    <>
      <Head>
        <title>Paste</title>
        <meta
          name="description"
          content="An encrypted pastebin made in Next.js."
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout theme={settings.theme} title={settings.title}>
        <Component settings={settings} />
      </Layout>
    </>
  );
};

export default MyApp;

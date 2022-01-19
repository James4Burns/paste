import type { NextPage } from "next";
import type { AppProps } from "next/app";

import Layout from "components/layout";
import { defaultSettings } from "library/settings";
import "styles/globals.css";
import type { TPageComponent } from "types/component";

const App: NextPage<AppProps<TPageComponent>> = ({ Component }) => {
  const settings = defaultSettings;

  return (
    <Layout theme={settings.theme} title={settings.title}>
      <Component settings={settings} />
    </Layout>
  );
};

export default App;

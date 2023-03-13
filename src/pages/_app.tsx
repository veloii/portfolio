import { GeistProvider, CssBaseline, Themes } from "@geist-ui/core";
import { AppProps } from "next/app";
import "inter-ui/inter.css";
import "../styles/globals.css";
import React from "react";
import { AnimatePresence } from "framer-motion";
import { DefaultSeo } from "next-seo";
import { Analytics } from "@vercel/analytics/react";

const brandColourTheme = Themes.createFromLight({
  type: "base",
  palette: {
    successLighter: "#eec8c3",
    successLight: "#f4b6ae",
    success: "#f09488",
    successDark: "#bf695e",
  },
});

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://veloi.me${router.route}`;

  return (
    <GeistProvider themeType="base" themes={[brandColourTheme]}>
      <Analytics />
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_US",
          url: "https://veloi.me",
          siteName: "Veloi Portfolio",
        }}
        themeColor="#f1a59b"
        twitter={{
          handle: "@veloi_",
          site: "@veloi_",
          cardType: "summary_large_image",
        }}
      />

      <CssBaseline />
      <AnimatePresence
        mode="wait"
        initial={false}
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Component key={url} canonical={url} {...pageProps} />
      </AnimatePresence>
    </GeistProvider>
  );
};

export default App;

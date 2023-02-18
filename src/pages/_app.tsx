import { GeistProvider, CssBaseline, Grid, Page, Tabs } from "@geist-ui/core";
import { AppProps } from "next/app";
import "inter-ui/inter.css";
import "../styles/globals.css";
import React from "react";

import "react-alice-carousel/lib/alice-carousel.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <GeistProvider>
      <CssBaseline />
      <Component {...pageProps} />
    </GeistProvider>
  );
};

export default App;

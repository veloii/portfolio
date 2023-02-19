import { GeistProvider, CssBaseline, Grid, Page, Tabs } from "@geist-ui/core";
import { AppProps } from "next/app";
import "inter-ui/inter.css";
import "../styles/globals.css";
import React from "react";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const App = ({ Component, pageProps, router }: AppProps) => {
  const url = `https://veloi.me${router.route}`;

  return (
    <GeistProvider>
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

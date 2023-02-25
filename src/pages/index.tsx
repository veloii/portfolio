import { useTheme, Page } from "@geist-ui/core";
import { NextPage } from "next";
import React from "react";
import { SelectionCards } from "@/components/SelectionCards";
import { IntroText } from "@/components/IntroText";
import { Header } from "@/components/Header";
import Layout from "@/components/Layout";
import { NextSeo } from "next-seo";

export type SelectionCard = "mobile" | "dashboard" | "tools";

const HomePage: NextPage = () => {
  const theme = useTheme();

  return (
    <Layout>
      <NextSeo
        title="Veloi Portfolio"
        description="Hi, I am Veloi. I'm a software developer experienced in React + UIs."
      />
      <Page className="page-responsive">
        <Page.Header pt={theme.layout.gap}>
          <Header />
        </Page.Header>
        <Page.Content>
          <div id="intro">
            <IntroText />
            <SelectionCards />
          </div>
        </Page.Content>
      </Page>
    </Layout>
  );
};

export default HomePage;

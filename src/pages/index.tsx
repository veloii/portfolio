import {
  Grid,
  Page,
  Tabs,
  useTheme,
  Text,
  useMediaQuery,
} from "@geist-ui/core";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue } from "framer-motion";
import { css } from "@emotion/react";
import Link from "next/link";
import { SelectionCards } from "@/components/SelectionCards";
import { IntroText } from "@/components/IntroText";
import { Header } from "@/components/Header";
import X from "@geist-ui/react-icons/x";

export type SelectionCard = "mobile" | "dashboard" | "tools";

const HomePage: NextPage = () => {
  const theme = useTheme();

  return (
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
      <Page.Footer></Page.Footer>
    </Page>
  );
};

export default HomePage;

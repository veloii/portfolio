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
import { Mobile } from "@/components/selection/Mobile";
import X from "@geist-ui/react-icons/x";

export type SelectionCard = "mobile" | "dashboard" | "tools";

const HomePage: NextPage = () => {
  const theme = useTheme();
  const [selection, setSelection] = useState<undefined | SelectionCard>();
  const [top, setTop] = useState("100%");
  const [bg, setBg] = useState(
    "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)"
  );
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    if (selection) {
      setTop("0%");
      setBg(
        "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 0%)"
      );
      setTimeout(() => setOpacity(1), 200);
    } else {
      setOpacity(0);
      setTimeout(() => {
        setBg(
          "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)"
        );
        setTimeout(() => {
          setTop("100%");
        }, 100);
      }, 500);
    }
  }, [selection]);

  return (
    <Page className="page-responsive">
      <Page.Header pt={theme.layout.gap}>
        <Header />
      </Page.Header>
      <Page.Content>
        <div id="selection-preview">
          <motion.div
            style={{
              position: "fixed",
              zIndex: 100,
              height: "100vh",
              left: 0,
              width: "100vw",
            }}
            initial={{
              background:
                "linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%)",
              top: "100%",
            }}
            animate={{
              background: bg,
              top,
            }}
            transition={{
              duration: 0.25,
            }}
          >
            <motion.div animate={{ opacity }} transition={{ duration: 0.5 }}>
              <AnimatePresence>
                {selection && (
                  <motion.div
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Grid.Container
                      style={{ position: "absolute", padding: 24, zIndex: 100 }}
                      justify="flex-end"
                    >
                      <Grid>
                        <a onClick={() => setSelection(undefined)}>
                          <X size={48} color={theme.palette.accents_3} />
                        </a>
                      </Grid>
                    </Grid.Container>
                    {selection === "mobile" && <Mobile />}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        </div>
        <div id="intro">
          <IntroText />
          <SelectionCards setSelection={setSelection} />
        </div>
      </Page.Content>
      <Page.Footer>
        <h2>Footer</h2>
      </Page.Footer>
    </Page>
  );
};

export default HomePage;

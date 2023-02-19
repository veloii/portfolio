import { SelectionCard } from "@/pages";
import { css } from "@emotion/react";
import { useTheme, Grid, Text } from "@geist-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import mvpApp from "@/images/mvp-app.png";
import unifiedBookmarks from "@/images/unified-bookmarks.png";
import randomRobloxGame from "@/images/random-roblox-game.png";
import Tilt from "react-parallax-tilt";
import Link from "next/link";

export const SelectionCards = () => {
  const theme = useTheme();
  const [mvpAppLoading, setMvpAppLoading] = useState(true);
  const [randomRobloxGameLoading, setRandomRobloxGameLoading] = useState(true);
  const [unifiedBookmarksLoading, setUnifiedBookmarksLoading] = useState(true);

  const [unifiedBookmarksHover, setUnifiedBookmarksHover] = useState(false);
  const [randomRobloxGameHover, setRandomRobloxGameHover] = useState(false);
  const [mvpAppHover, setMvpAppHover] = useState(false);

  return (
    <Grid.Container style={{ gap: 32, maxWidth: 1530 }}>
      <Grid
        css={css`
          flex-grow: 1;
          width: 100%;
          @media (min-width: ${theme.breakpoints.md.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="0px"
        >
          <motion.h5
            initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
            animate={{
              opacity: mvpAppHover ? 1 : 0,
              translateY: mvpAppHover ? 0 : 5,
              translateZ: 20,
            }}
            style={{
              fontStyle: "italic",
              position: "absolute",
              width: "100%",
              left: 12.5 + 36,
              bottom: 50,
              color: "white",
              pointerEvents: "none",
            }}
          >
            click to inspect
          </motion.h5>
          <Text
            h3
            style={{
              transform: "translateZ(30px)",
              position: "absolute",
              width: "100%",
              pointerEvents: "none",
              color: "white",
              zIndex: 20,
              left: 15 + 36,
              bottom: 18,
            }}
          >
            My Virtual Pet App
          </Text>
          <Link href="/mvp-app">
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity:
                  unifiedBookmarksHover || randomRobloxGameHover ? 0.5 : 1,
              }}
              onHoverStart={() => setMvpAppHover(true)}
              onHoverEnd={() => setMvpAppHover(false)}
              style={{
                position: "relative",
                width: "100%",
                height: 350,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(100, 120, 255, 1) 90%)",
                  position: "absolute",
                  width: "100%",
                  paddingBottom: 18,
                  paddingTop: 64,
                  height: 200,
                  color: "white",
                  paddingLeft: 36,
                  left: 0,
                  zIndex: 2,
                  bottom: -12,
                }}
              ></div>
              <Image
                priority
                className={mvpAppLoading ? "unblur" : ""}
                onLoadingComplete={() => setMvpAppLoading(true)}
                src={mvpApp}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </Link>
        </Tilt>
      </Grid>
      <Grid
        css={css`
          flex-grow: 4;
          width: 100%;
          @media (min-width: ${theme.breakpoints.md.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="0px"
        >
          <motion.h5
            initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
            animate={{
              opacity: unifiedBookmarksHover ? 1 : 0,
              translateY: unifiedBookmarksHover ? 0 : 5,
              translateZ: 20,
            }}
            style={{
              fontStyle: "italic",
              position: "absolute",
              width: "100%",
              left: 12.5 + 36,
              bottom: 50,
              color: "white",
              pointerEvents: "none",
            }}
          >
            click to inspect
          </motion.h5>
          <Text
            h3
            style={{
              transform: "translateZ(30px)",
              position: "absolute",
              width: "100%",
              pointerEvents: "none",
              color: "white",
              zIndex: 20,
              left: 15 + 36,
              bottom: 18,
            }}
          >
            Unified Bookmarks
          </Text>
          <Link href="/mobile-apps">
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity: randomRobloxGameHover || mvpAppHover ? 0.5 : 1,
              }}
              onHoverStart={() => setUnifiedBookmarksHover(true)}
              onHoverEnd={() => setUnifiedBookmarksHover(false)}
              style={{
                position: "relative",
                width: "100%",
                height: 350,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 255, 1) 90%)",
                  position: "absolute",
                  width: "100%",
                  paddingBottom: 18,
                  paddingTop: 64,
                  height: 200,
                  color: "white",
                  paddingLeft: 36,
                  left: 0,
                  zIndex: 2,
                  bottom: -12,
                }}
              ></div>
              <Image
                priority
                className={unifiedBookmarksLoading ? "unblur" : ""}
                onLoadingComplete={() => setUnifiedBookmarksLoading(true)}
                src={unifiedBookmarks}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </Link>
        </Tilt>
      </Grid>
      <Grid
        css={css`
          flex-grow: 1;
          width: 100%;
          @media (min-width: ${theme.breakpoints.md.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          tiltMaxAngleX={5}
          tiltMaxAngleY={5}
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
          glareEnable={true}
          glareMaxOpacity={0.8}
          glareColor="#ffffff"
          glarePosition="bottom"
          glareBorderRadius="0px"
        >
          <motion.h5
            initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
            animate={{
              opacity: randomRobloxGameHover ? 1 : 0,
              translateY: randomRobloxGameHover ? 0 : 5,
              translateZ: 20,
            }}
            style={{
              fontStyle: "italic",
              position: "absolute",
              width: "100%",
              left: 12.5 + 36,
              bottom: 50,
              color: "white",
              pointerEvents: "none",
            }}
          >
            click to inspect
          </motion.h5>
          <Text
            h3
            style={{
              transform: "translateZ(30px)",
              position: "absolute",
              width: "100%",
              pointerEvents: "none",
              color: "white",
              zIndex: 20,
              left: 15 + 36,
              bottom: 18,
            }}
          >
            Random Roblox Game
          </Text>
          <Link href="/mobile-apps">
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity: unifiedBookmarksHover || mvpAppHover ? 0.5 : 1,
              }}
              onHoverStart={() => setRandomRobloxGameHover(true)}
              onHoverEnd={() => setRandomRobloxGameHover(false)}
              style={{
                position: "relative",
                width: "100%",
                height: 350,
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(200, 0, 105, 1) 90%)",
                  position: "absolute",
                  width: "100%",
                  paddingBottom: 18,
                  paddingTop: 64,
                  height: 200,
                  color: "white",
                  paddingLeft: 36,
                  left: 0,
                  zIndex: 2,
                  bottom: -12,
                }}
              ></div>
              <Image
                priority
                className={randomRobloxGameLoading ? "unblur" : ""}
                onLoadingComplete={() => setRandomRobloxGameLoading(true)}
                src={randomRobloxGame}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </Link>
        </Tilt>
      </Grid>
      <style jsx global>{`
        .unblur {
          animation: unblur 0.5s ease-in-out;
        }

        @keyframes unblur {
          from {
            filter: blur(10px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </Grid.Container>
  );
};

import { SelectionCard } from "@/pages";
import { css } from "@emotion/react";
import { useTheme, Grid, Text } from "@geist-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";
import phone from "@/images/phone.png";
import desktop from "@/images/desktop.png";
import roblox from "@/images/roblox.png";
import Tilt from "react-parallax-tilt";

export const SelectionCards = ({
  setSelection,
}: {
  setSelection: (selection: SelectionCard) => void;
}) => {
  const theme = useTheme();
  const [mobileLoading, setMobileLoading] = useState(true);
  const [toolLoading, setToolLoading] = useState(true);
  const [desktopLoading, setDesktopLoading] = useState(true);

  const [desktopHover, setDesktopHover] = useState(false);
  const [toolHover, setToolHover] = useState(false);
  const [mobileHover, setMobileHover] = useState(false);

  return (
    <Grid.Container style={{ gap: 32, maxWidth: 1530 }}>
      <Grid
        css={css`
          flex-grow: 1;
          width: 100%;
          @media (min-width: ${theme.breakpoints.lg.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
        >
          <motion.h5
            initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
            animate={{
              opacity: mobileHover ? 1 : 0,
              translateY: mobileHover ? 0 : 5,
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
            design files are provided by you
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
            Mobile Apps
          </Text>
          <a onClick={() => setSelection("mobile")}>
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity: desktopHover || toolHover ? 0.5 : 1,
              }}
              onHoverStart={() => setMobileHover(true)}
              onHoverEnd={() => setMobileHover(false)}
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
                className={mobileLoading ? "unblur" : ""}
                onLoadingComplete={() => setToolLoading(true)}
                src={phone}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </a>
        </Tilt>
      </Grid>
      <Grid
        css={css`
          flex-grow: 4;
          width: 100%;
          @media (min-width: ${theme.breakpoints.lg.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
        >
          <motion.h5
            initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
            animate={{
              opacity: desktopHover ? 1 : 0,
              translateY: desktopHover ? 0 : 5,
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
            design files are provided by you
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
            Fully Functional Dashboards
          </Text>
          <a onClick={() => setSelection("dashboard")}>
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity: toolHover || mobileHover ? 0.5 : 1,
              }}
              onHoverStart={() => setDesktopHover(true)}
              onHoverEnd={() => setDesktopHover(false)}
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
                className={desktopLoading ? "unblur" : ""}
                onLoadingComplete={() => setDesktopLoading(true)}
                src={desktop}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </a>
        </Tilt>
      </Grid>
      <Grid
        css={css`
          flex-grow: 1;
          width: 100%;
          @media (min-width: ${theme.breakpoints.lg.min}) {
            width: 350px;
          }
        `}
      >
        <Tilt
          style={{ transformStyle: "preserve-3d" }}
          perspective={500}
          tiltReverse
          transitionSpeed={2000}
        >
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
            Simple Tools
          </Text>
          <a onClick={() => setSelection("tools")}>
            <motion.div
              transition={{ duration: 0.5, type: "spring" }}
              animate={{
                opacity: desktopHover || mobileHover ? 0.5 : 1,
              }}
              onHoverStart={() => setToolHover(true)}
              onHoverEnd={() => setToolHover(false)}
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
                className={toolLoading ? "unblur" : ""}
                onLoadingComplete={() => setToolLoading(true)}
                src={roblox}
                placeholder="blur"
                style={{ objectFit: "cover" }}
                draggable={false}
                alt={""}
                fill
              />
            </motion.div>
          </a>
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

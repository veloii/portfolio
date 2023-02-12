import { SelectionCard } from "@/pages";
import { css } from "@emotion/react";
import { useTheme, Grid, Text } from "@geist-ui/core";
import { motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

export const SelectionCards = ({
  setSelection,
}: {
  setSelection: (selection: SelectionCard) => void;
}) => {
  const theme = useTheme();
  const [desktopHover, setDesktopHover] = useState(false);
  const [toolHover, setToolHover] = useState(false);
  const [mobileHover, setMobileHover] = useState(false);

  return (
    <Grid.Container style={{ gap: 16, maxWidth: 1530 }}>
      <Grid
        css={css`
          flex-grow: 1;
          width: 100%;
          @media (min-width: ${theme.breakpoints.lg.min}) {
            width: 350px;
          }
        `}
      >
        <a onClick={() => setSelection("mobile")}>
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{ duration: 0.5, type: "spring" }}
            animate={{
              opacity: toolHover || desktopHover ? 0.5 : 1,
              scale: toolHover || desktopHover ? 0.95 : 1,
            }}
            onHoverStart={() => setMobileHover(true)}
            onHoverEnd={() => setMobileHover(false)}
            style={{
              position: "relative",
              width: "100%",
              height: 350,
            }}
          >
            <Text
              h3
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(100, 120, 255, 1) 90%)",
                position: "absolute",
                width: "100%",
                paddingBottom: 18,
                paddingTop: 64,
                color: "white",
                paddingLeft: 36,
                left: 0,
                zIndex: 2,
                bottom: -12,
              }}
            >
              Mobile Apps
            </Text>
            <motion.h5
              initial={{ opacity: 0, translateY: 5 }}
              animate={{
                opacity: mobileHover ? 1 : 0,
                translateY: mobileHover ? 0 : 5,
              }}
              style={{
                fontStyle: "italic",
                position: "absolute",
                width: "100%",
                paddingBottom: 18,
                paddingTop: 64,
                color: "white",
                paddingLeft: 36,
                left: 0,
                zIndex: 2,
                bottom: 20,
              }}
            >
              design files are provided by you
            </motion.h5>

            <Image
              src="/phone.png"
              style={{ objectFit: "cover" }}
              draggable={false}
              alt={""}
              fill
            />
          </motion.div>
        </a>
      </Grid>
      <Grid
        css={css`
          flex-grow: 3;
          width: 100%;
          @media (min-width: ${theme.breakpoints.lg.min}) {
            width: 350px;
          }
        `}
      >
        <a onClick={() => setSelection("dashboard")}>
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{ duration: 0.5, type: "spring" }}
            animate={{
              opacity: toolHover || mobileHover ? 0.5 : 1,
              scale: toolHover || mobileHover ? 0.95 : 1,
            }}
            onHoverStart={() => setDesktopHover(true)}
            onHoverEnd={() => setDesktopHover(false)}
            style={{
              position: "relative",
              width: "100%",
              height: 350,
            }}
          >
            <Text
              h3
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(255, 0, 255, 1) 90%)",
                position: "absolute",
                width: "100%",
                paddingBottom: 18,
                paddingTop: 64,
                color: "white",
                paddingLeft: 36,
                left: 0,
                zIndex: 2,
                bottom: -12,
              }}
            >
              Fully Functional Dashboards
            </Text>
            <motion.h5
              initial={{ opacity: 0, translateY: 5 }}
              animate={{
                opacity: desktopHover ? 1 : 0,
                translateY: desktopHover ? 0 : 5,
              }}
              style={{
                fontStyle: "italic",
                position: "absolute",
                width: "100%",
                paddingBottom: 18,
                paddingTop: 64,
                color: "white",
                paddingLeft: 36,
                left: 0,
                zIndex: 2,
                bottom: 20,
              }}
            >
              design files are provided by you
            </motion.h5>
            <Image
              src="/desktop.png"
              style={{ objectFit: "cover" }}
              draggable={false}
              alt={""}
              fill
            />
          </motion.div>
        </a>
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
        <a onClick={() => setSelection("tools")}>
          <motion.div
            whileHover={{
              scale: 1.025,
            }}
            transition={{ duration: 0.5, type: "spring" }}
            animate={{
              opacity: desktopHover || mobileHover ? 0.5 : 1,
              scale: desktopHover || mobileHover ? 0.95 : 1,
            }}
            onHoverStart={() => setToolHover(true)}
            onHoverEnd={() => setToolHover(false)}
            style={{
              position: "relative",
              width: "100%",
              height: 350,
            }}
          >
            <Text
              h3
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(200, 0, 105, 1) 90%)",
                position: "absolute",
                width: "100%",
                paddingBottom: 18,
                paddingTop: 64,
                color: "white",
                paddingLeft: 36,
                left: 0,
                zIndex: 2,
                bottom: -12,
              }}
            >
              Simple Tools
            </Text>

            <Image
              style={{ objectFit: "cover" }}
              src="/roblox.png"
              draggable={false}
              alt={""}
              fill
            />
          </motion.div>
        </a>
      </Grid>
    </Grid.Container>
  );
};

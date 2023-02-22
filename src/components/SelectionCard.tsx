import { css } from "@emotion/react";
import { Grid, useTheme, Text } from "@geist-ui/core";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import Image, { StaticImageData } from "next/image";

export const SelectionCard = ({
  hover,
  setHover,
  title,
  grad,
  source,
  minWidth,
  link,
  flexGrow = 1,
  hoverIndexState,
}: {
  title: string;
  hover: boolean;
  minWidth?: string | undefined;
  flexGrow?: string | number;
  link: string;
  source: StaticImageData;
  grad: string;
  hoverIndexState: number | null;
  setHover: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  const [entered, setEntered] = useState(false);

  return (
    <Grid
      css={css`
        flex-grow: ${flexGrow};
        width: 100%;
        z-index: ${entered ? "1000" : "0"};
        @media (min-width: ${theme.breakpoints.md.min}) {
          width: ${minWidth ?? "350px"};
          flex-grow: 0;
          min-width: ${minWidth ?? "auto"};
        }
      `}
    >
      <Tilt
        scale={1.12}
        onEnter={() => setEntered(true)}
        onLeave={() => setEntered(false)}
        tiltMaxAngleX={2}
        tiltMaxAngleY={2}
        style={{ transformStyle: "preserve-3d" }}
        perspective={500}
        tiltReverse
        transitionSpeed={2000}
      >
        <motion.h5
          initial={{ opacity: 0, translateY: 5, translateZ: 25 }}
          animate={{
            opacity: hover ? 1 : 0,
            translateY: hover ? 0 : 5,
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
          {title}
        </Text>
        <Link href={link}>
          <motion.div
            transition={{ duration: 0.5, type: "spring" }}
            animate={{
              opacity: hoverIndexState && !hover ? 0.5 : 1,
            }}
            onHoverStart={() => setHover(true)}
            onHoverEnd={() => setHover(false)}
            style={{
              position: "relative",
              width: "100%",
              height: 350,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, ${grad})`,
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
              className={loading ? "unblur" : ""}
              onLoadingComplete={() => setLoading(true)}
              src={source}
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
  );
};

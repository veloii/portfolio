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
  link,
  type,
  hoverIndexState,
}: {
  title: string;
  hover: boolean;
  link: string;
  type: "wide" | "square";
  source: StaticImageData;
  grad: string;
  hoverIndexState: number | null;
  setHover: (value: boolean) => void;
}) => {
  const theme = useTheme();
  const [entered, setEntered] = useState(false);

  return (
    <Grid
      css={css`
        flex-grow: ${type === "square" ? 1 : 2};
        width: 100%;
        position: relative;
        z-index: ${entered ? "1000" : "0"};
        @media (min-width: ${theme.breakpoints.md.min}) {
          width: ${type === "square" ? "350px" : "700px"};
          flex-grow: 0;
          min-width: ${type === "square" ? "auto" : "700px"};
        }
        height: 100%;
        aspect-ratio: ${type === "square" ? "1/1" : "2/1"};
      `}
    >
      <Link aria-label={title} href={link}>
        <motion.div
          transition={{ duration: 0.2, ease: "easeInOut" }}
          animate={{
            opacity: hoverIndexState && !hover ? 0.5 : 1,
            filter: hoverIndexState && !hover ? "blur(1px)" : "blur(0px)",
          }}
          style={{ height: "100%" }}
          onHoverStart={() => setHover(true)}
          onHoverEnd={() => setHover(false)}
        >
          <Tilt
            scale={1.12}
            style={{ height: "100%" }}
            onEnter={() => setEntered(true)}
            onLeave={() => setEntered(false)}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            perspective={500}
            tiltReverse
            transitionSpeed={2000}
          >
            <div
              style={{
                background: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, ${grad})`,
                width: "100%",
                position: "absolute",
                height: "100%",
                color: "white",
                left: 0,
                zIndex: 2,
                bottom: 0,
              }}
            ></div>

            <motion.h2
              initial={{ translateY: 0 }}
              animate={{
                translateY: hover ? -15 : 0,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
              style={{
                fontSize: "1.6rem",
                fontWeight: 600,
                position: "absolute",
                pointerEvents: "none",
                color: "rgba(255,255,255, 1)",
                zIndex: 10,
                left: 30,
                bottom: 20,
                marginBlock: 0,
              }}
            >
              {title}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, translateY: 5 }}
              animate={{
                opacity: hover ? 1 : 0,
                translateY: hover ? 0 : 5,
              }}
              transition={{
                ease: "easeOut",
                duration: 0.2,
              }}
              style={{
                fontStyle: "italic",
                position: "absolute",
                left: 30,
                zIndex: 5,
                bottom: 20,
                marginBlock: 0,
                color: "white",
                pointerEvents: "none",
              }}
            >
              click to inspect
            </motion.p>
            <Image
              priority
              src={source}
              placeholder="blur"
              style={{ objectFit: "cover" }}
              draggable={false}
              alt={title}
              fill
            />
          </Tilt>
        </motion.div>
      </Link>
    </Grid>
  );
};

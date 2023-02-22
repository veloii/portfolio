import { css } from "@emotion/react";
import { useTheme } from "@geist-ui/core";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import logo from "@/images/black.png";
import wave from "@/images/wave.png";

export const IntroText = () => {
  const theme = useTheme();

  return (
    <>
      <h1
        css={css`
          letter-spacing: 0.025rem;
          max-width: 700px;
          @media (max-width: ${theme.breakpoints.xs.max}) {
            display: none;
          }
        `}
      >
        <Image
          priority
          width={500 / 11}
          height={500 / 11}
          alt="Wave"
          style={{ marginRight: 1, marginBottom: -3 }}
          src={wave}
          placeholder="blur"
        />
        . I am{" "}
        <Image
          priority
          width={516 / 12}
          height={463 / 12}
          alt="Veloi"
          style={{ marginLeft: 12, marginRight: 12 }}
          src={logo}
          placeholder="blur"
        />
        . I&apos;m a software developer ⟶{" "}
        <span
          style={{
            border: "solid black",
            borderWidth: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 15,
            marginRight: 10,
            background: "black",
            color: "white",
          }}
        >
          React 🡘 UIs
        </span>
        .
      </h1>
      <h1
        css={css`
          font-size: 30px;
          display: none;
          @media (max-width: ${theme.breakpoints.xs.max}) {
            display: block;
          }
        `}
      >
        Hi, I am Veloi. A software developer.
      </h1>
      <Link href="">
        <p
          className="hover-arrow-text"
          css={css`
            font-size: 1.1rem;
            @media (min-width: ${theme.breakpoints.sm.min}) {
              font-size: 1.25rem;
            }
          `}
          style={{ color: theme.palette.link }}
        >
          Interested in a website? Get in touch{" "}
          <svg
            className="hover-arrow"
            width="12"
            height="12"
            viewBox="0 0 10 10"
            aria-hidden="true"
          >
            <g fillRule="evenodd">
              <path className="hover-arrow-line" d="M0 5h7"></path>
              <path className="hover-arrow-tip" d="M1 1l4 4-4 4"></path>
            </g>
          </svg>
        </p>
      </Link>
    </>
  );
};

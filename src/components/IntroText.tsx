import { css } from "@emotion/react";
import { useTheme } from "@geist-ui/core";
import Link from "next/link";
import React from "react";

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
        Hi, I am Veloi. I&apos;m a software developer experienced in React +
        UIs.
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

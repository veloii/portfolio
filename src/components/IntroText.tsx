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
          @media (max-width: ${theme.breakpoints.sm.max}) {
            font-size: 30px;
            max-width: none;
          }
        `}
      >
        Hi, I am Veloi. I&apos;m a web developer experienced in React + UIs.
      </h1>
      <Link href="">
        <p
          className="hover-arrow-text"
          style={{ color: theme.palette.accents_4, fontSize: 20 }}
        >
          Interested in a website? Contact me{" "}
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

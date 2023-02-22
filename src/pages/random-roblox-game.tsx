import { Button, Page, Spacer, Text, useTheme } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import { Carousel } from "../components/Carousel";
import Link from "next/link";
import Layout from "@/components/Layout";
import randomRobloxGame1 from "@/images/random-roblox-game/rrg1.png";
import randomRobloxGame2 from "@/images/random-roblox-game/rrg2.png";
import { ArrowRight } from "@geist-ui/react-icons";
import { css } from "@emotion/react";
import { NextSeo } from "next-seo";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

const items = [
  <Image
    key="random-roblox-game-1"
    width={1132 / 2}
    onDragStart={handleDragStart}
    height={779 / 2}
    src={randomRobloxGame1}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="random-roblox-game-2"
    width={1132 / 2}
    onDragStart={handleDragStart}
    height={779 / 2}
    src={randomRobloxGame2}
    alt={""}
    placeholder="blur"
    priority
  />,
];

const RandomRobloxGame = () => {
  const theme = useTheme();

  return (
    <Layout>
      <NextSeo
        title="Random Roblox Game - Overview"
        description="Generate a random roblox game."
      />
      <Page style={{ maxWidth: 1000 }} className="page-responsive">
        <Page.Header height={0.25}>
          <Link href="/">
            <p
              className="hover-arrow-text"
              style={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Home{" "}
              <svg
                className="hover-arrow"
                style={{ transform: "rotate(180deg)" }}
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
        </Page.Header>
        <Page.Content>
          <h1
            css={css`
              font-size: 2.25rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 3rem;
              }
            `}
          >
            Random Roblox Game
          </h1>
          <Text h4 style={{ fontWeight: 500 }}>
            Generate a random roblox game.
          </Text>
          <Text>- Able to filter only frontpage games</Text>
          <Text>- App in early beta</Text>
          <Text>
            - Created with{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noreferrer">
              Next.js
            </Link>
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <h2
            css={css`
              font-size: 2rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 2.25rem;
              }
            `}
          >
            Overview
          </h2>
          <Text style={{ maxWidth: 500 }} p>
            Random roblox game is a simple website that gives you a random
            roblox game from the front page or randomly.
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <h2
            css={css`
              font-size: 2rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 2.25rem;
              }
            `}
          >
            Technical Details
          </h2>
          <Text style={{ maxWidth: 900 }} p>
            The random roblox game website is built with{" "}
            <Link
              href="https://reactnative.dev"
              target="_blank"
              rel="noreferrer"
            >
              Next.js
            </Link>
            , and I am using the built-in API routes from version 12.
          </Text>
          <Text style={{ maxWidth: 900 }} p>
            If you toggle the front page only games on, when it generates it, it
            gets the games on the front page through each category. Combines
            them all together and picks a random one. If you do not check this
            box, it generates random numbers and for each number tries to query
            roblox to see if these games exist. If they do then it checks if it
            is joinable and not private. Then it picks the first one and sends
            it back to the user.
          </Text>
          <Text style={{ maxWidth: 900 }} p>
            I am using{" "}
            <Link href="https://vercel.com" target="_blank" rel="noreferrer">
              Vercel
            </Link>{" "}
            to host the site.
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Text style={{ maxWidth: 700 }} h3>
            Want your own website?
          </Text>
          <Button iconRight={<ArrowRight size={20} />} type="success" shadow>
            <p style={{ paddingRight: 20 }}>Get in touch</p>
          </Button>
          <Spacer
            h={0.01}
            marginTop={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Spacer /> <Spacer />
          <h2
            css={css`
              font-size: 2rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 2.25rem;
              }
            `}
          >
            Screenshots
          </h2>
          <Spacer />
          <Carousel gap={32} items={items} />
          <Spacer />
        </Page.Content>
      </Page>
    </Layout>
  );
};

export default RandomRobloxGame;

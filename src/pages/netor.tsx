import {
  Button,
  Code,
  Grid,
  Page,
  Spacer,
  Text,
  useTheme,
} from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import { Carousel } from "../components/Carousel";
import Link from "next/link";
import Layout from "@/components/Layout";
import netor1 from "@/images/netor/netor-punishments.png";
import netor2 from "@/images/netor/netor-ums.png";
import netor3 from "@/images/netor/netor-users.png";
import MvpSvg from "@/images/mvp.svg";
import { ArrowRight } from "@geist-ui/react-icons";
import { css } from "@emotion/react";
import logo from "@/images/netor/logo.png";
import { NextSeo } from "next-seo";
import { CommissionLink } from "@/components/CommissionLink";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

const items = [
  <Image
    key="netor1"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1329 / 3}
    src={netor1}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="netor2"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1329 / 3}
    src={netor2}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="netor3"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1329 / 3}
    src={netor3}
    alt={""}
    placeholder="blur"
    priority
  />,
];

const Netor = () => {
  const theme = useTheme();

  return (
    <Layout>
      <NextSeo
        title="Netor Discord Bot - Overview"
        description="A full moderation logging bot for your server."
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
          <Image
            height={779 / 10}
            width={1080 / 10}
            style={{ marginBottom: 20 }}
            src={logo}
            alt={"Netor Logo"}
            placeholder="blur"
          />
          <h1
            css={css`
              font-size: 2.25rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 3rem;
              }
            `}
          >
            Netor Discord Bot
          </h1>
          <Text h4 style={{ fontWeight: 500 }}>
            A full moderation logging bot for your server.
          </Text>
          <Text>
            - <span style={{ fontWeight: "bold" }}>Very advanced</span> logging
          </Text>
          <Text>
            - Built with{" "}
            <Link href="https://python.org" target="_blank" rel="noreferrer">
              Python
            </Link>
            ,{" "}
            <Link
              href="https://elixir-lang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Elixir
            </Link>
            ,{" "}
            <Link
              href="https://www.typescriptlang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Typescript
            </Link>
          </Text>
          <Text>- Discontinued due to growing built-in features</Text>
          <Text>
            - Full Dashboard with{" "}
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              ✨ magic links to dashboard ✨
            </span>
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
          <Text style={{ maxWidth: 900 }} p>
            A {'"'}Discord Bot{'"'} refers to a user-like member of your server
            that you can use to automate various actions. It{"'"}s denoted by a{" "}
            {'"'}Bot{'"'} tag next to its name. Bots use Discord{"'"}s public{" "}
            {'"'}API{'"'} to do actions like send messages, modify roles, etc.
          </Text>
          <Text style={{ maxWidth: 900 }} p>
            Netor was a fully featured {'"'}Discord Bot{'"'} to make moderation
            simple. It featured full punishment histories, invite histories,
            embed generating and a insanely powerful logging system. It would
            keep track of every message edited, deleted, role updated.
            Everything you could think of. It stores that in a database which is
            accessable by a very powerful dashboard. You could filter any
            property through the date and view in depth.
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
            What made it stand-out?
          </h2>
          <Text style={{ maxWidth: 900 }} p>
            At the time Discord had recently moved to the new slash command
            style and built-in many new moderation features. For example, muting
            people and auto moderation. The issue with most bots implimented
            these features years ago. In my opinion, this made it even more
            difficult to the average user trying to setup their own Discord
            server. Having 2 commands to mute people with different
            implimentations, and there was no global place for these things to
            be logged. If you muted someone through the Discord UI or through a
            3rd party bot, they would not sync together. Netor fixed this.
            Instead of implimenting it{"'"}s own moderation features, it simply
            synchronized with the in-built ones. Right-clicking and muting a
            user would still trigger an event over on the Netor Dashboard
            showing how long there mute was and the details.
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
            Netor was originally built with{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>{" "}
            and{" "}
            <Link href="https://python.org" target="_blank" rel="noreferrer">
              Python
            </Link>
            , using{" "}
            <Link
              href="https://flask.palletsprojects.com/en/2.2.x/"
              target="_blank"
              rel="noreferrer"
            >
              Flask
            </Link>{" "}
            and{" "}
            <Link
              href="https://discordpy.readthedocs.io/en/stable/"
              target="_blank"
              rel="noreferrer"
            >
              Discord.py
            </Link>
            . The Discord bot itself was run on{" "}
            <Link href="https://python.org" target="_blank" rel="noreferrer">
              Python
            </Link>{" "}
            and when the user would run the <Code>/config</Code> command it
            would generate a UUID and assign it to that user in that server in
            the database. Then it would privately message the user a link which
            contained the UUID which would point to the{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>{" "}
            server. The{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>{" "}
            server would check this UUID in the database and take the Discord
            username and id to restrict what they can do on the dashboard based
            on their roles. This bypassed the nightmare of logging into{" "}
            <Link
              href="https://discord.com/developers/docs/topics/oauth2"
              target="_blank"
              rel="noreferrer"
            >
              OAuth2
            </Link>{" "}
            if you have forgotten your credentials. I used{" "}
            <Link
              href="https://flask.palletsprojects.com/en/2.2.x/"
              target="_blank"
              rel="noreferrer"
            >
              Flask
            </Link>{" "}
            for data fetching from the{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>{" "}
            server to the{" "}
            <Link
              href="https://discord.com/developers/docs/intro"
              target="_blank"
              rel="noreferrer"
            >
              Discord API
            </Link>
            .
          </Text>
          <Text style={{ maxWidth: 900 }} p>
            Later on, I did not like the way that{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>{" "}
            handled the API as it did not offer much flexibily with having to
            assign each database action to a single route. I kept the use of{" "}
            <Link
              href="https://discordpy.readthedocs.io/en/stable/"
              target="_blank"
              rel="noreferrer"
            >
              Discord.py
            </Link>{" "}
            with{" "}
            <Link href="https://python.org" target="_blank" rel="noreferrer">
              Python
            </Link>
            , but instead of{" "}
            <Link
              href="https://flask.palletsprojects.com/en/2.2.x/"
              target="_blank"
              rel="noreferrer"
            >
              Flask
            </Link>{" "}
            for data fetching from Discord, I used{" "}
            <Link
              href="https://elixir-lang.org/"
              target="_blank"
              rel="noreferrer"
            >
              Elixir
            </Link>{" "}
            with{" "}
            <Link
              href="https://hexdocs.pm/ecto/Ecto.html"
              target="_blank"
              rel="noreferrer"
            >
              Ecto
            </Link>{" "}
            and{" "}
            <Link
              href="https://www.phoenixframework.org/"
              target="_blank"
              rel="noreferrer"
            >
              Phoenix
            </Link>
            . For the front-end dashboard I switched to the popular web
            framework{" "}
            <Link href="https://nextjs.org" target="_blank" rel="noreferrer">
              Next.js
            </Link>
            . This stack worked very well, but{" "}
            <Link
              href="https://www.phoenixframework.org/"
              target="_blank"
              rel="noreferrer"
            >
              Phoenix
            </Link>{" "}
            had too much boilerplate for what I wanted.
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Text style={{ maxWidth: 700 }} h3>
            Want to hire me?
          </Text>
          <CommissionLink>
            <Button iconRight={<ArrowRight size={20} />} type="success" shadow>
              <p style={{ paddingRight: 20 }}>Get in touch</p>
            </Button>
          </CommissionLink>
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

export default Netor;

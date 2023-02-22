import { Button, Grid, Page, Spacer, Text, useTheme } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import { Carousel } from "../components/Carousel";
import Link from "next/link";
import Layout from "@/components/Layout";
import unifiedBookmarks1 from "@/images/unified-bookmarks/unified-bookmarks-light-add.webp";
import unifiedBookmarks2 from "@/images/unified-bookmarks/unified-bookmarks-light-overview.webp";
import unifiedBookmarks3 from "@/images/unified-bookmarks/unified-bookmarks-light-home.webp";
import unifiedBookmarks4 from "@/images/unified-bookmarks/unified-bookmarks-light-settings.webp";
import unifiedBookmarks5 from "@/images/unified-bookmarks/unified-bookmarks-light-mobile-overview.webp";
import unLogo from "@/images/un-logo.png";
import { ArrowRight } from "@geist-ui/react-icons";
import { css } from "@emotion/react";
import { NextSeo } from "next-seo";
import { CommissionLink } from "@/components/CommissionLink";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

const items = [
  <Image
    key="unifiedBookmarks3"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1390 / 3}
    src={unifiedBookmarks3}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="unifiedBookmarks1"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1390 / 3}
    style={{ objectFit: "contain" }}
    src={unifiedBookmarks1}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="unifiedBookmarks5"
    width={625 * 0.39099859353}
    onDragStart={handleDragStart}
    height={1185 * 0.39099859353}
    src={unifiedBookmarks5}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="unifiedBookmarks2"
    width={2560 / 3}
    style={{ objectFit: "contain" }}
    onDragStart={handleDragStart}
    height={1390 / 3}
    src={unifiedBookmarks2}
    alt={""}
    placeholder="blur"
    priority
  />,

  <Image
    key="unifiedBookmarks4"
    width={2560 / 3}
    onDragStart={handleDragStart}
    height={1390 / 3}
    src={unifiedBookmarks4}
    alt={""}
    placeholder="blur"
    priority
  />,
];

const UnfiiedBookmarks = () => {
  const theme = useTheme();

  return (
    <Layout>
      <NextSeo
        title="Unified Bookmarks - Overview"
        description="A service which provides an easy bookmarking solution for teams."
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
            src={unLogo}
            width={75}
            style={{
              backgroundColor: theme.palette.border,
              borderRadius: 10,
            }}
            height={75}
            alt={"Unified Bookmarks Logo"}
          />
          <h1
            css={css`
              font-size: 2.25rem;
              @media (min-width: ${theme.breakpoints.sm.min}) {
                font-size: 3rem;
              }
            `}
          >
            Unified Bookmarks
          </h1>
          <Text h4 style={{ fontWeight: 500 }}>
            A service which provides an easy bookmarking solution for teams.
          </Text>
          <Text>
            -{" "}
            <Link
              href="https://chrome.google.com/webstore/detail/unified-bookmarks/emjpjmbbmgcoonobpecgblohfknagmhg/"
              target="_blank"
              rel="noreferrer"
            >
              Chrome extension
            </Link>
          </Text>
          <Text>
            - Available at{" "}
            <Link
              href="https://unifiedbookmarks.com"
              target="_blank"
              rel="noreferrer"
            >
              unifiedbookmarks.com
            </Link>
          </Text>
          <Text>
            - Created with{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix with React
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
          <Text style={{ maxWidth: 900 }} p>
            Unified Bookmarks is a service to make sharing bookmarks between
            small teams easier. It works by you installing a chrome extension
            which mirrors the bookmarks of each team into a folder it creates.
            This fully syncs between Unified Bookmarks and your browser. You can
            invite people to your team to share the same bookmarks, or use it as
            a simple bookmark share between your devices.
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
            Unified Bookmarks is using{" "}
            <Link href="https://reactjs.org" target="_blank" rel="noreferrer">
              React
            </Link>
            , more specifically{" "}
            <Link href="https://remix.run" target="_blank" rel="noreferrer">
              Remix
            </Link>
            . This provides a simple way to unify the API/Backend and the client
            app. It&apos;s using a{" "}
            <Link
              href="https://www.postgresql.org/"
              target="_blank"
              rel="noreferrer"
            >
              PostgreSQL
            </Link>{" "}
            database with{" "}
            <Link href="https://prisma.io" target="_blank" rel="noreferrer">
              Prisma
            </Link>{" "}
            on top. The frontend UI is using{" "}
            <Link
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noreferrer"
            >
              TailwindCSS
            </Link>{" "}
            with{" "}
            <Link href="https://daisyui.com/" target="_blank" rel="noreferrer">
              DaisyUI
            </Link>
            . The chrome extension is simple plain Javascript, which sends get
            requests frequently to an endpoint on the server which returns the
            necessary bookmarks. It checks if each bookmark matches and if not
            updates it. If the user edits a bookmark it sends a post request to
            an endpoint on the server which simply updates the team / bookmark.
          </Text>
          <Text style={{ maxWidth: 900 }} p>
            I am using{" "}
            <Link href="https://fly.io" target="_blank" rel="noreferrer">
              Fly.io
            </Link>{" "}
            to host the{" "}
            <Link href="https://remix.run/" target="_blank" rel="noreferrer">
              Remix App
            </Link>{" "}
            and the{" "}
            <Link
              href="https://postgresql.org/"
              target="_blank"
              rel="noreferrer"
            >
              PostgreSQL
            </Link>{" "}
            database.
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

export default UnfiiedBookmarks;

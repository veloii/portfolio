import { Button, Grid, Page, Spacer, Text, useTheme } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import { Carousel } from "../components/Carousel";
import Link from "next/link";
import Layout from "@/components/Layout";
import mvpApp1 from "@/images/mvp-app/1.png";
import mvpApp2 from "@/images/mvp-app/2.png";
import mvpApp3 from "@/images/mvp-app/3.png";
import mvpApp4 from "@/images/mvp-app/4.png";
import mvpApp5 from "@/images/mvp-app/5.png";
import { ArrowRight } from "@geist-ui/react-icons";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

const items = [
  <Image
    key="mvpApp1"
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src={mvpApp1}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="mvpApp2"
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src={mvpApp2}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="mvpApp3"
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src={mvpApp3}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="mvpApp4"
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src={mvpApp4}
    alt={""}
    placeholder="blur"
    priority
  />,
  <Image
    key="mvpApp5"
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src={mvpApp5}
    alt={""}
    placeholder="blur"
    priority
  />,
];

const MobileApps = () => {
  const theme = useTheme();

  return (
    <Layout>
      <Page className="page-responsive">
        <Page.Header height={0.25}>
          <Link href="/">
            <p
              className="hover-arrow-text"
              style={{
                fontSize: 18,
                fontWeight: 500,
              }}
            >
              Go back{" "}
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
          <Text h1>My Virtual Pet App</Text>
          <Text h4 style={{ fontWeight: 500 }}>
            A tamagotchi style take care of your pet game.
          </Text>
          <Text>- Full android & iOS support</Text>
          <Text>- App in early beta</Text>
          <Text>
            - Created with{" "}
            <Link
              href="https://reactnative.dev"
              target="_blank"
              rel="noreferrer"
            >
              React Native
            </Link>
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Text h2>Overview</Text>
          <Text style={{ maxWidth: 700 }} p>
            My Virtual Pet to bring people closer together by letting them feed
            and care for virtual pets. It was originally a web app with 3d pets
            and activities such as taking your pet to the cinema with your
            friends or washing, cuddling with your pet. Later, I abandoned the
            web app and started working on a mobile app which I am yet to
            complete. The mobile app features 3d pets and 2d &apos;pixel
            pets&apos;.
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Text h2>Technical Details</Text>
          <Text style={{ maxWidth: 700 }} p>
            The My Virtual Pet app is built with{" "}
            <Link
              href="https://reactnative.dev"
              target="_blank"
              rel="noreferrer"
            >
              React Native
            </Link>{" "}
            &{" "}
            <Link href="https://expo.dev" target="_blank" rel="noreferrer">
              Expo
            </Link>{" "}
            to support iOS and Android devices. For the backend I originally
            used{" "}
            <Link href="https://prisma.io" target="_blank" rel="noreferrer">
              Prisma
            </Link>{" "}
            on a{" "}
            <Link href="https://socket.io" target="_blank" rel="noreferrer">
              Socket.IO
            </Link>{" "}
            server. However, instead of a Socket.IO server, I&apos;m using{" "}
            <Link
              href="https://apollographql.com"
              target="_blank"
              rel="noreferrer"
            >
              Apollo GraphQL
            </Link>
            . For authentication, I&apos;m using{" "}
            <Link
              href="https://discord.com/developers/docs/topics/oauth2"
              target="_blank"
              rel="noreferrer"
            >
              Discord OAuth2
            </Link>
            . This provides an easy way to implement avatars.
          </Text>
          <Text style={{ maxWidth: 700 }} p>
            I am using Vercel to host any promotional page and for the backend
            I&apos;m using the free tier of{" "}
            <Link href="https://fly.io" target="_blank" rel="noreferrer">
              Fly.io
            </Link>
            .
          </Text>
          <Spacer />
          <Spacer
            h={0.01}
            marginBottom={1}
            width={30}
            style={{ background: theme.palette.accents_2 }}
          />
          <Text style={{ maxWidth: 700 }} h3>
            Want your own app?
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
          <Text h2>Screenshots</Text>
          <Spacer />
          <Carousel gap={32} items={items} />
          <Spacer />
        </Page.Content>
      </Page>
    </Layout>
  );
};

export default MobileApps;

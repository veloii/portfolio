import { Page, Spacer, Text, useTheme } from "@geist-ui/core";
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
          <Text h2>Overview</Text>
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
          <Text h2>Screenshots</Text>
          <Spacer />
          <div>
            <Carousel gap={32} items={items} />
          </div>
        </Page.Content>
      </Page>
    </Layout>
  );
};

export default MobileApps;

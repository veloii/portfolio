/* eslint-disable react/jsx-key */
import { Grid, Page, Text } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import AliceCarousel from "react-alice-carousel";

const handleDragStart: React.DragEventHandler<HTMLImageElement> = (e) =>
  e.preventDefault();

const items = [
  <Image
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src="/mobile/1.png"
    alt={""}
  />,
  <Image
    width={404 / 1.5}
    onDragStart={handleDragStart}
    height={830 / 1.5}
    src="/mobile/1.png"
    alt={""}
  />,
];

export const Mobile = () => {
  return (
    <Page className="page-responsive">
      <Page.Content>
        <Text h1>Mobile Apps</Text>
        <div style={{ overflowX: "auto", width: "100%" }}>
          <AliceCarousel mouseTracking items={items} />
        </div>
      </Page.Content>
    </Page>
  );
};

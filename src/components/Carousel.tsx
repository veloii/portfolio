import { css } from "@emotion/react";
import { Button } from "@geist-ui/core";
import { ArrowLeft, ArrowRight } from "@geist-ui/react-icons";
import React, { useRef, useState } from "react";

export const Carousel = (props: {
  items: JSX.Element[];
  gap?: number;
  maxWidth?: string;
}) => {
  const itemsDiv = useRef<HTMLDivElement>(null);
  const fadeLeftRef = useRef<HTMLDivElement>(null);
  const fadeRightRef = useRef<HTMLDivElement>(null);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const gap = props.gap ?? 64;

  const scroll = (dir: "left" | "right") => {
    if (itemsDiv.current && fadeRightRef.current && fadeLeftRef.current) {
      const containerWidth = itemsDiv.current.clientWidth;

      const scrollAmount =
        (itemsDiv.current?.scrollWidth - (props.items.length - 1) * gap) /
        props.items.length;

      let leftScroll = itemsDiv.current.scrollLeft;
      itemsDiv.current.scroll({
        left:
          leftScroll +
          (dir === "right" ? scrollAmount + gap : -scrollAmount - gap),
        behavior: "smooth",
      });

      leftScroll =
        leftScroll +
        (dir === "right" ? scrollAmount + gap : -scrollAmount - gap) -
        60;

      const showLeftFade = !(leftScroll < 1);
      const showRightFade = !(
        leftScroll + containerWidth + gap >=
        itemsDiv.current.scrollWidth
      );

      setShowLeftButton(showLeftFade);
      setShowRightButton(showRightFade);

      if (showLeftFade) {
        fadeLeftRef.current.classList.add("visible");
      } else {
        fadeLeftRef.current.classList.remove("visible");
      }

      if (showRightFade) {
        fadeRightRef.current.classList.add("visible");
      } else {
        fadeRightRef.current.classList.remove("visible");
      }
    }
  };

  return (
    <div
      css={css`
        position: relative;
        max-width: ${props.maxWidth ?? "1300px"};
      `}
    >
      <div className="fade-overlay">
        <div ref={fadeLeftRef} className="fade-left"></div>
        <div ref={fadeRightRef} className="fade-right visible"></div>
      </div>
      <div
        ref={itemsDiv}
        css={css`
          display: flex;
          gap: ${gap}px;
          max-width: ${props.maxWidth ?? "1300px"};
          overflow: hidden;
        `}
      >
        {props.items.map((item) => item)}
      </div>
      <Button
        iconRight={<ArrowLeft />}
        auto
        onClick={() => scroll("left")}
        style={{
          borderRadius: 200,
          position: "absolute",
          top: "50%",
          opacity: showLeftButton ? 1 : 0,
          left: 20,
          transform: "translateY(-50%)",
          transition: "opacity 0.2s ease",
          zIndex: 101,
        }}
        shadow
        scale={1.5}
        px={0.6}
        type="default"
      ></Button>
      <Button
        iconRight={<ArrowRight />}
        auto
        onClick={() => scroll("right")}
        style={{
          borderRadius: 200,
          position: "absolute",
          top: "50%",
          right: 20,
          opacity: showRightButton ? 1 : 0,
          transition: "opacity 0.2s ease",
          transform: "translateY(-50%)",
          zIndex: 101,
        }}
        shadow
        scale={1.5}
        px={0.6}
        type="default"
      ></Button>
    </div>
  );
};

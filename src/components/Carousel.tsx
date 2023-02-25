import { css } from "@emotion/react";
import { Button } from "@geist-ui/core";
import ArrowLeft from "@geist-ui/react-icons/arrowLeft";
import ArrowRight from "@geist-ui/react-icons/arrowRight";
import React, { useEffect, useRef, useState } from "react";

export const Carousel = (props: {
  items: JSX.Element[];
  gap?: number;
  maxWidth?: string;
}) => {
  const itemsDiv = useRef<HTMLDivElement>(null);
  const virtualScroll = useRef(0);
  const [showLeftButton, setShowLeftButton] = useState<boolean>(false);
  const [showRightButton, setShowRightButton] = useState<boolean>(true);
  const gap = props.gap ?? 64;
  const virtualScrolls = useRef<number[]>([]);
  const virtualPos = useRef(0);
  const pos = useRef(0);

  useEffect(() => {
    const ro = new ResizeObserver((_) => {
      virtualScroll.current = 0;
      virtualScrolls.current = [];
      virtualPos.current = 0;
      pos.current = 0;
      itemsDiv.current?.scroll({ left: 0, behavior: "smooth" });
      for (const i of props.items) {
        virtualScroller();
      }
      virtualScrolls.current.pop();
      virtualScrolls.current.unshift(0);
      setShowLeftButton(false);
      setShowRightButton(true);
    });

    ro.observe(itemsDiv.current!);

    for (const i of props.items) {
      virtualScroller();
    }
    virtualScrolls.current.pop();
    virtualScrolls.current.unshift(0);

    return () => {
      ro.disconnect();
    };
  }, []);

  const virtualScroller = () => {
    if (itemsDiv.current) {
      const containerWidth = itemsDiv.current.clientWidth;

      let itemWidths: number[] = [];

      props.items.forEach((item, index) => {
        if (index === 0)
          return itemWidths.push(
            itemsDiv.current?.children[index].clientWidth!
          );

        itemWidths.push(
          itemWidths[index - 1] + itemsDiv.current?.children[index].clientWidth!
        );
      });

      let scrollWidthPossible = 0;

      itemWidths.forEach((width) => {
        if (width <= containerWidth + virtualScroll.current)
          scrollWidthPossible = width;
      });

      if (
        scrollWidthPossible <=
          virtualScrolls.current[virtualScrolls.current.length - 1] &&
        virtualScrolls.current.length !== 0
      ) {
        return false;
      }

      virtualScroll.current = scrollWidthPossible;
      virtualScrolls.current.push(scrollWidthPossible);

      virtualPos.current += 1;
      return true;
    }
  };

  const scroll = (dir: "left" | "right") => {
    if (dir === "left") {
      pos.current -= 1;
    } else {
      pos.current += 1;
    }

    const showLeftFade = pos.current !== 0;
    const showRightFade = pos.current + 1 !== virtualScrolls.current.length;

    setShowLeftButton(showLeftFade);
    setShowRightButton(showRightFade);

    itemsDiv.current?.scroll({
      left: virtualScrolls.current[pos.current],
      behavior: "smooth",
    });
  };

  return (
    <div
      css={css`
        position: relative;
        max-width: ${props.maxWidth ?? "1300px"};
      `}
    >
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
        disabled={!showLeftButton}
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
        disabled={!showRightButton}
        shadow
        scale={1.5}
        px={0.6}
        type="default"
      ></Button>
    </div>
  );
};

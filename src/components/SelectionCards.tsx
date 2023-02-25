import netor from "@/images/netor.png";
import { Grid } from "@geist-ui/core";
import React, { useState } from "react";
import mvpApp from "@/images/mvp-app.png";
import unifiedBookmarks from "@/images/unified-bookmarks.png";
import randomRobloxGame from "@/images/random-roblox-game.png";
import { SelectionCard } from "./SelectionCard";

export const SelectionCards = () => {
  const [hover, setHover] = useState<number | null>(null);

  const generateProps = (index: number) => ({
    hover: hover === index,
    hoverIndexState: hover,
    setHover: (value: boolean) => setHover(value ? index : null),
  });

  return (
    <Grid.Container style={{ gap: 32, flexWrap: "wrap" }}>
      <SelectionCard
        type="square"
        priority
        link="/mvp-app"
        source={mvpApp}
        title="My Virtual Pet App"
        grad="rgba(0, 170, 255, 1) 100%"
        {...generateProps(1)}
      />
      <SelectionCard
        type="wide"
        priority
        link="/unified-bookmarks"
        source={unifiedBookmarks}
        title="Unified Bookmarks"
        grad="rgba(255, 0, 222, 1) 100%"
        {...generateProps(2)}
      />
      <SelectionCard
        type="square"
        link="/random-roblox-game"
        source={randomRobloxGame}
        title="Random Roblox Game"
        grad="rgba(204, 53, 87, 1) 100%"
        {...generateProps(3)}
      />
      <SelectionCard
        type="wide"
        link="/netor"
        source={netor}
        title="Netor Discord Bot"
        grad="rgba(0, 0, 255, 1) 100%"
        {...generateProps(4)}
      />
    </Grid.Container>
  );
};

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
        link="/mvp-app"
        source={mvpApp}
        title="My Virtual Pet App"
        grad="rgba(100, 120, 255, 1) 90%"
        {...generateProps(1)}
      />
      <SelectionCard
        minWidth="700px"
        link="/unified-bookmarks"
        flexGrow={2}
        source={unifiedBookmarks}
        title="Unified Bookmarks"
        grad="rgba(255, 0, 255, 1) 90%"
        {...generateProps(2)}
      />
      <SelectionCard
        link="/random-roblox-game"
        source={randomRobloxGame}
        title="Random Roblox Game"
        grad="rgba(200, 0, 105, 1) 90%"
        {...generateProps(3)}
      />
      <SelectionCard
        minWidth="700px"
        link="/netor"
        flexGrow={2}
        source={netor}
        title="Netor Discord Bot"
        grad="rgba(20, 20, 200, 1) 90%"
        {...generateProps(4)}
      />
      <style jsx global>{`
        .unblur {
          animation: unblur 0.5s ease-in-out;
        }

        @keyframes unblur {
          from {
            filter: blur(10px);
          }
          to {
            filter: blur(0);
          }
        }
      `}</style>
    </Grid.Container>
  );
};

import { Grid, useTheme } from "@geist-ui/core";
import Image from "next/image";
import React from "react";
import logo from "@/images/veloi.png";
import { css } from "@emotion/react";

export const Header = () => {
  const theme = useTheme();

  return (
    <Grid.Container alignItems="center" justify="space-between">
      <Grid>
        <div
          css={css`
            display: flex;
            gap: 20px;
            align-items: center;
          `}
        >
          <Image
            priority
            width={516 / 15}
            height={463 / 15}
            alt="Veloi"
            src={logo}
            placeholder="blur"
          />
          <h3
            style={{
              margin: 0,
              color: theme.palette.successDark,
              letterSpacing: "0.025em",
            }}
          >
            Veloi
          </h3>
        </div>
      </Grid>
      <Grid>
        {/* <Tabs hideDivider hideBorder onChange={(tab) => router.push(`#${tab}`)}>
          <Tabs.Item value="about" label="About"></Tabs.Item>
          <Tabs.Item value="projects" label="Projects"></Tabs.Item>
        </Tabs> */}
      </Grid>
    </Grid.Container>
  );
};

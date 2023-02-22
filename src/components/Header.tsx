import { Grid, Tabs, useTheme } from "@geist-ui/core";
import { useRouter } from "next/router";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/images/veloi.png";
import { css } from "@emotion/react";

export const Header = () => {
  const router = useRouter();
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

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
            className={loading ? "blur" : "unblur"}
            onLoadingComplete={() => setLoading(false)}
            width={516 / 15}
            height={463 / 15}
            alt="Veloi"
            src={logo}
            placeholder="blur"
          />
          <h3
            style={{
              margin: 0,
              color: theme.palette.success,
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

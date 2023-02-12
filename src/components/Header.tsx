import { Grid, Tabs } from "@geist-ui/core";
import { useRouter } from "next/router";
import Image from "next/image";
import React from "react";

export const Header = () => {
  const router = useRouter();

  return (
    <Grid.Container alignItems="center" justify="space-between">
      <Grid>
        <Image
          width={50}
          height={50}
          alt="Veloi"
          src="https://avatars.githubusercontent.com/u/85405932?v=4"
        />
      </Grid>
      <Grid>
        <Tabs hideDivider hideBorder onChange={(tab) => router.push(`#${tab}`)}>
          <Tabs.Item value="about" label="About"></Tabs.Item>
          <Tabs.Item value="projects" label="Projects"></Tabs.Item>
        </Tabs>
      </Grid>
    </Grid.Container>
  );
};

import { Grid, Page, Text } from "@geist-ui/core";
import Image from "next/image";
import React from "react";

export const Mobile = () => {
  return (
    <Page className="page-responsive">
      <Page.Content>
        <Text h1>Mobile Apps</Text>
        <div style={{ overflowX: "auto", width: "100%" }}>
          <Grid style={{ width: (404 / 1.5) * 5 }}>
            <Image
              width={404 / 1.5}
              height={830 / 1.5}
              src="/mobile/1.png"
              alt={""}
            />
            <Image
              width={404 / 1.5}
              height={830 / 1.5}
              src="/mobile/4.png"
              alt={""}
            />
            <Image
              width={404 / 1.5}
              height={830 / 1.5}
              src="/mobile/3.png"
              alt={""}
            />
            <Image
              width={404 / 1.5}
              height={830 / 1.5}
              src="/mobile/2.png"
              alt={""}
            />

            <Image
              width={404 / 1.5}
              height={830 / 1.5}
              src="/mobile/5.png"
              alt={""}
            />
          </Grid>
        </div>
      </Page.Content>
    </Page>
  );
};

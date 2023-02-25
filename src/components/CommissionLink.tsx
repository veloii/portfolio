import dynamic from "next/dynamic";

const PopupButton = dynamic(() => import("@/lib/popupButton"));

import React, { Suspense } from "react";

export const CommissionLink = (props: { children: React.ReactNode }) => {
  return (
    <Suspense fallback={props.children}>
      <PopupButton
        style={{
          background: "none",
          color: "inherit",
          border: "none",
          padding: 0,
          font: "inherit",
          cursor: "pointer",
          outline: "inherit",
        }}
        id="NbP48UBM"
      >
        {props.children}
      </PopupButton>
    </Suspense>
  );
};

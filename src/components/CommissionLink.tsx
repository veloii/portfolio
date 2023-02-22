import { PopupButton } from "@typeform/embed-react";
import React from "react";

export const CommissionLink = (props: { children: React.ReactNode }) => {
  return (
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
  );
};

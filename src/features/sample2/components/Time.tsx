import * as React from "react";
import { css } from "@emotion/react";
import { useTime } from "../hooks/useTime";

const rootCss = css({
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});
const cardCss = css({
  padding: "2em",
});
export function Time() {
  const { readableTime } = useTime(1000);

  return (
    <div css={rootCss}>
      <h1>Time</h1>
      <div css={cardCss}>{readableTime}</div>
    </div>
  );
}

import React, { useState } from "react";
import { css } from "@emotion/react";

const rootCss = css({
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});
const cardCss = css({
  padding: "2em",
});

export const Sample = () => {
  const [count, setCount] = useState(0);

  return (
    <div css={rootCss}>
      <h1>Sample</h1>
      <div css={cardCss}>
        <button
          type="button"
          onClick={() => setCount((countNumber) => countNumber + 1)}
        >
          count is {count}
        </button>
      </div>
    </div>
  );
};

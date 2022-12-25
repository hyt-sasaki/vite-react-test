import React, { useState } from "react";
import reactLogo from "@/assets/react.svg";
import { css, keyframes } from "@emotion/react";

const rootCss = css({
  maxWidth: "1280px",
  margin: "0 auto",
  padding: "2rem",
  textAlign: "center",
});
const logoCss = css({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
});
const reactLogoSpin = keyframes({
  from: {
    transform: "rotate(0deg)",
  },
  to: {
    transform: "rotate(360deg)",
  },
});
const reactLogoCss = css(logoCss, {
  "&:hover": {
    filter: "drop-shadow(0 0 2em #61dafbaa)",
  },
  animation: `${reactLogoSpin} infinite 20s linear`,
});
const viteLogoCss = css(logoCss, {
  "&:hover": {
    filter: "drop-shadow(0 0 2em #646cffaa)",
  },
});
const cardCss = css({
  padding: "2em",
});
const readTheDocsCss = css({
  color: "#888",
});

export function Sample() {
  const [count, setCount] = useState(0);

  return (
    <div css={rootCss}>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" css={viteLogoCss} alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} css={reactLogoCss} alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div css={cardCss}>
        <button
          type="button"
          onClick={() => setCount((countNumber) => countNumber + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p css={readTheDocsCss}>
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

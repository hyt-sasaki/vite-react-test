import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import { App } from "@/App";

const globalStyle = css({
  ":root": {
    fontFamily: "Helvetica, Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
  },
  body: {
    margin: 0,
    height: "100vh",
  },
  h1: {
    fontSize: "3.2em",
    lineHeight: 1.1,
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>
);

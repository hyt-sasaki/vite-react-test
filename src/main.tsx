import React from "react";
import ReactDOM from "react-dom/client";
import { Global, css } from "@emotion/react";
import { App } from "@/App";

const globalStyle = css({
  ":root": {
    fontFamily: "Inter, Avenir, Helvetica, Arial, sans-serif",
    fontSize: "16px",
    lineHeight: "24px",
    fontWeight: 400,
    colorScheme: "light dark",
    color: "rgba(55, 55, 55, 0.87)",
    backgroundColor: "#f4f4f4",
    fontSynthesis: "none",
    textRendering: "optimizeLegibility",
  },
  "#root": {
    margin: 0,
    maxWidth: "1280px",
    textAlign: "center",
  },
  a: {
    fontWeight: 500,
    color: "#646cff",
    textDecoration: "inherit",
    "&:hover": {
      color: "#535bf2",
    },
  },
  body: {
    margin: "0",
    display: "flex",
    placeItems: "center",
    minWidth: "320px",
    minHeight: "100vh",
  },
  h1: {
    fontSize: "3.2em",
    lineHeight: 1.1,
  },
  button: {
    borderRadius: "8px",
    border: "1px solid transparent",
    padding: "0.6em 1.2em",
    fontSize: "1em",
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: "#1a1a1a",
    cursor: "pointer",
    transition: "border-color 0.25s",
    "&:hover": {
      borderColor: "#646cff",
    },
    "&:focus, &:focus-visible": {
      outline: "4px auto -webkit-focus-ring-color",
    },
  },
  "@media (prefersColorScheme: light)": {
    ":root": {
      color: "#213547",
    },
  },
});

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Global styles={globalStyle} />
    <App />
  </React.StrictMode>
);

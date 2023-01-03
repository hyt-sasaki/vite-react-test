import * as React from "react";
import { NavLink } from "react-router-dom";
import { css } from "@emotion/react";

type SideNavigationItem = {
  name: string;
  to: string;
};

const sideNaviStyle = css({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#555",
  padding: "1rem",
});

const navStyle = css({
  color: "#eee",
  "&:hover": {
    color: "#aaa",
  },
});
const SideNavigation = () => {
  const navigation = [
    { name: "sample", to: "." },
    { name: "time", to: "time" },
    { name: "sample3", to: "sample3" },
  ].filter(Boolean) as SideNavigationItem[];

  return (
    <div css={sideNaviStyle}>
      {navigation.map((item, index) => (
        <NavLink css={navStyle} end={index === 0} key={item.name} to={item.to}>
          {item.name}
        </NavLink>
      ))}
    </div>
  );
};

const mainLayoutStyle = css({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
});
type MainLayoutProps = {
  children: React.ReactNode;
};
export const MainLayout = ({ children }: MainLayoutProps) => (
  <div css={mainLayoutStyle}>
    <SideNavigation />
    <main>{children}</main>
  </div>
);

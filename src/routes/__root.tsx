import React from "react";
import {
  createRootRouteWithContext,
  Link,
} from "@tanstack/react-router";
import { BackgroundImage } from "@mantine/core";

export interface RouterContext {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

const headerStyle = {
  background: "#364fc7",
  padding: "11px 20px",
  hight: "72px"
}

function RootRouteWithLayout() {
  return (
    <div style={headerStyle}>
      <Link to="/">
        <img src="../../public/vite.svg" alt="" />
      </Link>
    </div>
  );
}

import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { Button } from '@mantine/core';
import { TanStackRouterDevtools } from "@tanstack/router-devtools";


export interface RouterContext {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

const headerStyle = {
  background: "#364fc7  ",
  padding: "11px 20px",
  hight: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}

function RootRouteWithLayout() {
  return (
    <div>
      <div style={headerStyle}>
        <Link to="/">
          <img src="../../public/vite.svg" alt="" />
        </Link>
        <Link to="/ownBooking">
          <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Mine bookinger</Button>
        </Link>
      </div>
      <Outlet />
    </div>
  );
}

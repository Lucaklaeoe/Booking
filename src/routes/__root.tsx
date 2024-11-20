import React from "react";
import {
  createRootRouteWithContext,
  Link,
  Outlet,
} from "@tanstack/react-router";
import { Button } from '@mantine/core';

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

const headerStyle = {
  background: "#364fc7",
  padding: "11px 20px",
  hight: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}
const footerStyle = {
  padding: "50px 20px",
  background: "#364fc7",
  hight: "150px",
  witdh: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "100px"
}

function RootRouteWithLayout() {
  /*
  const context = useRouteContext({ from: "/login" });

  //IF NOT LOGGED IN
  if(context.userInfo === undefined || context.userInfo === null || context.userInfo.trim() === ""){
    return <Navigate to="/login" replace />;
  }
    */

  return (
    <div style={{background: "#D0ebff", minHeight: "100vh"}}>
      <div style={headerStyle}>
        <Link to="/">
          <img style={{height: "50px"}} src="cph-booking.png" alt="" />
        </Link>
        <Link to="/ownBooking">
          <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Mine bookinger</Button>
        </Link>
        <Link to="/login">
          <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Login (remove later)</Button>
        </Link>
        <Link to="/LokaleFilter">
          <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Booking (remove later)</Button>
        </Link>
        <Link to="/BookLokale">
          <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Lokaler (remove later)</Button>
        </Link>
      </div>

      <Outlet />

      <div style={footerStyle}>
        <img style={{height: "50px"}} src="cph-booking.png" alt="" />
      </div>
    </div>
  );
}

import React from "react";
import { createRootRouteWithContext, Link, Outlet } from "@tanstack/react-router";
import { Button } from '@mantine/core';

export interface RouterContext extends Record<any, any> {
  supabase: any;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootRouteWithLayout,
});

//style
const headerStyle = {
  background: "#364fc7",
  padding: "11px 20px",
  height: "80px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}
const footerStyle = {
  padding: "50px 20px",
  background: "#364fc7",
  height: "150px",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "100px"
}

function logOut() {
  localStorage.clear();
}

function RootRouteWithLayout() {
  return (
    <div style={{background: "#D0ebff", minHeight: "100vh"}}>
      <div style={headerStyle}>
        <Link to="/">
          <img style={{height: "50px"}} src="cph-booking.png" alt="" />
        </Link>
        <div style={{display: "flex", gap: "10px"}}>
          <Link to="/login">
            <Button variant="filled" color="yellow" radius="xs" onClick={logOut} style={{ color: "black" }}>Log ud</Button>
          </Link>
          <Link to="/ownBooking">
            <Button variant="filled" color="yellow" radius="xs" style={{ color: "black" }}>Mine bookinger</Button>
          </Link>
        </div>
        
      </div>
    
      {/* Indholdet på siden, bliver skiftet med en .lazy */}
      <Outlet />

      <div style={footerStyle}>
        <img style={{height: "50px"}} src="cph-booking.png" alt="" />
      </div>
    </div>
  );
}

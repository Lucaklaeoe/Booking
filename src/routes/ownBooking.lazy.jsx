import { Title } from '@mantine/core';
import OwnBookingList from './../components/ownbooking/ownBookingList';
import { createLazyFileRoute } from "@tanstack/react-router";
import { Navigate, useRouteContext } from "@tanstack/react-router";

export const Route = createLazyFileRoute('/ownBooking')({
  component: ownBooking,
})

const ownBookingStyle = {
  margin: "100px auto 0 auto",
  width: "1164px",
}


function ownBooking() {
  //er loggede ind?
  const context = useRouteContext({ from: "/ownBooking" });
  if(context.userInfo == undefined || context.userInfo == null || context.userInfo == ""){
    return(
      <div>
        <Navigate to="/login"></Navigate>
      </div>
    )    
  }

  return (
    <div style={ownBookingStyle}>

      <Title order={1} style={{ color: "#364FC7" }}>Dine bookinger</Title>
      <OwnBookingList/>

    </div>
  );
}

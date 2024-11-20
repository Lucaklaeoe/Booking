import { Title } from '@mantine/core';
import OwnBookingList from './../components/ownbooking/ownBookingList';
import { createLazyFileRoute } from "@tanstack/react-router";



export const Route = createLazyFileRoute('/ownBooking')({
  component: ownBooking,
})

const ownBookingStyle = {
  margin: "100px auto 0 auto",
  width: "1164px",
}


function ownBooking() {

  return (
    <div style={ownBookingStyle}>

      <Title order={1} style={{ color: "#364FC7" }}>Dine bookinger</Title>
      <OwnBookingList/>

    </div>
  );
}

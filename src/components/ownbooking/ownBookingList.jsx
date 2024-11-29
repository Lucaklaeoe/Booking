import OwnBookingItem from "./ownBookingItem";
import { useState, useEffect } from "react";
import { useRouteContext } from "@tanstack/react-router";

const ownBookingListBarStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    witdh: "100%",
    height: "70px",
    borderRadius: "10px",
    padding: "0 38px",
    color: "white",
    position: "relative",
    background: "#364FC7",
}
const ownBookingListStyle = {
    margin: "-20px 0",
    borderLeft: "2px solid #74C0FC",
    borderRight: "2px solid #74C0FC",
    padding: "20px 0 0 0",
    background: "#A5D8FF",
    display: "flex",
    flexDirection: "column",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "px",
}

function OwnBookingList() {
    const [userBookingData, setUserBookingData] = useState([])
    const context = useRouteContext({ from: "/ownBooking" });
    const userId = context.userInfo.user.id

    const getUserBookings = async () => {
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
        const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?user_id=eq.${userId}`, {
            headers: {
                "apikey": supabaseKey,
                "Authorization": `Bearer ${context.userInfo.session.access_token}`,   
                "Prefer": "return=representation",
                "content-type": "application/json"            
            }
        })
        const data = await response.json();

        setUserBookingData(data)
    }

    useEffect(() => {
        getUserBookings()
    }, []);

    return (
        <div>
            <div style={ownBookingListBarStyle}>
                <p style={{ width: "20%", fontSize: "22px", fontWeight: "700" }}>Dato</p>
                <p style={{ width: "20%", fontSize: "22px", fontWeight: "700" }}>Lokale</p>
                <p style={{ width: "20%", fontSize: "22px", fontWeight: "700" }}>Start tid</p>
                <p style={{ width: "20%", fontSize: "22px", fontWeight: "700" }}>Slut tid</p>
                <p style={{ width: "20%", fontSize: "22px", fontWeight: "700" }}>Annuller booking</p>
            </div>
            <div style={ownBookingListStyle}>
                {userBookingData.map((booking) => (
                    <OwnBookingItem key={booking.id} id={booking.id} dato={booking.bookingDate} lokale={booking.roomNumber} starttid={booking.startTime} sluttid={booking.endTime} setUserBookingData={setUserBookingData} />
                ))}
            </div>
        </div>
    )
}

export default OwnBookingList;

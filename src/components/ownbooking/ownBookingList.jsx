import OwnBookingItem from "./ownBookingItem";
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

const importet_data = [
    {id: 1, dato: "01.01.2023", lokale: "Etage 1", starttid: "08:00", sluttid: "17:00"},
    {id: 2, dato: "01.01.2023", lokale: "Etage 1", starttid: "08:00", sluttid: "17:00"},
    {id: 3, dato: "01.01.2023", lokale: "Etage 1", starttid: "08:00", sluttid: "17:00"},
]

function OwnBookingList() {

    const context = useRouteContext({ from: "/ownBooking" });
    console.log("hejehejeher" + context)

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
                {importet_data.map((booking) => (
                    <OwnBookingItem id={booking.id} dato={booking.dato} lokale={booking.lokale} starttid={booking.starttid} sluttid={booking.sluttid} />
                ))}
            </div>
        </div>
    )
}

export default OwnBookingList;

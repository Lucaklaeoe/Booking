import OwnBookingItem from "./ownBookingItem";

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
                <OwnBookingItem dato="01.01.2023" lokale="Lokale 1" starttid="10:00" sluttid="12:00" />                
            </div>
        </div>
    )
}

export default OwnBookingList;

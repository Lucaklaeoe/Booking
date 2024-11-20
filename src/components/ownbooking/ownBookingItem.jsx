const itemStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 38px",
    color: "white",
    position: "relative",
    background: "#A5D8FF",
    borderBottomLeftRadius: "2px",
    borderBottomRightRadius: "2px",
    height: "112px",
    borderBottom: "2px solid #74C0FC",
}
const infoStyle = {
    width: "20%",
    fontSize: "22px",
    fontWeight: "700",
    height: "32px",
    display: "flex",
    alignItems: "center",
}

function removeBooking(id){
    //function for remove booking 
}

function OwnBookingItem({id, dato, lokale, starttid, sluttid}) {

    return (
        <div style={itemStyle}>
            <div style={infoStyle}>
                <p style={{backgroundColor: "#1C7ED6", padding: "10px", borderRadius: "6px"}}>{dato}</p>
            </div>

            <div style={infoStyle}>
                <p style={{backgroundColor: "#1C7ED6", padding: "10px", borderRadius: "6px"}}>{lokale}</p>
            </div>

            <div style={infoStyle}>
                <p style={{backgroundColor: "#1C7ED6", padding: "10px", borderRadius: "6px"}}>{starttid}</p>
            </div>

            <div style={infoStyle}>
                <p style={{backgroundColor: "#1C7ED6", padding: "10px", borderRadius: "6px"}}> {sluttid}</p>
            </div>
            
            <div id={id} style={{ ...infoStyle, cursor: "pointer"}} onClick={() => removeBooking({id})}>
                <p style={{backgroundColor: "#C92A2A", padding: "10px", borderRadius: "6px"}}> Annuller booking</p>
            </div>
        </div>
    )
}

export default OwnBookingItem;

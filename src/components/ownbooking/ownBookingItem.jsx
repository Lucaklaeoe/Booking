import { Button } from '@mantine/core';

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


function OwnBookingItem({dato, lokale, starttid, sluttid}) {

    return (
        <div style={itemStyle}>
            <div style={infoStyle}>
                <p>{dato}</p>
            </div>

            <div style={infoStyle}>
                <p style={{backgroundColor: "#1C7ED6", padding: "10px", borderRadius: "10px"}}>{lokale}</p>
            </div>

            <div style={infoStyle}>
                <p>{starttid}</p>
            </div>

            <div style={infoStyle}>
                <p>{sluttid}</p>
            </div>
            
            <Button style={infoStyle} variant="filled" color="#C92A2A">Annuller booking</Button>
        </div>
    )
}

export default OwnBookingItem;

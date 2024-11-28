import Cancellation from "../popup/cancellation";
import { useState } from "react";
import ConfirmCancellation from "../popup/confirmCancellation";

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
function OwnBookingItem({id, dato, lokale, starttid, sluttid, setUserBookingData}) {

    const [popupState, setPopupState] = useState(null);

    const closePopup = () => setPopupState(null);

    const openCancellationPopup = () => setPopupState("cancellation");

    const openConfirmCancellationPopup = () => setPopupState("confirm");

    const closeConfirmCancellationPopup = () => setPopupState(null);

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
            
            <div id={id} style={{ ...infoStyle, cursor: "pointer"}}>
                <button onClick={openCancellationPopup} style={{backgroundColor: "#C92A2A", padding: "10px", borderRadius: "6px", color: "white", border: "none"}}> Annuller booking</button>
            </div>
             {popupState === "cancellation" && <Cancellation onClose={closePopup} onConfirm={openConfirmCancellationPopup} starttid={starttid} sluttid={sluttid} id={id}  setUserBookingData={setUserBookingData}/>}
            {popupState === "confirm" && <ConfirmCancellation onClose={closeConfirmCancellationPopup} starttid={starttid} sluttid={sluttid} />}
        </div>
    )
}

export default OwnBookingItem;

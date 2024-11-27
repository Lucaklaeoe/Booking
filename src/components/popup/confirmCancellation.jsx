import { Button } from '@mantine/core';

const centerBackground={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        position: "fixed",
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        zIndex: " 3"
    }

    const confirmStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor: "#FFF",
        bordorRadius: "4px",
        padding: "26px 55px",
        width: "762px",
    }
    const buttonStyle = {
        backgroundColor: "#F59F00",
        marginTop: "29px",
        color: "black",
    }
function confirmCancellation({ onClose, starttid, sluttid}) {
    // Props destructering.
    // dvs. vi går fra et Object, vi får ind som parameter,

    return (
            <div style={centerBackground}>
                <div style={confirmStyle}>
                    <h1 style={{color: "#2B8A3E"}}>Bookning annulleret</h1>
                    <p style={{color: "black"}}>Din booking {starttid} til {sluttid} vil blive annulleret </p>
                        <Button 
                            onClick={onClose}
                            type="submit" 
                            variant="filled" 
                            color="#F08C00" 
                            size="xl" 
                            radius="md" 
                            style={buttonStyle}>Til bookningner
                        </Button>
                </div>
            </div>
    )
}

export default confirmCancellation
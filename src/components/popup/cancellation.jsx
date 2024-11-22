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
    }

    const cancellationStyle={
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
        color: "white",
    }
function cancellation({onClose, starttid, sluttid}) {

    

    return (
        <div style={centerBackground}>
            <div style={cancellationStyle}>
                
                <h1 style={{color: "#364FC7"}}>Vil du annullere din bookning?</h1>
                <p style={{color: "black"}}>Din booking {starttid} til {sluttid} vil blive annulleret </p>
                <div style={{display:"flex", gap:"100px", marginTop:"30px"}}>
                    <Button 
                        variant="filled" 
                        color="#2B8A3E" 
                        size="lg" 
                        radius="md" 
                        style={buttonStyle}>Ja
                    </Button>
                    <Button
                        onClick={onClose}
                        variant="filled" 
                        color="#C92A2A" 
                        size="lg" 
                        radius="md" 
                        style={buttonStyle}>Nej
                    </Button>
                </div>
            </div>
        </div>
        
    )
}

export default cancellation
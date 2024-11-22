import { Button } from '@mantine/core';

function confirmCancellation() {

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

    return (
        <div style={centerBackground}>
            <div style={confirmStyle}>
                
                <h1 style={{color: "#2B8A3E"}}>Bookning bekræftet</h1>
                    <Button 
                        type="submit" 
                        variant="filled" 
                        color="#F08C00" 
                        size="xl" 
                        radius="md" 
                        style={buttonStyle}>Til forsiden
                    </Button>
            </div>
        </div>
        
    )
}

export default confirmCancellation
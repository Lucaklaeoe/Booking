import { Button } from '@mantine/core';
import { useRouteContext } from "@tanstack/react-router";

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
function cancellation({onClose, onConfirm, starttid, sluttid, id}) {


    const context = useRouteContext({ from: "/ownBooking" });

    function handleButton(){
        console.log (id)
        removeBooking(id)
        onConfirm()
    }

    async function removeBooking(id) {
        console.log (id)
        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
        const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?id=eq.${id}`, {
            method: "DELETE",
            body: JSON.stringify(id),
            headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${context.userInfo.session.access_token}`,  
        }
    })
    
    const data=await response.json()
    console.log (data)
    }

    return (
        <div style={centerBackground}>
            <div style={cancellationStyle}>
                <h1 style={{color: "#364FC7"}}>Vil du annullere din bookning?</h1>
                <p style={{color: "black"}}>Din booking {starttid} til {sluttid} vil blive annulleret </p>
                <div style={{display:"flex", gap:"100px", marginTop:"30px"}}>
                    <Button 
                        onClick={handleButton}
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
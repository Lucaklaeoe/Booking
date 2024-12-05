import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function confirmTeacher({lokale, starttid, sluttid, date}) {

    const confirmStyle={
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
        backgroundColor: "#FFF",
        bordorRadius: "4px",
        padding: "26px 55px",
        width: "762px",
        position: "fixed",
        top: "10%",
        left: "23%",
        zIndex: "3"
    }
    const buttonStyle = {
        backgroundColor: "#F59F00",
        marginTop: "29px",
        color: "black",
    }

    return (
            <div>
                <div style={confirmStyle}>
                    <h1 style={{color: "#2B8A3E"}}><img style={{width: "50px", height: "50px", marginRight: "20px"}} src="img/check.svg" alt="godtkent mærke" />Booking bekræftet</h1>
                    <p>Lokale: <b>{lokale}</b></p>
                    <p>Dato: <b>{date}</b></p>
                    <p>Tidspunkt: <b>{starttid} - {sluttid}</b></p>
                    <p>Din booking har nu overskrevet en andens, og der bliver sendt en besked til vedkommende.</p>
                    <Link to={"/ownBooking"}>
                        <Button 
                            type="submit" 
                            variant="filled" 
                            color="#F08C00" 
                            size="xl" 
                            radius="md" 
                            style={buttonStyle}>Mine bookinger</Button>
                    </Link>
                    
                </div>
            </div>
    )
}

export default confirmTeacher
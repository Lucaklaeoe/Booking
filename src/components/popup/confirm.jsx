import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function confirm({lokale, starttid, sluttid, date}) {

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
        bordorRadius: "8px",
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
                    <h1 style={{color: "#2B8A3E"}}>
                        <img style={{width: "50px", height: "50px", marginRight: "20px"}} src="img/check.svg" alt="" />Booking bekræftet
                    </h1>
                    <p>Lokale: <b>{lokale}</b></p>
                    <p>Dato: <b>{date}</b></p>
                    <p>Tidspunkt: <b>{starttid} - {sluttid}</b></p>
                    <p>Vær opmærksom på at hvis du er studerende kan få din booking overskrevet  af en underviser, hvis der er mere end 24 timer til din booking. Du vil få en mail med begrundelse for aflysningen. </p>
                    <br></br>
                    <p>Er der under 24 timer til din booking og en underviser vil booke lokalet, vil du få en mail med en anmodning om at overtage bookingen. Du må selv bestemme om du vil beholde eller overgive bookingen.</p>
                    <Link to={"/ownBooking"}>
                    <Button 
                        type="submit" 
                        variant="filled" 
                        color="#F08C00" 
                        size="xl" 
                        adius="md" 
                        style={buttonStyle}>Til forsiden</Button>
                    </Link>
                </div>
            </div>
    )
}

export default confirm
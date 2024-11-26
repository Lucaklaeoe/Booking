import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function confirmTeacher({name}) {

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
    }
    const buttonStyle = {
        backgroundColor: "#F59F00",
        marginTop: "29px",
        color: "black",
    }

    return (
         <Modal opened={opened} onClose={onClose} title="Authentication">
            <div>
                <div style={confirmStyle}>
                    <h1 style={{color: "#2B8A3E"}}><img style={{width: "50px", height: "50px", marginRight: "20px"}} src="img/check.svg" alt="godtkent mærke" />Bookning bekræftet</h1>
                    <p>Lokale: <b>{name}</b></p>
                    <p>Dato: <b>08/12/2024</b> </p>
                    <p>Tidspunkt: <b>13:00 - 15:00</b></p>
                    <p>Vær opmærksom på at hvis du er studerende kan få din booking overskrevet  af en underviser, hvis der er mere end 24 timer til din booking. Du vil få en mail med begrundelse for aflysningen. </p>
                    <p>Er der under 24 timer til din booking og en underviser vil booke lokalet, vil du få en mail med en anmodning om at overtage bookingen. Du må selv bestemme om du vil beholde eller overgive bookingen.</p>
                    <Link to={"ownBooking"}>
                        <Button 
                            type="submit" 
                            variant="filled" 
                            color="#F08C00" 
                            size="xl" 
                            radius="md" 
                            style={buttonStyle}>Til forsiden</Button>
                    </Link>
                    
                </div>
            </div>
        </Modal>
    )
}

export default confirmTeacher
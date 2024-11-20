import { Button } from '@mantine/core';

function confirm() {

    const confirmStyle={
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
        width: "762px",
        height: "473px",
        backgroundColor: "#FFF",
        bordorRadius: "4px",
    }
    const buttonStyle = {
        backgroundColor: "#F59F00",
        marginTop: "29px",
        color: "black",
    }

    return (
        <div style={confirmStyle}>
            <h1>Bookning bekræftet</h1>
            <p>Lokale: 3.9 </p>
            <p>Dato: 08/12/2024 </p>
            <p>Tidspunkt: 13:00 - 15:00 </p>
            <p>Vær opmærksom på at hvis du er studerende kan få din booking overskrevet  af en underviser, hvis der er mere end 24 timer til din booking. Du vil få en mail med begrundelse for aflysningen. </p>
            <p>Er der under 24 timer til din booking og en underviser vil booke lokalet, vil du få en mail med en anmodning om at overtage bookingen. Du må selv bestemme om du vil beholde eller overgive bookingen.</p>
            
            <Button 
                type="submit" 
                variant="filled" 
                color="#F08C00" 
                size="xl" 
                radius="md" 
                style={buttonStyle}>LOGIN</Button>

        </div>
    )
}

export default confirm
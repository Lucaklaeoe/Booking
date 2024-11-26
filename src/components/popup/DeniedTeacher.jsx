import { Button } from '@mantine/core';
import { Link } from '@tanstack/react-router';

function deniedTeacher({name}) {

    const deniedStyle={
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
                <div style={deniedStyle}>
                    <h1 style={{color: "#C92A2A"}}><img style={{width: "50px", height: "50px", marginRight: "20px"}} src="img/no.svg" alt="nægtet mærke" />Bookning bekræftet</h1>
                    <p>For at overskrive bookingen vedr. </p>
                    <p>Lokale: <b>{name}</b></p>
                    <p>Dato: <b>08/12/2024</b> </p>
                    <p>Tidspunkt: <b>13:00 - 15:00</b></p>
                    <p>Skal du kontakte <b>XX (cph-jj123@cphbusiness.dk)</b> selv, da der er under 24 timer til deres booking af lokalet starter. </p>
                    <Link to={"BookLaokale"}>
                        <Button 
                            type="submit" 
                            variant="filled" 
                            color="#F08C00" 
                            size="xl" 
                            radius="md" 
                            style={buttonStyle}>Tilbage til bookingsiden</Button>
                    </Link>
                </div>
            </div>
        </Modal>
    )
}

export default deniedTeacher
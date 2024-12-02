import { DateInput } from '@mantine/dates';
import { Button, Autocomplete } from '@mantine/core';
import { Link } from '@tanstack/react-router';
import { useRouteContext } from '@tanstack/react-router';
import { useState } from "react";

const BookLokaleStyle = {
    display: "flex",
    width:"926px",
    borderRadius:"2px",
    background: "#364FC7",
    justifyContent:"center",
    alignItems:"center",
    padding:"26px 55px",
    gap: "32px",
    color:"black"
}
const BookStyle = {
    margin:"0 auto",
    color: "#364FC7",
    marginBottom:"140px",
}

function Filter({filterDate, setFilterDate}) { 

    const context = useRouteContext({ from: "/" });
    const [etage, setEtage] = useState('');


    function handleButtonClick() {

        //chatgpt kode formater om til yyyy-mm-dd
        const formattedDate = filterDate.toISOString().split('T')[0];
        //chat stop her
        
        context.setBookingInfo({etage: etage, date: formattedDate, lokale: "", startTime: "", endTime: ""});
    }

    return (
        <div style={BookStyle}>
            <h1>Book Lokale</h1>

            <div style={BookLokaleStyle}>
                <Autocomplete placeholder="Etage" data={['1', '2', '3', '4']} 
                    value={etage} 
                    onChange={(value) => setEtage(value)} 
                />
                
                <DateInput valueFormat="YYYY MMM DD" placeholder="Dato" 
                    value={filterDate} 
                    onChange={(value) => setFilterDate(value)} 
                    minDate={new Date()}
                />
                
                {etage ? 
                    <Link to="/BookLokale">
                        <Button variant="filled" color="yellow" size="xl" radius="xs" onClick={handleButtonClick} style={{ color: "black" }}>SØG HER</Button>
                    </Link>
                    :
                    <Button variant="filled" color="yellow" size="xl" radius="xs" onClick={() => alert("Vælg etage")} style={{ color: "black" }}>SØG HER</Button>
                }
            
            </div>
        </div>
    )
}

export default Filter;
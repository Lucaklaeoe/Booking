import { DateInput } from '@mantine/dates';
import { Button, Select } from '@mantine/core';
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
        const formattedDate = filterDate.toLocaleDateString('en-CA', { year: 'numeric', month: '2-digit', day: '2-digit' });
        context.setBookingInfo({etage: etage, date: formattedDate, lokale: "", startTime: "", endTime: ""});
    }

    return (
        <div style={BookStyle}>
            <h1>Book Lokale</h1>

            <div style={BookLokaleStyle}>
                <Select placeholder="Etage" data={['1', '2', '3', '4']} 
                    value={etage} 
                    onChange={(value) => setEtage(value)} 
                />
                
                <DateInput valueFormat="YYYY MMM DD" placeholder="Dato" 
                    value={filterDate} 
                    onChange={(value) => setFilterDate(value)} 
                    minDate={new Date()}
                />
                
                {/* Conditional rendering */}
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
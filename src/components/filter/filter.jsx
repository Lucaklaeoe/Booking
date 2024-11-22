import { DateInput } from '@mantine/dates';
import { Button, Autocomplete } from '@mantine/core';

const BookLokaleStyle ={
    display: "flex",
    width:"926px",
    borderRadius:"2px",
    background: "#364FC7",
    justifyContent:"center",
    padding:"26px 55px",
    gap: "32px",
    color:"black"
}
const BookStyle = {
    margin:"0 auto",
    color: "#364FC7",
    marginBottom:"140px"
}

function Filter({etage, setEtage, filterDate, setFilterDate, setDeepSearch}) { 

  return (
    <div style={BookStyle}>
        <h1>Book Lokale</h1>

        <div style={BookLokaleStyle}>
            <Autocomplete label="Etage" placeholder="Etage" data={['Etage 1', 'Etage 2', 'Etage 3', 'Etage 4']} 
                value={etage} 
                onChange={(value) => setEtage(value)} 
            />
            
            <DateInput valueFormat="YYYY MMM DD" label="Dato" placeholder="Dato input" 
                value={filterDate} 
                onChange={(value) => setFilterDate(value)} 
            />
            
            <Button variant="filled" color="yellow" size="xl" radius="xs" onClick={() => setDeepSearch(true)} style={{ color: "black" }}>SØG HER</Button>
        </div>
    </div>
  )
}

export default Filter;
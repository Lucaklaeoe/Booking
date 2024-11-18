import { useState } from 'react';
import { DateInput } from '@mantine/dates';
import { Button,Autocomplete } from '@mantine/core';


function BookLokale() {
   const [Etage, setEtage] = useState('');
   const lokaler =[
    { id: 1, name: '1.1', value: 'Etage 1' },
    { id: 2, name: '1.3', value: 'Etage 1' },
    { id: 3, name: '1.4', value: 'Etage 1' },
    { id: 4, name: '2.1', value: 'Etage 2' },
    { id: 5, name: '2.3', value: 'Etage 2' },
    { id: 6, name: '2.4', value: 'Etage 2' },
    { id: 7, name: '2.5', value: 'Etage 2' },
    { id: 8, name: '2.6', value: 'Etage 2' },
    { id: 9, name: '2.7', value: 'Etage 2' },
    { id: 10, name: '2.8', value: 'Etage 2' },
    { id: 11, name: '2.9', value: 'Etage 2' },
    { id: 12, name: '2.10', value: 'Etage 2' },
    { id: 13, name: '3.1', value: 'Etage 3' },
    { id: 14, name: '3.2', value: 'Etage 3' },
    { id: 15, name: '3.3', value: 'Etage 3' },
    { id: 16, name: '3.4', value: 'Etage 3' },
    { id: 17, name: '3.5', value: 'Etage 3' },
    { id: 18, name: '3.6', value: 'Etage 3' },
    { id: 19, name: '3.7', value: 'Etage 3' },
    { id: 20, name: '3.8', value: 'Etage 3' },
    { id: 21, name: '3.9', value: 'Etage 3' },
    { id: 22, name: '3.10', value: 'Etage 3' },
    { id: 23, name: '3.11', value: 'Etage 3' },
    { id: 24, name: '3.12', value: 'Etage 3' },
    { id: 25, name: '3.13', value: 'Etage 3' },
    { id: 26, name: '3.14', value: 'Etage 3' },
    { id: 27, name: '3.15', value: 'Etage 3' },
    { id: 28, name: '3.16', value: 'Etage 3' },
    { id: 29, name: '4.1', value: 'Etage 4' },
    { id: 30, name: '4.2', value: 'Etage 4' },
    { id: 31, name: '4.3', value: 'Etage 4' },
   ]
   const filteredLokaler = lokaler.filter((lokale) => lokale.value.includes(Etage));

      const Container ={
        display:"flex",
        flexDirection: "column",
      }
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
      const Lokaler = {
        margin:"0 auto",
        borderRadius: "8px",
        background: "#A5D8FF",
        width:"926px",
        padding:"26px 55px",
        color: "#364FC7"
      }
      const LokaleOversigtStyle = {
        display:"flex",
        flexDirection:"column",
        justifyContent:"space-between",
       
      }
      const LokaleStyle = {
        borderRadius:"2px",
        background: "white",
        color: "black",
        display:"flex",
        padding:"0 26px",
        justifyContent:"space-between",
        alignItems:"center"
      }
     
    return (
        <div style={Container}>
          <div style={BookStyle}>
            <h1>Book Lokale</h1>
        <div style={BookLokaleStyle}>
        <Autocomplete
      
      label="Etage"
      placeholder="Etage"
      data={['Etage 1', 'Etage 2', 'Etage 3', 'Etage 4']}
      value={Etage}
      onChange={(value) => setEtage(value)}
    />
      <DateInput 
          
         valueFormat="YYYY MMM DD"
          label="Dato"
          placeholder="Dato input"
           />

          <Button variant="filled" color="yellow" size="xl" radius="xs" style={{ color: "black" }}>SØG HER</Button>
          </div>
          </div>
          <div style={Lokaler}>
          <h1>Ledige lokaler idag </h1>
          <div style={LokaleOversigtStyle}>
          {filteredLokaler.map((lokale) => (
            <div key={lokale.id} style={LokaleStyle}>
              <h3>{lokale.name}</h3>
              <p>08:00 - 17:00</p>
              <Button variant="filled" size="md">Book lokale</Button>
              </div>
          ))}
          </div>
          </div>
        </div>
    )
}

export default BookLokale;
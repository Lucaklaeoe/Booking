

import { DateInput } from '@mantine/dates';
import { Button,Autocomplete } from '@mantine/core';


function BookLokale() {
   

      const Container ={
        display:"flex",
        flexDirection: "column",

       
      }
      const BookLokaleStyle ={
        display: "flex",
        width:"926px",
        margin:"0 auto",
        borderRadius:"2px",
        background: "#364FC7",
        justifyContent:"",
      }
      const DatoStyle ={
       
      }
      const EtageStyle ={
       
      }

    return (
        <div style={Container}>
            <h1>Book Lokale</h1>
        <div style={BookLokaleStyle}>
        <Autocomplete
        style={EtageStyle}
      label="Etage"
      placeholder="Etage"
      data={['1', '2', '3', '4']}
      
    />

      <DateInput 
    
          style={DatoStyle}
         valueFormat="YYYY MMM DD"
          label="Dato"
          placeholder="Dato input"
           />

          <Button variant="filled" color="yellow" size="xl" radius="xs">SØG HER</Button>
          </div>
        </div>
    )
}

export default BookLokale;
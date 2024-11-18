import { useState } from "react";
import { DateInput } from '@mantine/dates';
import { Input } from '@mantine/core';
import { IconChevronDown } from '@tabler/icons-react';
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://lxlvmpbsqfiqjdurdwig.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4bHZtcGJzcWZpcWpkdXJkd2lnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE1MDI4NTMsImV4cCI6MjA0NzA3ODg1M30.EIRPhE0e2_0Azy6vT1YihblhqaFf9tU4DDvA3hQAW5k"
const supabase = createClient(supabaseUrl, supabaseKey)

function BookLokale() {
    const [Etage, setEtage] = useState('')
    const [Dato, setDato] = useState('')
      
    async function InsertData() {
        console.log("sending to supabase", Etage, Dato);
        const { data, error } = await supabase(
            {Etage: Etage,Dato: Dato,},
        //   options: {
        //     emailRedirectTo: 'https://example.com/welcome',
        //   },
        )
        console.log("data", data)
        console.log("error", error)
      }
      
    const handleInsertData = (event) => {
        event.preventDefault();
        console.log(Etage, );
        InsertData();
    }

    return (
        <div>
            <h1>Login</h1>
            <Input
            value={Etage}
        component="select"
        rightSection={<IconChevronDown size={14} stroke={1.5} />}
        pointer
        mt="md"
        onChange={(e) => setEtage(e.target.value)}
      >
        <DateInput value="Dato"
         valueFormat="YYYY MMM DD"
          label="Date input"
          placeholder="Dato input"
          onChange={(e) => setDato(e.target.value)} />;
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
       
      </Input>
      <button type="button" onClick={handleInsertData}>SØG HER</button>
        </div>
    )
}

export default BookLokale;
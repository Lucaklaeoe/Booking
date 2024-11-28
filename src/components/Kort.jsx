import { useState } from "react";
import { Button } from "@mantine/core";


function LokaleKort (){
    
        // State to track selected floor
        const [selectedFloor, setSelectedFloor] = useState('FørsteEtage');
    
        // Handler for select change
        const handleChange = (event) => {
            setSelectedFloor(event.target.value);
        };
    
    const KortStyle = {
        width:"1000px",
        height:"700px",
        overflow:"hidden"
    }

    return (
        <div style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
        <div style={KortStyle} >
        {selectedFloor === 'FørsteEtage' && 
        <div id="FørsteEtage">
            <img src="Kort/1etageskole-01.svg" alt="" />
            
            </div>}
        {selectedFloor === 'AndenEtage' && <div id="AndenEtage">
            <img src="Kort/2salskole-01.svg" alt="" />
            
            </div>}
        {selectedFloor === 'TredjeEtage' && <div id="TredjeEtage">  
            <img src="Kort/3etagekort-01-01.svg" alt="" />
            
            </div>}

        {selectedFloor === 'FjerdeEtage' && <div id="FjerdeEtage">
            <img src="Kort/4etagekort-01.svg" alt="" /></div>}
        </div>
        <select onChange={handleChange} value={selectedFloor}>
                <option value="FørsteEtage">Første Etage</option>
                <option value="AndenEtage">Anden Etage</option>
                <option value="TredjeEtage">Tredje Etage</option>
                <option value="FjerdeEtage">Fjerde Etage</option>
            </select>
        </div>
    )
}
export default LokaleKort 
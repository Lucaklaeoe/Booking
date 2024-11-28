import { useState } from "react";
import { Button } from "@mantine/core";
import FørsteEtage from "./Etager/FoersteEtage";
import AndenEtage from "./Etager/AndenEtage";
import TredjeEtage from "./Etager/TredjeEtage";
import FjerdeEtage from "./Etager/FjerdeEtage";

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
        <FørsteEtage />
            
            </div>}
        {selectedFloor === 'AndenEtage' && <div id="AndenEtage">
            <AndenEtage />
            
            </div>}
        {selectedFloor === 'TredjeEtage' && <div id="TredjeEtage">  
            <TredjeEtage />
            </div>}

        {selectedFloor === 'FjerdeEtage' && <div id="FjerdeEtage">
            <FjerdeEtage />
            </div>}
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
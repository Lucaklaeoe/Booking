import { useState } from "react";
import FørsteEtage from "./../Etager/FoersteEtage";
import AndenEtage from "./../Etager/AndenEtage";
import TredjeEtage from "./../Etager/TredjeEtage";
import FjerdeEtage from "./../Etager/FjerdeEtage";
import { Select } from '@mantine/core';

function LokaleKort (){
    
    // State to track selected floor
    const [selectedFloor, setSelectedFloor] = useState('FørsteEtage');
    
    const OversigtStyle = {
        width:"926px",
        flexDirection:"column",
        display:"flex",
        justifyContent:"center", 
        alignItems:"center", 
        color: "#364FC7",
        marginBottom:"100px",
        background:"#A5D8FF",
        margin:"0 auto",
        borderRadius:"8px",
        padding:"26px 55px",

    }
    const KortStyle = {
        width:"120%",
        height:"700px",
        overflow:"hidden"
    }
    return (
        <div style={OversigtStyle}>
            <h1 style={{alignSelf:"flex-start"}}>Lokale Oversigt</h1>
            <Select style={{alignSelf:"flex-start"}}
                data={['FørsteEtage', 'AndenEtage', 'TredjeEtage', 'FjerdeEtage']}
                placeholder="Vælg etage"
                value={selectedFloor} 
                onChange={(value) => setSelectedFloor(value)}
            />
            <div style={KortStyle} >
                {selectedFloor === 'FørsteEtage' && <div id="FørsteEtage"><FørsteEtage /></div>}
                {selectedFloor === 'AndenEtage' && <div id="AndenEtage"> <AndenEtage /> </div>}
                {selectedFloor === 'TredjeEtage' && <div id="TredjeEtage"> <TredjeEtage /></div>}
                {selectedFloor === 'FjerdeEtage' && <div id="FjerdeEtage"> <FjerdeEtage /></div>}
            </div>
        </div>
    )
}
export default LokaleKort 
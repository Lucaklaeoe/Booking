import { useState } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import Confirm from '../popup/confirm.jsx';
import Tider from './tider.jsx';
import { useRouteContext } from '@tanstack/react-router';
import { IoInformation } from "react-icons/io5";
import FarvePopup from './../popup/farver.jsx';
import LokaleBillede from './lokaleBillede.jsx';

const TiderStyle = {
  display: "flex", 
  borderRadius: "9px",
  background: "#A5D8FF",
  width:"1164px",
  padding: "0 26px 26px 26px",
  position: "relative",
  justifyContent: "space-between",
}

function BookLokaleItem({setStepper, lokale, times}) {
    
    const context = useRouteContext({ from: "/BookLokale" });
    const theme = useMantineTheme();

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
  
    const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
    const changeInfoPopup = () => {
        setIsInfoPopupOpen(!isInfoPopupOpen);
    };

  return (
    <div style={TiderStyle}>
        <div style={{display:"flex", flexDirection:"column"}}>
            <h2 style={{color: theme.colors.blue[8], width:"250px"}}>
                Grupperum - {lokale}
            </h2>
            <LokaleBillede lokale={lokale} />
        </div>

        <div style={{width:"400px"}}>
            <h2>Tider</h2>
            <div style={{display:"flex", flexWrap:"wrap", justifyContent:"space-between", gap:"10%"}}>
                {
                    times.map((time) => (
                        <Tider start={time.startTime} end={time.endTime} status={time.status} setStepper={setStepper} />
                    ))
                }
            </div>
        </div>

        <div style={{alignSelf:"center"}}>
            <Button style={{alignSelf:"center"}} onClick={openPopup} className='BookLokale' radius={"md"} size='xl' color="indigo">Book lokale</Button>
        </div>


        <div style={{position:"absolute", top:"10px", right:"10px", display:"flex", alignItems:"center"}}>

            <p style={{color: theme.colors.blue[8],fontWeight:"bold"}}>Hvad betyder farverne ?</p>
            <button style={{borderColor:"red", marginLeft:"10px"}} onClick={changeInfoPopup}>
                <IoInformation style={{color:"red", fontSize:"24px"}}  />
            </button>

        </div>
        {isPopupOpen && <Confirm onClose={openPopup} />}
        {isInfoPopupOpen && <FarvePopup onClose={changeInfoPopup}/>}  
    </div>
  );
}

export default BookLokaleItem
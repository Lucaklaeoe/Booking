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
  padding: "0 26px"
}

function BookLokaleItem({setStepper, lokale, times, data}) {
    
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
        <div>
            <h2 style={{color: theme.colors.blue[8]}}>
                Grupperum - {context.bookingInfo.lokaler} {} 
            </h2>
            <LokaleBillede />
        </div>
        <Tider setStepper={setStepper}/>

        <Button style={{alignSelf:"center"}} onClick={openPopup} className='BookLokale' radius={"md"} size='xl' color="indigo">Book lokale</Button>
        {isPopupOpen && <Confirm onClose={openPopup} name={name} />}

        <div style={{display:"flex", alignItems:"center", height:"fit-content"}}>

            <p style={{color: theme.colors.blue[8],fontWeight:"bold"}}>Hvad betyder farverne ?</p>
            <button style={{borderColor:"red", marginLeft:"10px"}} onClick={changeInfoPopup}>
                <IoInformation style={{color:"red", fontSize:"24px"}}  />
            </button>
            {isInfoPopupOpen && <FarvePopup onClose={changeInfoPopup}/>}  

        </div>
    </div>
  );
}

export default BookLokaleItem
import { useState } from 'react';
import { Button } from '@mantine/core';

import Confirm from '../popup/confirm.jsx';
import Tider from './tider.jsx';

function BookLokale({name}) {
  
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  const TiderStyle = {
    display: "flex", 
      borderRadius: "9px",
      background: "#A5D8FF",
      width:"1164px"
  }
  return (
  <div>
    <div style={{display:"flex", justifyContent:"center"}}>
      <div>
      <h1>Tider for den  </h1>
        <div style={TiderStyle}>
              <h2>Grupperum - {name} </h2>
              <Tider />
        
          <Button style={{alignSelf:"center"}} onClick={openPopup} className='BookLokale' radius={"md"} size='xl'  color="indigo">Button</Button>
          {isPopupOpen && <Confirm onClose={openPopup} name={name} />}
        </div>
      </div>
    </div>
  </div>
   
  );
}

export default BookLokale
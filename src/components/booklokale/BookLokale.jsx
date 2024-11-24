import { useState, useEffect } from 'react';
import { Button, CloseButton } from '@mantine/core';
import Confirm from '../popup/confirm.jsx';
import Tider from './tider.jsx';
import { useRouteContext } from '@tanstack/react-router';
import { IoInformation } from "react-icons/io5";
import FarvePopup from '../popup/farver.jsx';

const TiderStyle = {
  display: "flex", 
  borderRadius: "9px",
  background: "#A5D8FF",
  width:"1164px",
  padding: "0 26px"
}
function BookLokale({setStepper}) {
  const iconStyle = {
    color:"red"
  }
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const openPopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
  
  const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
  const openInfoPopup = () => {
    setIsInfoPopupOpen(!isInfoPopupOpen);
  };
  const context = useRouteContext({ from: "/BookLokale" });

  const freeBookings = async () => {
        
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
    const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?bookingDate=eq.${context.bookingInfo.date}`, {
        headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
        }
    })
    const data = await response.json();

    for (let i = 0; i < lokaler.length; i++) {
      for (let j = 0; j < times.length; j++) {
        for (let k = 0; k < data.length; k++) {
          if(lokaler[i].lokale == data[k].roomNumber && times[j].startTime == data[k].startTime.slice(0, -3) && times[j].endTime == data[k].endTime.slice(0, -3)) {
            
          }
          else{
            lokaleAndTime.push({ 
              lokale: lokaler[i].lokale, 
              etage: lokaler[i].etage, 
              startTime: times[j].startTime, 
              endTime: times[j].endTime 
            });
          }
        }
      }
    }

    setBookings(lokaleAndTime)
  }

  useEffect(() => {
    freeBookings()

  }, []);

  if(context.bookingInfo.date){
    
  }

  return (
    <div>
        <h1>Tider for den </h1>

        <div style={TiderStyle}>

            <h2>Grupperum - </h2>
            <Tider setStepper={setStepper}/>

            <Button style={{alignSelf:"center"}} onClick={openPopup} className='BookLokale' radius={"md"} size='xl' color="indigo">Button</Button>
            {isPopupOpen && <Confirm onClose={openPopup} name={name} />}
        <div style={{display:"flex", alignItems:"center", height:"fit-content"}}>
          <p>Hvad betyder farverne</p>
          <button style={{borderColor:"red", marginLeft:"10px"}} onClick={openInfoPopup}>
          <IoInformation 
          style={{
            color:"red",
             fontSize:"24px"}}  />
          </button>
          {isInfoPopupOpen && <FarvePopup onClose={openInfoPopup}/>}  
         
        </div>
        </div>
    </div>
  );
}

export default BookLokale
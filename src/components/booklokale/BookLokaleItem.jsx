import { useState } from 'react';
import { Button, useMantineTheme } from '@mantine/core';
import Confirm from '../popup/confirm.jsx';
import Tider from './tider.jsx';
import { IoInformation } from "react-icons/io5";
import FarvePopup from './../popup/farver.jsx';
import LokaleBillede from './lokaleBillede.jsx';
import { useRouteContext } from '@tanstack/react-router';
import { ConfirmTeacher } from '../popup/ConfirmTeacher.jsx';

const TiderStyle = {
  display: "flex", 
  borderRadius: "9px",
  background: "#A5D8FF",
  width:"1164px",
  padding: "0 35px 26px 30px",
  position: "relative",
  justifyContent: "space-between",
}

function BookLokaleItem({setStepper, lokale, times, setActiveBooking, activeBooking}) {

  

    const theme = useMantineTheme();
    const context = useRouteContext({ from: "/BookLokale" });

    const [selectedInfo, setSelectedInfo] = useState({lokale: lokale, startTime: context.bookingInfo.startTime, endTime: context.bookingInfo.endTime});

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpenTeacher, setIsPopupOpenTeacher] = useState(false);
    const openPopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    const openPopupTeacher = () => {
        setIsPopupOpenTeacher(!isPopupOpenTeacher);
    };

    async function addBooking() {   
        if(selectedInfo.startTime == undefined || selectedInfo.startTime == null || selectedInfo.startTime == ""){
            alert("Vælg venligst en tid");
            return;
        }

        const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
        if(selectedInfo.isTeacher){
            const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?roomNumber=eq.${selectedInfo.lokale}&bookingDate=eq.${context.bookingInfo.date}&startTime=eq.${selectedInfo.startTime}:00`, {
                method: "PATCH",
                body: JSON.stringify({
                    email: context.userInfo.user.email,
                    user_id: context.userInfo.user.id,
                    isTeacher: true
                }),
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json",
                    "apikey": supabaseKey,
                    "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
                }
            })
            const data = await response.json();
            console.log(data)
            if(response.ok){
                openPopupTeacher();
                return;
            }
        }
        const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings`, {
            method: "POST",
            body: JSON.stringify(
                {
                    email: context.userInfo.user.email,
                    user_id: context.userInfo.user.id,

                    bookingDate: context.bookingInfo.date,
                    floor: context.bookingInfo.etage,

                    startTime: selectedInfo.startTime + ":00",
                    endTime: selectedInfo.endTime + ":00",
                    roomNumber: selectedInfo.lokale,
                    isTeacher: context.userInfo.userdata.isTeacher,
                }),
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "apikey": supabaseKey,
                "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
            }
        })
        const data = await response.json();
        console.log(data)
        if(response.ok){
            openPopup();
        }
        
    }
  
    const [isInfoPopupOpen, setIsInfoPopupOpen] = useState(false);
    const changeInfoPopup = () => {
        setIsInfoPopupOpen(!isInfoPopupOpen);
    };

  return (
    <div style={TiderStyle}>
        {isPopupOpen && <Confirm onClose={openPopup} />}
        {isPopupOpenTeacher && <ConfirmTeacher onClose={openPopupTeacher} />}
        {isInfoPopupOpen && <FarvePopup onClose={changeInfoPopup}/>} 

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
                        <Tider start={time.startTime} end={time.endTime} status={time.bookingStatus} setStepper={setStepper} setActiveBooking={setActiveBooking} activeBooking={activeBooking} lokale={lokale} setSelectedInfo={setSelectedInfo} />
                    ))
                }
            </div>
        </div>

        <div style={{alignSelf:"center"}}>
            <Button style={{alignSelf:"center"}} onClick={addBooking} className='BookLokale' radius={"md"} size='xl' color="indigo">Book lokale</Button>
            
        </div>


        <div style={{position:"absolute", top:"10px", right:"10px", display:"flex", alignItems:"center"}}>

            <p style={{color: theme.colors.blue[8],fontWeight:"bold"}}>Hvad betyder farverne ?</p>
            <button style={{borderColor:"red", marginLeft:"10px"}} onClick={changeInfoPopup}>
                <IoInformation style={{color:"red", fontSize:"24px"}}  />
            </button>
        </div> 
    </div>
  );
}

export default BookLokaleItem
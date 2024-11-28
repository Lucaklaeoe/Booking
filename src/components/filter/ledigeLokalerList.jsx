import LedigeLokalerItem from "./ledigeLokalerItem"
import { useState, useEffect } from "react";
import { useRouteContext } from "@tanstack/react-router";


const Lokaler = {
  margin:"0 auto",
  borderRadius: "8px",
  background: "#A5D8FF",
  width:"926px",
  padding:"26px 55px",
  color: "#364FC7",
  marginBottom:"100px",
}
const LokaleOversigtStyle = {
  display:"flex",
  flexDirection:"column",
  height:"515px",
  overflowY:"scroll",
 
}

  
function LedigeLokalerList({lokaler, times, date}) {
 
  const context = useRouteContext({ from: "/" });
  const lokaleAndTime = [];
  const [bookings, setBookings] = useState([]);

  async function getBookingsfortoday() {
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
    const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?bookingDate=eq.${date}`, {
        headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
        }
    })
    const data = await response.json();

    //hvis der ikke er noget i data basen
    if (data.length === 0) {
      for (let i = 0; i < lokaler.length; i++) {
        for (let j = 0; j < times.length; j++) {
          lokaleAndTime.push({ 
            lokale: lokaler[i].lokale, 
            etage: lokaler[i].etage, 
            startTime: times[j].startTime, 
            endTime: times[j].endTime, 
            date: date 
          });
        }
      }
    }
    //hvis der er noget i databasen
    else {
      for (let i = 0; i < lokaler.length; i++) {
        for (let j = 0; j < times.length; j++) {
          let found = false;
          for (let k = 0; k < data.length; k++) {
            if (lokaler[i].lokale == data[k].roomNumber && times[j].startTime == data[k].startTime.slice(0, -3)) {
              if(context.userInfo.userdata.isTeacher && data[k].isTeacher == false){
                lokaleAndTime.push({
                  lokale: lokaler[i].lokale,
                  etage: lokaler[i].etage,
                  startTime: times[j].startTime,
                  endTime: times[j].endTime,
                  date: date,
                });
              }
              // Bryd ud af det inderste loop, hvis der er match
              found = true;
              break;
            }
          }
          //hvis der ikke er fundet noget, tilføj til lokaleAndTime
          if (!found) {
            lokaleAndTime.push({
              lokale: lokaler[i].lokale,
              etage: lokaler[i].etage,
              startTime: times[j].startTime,
              endTime: times[j].endTime,
              date: date,
            });
          }
        }
      }
    }   
    console.log('lokaleAndTime:', lokaleAndTime)
    setBookings(lokaleAndTime)
  }

  useEffect(() => {
    getBookingsfortoday()
  }, []);

  return (
    <div style={Lokaler}>
        <h1>Ledige lokaler idag </h1>

        <div style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", gap:"33%", color: "#5C5F66"}}>
          <p>Lokale</p>
          <p>Ledige Tider</p>
        </div>
        <div style={LokaleOversigtStyle}>
        {
          bookings.map((data) => (
            <LedigeLokalerItem lokale={data.lokale} etage={data.etage} startTime={data.startTime} endTime={data.endTime} date={data.date}/>
          ))
        }
        </div>
    </div>
  )
}

export default LedigeLokalerList;
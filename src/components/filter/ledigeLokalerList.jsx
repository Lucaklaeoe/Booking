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
  marginBottom:"263px",
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

  const getBookingsfortoday = async () => {
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
    const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?bookingDate=eq.${date}`, {
        headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
        }
    })
    const data = await response.json();

    for (let i = 0; i < lokaler.length; i++) {
      for (let j = 0; j < times.length; j++) {
        for (let k = 0; k < data.length; k++) {
          if(lokaler[i] == data[k].roomNumber && times[j].startTime == data[k].startTime.slice(0, -3) && times[j].endTime == data[k].endTime.slice(0, -3)) {
            
          }
          else{
            lokaleAndTime.push({ 
              lokale: lokaler[i], 
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
    getBookingsfortoday()
  }, []);

  return (
    <div style={Lokaler}>
        <h1>Ledige lokaler idag </h1>

        <div style={LokaleOversigtStyle}>

        {
          bookings.map((data) => (
            <LedigeLokalerItem lokale={data.lokale} startTime={data.startTime} endTime={data.endTime}/>
          ))
        }

        </div>
    </div>
  )
}

export default LedigeLokalerList;
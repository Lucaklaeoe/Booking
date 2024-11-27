import { useState, useEffect } from 'react';
import { useMantineTheme } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';
import BookLokaleItem from './BookLokaleItem.jsx';


function BookLokale({setStepper}) {

  const theme = useMantineTheme();
  const context = useRouteContext({ from: "/BookLokale" });
  const [filteredLokale, setFilteredLokale] = useState([]);
  const [activeBooking, setActiveBooking] = useState(null);

  async function StatusOfBookings() {    
    const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im55eGt5cmxjcHBrcnN1YnZreXRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE5MjYzMzksImV4cCI6MjA0NzUwMjMzOX0.BUMwwqrzX0kdxKvVf7jd7p31BwDxDf0ZdilcfLh7WlA"
    const response = await fetch(`https://nyxkyrlcppkrsubvkytj.supabase.co/rest/v1/currentBookings?bookingDate=eq.${context.bookingInfo.date}&floor=eq.${context.bookingInfo.etage}`, {
        headers: {
            "apikey": supabaseKey,
            "Authorization": `Bearer ${context.userInfo.session.access_token}`,                
        }
    })
    const data = await response.json();
    console.log("data",data)

    const lokaleListe = [
      //1
      {lokale: "Audiotoriet", etage: "1"},
      {lokale: "Lobbyen", etage: "1"},
      {lokale: "3D print", etage: "1"},
      //2
      {lokale: "Medialab", etage: "2"},
      //3
      {lokale: "3.1", etage: "3"},
      {lokale: "3.2", etage: "3"},
      {lokale: "3.4", etage: "3"},
      {lokale: "3.5", etage: "3"},
      {lokale: "3.6", etage: "3"},
      {lokale: "3.7", etage: "3"},
      {lokale: "3.8 Open Learning", etage: "3"},
      {lokale: "3.9 Open Learning", etage: "3"},
      {lokale: "3.10", etage: "3"},
      {lokale: "3.11", etage: "3"},
    ];
    const times = [
      { startTime: "08:30", endTime: "09:30" },
      { startTime: "09:30", endTime: "10:30" },
      { startTime: "10:30", endTime: "11:30" },
      { startTime: "11:30", endTime: "12:30" },
      { startTime: "12:30", endTime: "13:30" },
      { startTime: "13:30", endTime: "14:30" },
      { startTime: "14:30", endTime: "15:30" },
      { startTime: "15:30", endTime: "16:30" },
    ];

    const lokaleAndAbleTimes = [];
    let ableTimes = [];

    if(data.length === 0){
      for (let i = 0; i < lokaleListe.length; i++) {
        if(lokaleListe[i].etage == context.bookingInfo.etage){
          for (let j = 0; j < times.length; j++) {
            ableTimes.push({
              startTime: times[j].startTime,
              endTime: times[j].endTime,
              bookingStatus: "ledig"
            })
          }
          lokaleAndAbleTimes.push({
            lokale: lokaleListe[i].lokale,
            ableTimes: ableTimes
          })
          ableTimes = [];
        }
      }
    }
    else{
      for (let i = 0; i < lokaleListe.length; i++) {
        if (lokaleListe[i].etage == context.bookingInfo.etage) {
          ableTimes = [];
          for (let j = 0; j < times.length; j++) {
            let found = false;
            
            for (let k = 0; k < data.length; k++) {
              if (times[j].startTime == data[k].startTime.slice(0, -3) && lokaleListe[i].lokale == data[k].roomNumber) {
                if(data[k].isTeacher){
                  ableTimes.push({
                    startTime: times[j].startTime,
                    endTime: times[j].endTime,
                    bookingStatus: "teacher"
                  });
                }
                else{
                  ableTimes.push({
                    startTime: times[j].startTime,
                    endTime: times[j].endTime,
                    bookingStatus: "optaget"
                  });
                }
                //only one booking pr. time allowed break if found
                found = true;
                break; 
              }
            }
            // If no match found, it's available
            if (!found) {
              ableTimes.push({
                startTime: times[j].startTime,
                endTime: times[j].endTime,
                bookingStatus: "ledig"
              });
            }
          }
          lokaleAndAbleTimes.push({
            lokale: lokaleListe[i].lokale,
            ableTimes: ableTimes
          });
        }
      }
    }

    setFilteredLokale(lokaleAndAbleTimes);
  }

  useEffect(() => {
    StatusOfBookings()
    if(context.bookingInfo.startTime != undefined || context.bookingInfo.startTime != null || context.bookingInfo.startTime != ""){
      setActiveBooking(context.bookingInfo.lokale + "-" + context.bookingInfo.startTime);
    }

  }, []);

  return (
    <div style={{display:"flex", flexDirection:"column", gap:"50px"}}>
      <h1 style={{color: theme.colors.blue[8]}}> 
        {context.bookingInfo.etage}. Etage og tider for den {context.bookingInfo.date} 
      </h1>

      {
        filteredLokale.map((lokale) => (
          <BookLokaleItem lokale={lokale.lokale} times={lokale.ableTimes} setStepper={setStepper} activeBooking={activeBooking} setActiveBooking={setActiveBooking} />
        ))
      }
      
    </div>
  );
}

export default BookLokale
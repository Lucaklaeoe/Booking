import { useEffect } from 'react';
import { useMantineTheme } from '@mantine/core';
import { useRouteContext } from '@tanstack/react-router';
import BookLokaleItem from './BookLokaleItem.jsx';

function BookLokale({setStepper}) {

  const theme = useMantineTheme();
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
      <h1 style={{color: theme.colors.blue[8]}}> 
        {context.bookingInfo.etage}. Etage og tider for den {context.bookingInfo.date.toLocaleDateString()} 
      </h1>

      <BookLokaleItem setStepper={setStepper}/>
      
    </div>
  );
}

export default BookLokale
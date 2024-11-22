import { Button } from '@mantine/core';
import { Link, useRouteContext } from '@tanstack/react-router';

const LokaleStyle = {
    borderRadius:"2px",
    background: "white",
    color: "black",
    display:"flex",
    padding:"0 26px",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:"15px"
}

function LedigeLokalerItem({lokale, date}) {

  const context = useRouteContext({ from: "/" });

  function handleButtonClick() {
    
    context.setBookingInfo({
      lokale: lokale.name,
      date: date,
      // startTime: lokale.startTime,
      // endTime: lokale.endTime,
      etage: lokale.etage
    })
  }

  return (
    <div key={lokale.id} style={LokaleStyle}>
        <h3>{lokale.name}</h3>
        <p>08:00 - 17:00</p>
        
        <Link to="/BookLokale">
          <Button component='a' onClick={handleButtonClick} variant="filled" size="md">Book lokale </Button>
        </Link>
    </div>
  )
}

export default LedigeLokalerItem;
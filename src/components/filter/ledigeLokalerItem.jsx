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

function LedigeLokalerItem({lokale, startTime, endTime}) {

  const context = useRouteContext({ from: "/" });

  function handleButtonClick() {
    console.log("yes")
  }

  return (
    <div key={lokale.id} style={LokaleStyle}>
        <h3 style={{width:"100px"}}>{lokale}</h3>
        <p>{startTime} - {endTime}</p>
        
        <Link to="/BookLokale">
          <Button component='a' onClick={handleButtonClick} variant="filled" size="md">Book lokale </Button>
        </Link>
    </div>
  )
}

export default LedigeLokalerItem;
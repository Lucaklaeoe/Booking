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

function LedigeLokalerItem({lokale}) {

  const context = useRouteContext({ from: "/" });

  function handleButtonClick() {
    
  }

  return (
    <div key={lokale.id} style={LokaleStyle}>
        <h3>{lokale.name}</h3>
        <p>08:00 - 17:00</p>
        
        <Button component='a' onClick={handleButtonClick} variant="filled" size="md">Book lokale </Button>
    </div>
  )
}

export default LedigeLokalerItem;
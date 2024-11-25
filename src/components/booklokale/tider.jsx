import { Button } from '@mantine/core';

const timeStyle = {
  width: "45%",
  padding: "10px 0",
}

function Tider({setStepper, start, end, status, lokale, setActiveBooking, activeBooking}) {
  let color = "green";
  const buttonKey = lokale + "-" + start;
  const handleClick = () => {
    if(color == "green"){
      setStepper("2");
      setActiveBooking(buttonKey);
    }
  };
  
  if(status == "optaget"){
    color = "yellow";
  }
  else if(status == "teacher"){
    color = "red";
  }
   
  return(
    <div style={timeStyle} id={buttonKey}>
      <Button
        style={{width:"100%"}}
        color={activeBooking == buttonKey ? "cyan" : color}
        onClick={() => handleClick()}> {start} - {end}
      </Button>
    </div>
  )
}

export default Tider